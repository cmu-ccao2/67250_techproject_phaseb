const navContent = `
<nav class="nav_bar">
  <a href="index.html">Home</a>
  <a href="1.html">1</a>
  <a href="2.html">2</a>
  <a href="3.html">3</a>
  <a href="4.html">4</a>
</nav>
`;
// document.querySelector('#navbar-placeholder').innerHTML = navContent;

// this finds the placeholder div and sets its innerHTML to the navContent string
const placeholder = document.getElementById('navbar-placeholder');
placeholder.innerHTML = navContent;

// figures out which page is currently being viewed and sets the id of the corresponding link to "navselected" so that it can be styled differently in CSS
const links = document.querySelectorAll('#navbar-placeholder a');
links.forEach(link => {
  if (window.location.href.includes(link.getAttribute('href'))) {
    link.id = 'navselected';
  }
});