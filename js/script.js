$(document).ready(function(){
  $("table").stupidtable();

  // Need to update this code so that it will also toggle when people click outside of the mobile nav. also if the menu is open and the screen gets bigger and then smaller again the menu is still open. so this whole function below should be rewritten. look for examples

  $(".mobile-nav__menu-button").on('touchstart click', function(){
    $(".mobile-nav__menu-wrapper").toggleClass("mobile-nav--display");
  });
});
