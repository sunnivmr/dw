// Get slides-element
function getSlides() {
    return document.getElementById("slides");
}

// Prev slide
function prevSlide() {
    slides = getSlides();
    slides.style.marginLeft = "-100%";
}

// Next slide
function nextSlide() {
    slides = getSlides();
    slides.style.marginLeft = "100%";
}
