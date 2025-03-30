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
