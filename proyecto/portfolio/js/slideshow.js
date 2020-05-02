// Prev slide
function prevSlide() {
    var slides = document.getElementById("slides");
    var images = document.getElementsByClassName("slide");
    var firstImage = images[0];
    var lastImage = images[images.length];
    slides.style.marginLeft = "-600%";
    slides.insertBefore(firstImage, firstImage.nextSibling);
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
