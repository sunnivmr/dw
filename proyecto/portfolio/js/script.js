// Dark mode variable
var on = false;

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

// Dark mode function
function darkMode() {

    var dark = "#202131";
    var light = "#B5B1E3";

    if (!on) {
        console.log("Dark mode activated");


        // Change background-color to dark 
        document.body.style.backgroundColor = dark;
        document.getElementById("sidenav").style.backgroundColor = dark;

        on = true;
    } else {
        console.log("Dark mode deactivated");

        // Change background-color to light
        document.body.style.backgroundColor = light;

        document.getElementById("sidenav").style.backgroundColor = light;

        on = false;
    }




}
