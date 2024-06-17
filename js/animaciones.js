document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.getAttribute('data-animation');
          entry.target.classList.add('animate__animated', animationClass);
          observer.unobserve(entry.target); // Deja de observar una vez animado
        }
      });
    });
  
    const elements = document.querySelectorAll('.animar');
    elements.forEach(el => observer.observe(el));
  });
  