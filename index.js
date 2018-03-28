
$(document).ready(function() {
var headerHeight = $('header').height();

// scrolling+sticky nav bar
$(window).scroll(function() {
  if( $(this).scrollTop() > headerHeight) {
    $('nav').addClass('fixed-nav');
    $('#main').addClass('more-margin');
  } else {
    $('nav').removeClass('fixed-nav');
    $('#main').removeClass('more-margin')
  }
});

// animated scroll on nav-bar <a> tag clicks
// code below taken from https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



});