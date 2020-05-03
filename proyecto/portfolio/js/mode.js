// Dark mode variable
var mode = localStorage.getItem("mode");

// Check if we need to refresh the page for the About me-title
window.addEventListener("resize", function () {
    if (window.innerWidth < 768) {
        location.reload();
    }
});


// Function for setting correct mode on load of web page
function setMode() {

    console.log("Current mode:", mode);

    var buttons = document.getElementsByClassName("button");

    // Colors for background and text
    var dark = "#202131";
    var light = "#B5B1E3";
    // var light = "#AFC5E3";

    var txtDark = "#9DD6FF";
    var txtLight = "#F3F5F7";

    // Logos and switches
    var logoLight = "url('/proyecto/portfolio/img/icons/logo.svg')";
    var logoDark = "url('/proyecto/portfolio/img/icons/logo_dark.svg')";

    var switchLight = "url('/proyecto/portfolio/img/icons/mode_switch.svg')";
    var switchDark = "url('/proyecto/portfolio/img/icons/mode_switch_dark.svg')";

    // Open/close buttons on side nav
    var openLight = "url('/proyecto/portfolio/img/icons/nav_open.svg')";
    var openDark = "url('/proyecto/portfolio/img/icons/nav_open_dark.svg')";

    var closeLight = "url('/proyecto/portfolio/img/icons/nav_close.svg')";
    var closeDark = "url('/proyecto/portfolio/img/icons/nav_close_dark.svg')";

    // Portfolio buttons
    var prevLight = '../proyecto/portfolio/img/icons/arrow_left.svg';
    var prevDark = '../proyecto/portfolio/img/icons/arrow_left_dark.svg';
    var nextLight = '../proyecto/portfolio/img/icons/arrow_right.svg';
    var nextDark = '../proyecto/portfolio/img/icons/arrow_right_dark.svg';

    // Title images
    var titleHomeLight = '../portfolio/img/titles/home.svg';
    var titleHomeDark = '../portfolio/img/titles/home_dark.svg';
    var titleAboutLight = "url('../img/titles/about.svg')";
    var titleAboutDark = "url('../img/titles/about_dark.svg')";
    var titleAboutSingleLineLight = "url('../img/titles/about_single_line.svg')";
    var titleAboutSingleLineDark = "url('../img/titles/about_single_line_dark.svg')";
    var titlePortfolioLight = '../img/titles/portfolio.svg';
    var titlePortfolioDark = '../img/titles/portfolio_dark.svg';
    var titleContactLight = '../img/titles/contact.svg';
    var titleContactDark = '../img/titles/contact_dark.svg';

    // Variables for changing colors and images
    var background, text, logoIcon, switchIcon, openIcon, closeIcon, prev, next, titleHome, titleAbout, titleAboutSingleLine, titlePortfolio, titleContact;

    if (mode == "dark") {
        background = dark;
        text = txtDark;
        logoIcon = logoDark;
        switchIcon = switchDark;
        openIcon = openDark;
        closeIcon = closeDark;
        prev = prevDark;
        next = nextDark;
        titleHome = titleHomeDark;
        titleAbout = titleAboutDark;
        titleAboutSingleLine = titleAboutSingleLineDark;
        titlePortfolio = titlePortfolioDark;
        titleContact = titleContactDark;

    } else {
        background = light;
        text = txtLight;
        logoIcon = logoLight;
        switchIcon = switchLight;
        openIcon = openLight;
        closeIcon = closeLight;
        prev = prevLight;
        next = nextLight;
        titleHome = titleHomeLight;
        titleAbout = titleAboutLight;
        titleAboutSingleLine = titleAboutSingleLineLight;
        titlePortfolio = titlePortfolioLight;
        titleContact = titleContactLight;
    }

    // Change background-colors
    document.body.style.backgroundColor = background;
    document.getElementById("sidenav").style.backgroundColor = background;
    document.getElementById("navbar").style.backgroundColor = background;


    // Change text-colors
    document.body.style.color = text;

    // Change link-colors
    var links = document.getElementsByTagName("a");
    var i;
    for (i = 0; i < links.length; i++) {
        links[i].style.color = text;

    }

    // Change title-images
    var titleHomeID = document.getElementById("home-title");
    if (titleHomeID) {
        titleHomeID.src = titleHome;
    }


    var titleAboutID = document.getElementById("about-title");
    if (titleAboutID) {
        if (window.innerWidth > 768) {
            titleAboutID.style.backgroundImage = titleAboutSingleLine;
        } else {
            titleAboutID.style.backgroundImage = titleAbout;

        }
    }

    var titlePortfolioID = document.getElementById("portfolio-title");
    if (titlePortfolioID) {
        titlePortfolioID.src = titlePortfolio;
    }

    var titleContactID = document.getElementById("contact-title");
    if (titleContactID) {
        titleContactID.src = titleContact;
    }


    // Change logos
    var logos = document.getElementsByClassName("logo");
    var i;
    for (i = 0; i < logos.length; i++) {
        logos[i].style.backgroundColor = background;
        logos[i].style.backgroundImage = logoIcon;

    }

    // Change prev and next switches
    var prevID = document.getElementById("prev");
    var nextID = document.getElementById("next");
    prevID.src = prev;
    nextID.src = next;

    // Change switches
    var switches = document.getElementsByClassName("switch");
    var i;
    for (i = 0; i < switches.length; i++) {
        switches[i].style.backgroundColor = background;
        switches[i].style.backgroundImage = switchIcon;
    }

    // Change open/close sidenav mobile
    document.getElementById("open").style.backgroundColor = background;
    document.getElementById("open").style.backgroundImage = openIcon;
    document.getElementById("close").style.backgroundColor = background;
    document.getElementById("close").style.backgroundImage = closeIcon;
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
