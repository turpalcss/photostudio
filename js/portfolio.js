
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
    function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
