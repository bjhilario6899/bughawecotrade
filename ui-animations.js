const header = document.querySelector('.site-header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // 1. Always keep header visible at the very top of the page
    if (currentScrollY <= 0) {
      header.classList.remove('header-hidden');
      return;
    }

    // 2. Scrolling DOWN -> Hide the header
    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      header.classList.add('header-hidden');
    } 
    // 3. Scrolling UP -> Reveal the header instantly
    else if (currentScrollY < lastScrollY) {
      header.classList.remove('header-hidden');
    }

    // Update last scroll position
    lastScrollY = currentScrollY;
  });


  const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

function closeMenu() {
  hamburgerBtn.classList.remove('active');
  mobileMenu.classList.remove('active');
}

// 1. Toggle mobile menu on hamburger click
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  console.log("click")
});

// 2. Close mobile menu automatically when a link is clicked
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

document.addEventListener('click', (event) => {
  const isMenuOpen = mobileMenu.classList.contains('active');
  
  // Check if click was inside the menu or on the hamburger button
  const clickedInsideMenu = mobileMenu.contains(event.target);
  const clickedOnBtn = hamburgerBtn.contains(event.target);

  // If the menu is open and the click happened OUTSIDE both, close it
  if (isMenuOpen && !clickedInsideMenu && !clickedOnBtn) {
    closeMenu();
  }
});