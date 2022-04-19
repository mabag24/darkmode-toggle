var btn = document.getElementById("toggle-btn");
// var body = document.getElementByName("body");
var sunMoonContainer = document.querySelector(".sun-moon-container");



window.onload = function () {

    let temp = JSON.parse(localStorage.getItem("state")); //read state

    let savedPos = JSON.parse(localStorage.getItem("icon-pos")); // reads where the sun/moon should be

    // check what is saved. If the state is saved to dark, toggle both light and dark, otherwise do nothing

    if (temp == "dark") {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }

    sunMoonContainer.style.setProperty("--rotation", savedPos); //saves position of sun/moon icon
}

btn.addEventListener("click", () => { // when the button is clicked, toggle the theme
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    let currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")); //get the value of the css variable "--rotation"

    sunMoonContainer.style.setProperty("--rotation", currentRotation + 180); //adds 180 to the variable to show the sun instead of the moon or vice versa

    save(document.body.classList[0]); // saves the current theme by getting the first value in element.classList
});

save = (value) => {
    //write to local storage
    if (localStorage.getItem("state") == null) { //create localstorage
        localStorage.setItem("state", "[]");
    }
    localStorage.removeItem("state");
    localStorage.setItem("state", JSON.stringify(value)); //saves to localstorage maybe??


    localStorage.setItem("icon-pos", rotateReset(parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")))); // saves the rotation, so that the icon can be lined up correctly when the page loads
}

rotateReset = (angle) => {
    if ((angle / 360) % 1 == 0) { //if sun is on top
        return 0;
    } else {
        return 180;
    }
}