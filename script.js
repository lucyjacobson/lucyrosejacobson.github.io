
// HAMBURGER MENU
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu-overlay');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');

    const isOpen = hamburger.classList.contains('open');

    if (isOpen) {
      mobileMenu.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    } else {
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });


  const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}