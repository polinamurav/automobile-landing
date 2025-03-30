const swiper = new Swiper('.reviews-carousel', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 25,
    slidesPerView: 1,
    breakpoints: {
        768: {slidesPerView: 2},
        1024: {slidesPerView: 3},
    }
});

let burger = document.getElementById('burger');
burger.onclick = function () {
    document.getElementById('menu').style.display = 'flex';
}
document.getElementById('close-menu').onclick = function () {
    document.getElementById('menu').style.display = 'none';
};