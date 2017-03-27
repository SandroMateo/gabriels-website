$(document).ready(function(){
  $("table").stupidtable();

  // Need to update this code so that it will also toggle when people click outside of the mobile nav

  $(".mobile-nav__menu-button").on('touchstart click', function(){
    $(".mobile-nav__menu-wrapper").toggleClass("mobile-nav--display");
  });
});
