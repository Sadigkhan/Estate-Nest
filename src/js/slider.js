

let header = document.getElementById("Header");
function changeBackground(imageUrl) {
    // Create a new element for fading
    let fadeElement = document.createElement("div");
    fadeElement.style.position = "absolute";
    // fadeElement.style.width = "100%";
    fadeElement.style.height = "100%";
    fadeElement.style.backgroundColor = "black";
    fadeElement.style.opacity = 0;
    fadeElement.style.transition = "opacity 0.5s ease-in-out";

    // Append the fading element to the header
    header.appendChild(fadeElement);

    // Change the background image and fade in
    header.style.backgroundImage = 'url(' + imageUrl + ')';
    fadeElement.style.opacity = 1;

    // Remove the fading element after the transition
    setTimeout(() => {
        header.removeChild(fadeElement);
    }, 500); // Adjust the time according to your transition duration
}