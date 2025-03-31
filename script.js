let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let closeMenu = document.getElementById('close-menu');
let menuLinks = menu.querySelectorAll('a');

burger.onclick = function () {
    menu.style.display = 'flex';
};

closeMenu.onclick = function () {
    menu.style.display = 'none';
};

menuLinks.forEach(link => {
    link.onclick = function () {
        menu.style.display = 'none';
    };
});

const themeToggleButton = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Переключение видимости иконок
    sunIcon.style.display = sunIcon.style.display === "none" ? "inline-block" : "none";
    moonIcon.style.display = moonIcon.style.display === "none" ? "inline-block" : "none";
});


const track = document.querySelector(".reviews-track");
const prev = document.querySelector(".move-backward");
const next = document.querySelector(".move-forward");
let index = 0;
const slideWidth = document.querySelector(".review-item").offsetWidth + 20;

next.addEventListener("click", () => {
    index++;
    if (index >= document.querySelectorAll(".review-item").length) {
        index = 0;
    }
    track.style.transform = `translateX(-${index * slideWidth}px)`;
});

prev.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = document.querySelectorAll(".review-item").length - 1;
    }
    track.style.transform = `translateX(-${index * slideWidth}px)`;
});