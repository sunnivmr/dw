// Prev slide
function prevSlide() {
    var slides = document.getElementById("slides");
    var images = document.getElementsByClassName("slide");
    var firstImage = images[0];
    var lastImage = images[images.length - 1];
    slides.insertBefore(lastImage, firstImage);
}

// Next slide
function nextSlide() {
    var slides = document.getElementById("slides");
    var images = document.getElementsByClassName("slide");
    var firstImage = images[0];
    var lastImage = images[images.length - 1];
    slides.style.marginLeft = 0;
    slides.insertBefore(firstImage, lastImage.nextSibling);
}

// Determine number of slides
function setSlideNumbers() {
    var slideNumbers = document.getElementsByClassName("slide-number");
    var total = slideNumbers.length;

    var i;
    for (i = 0; i < total; i++) {

        var slideNumber = i + 1;
        slideNumbers[i].innerHTML = slideNumber + " / " + total;

    }

}
