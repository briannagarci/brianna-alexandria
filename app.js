$(function() {
  $('nav .navbar ul li a').click(function() {
    $('#nav').trigger('click');
  })


  $('.cover').on('mouseover', function() {
    $overlay = $(this).children('.overlay');
    if (!$overlay.hasClass('overlay-animation')) {
      $overlay.addClass('overlay-animation');
    }
  });

  $('.cover').on('mouseleave', function() {
    $overlay = $(this).children('.overlay');
    if ($overlay.hasClass('overlay-animation')) {
      $overlay.removeClass('overlay-animation');
    }
  });
});