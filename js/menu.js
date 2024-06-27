document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.getElementById('nav-toggle');
    const menuBar = document.querySelector('.menu-bar');
  
    navToggle.addEventListener('change', function() {
      if (navToggle.checked) {
        menuBar.style.display = 'block';
      } else {
        menuBar.style.display = 'none';
      }
    });
  });