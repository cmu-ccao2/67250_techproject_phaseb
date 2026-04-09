alert("Script loaded successfully!");
const temp_blizz_id = "d97f95a09a58d6ffbfa424|35e30000f427594032dc85af966b6379"
const hero = "kiriko";
const encodedID = encodeURIComponent(temp_blizz_id);
// api address
const url = 'https://overfast-api.tekrop.fr/players/' + encodedID;

async function getMyData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getMyData().then(data => {
  if (!data || !data.stats) {
    console.error("Data structure is missing or fetch failed.");
    return;
  }
  console.log("we made it pog:", data);
  let hero_stats = data.stats.pc.competitive.career_stats.kiriko;
  let seconds_played = hero_stats[3].stats[0].value;
  let minutes_played = Math.floor(seconds_played / 60);

  let your_winrate = hero_stats[3].stats[6].value;
  let your_kp10 = hero_stats[2].stats[4].value;
  let your_dp10 = hero_stats[2].stats[12].value;
  let your_hp10 = hero_stats[2].stats[11].value;
  let your_enviromentals = "CHANGE THIS LATER";

  document.getElementById('your-playtime').textContent = `${minutes_played} minutes`;
  document.getElementById('your-winrate').textContent = `${your_winrate}%`;
  document.getElementById('your-kp10').textContent = `${your_kp10}`;
  document.getElementById('your-dp10').textContent = `${your_dp10}`;
  document.getElementById('your-hp10').textContent = `${your_hp10}`;
  document.getElementById('your-enviromentals').textContent = `${your_enviromentals}`;

  document.getElementById('kiriko-time').textContent = `${minutes_played} minutes`;


  if (hero_stats) {
  console.log(`kiriko time played: ${seconds_played} seconds`);
} else {
  console.log("not found");
}
});

getMyData();