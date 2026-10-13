(() => {
  const navigationSlot = document.querySelector('#site-nav');

  if (!navigationSlot) {
    return;
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  fetch('nav.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Navigation request failed: ${response.status}`);
      }

      return response.text();
    })
    .then((navigationMarkup) => {
      navigationSlot.innerHTML = navigationMarkup;

      navigationSlot.querySelectorAll('a').forEach((link) => {
        if (link.getAttribute('href') === currentPage) {
          link.setAttribute('aria-current', 'page');
        }
      });
    })
    .catch(() => {
      navigationSlot.innerHTML = '<p class="nav-error" role="status">Navigation could not load. You can still read this page and use your browser\'s Back button.</p>';
    });
})();
