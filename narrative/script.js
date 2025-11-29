//MOBILE MENU SCRIPT
//Select the button and rename it for our JavaScript
let mobileBtn = document.getElementById("mobile-btn");

//Select the nav and rename it for our JavaScript
let nav = document.getElementById("nav");

//Create a "listener" for when the button is clicked
//A function runs each time the button is clicked that toggles the "mobile-menu" class on or off
//HINT: Look at the dark mode script above for reference

mobileBtn.addEventListener("click", function () {
    nav.classList.toggle("mobile-menu");
});

let treesBtn = document.getElementById("trees-btn");
let treesMenu = document.querySelector(".dropdown-menu");

treesBtn.addEventListener("click", function () {
    treesMenu.classList.toggle("show");
});

