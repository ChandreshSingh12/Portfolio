// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    
    // Debug - check if elements were found
    console.log('Hamburger element:', hamburger);
    console.log('Nav links element:', navLinks);
    
    // Add scroll event for navbar only if navbar exists
    if (navbar) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(10, 10, 10, 0.95)';
          navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        } else {
          navbar.style.background = 'transparent';
          navbar.style.boxShadow = 'none';
        }
      });
    }
    
    // Add click event to hamburger only if it exists
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked!');
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
      });
      
      // Add click events to all nav links
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
        });
      });
    } else {
      console.error('Menu elements not found!');
    }
  });
  