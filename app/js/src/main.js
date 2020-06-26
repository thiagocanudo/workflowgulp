$(document).on('ready', function () {
  console.log('JQUERY LOAD');
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true
  });

  var $menu = $('.getway');
  var $hamburguer = $('.getway-hamburguer');
  $hamburguer.click(function (e) {
    e.stopPropagation();
    $(this).toggleClass('active');
    $menu.toggleClass('active');
    console.log('click');
  });

  $menu.find('ul').click(function (e) {
    e.stopPropagation();
  });

  $('body').click(function () {
    $hamburguer.removeClass('active')
    $menu.removeClass('active');
  });

});