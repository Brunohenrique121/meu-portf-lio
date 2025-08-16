document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // ... (Código existente)

    const carousel = document.querySelector('.projetos-carousel');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    nextBtn.addEventListener('click', () => {
        const itemWidth = carousel.querySelector('.projeto').clientWidth;
        carousel.scrollLeft += itemWidth;
    });

    prevBtn.addEventListener('click', () => {
        const itemWidth = carousel.querySelector('.projeto').clientWidth;
        carousel.scrollLeft -= itemWidth;
    });
});
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("fade-out");
  }, 1000); // espera 1s antes de sumir
});
