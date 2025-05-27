document.addEventListener('DOMContentLoaded', () => {
  // ——— Initialize AOS animations ———
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 400,  // animation duration in ms
      once: true      // whether animation should happen only once
    });
  }

  // ——— Mobile menu logic ———
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn  = mobileNav.querySelector('.close-menu');

  function openMenu() {
    mobileNav.classList.add('show');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    mobileNav.classList.remove('show');
    document.body.classList.remove('menu-open');
  }

  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    openMenu();
  });

  closeBtn.addEventListener('click', closeMenu);

  // Click outside to close
  mobileNav.addEventListener('click', e => {
    if (e.target === mobileNav) closeMenu();
  });

  // Close on ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close when any mobile-nav link is clicked
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
