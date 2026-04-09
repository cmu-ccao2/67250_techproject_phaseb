document.querySelectorAll('.sidebar-item').forEach(item => {
  item.addEventListener('click', function() {
    const mainIframe = document.getElementById('featured-video');
    const thumbIframe = this.querySelector('iframe');

    const tempSrc = mainIframe.src;
    mainIframe.src = thumbIframe.src;
    thumbIframe.src = tempSrc;
  });
});