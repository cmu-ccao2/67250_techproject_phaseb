function footer() {
  const copyYear = document.getElementById('footer-placeholder');
  const year = new Date().getFullYear();
  copyYear.innerHTML = `
    <div>
      Watchpoint: Gibraltar <br>
      36°07'N, 5°20'W <br>
      Hours of Operation: 24/7
    </div>
    <div class="footer-small-font"> 
      Made for CMU 67-250 Infomation Systems Milineux <br>
      By: ccao2 <br> 
      ${year} 
    </div>
    `;
  }
footer();