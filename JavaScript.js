// scroll-animations.js

document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.gallery-container');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const scrollAmount = 300;

    rightArrow.addEventListener('click', () => {
        container.scrollBy({ left: +scrollAmount, behavior: 'smooth' }); // הפוך מ-+ ל-
    });

    leftArrow.addEventListener('click', () => {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // הפוך מ- - ל+
    });
});
