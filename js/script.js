$(document).ready(function(){
  $("table").stupidtable();
  
  $(".mobile-nav__menu-button").on('touchstart click', function(){
    $(".mobile-nav__menu-wrapper").toggleClass("mobile-nav--display");
  });
});
