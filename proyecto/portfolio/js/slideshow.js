var slides = document.getElementById("slides");

// Prev slide
function prevSlide() {
    slides.style.marginLeft("-" + 100 + "%");
}

// Next slide
function nextSlide() {
    slides.style.marginLeft("+" + 100 + "%");
}
