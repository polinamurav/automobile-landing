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
const slides = document.querySelectorAll(".review-item");
const slideWidth = slides[0].offsetWidth + 24; // Учитываем gap
let index = 0;
let isAnimating = false;

function slideTo(newIndex) {
    if (isAnimating) return;
    isAnimating = true;
    index = (newIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    setTimeout(() => (isAnimating = false), 500); // Задержка для плавности
}

let autoSlide = setInterval(() => slideTo(index + 1), 3000);

next.addEventListener("click", () => {
    slideTo(index + 1);
    resetAutoSlide();
});

prev.addEventListener("click", () => {
    slideTo(index - 1);
    resetAutoSlide();
});

function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => slideTo(index + 1), 3000);
}
