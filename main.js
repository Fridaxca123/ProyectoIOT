let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.productos');
    const totalSlides = slides.length;

    // Ajustar el índice del slide
    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    // Mover el carrusel
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Iniciar en el primer slide
showSlide(currentSlide);
