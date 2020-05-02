// Prev slide
function prevSlide() {
    var slides = document.getElementById("slides");
    var firstImage = document.getElementsByClassName("slide")[0];
    var lastImage = document.getElementsByClassName("slide")[6];
    slides.style.marginLeft = "-200%";
    slides.insertAfter(lastImage, firstImage);
}

// Next slide
function nextSlide() {
    var slides = document.getElementById("slides");
    var firstImage = document.getElementsByClassName("slide")[0];
    var lastImage = document.getElementsByClassName("slide")[6];
    slides.style.marginLeft = 0;
    slides.insertBefore(firstImage, lastImage);
}
