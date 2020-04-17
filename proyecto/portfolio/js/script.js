// Dark mode variable
var mode = localStorage.getItem("mode");


// Function for opening side nav
function openNav() {

    console.log("Opening sidenav");
    document.getElementsByClassName("sidenav")[0].style.width = "100%";
    document.getElementsByClassName("content")[0].style.marginLeft = "250px";
}


// Function for closing side nav
function closeNav() {

    console.log("Closing sidenav");
    document.getElementsByClassName("sidenav")[0].style.width = "0";
    document.getElementsByClassName("content")[0].style.marginLeft = "0";
}

// Function for setting correct mode on load of web page
function setMode() {

    console.log("Current mode:", mode);

    var buttons = document.getElementsByClassName("button");

    var dark = "#202131";
    var light = "#B5B1E3";

    var txtDark = "#9DD6FF";
    var txtLight = "#F3F5F7";

    var background, text;

    var logoLight =


        if (mode == "dark") {
            background = dark;
            text = txtDark;

        } else {
            background = light;
            text = txtLight;
        }


    document.body.style.backgroundColor = background;
    document.getElementById("sidenav").style.backgroundColor = background;

    document.getElementById("navbar").style.backgroundColor = background;


    // Change text-colors
    document.body.style.color = text;

    // Change background-image on title


    // Change logos
    var logos = document.getElementsByClassName("logo");
    var i;
    for (i = 0; i < logos.length; i++) {
        logos[i].style.backgroundColor = background;
    }

    // Change switches
    var switches = document.getElementsByClassName("switch");
    var i;
    for (i = 0; i < switches.length; i++) {
        switches[i].style.backgroundColor = background;
    }
}

// Turn on/off dark mode
function darkMode() {

    // Change current mode
    if (mode == "dark") {
        mode = "light";
        localStorage.setItem("mode", "light");
    } else {

        mode = "dark";
        localStorage.setItem("mode", "dark");
    }

    // Set new current mode
    setMode();

}

// Changing colors of elements
function colorChange(background, text) {
    // Change background-colors
    document.body.style.backgroundColor = background;
    document.getElementById("sidenav").style.backgroundColor = background;

    document.getElementById("navbar").style.backgroundColor = background;


    // Change text-colors
    document.body.style.color = text;

    // Change background-image on title


    // Change logos
    var logos = document.getElementsByClassName("logo");
    var i;
    for (i = 0; i < logos.length; i++) {
        logos[i].style.backgroundColor = background;
    }

    // Change switches
    var switches = document.getElementsByClassName("switch");
    var i;
    for (i = 0; i < switches.length; i++) {
        switches[i].style.backgroundColor = background;
    }
}
