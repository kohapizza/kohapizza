// ──────────────────────────────────────────────
// Page switching (hash router) — one page at a time
// ──────────────────────────────────────────────
const pages = Array.from(document.querySelectorAll('.page'));
const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const pageIds = pages.map(p => p.id);
const DEFAULT_PAGE = 'home';

function currentPageId() {
  const id = location.hash.replace('#', '');
  return pageIds.includes(id) ? id : DEFAULT_PAGE;
}

function showPage(id) {
  pages.forEach(p => p.classList.toggle('is-current', p.id === id));
  navLinks.forEach(a => {
    a.classList.toggle('is-active', a.getAttribute('href') === '#' + id);
  });
  // Reset scroll to the top of the new page
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', () => showPage(currentPageId()));
showPage(currentPageId());

// ──────────────────────────────────────────────
// Mobile menu toggle (the sidebar is the slide-in panel)
// ──────────────────────────────────────────────
const menuBtn = document.querySelector('.responsive_btn');
const menuPanel = document.querySelector('.sidebar');

function setMenu(open) {
  menuPanel.classList.toggle('menu_active', open);
  menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  menuBtn.textContent = open ? '×' : '☰';
}

if (menuBtn && menuPanel) {
  menuBtn.addEventListener('click', () => {
    setMenu(!menuPanel.classList.contains('menu_active'));
  });
  // Close the menu when a page link is tapped
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
}
