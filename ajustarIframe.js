function resizeIframe() {
    let iframe = document.getElementById('miIframe');
    const body = iframe.contentDocument.body;
    const html = iframe.contentDocument.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    iframe.style.height = height + 'px';
  }

window.addEventListener('load', resizeIframe);
window.addEventListener('resize', resizeIframe);