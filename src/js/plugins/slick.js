import slick from 'slick-carousel';
window.slick = slick;

$(document).ready(function() {
    $('.slick').slick({
        variableWidth: true
    });
});
