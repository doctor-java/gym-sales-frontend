import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Initialize all dropdowns
document.addEventListener('DOMContentLoaded', () => {
  // Add hover functionality for desktop
  if (window.innerWidth > 992) {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.classList.add('show');
        dropdownToggle.setAttribute('aria-expanded', 'true');
        dropdownMenu.classList.add('show');
      });
      
      dropdown.addEventListener('mouseleave', () => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        dropdown.classList.remove('show');
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdownMenu.classList.remove('show');
      });
    });
  }
  
  // Handle mobile menu
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbarCollapse.contains(e.target) && !navbarToggler.contains(e.target)) {
      navbarCollapse.classList.remove('show');
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      navbarCollapse.classList.remove('show');
    }
  });
});



function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
