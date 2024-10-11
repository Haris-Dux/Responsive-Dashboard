

const menuButton = document.querySelector("#menu-button");
const sideMenu = document.querySelector("aside");
const closeButton = document.querySelector("#close-btn");

menuButton.addEventListener("click" , () => {
sideMenu.style.display = "block"
});

closeButton.addEventListener("click" , () => {
    sideMenu.style.display = "none"
});