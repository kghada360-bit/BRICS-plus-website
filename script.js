const btnTop = document.createElement('button');
btnTop.id = 'btnTop';
btnTop.textContent = '↑';
document.body.appendChild(btnTop);
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
});

btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});



const btnTheme = document.getElementById('btnTheme');

if (btnTheme) {
  if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }


  btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');

      if (document.body.classList.contains('dark-mode')) {
          btnTheme.innerHTML = '<i class="fa-solid fa-sun"></i>';
          localStorage.setItem('theme', 'dark');
      } else {
          btnTheme.innerHTML = '<i class="fa-solid fa-moon"></i>';
          localStorage.setItem('theme', 'light');
      }
  });
} else {
  console.warn('btnTheme introuvable — vérifie que #btnTheme est dans le DOM et que script.js est chargé après le HTML.');
}
