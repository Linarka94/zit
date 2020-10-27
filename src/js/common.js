const menuListener = function () {

  $('.footer__acc-title').off();

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.footer__acc-title').click(function (event) {
      $(this).toggleClass('footer__acc-title--active').next().slideToggle(300);
    });
  }
}

const wayListener = function () {

  $('.contacts__acc-title').off();

  if (window.matchMedia('(max-width: 767px)').matches) {
    $('.contacts__acc-title').click(function (event) {
      $(this).toggleClass('contacts__acc-title--active').next().slideToggle(300);
    });
  }
}

$(window).on('load', function () {
  $('#burgerButton').click(function () {
    $('.header__burger-menu').toggleClass('header__burger-menu--show');
    $('.header__burger-icon').toggleClass('header__burger-icon--show');
    $('body').toggleClass('body--overflow-hidden');
  });

  menuListener();
  wayListener();

  $(window).resize(function() {
    menuListener();
    wayListener();
  });

  $('.marquee').liMarquee();

  $('.news__item-text').text(function (i, text) {

    if (text.length >= 140) {
      text = text.substring(0, 140);
      const lastIndex = text.lastIndexOf(" "); //позиция последнего пробела
      text = text.substring(0, lastIndex) + '...'; //обрезаем до последнего слова
    }

    $(this).text(text);

  });

  $('#searchButton').click(function () {
    if ($('#page__search').css('display') == 'block') {
      $('#page__search').css('display', 'none');
    } else {
      $('#page__search').css('display', 'block');
    }
  });
});

$(document).ready(function () {
  $('.acc__title').click(function (event) {
    // if ($('.acc').hasClass('acc--one')) {
    //    $('.acc__title').not($(this)).removeClass('acc__title--active');
    //    $('.acc__content').not($(this).next()).slideUp(300);
    // } //если надо чтобы открывался только по одному блоку
    $(this).toggleClass('acc__title--active').next().slideToggle(300);
    $(this).toggleClass('header__burger-title--active');
  })


});
