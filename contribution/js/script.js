// Preloader Animation

$(window).on('load', function() { // makes sure the whole site is loaded
    $('#status').delay(2500).fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(2500).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(2600).css({'overflow':'visible'});
  })
  
