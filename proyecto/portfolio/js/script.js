// Dark mode variable
var on;

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
function mode() {

    var buttons = document.getElementsByClassName("button");

    var dark = "#202131";
    var light = "#B5B1E3";

    var txtDark = "#9DD6FF";
    var txtLight = "#F3F5F7";


    if (on) {
        console.log("Dark mode activated");


        // Change background-colors
        document.body.style.backgroundColor = dark;
        document.getElementById("sidenav").style.backgroundColor = dark;

        document.getElementById("navbar").style.backgroundColor = dark;


        // Change text-colors
        document.body.style.color = txtDark;

        // Change background-image on title


        // Change background-images on buttons

    } else {
        console.log("Dark mode deactivated");

        // Change background-colors
        document.body.style.backgroundColor = light;

        document.getElementById("sidenav").style.backgroundColor = light;

        document.getElementById("navbar").style.backgroundColor = light

        // Change text-colors
        document.body.style.color = txtLight;


        // Change background-image on title

    }
}

// Turn on/off dark mode
function darkMode() {

    // Change current mode
    if (on) {
        on = false;
    } else {
        on = true;
    }

    // Set new current mode
    mode();

}
