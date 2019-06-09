$(function() {
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
  
    burger.addEventListener('click',()=>{
      nav.classList.toggle('nav-active');
    });
  }
  
  navSlide();

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