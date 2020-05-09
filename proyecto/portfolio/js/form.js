function sendMessage() {
    document.getElementById("popup").style.display = "block";
    console.log("Message sent");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    console.log("Closed popup");
    location.reload();
}
