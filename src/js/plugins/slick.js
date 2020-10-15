import slick from 'slick-carousel';
window.slick = slick;

$(document).ready(function() {
    $('.slick').slick({
        variableWidth: true
    });

    $('.slick-place').slick({
        variableWidth: true
    });

    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });

    $('.slick-autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,

    });
});