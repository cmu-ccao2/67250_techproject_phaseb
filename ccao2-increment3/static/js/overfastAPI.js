alert("Script loaded successfully!");
const temp_blizz_id = "d97f95a09a58d6ffbfa424|35e30000f427594032dc85af966b6379"
const hero = "kiriko";
const encodedID = encodeURIComponent(temp_blizz_id);
// api address
const url = 'https://overfast-api.tekrop.fr/players/' + encodedID;

async function getMyData() {
  try {
    const response = await fetch(url);

    // If the API says 404, this will catch it
  // if (response.status === 404) {
  //   console.error("404: Player not found. Check the ID or Profile Privacy.");
  //   document.getElementById('kiriko-time').textContent = "Player Not Found";
  //   return null;
  // }
  
  // return await response.json();

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
  hero_stats = data.stats.pc.competitive.career_stats.kiriko;
  seconds_played = hero_stats[3].stats[0].value;
  minutes_played = Math.floor(seconds_played / 60);

  document.getElementById('kiriko-time').textContent = `${minutes_played} minutes`;

  if (hero_stats) {
  console.log(`kiriko time played: ${seconds_played} seconds`);
} else {
  console.log("not found");
}
});

getMyData();