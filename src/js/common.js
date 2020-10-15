$(window).on('load', function() {
   console.log(2);
});

$(window).on('load', function () {
   $('.marquee').liMarquee();
});

$(document).ready(function () {
   $('.acc__title').click(function (event) {
      // if ($('.acc').hasClass('acc--one')) {
      //    $('.acc__title').not($(this)).removeClass('acc__title--active');
      //    $('.acc__content').not($(this).next()).slideUp(300);
      // } //если надо чтобы открывался только по одному блоку
      $(this).toggleClass('acc__title--active').next().slideToggle(300);
   })
});


$(window).on('load', function() {
   $('.news__item-text').text(function(i, text) {

      if (text.length >= 140) {
         text = text.substring(0, 140);
         const lastIndex = text.lastIndexOf(" ");       // позиция последнего пробела
         text = text.substring(0, lastIndex) + '...'; // обрезаем до последнего слова
      }

      $(this).text(text);

   });
});
