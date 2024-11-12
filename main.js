let currentSlide = 0;

function showSlide(index) {
    const carousel = document.querySelector('.productos');
    const totalSlides = Math.ceil(carousel.children.length / 2); // Dividir en grupos de dos productos

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
