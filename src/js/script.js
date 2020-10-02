let scrollButton = document.querySelector('.plan__body-button');
let scrollWrap = document.querySelector('.plan__wrap');

scrollButton.addEventListener('click', function () {
    scrollWrap.style.transform += 'translate(-416px)';
})

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$(document).ready(function () {
    $('.single__city').select2({
        placeholder: "Город",
    });
});
$(document).ready(function () {
    $('.single__exp').select2({
        placeholder: "Опыт",

    });
});