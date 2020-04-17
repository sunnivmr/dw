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


    if (mode == "dark") {

        // Change background-colors
        document.body.style.backgroundColor = dark;
        document.getElementById("sidenav").style.backgroundColor = dark;

        document.getElementById("navbar").style.backgroundColor = dark;


        // Change text-colors
        document.body.style.color = txtDark;

        // Change background-image on title


        // Change background-images on buttons

    } else {

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
