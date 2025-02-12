let slideIndex = 0;
const slides = document.querySelectorAll('.carrossel img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;
    const slideWidth = slides[0].clientWidth;
    const offset = -slideIndex * slideWidth;
    document.querySelector('.carrossel').style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
    slideIndex++;
    showSlide(slideIndex);
});

// passa slide automático
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 2000);

// Inicializa o carrossel
showSlide(slideIndex);

