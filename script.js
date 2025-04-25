// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Collapsible sections
document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
    btn.textContent = btn.textContent.includes('⬇') 
      ? btn.textContent.replace('⬇', '⬆') 
      : btn.textContent.replace('⬆', '⬇');
  });
});
