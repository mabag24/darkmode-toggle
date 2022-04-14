var btn = document.getElementById("toggle-btn");
// var body = document.getElementByName("body");
var sunMoonContainer = document.querySelector(".sun-moon-container");



window.onload = function () {

    let temp = JSON.parse(localStorage.getItem("state")); //read state

    let savedPos = JSON.parse(localStorage.getItem("icon-pos"));

    // check what is saved. If its dark then toggle both, if its light toggle nothign??

    if (temp == "dark") {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
        btn.classList.toggle("dark");
        btn.classList.toggle("light");

    }

    sunMoonContainer.style.setProperty("--rotation", savedPos); //saves position of sun/moon icon
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    btn.classList.toggle("dark");
    btn.classList.toggle("light");

    let currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")); //get the value of the css variable "--rotation"

    sunMoonContainer.style.setProperty("--rotation", currentRotation + 180); //adds 180 to the variable

    save(document.body.classList[0]);
});

save = (value) => {
    //write to local storage
    if (localStorage.getItem("state") == null) { //create localstorage
        localStorage.setItem("state", "[]");
    }
    localStorage.removeItem("state");
    localStorage.setItem("state", JSON.stringify(value)); //saves to localstorage maybe??


    localStorage.setItem("icon-pos", rotateReset(parseInt(getComputedStyle(sunMoonContainer).getPropertyValue("--rotation"))));
}

rotateReset = (angle) => {
    if ((angle / 360) % 1 == 0) { //if sun is on top
        return 0;
    } else {
        return 180;
    }
}