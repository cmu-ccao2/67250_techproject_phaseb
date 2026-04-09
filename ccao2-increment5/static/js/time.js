const curr_hour = new Date().getHours();

function greeting(hour) {
  const greeting = document.getElementById('greeting');
  console.log(hour);
  if (hour < 12) {
    greeting.innerHTML = 'Good morning';
  } else if (hour < 18) {
    greeting.innerHTML = 'Good afternoon';
  } else if (hour < 20) {
    greeting.innerHTML = 'Good evening';
  } else {
    greeting.innerHTML = 'Good night';
  }
  console.log(greeting.innerHTML);
}
greeting(curr_hour);
