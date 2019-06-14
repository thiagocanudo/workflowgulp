$(document).on('ready', function() {
    console.log('jQuery load!!!');
  $(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true
  });
});