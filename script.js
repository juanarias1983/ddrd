document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll("circle");
    
    circles.forEach(circle => {
      circle.style.animationDelay = `${Math.random() * 2}s`;
    });
  });
  