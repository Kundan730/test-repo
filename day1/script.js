// Wait for the DOM to fully load before executing scripts
document.addEventListener("DOMContentLoaded", function() {
    
  // Example function to handle navigation link clicks
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default anchor behavior
          const targetId = this.getAttribute('href').substring(1); // Get target section ID
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
          }
      });
  });

  console.log("Welcome to Your Website!");
});