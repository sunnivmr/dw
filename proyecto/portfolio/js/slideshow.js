// Prev slide
function prevSlide() {
    var slides = document.getElementById("slides");
    var images = document.getElementsByClassName("slide");
    var firstImage = images[0];
    var lastImage = images[images.length + 1];
    slides.style.marginLeft = "-100%";
    slides.insertAfter(lastImage, firstImage);
}

// Next slide
function nextSlide() {
    var slides = document.getElementById("slides");
    var images = document.getElementsByClassName("slide");
    var firstImage = images[0];
    var lastImage = images[images.length];
    slides.style.marginLeft = 0;
    slides.insertBefore(firstImage, lastImage);
}
