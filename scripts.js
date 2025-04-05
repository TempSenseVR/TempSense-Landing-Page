document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-nav-links');
    const closeMenu = document.querySelector('.close-menu');
  
    // Toggle mobile menu
    const toggleMenu = () => {
      mobileMenu.classList.toggle('show');
      document.body.classList.toggle('menu-open', mobileMenu.classList.contains('show'));
    };
  
    // Event listeners
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  
    closeMenu.addEventListener('click', toggleMenu);
  
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove('show');
        document.body.classList.remove('menu-open');
      }
    });
  
    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mobileMenu.classList.remove('show');
        document.body.classList.remove('menu-open');
      }
    });
  
    // Close menu after clicking links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });
  });