// var btn = document.querySelector("toggle-btn");
// var body = document.getElementByName("body");

window.onload = function () {

    let temp = JSON.parse(localStorage.getItem("state")); //read state

    // check what is saved. If its dark then toggle both, if its light toggle nothign??

    if (temp == "dark") {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");

    }
}

document.getElementById("toggle-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    save(document.body.classList[0]);
});

save = (value) => {
    //write to local storage
    if (localStorage.getItem("state") == null) { //create localstorage
        localStorage.setItem("state", "[]");
    }
    localStorage.removeItem("state");
    localStorage.setItem("state", JSON.stringify(value)); //saves to localstorage maybe??
}