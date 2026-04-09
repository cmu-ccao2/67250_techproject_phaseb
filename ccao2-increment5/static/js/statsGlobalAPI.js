const url2 = "https://overfast-api.tekrop.fr/heroes/stats?platform=pc&gamemode=competitive&region=americas&role=support&order_by=hero%3Aasc";

async function getMyData() {
  try {
    const response = await fetch(url2);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getMyData().then(data => {
  if (!data || data.length === 0) {
    console.error("Data structure is missing or fetch failed.");
    return;
  }
  console.log("we made it pog2:", data);
  let jpc_global_stats = data[4];
  let jpc_win_rate = jpc_global_stats.winrate;
  let jpc_pick_rate = jpc_global_stats.pickrate;

  document.getElementById('jpc-pickrate').textContent = `${jpc_pick_rate}%`;
  document.getElementById('jpc-winrate').textContent = `${jpc_win_rate}%`;

//   if (hero_stats) {
//   console.log(`kiriko time played: ${seconds_played} seconds`);
// } else {
//   console.log("not found");
// }
});

getMyData();