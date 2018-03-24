
$(document).ready(function() {
var headerHeight = $('header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > headerHeight) {
    $('nav').addClass('fixed-nav');
  } else {
    $('nav').removeClass('fixed-nav');
  }
});


});