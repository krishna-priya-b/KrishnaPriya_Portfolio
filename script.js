const hamburger = document.querySelector(".hamburger-menu");
const myNavMenu = document.querySelector(".myNav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    myNavMenu.classList.toggle("active");
});

document.querySelectorAll(".myNav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    myNavMenu.classList.remove("active");
}));

