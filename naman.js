document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');

    let index = 0;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(${-slideWidth * index}px)`;
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        updateCarousel();
    }

    function prevSlide() {
        index = (index - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
});
