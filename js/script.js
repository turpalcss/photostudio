
$(window).scroll(function(){
    $(".portfolio-text").css("opacity", 1 - $(window).scrollTop() /50);
  });

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 10) {
    $('.portfolio-special').fadeOut();
  } else {
    $('.portfolio-special').fadeIn();
  }
});

jQuery('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
});
