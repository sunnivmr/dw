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
function darkModeOn() {

    console.log("Dark mode activated");


    // Change background-color to dark 
    document.getElementByTagName("body").style.backgroundColor("#202131");
}

function darkModeOff() {

    console.log("Dark mode deactivated");

    // Change background-color to light
    document.getElementByTagName("body").style.backgroundColor("#B5B1E3");
}
