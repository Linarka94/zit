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

  $(window).resize(function () {
    menuListener();
    wayListener();
  });

  $('.marquee').liMarquee();

  $('.news__item p').text(function (i, text) {

    if (text.length >= 100) {
      text = text.substring(0, 100);
      const lastIndex = text.lastIndexOf(" "); //позиция последнего пробела
      text = text.substring(0, lastIndex) + '...'; //обрезаем до последнего слова
    }

    $(this).text(text);

  });

  const hideSearch = function () {
    $('#page__search').removeClass('show');
    $('.header__link-wrap').removeClass('hidden');
    $('.header__connect-link').removeClass('hidden');
  };

  $('#searchButton').click(function () {
    if ($(this).hasClass('show')) {
      hideSearch();
    }

    $('#page__search').addClass('show');
    $('.header__link-wrap').addClass('hidden');
    $('.header__connect-link').addClass('hidden');
  });

  $(document).on('click', function (e) {
    if (!e.target.classList.contains('header__search')
      && !e.target.parentElement.classList.contains('header__search')) {
      hideSearch();
    }
  })
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

  // internship application
  $('#practiceFormButton').click(function () {
    if ($('.intern__application').css('display') == 'block') {
      $('.intern__application').css('display', 'none');
    } else {
      $('.intern__application').css('display', 'block');
    }
  })

  $('#closeFormButton').click(function () {
    $('.intern__application').css('display', 'none');
  })

  //dropdown

  const hideDropMenu = function () {
    $('.header__link').not($(this)).removeClass('header__link--active').next().slideUp(300);
  }

  $('.header__link').click(function () {

    if ($('.header__link-wrap').hasClass('one')) {
      $('.header__link').not($(this))
        .removeClass('header__link--active')
        .next().slideUp(300);
    }

    $(this).toggleClass('header__link--active').next().slideToggle(300);
  })

  $(document).on('click', function (e) {
    if (!e.target.classList.contains('header__link-dropdown')
      && !e.target.parentElement.classList.contains('header__link-dropdown')) {
      hideDropMenu();
    }
  })

  //tabs

  $(".tabs__content-item").not(":first").hide();
  $(".tabs__wrapper .tabs__tab").click(function () {
    $(".tabs__wrapper .tabs__tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tabs__content-item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");

  // faq

  $('.about__faq-icon-button').click(function () {
    $(this).toggleClass('active');
    $(this).parent('.about__faq-item').toggleClass('w-100');
  })
});
