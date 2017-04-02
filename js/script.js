$(document).ready(function(){
  // To generate the nutrional fact table for bread anf bagels
  $("table").stupidtable();

  // Need to update this code so that it will also toggle when people click outside of the mobile nav. also if the menu is open and the screen gets bigger and then smaller again the menu is still open. so this whole function below should be rewritten. look for examples.

  // Now that I added the x button this is super janky in mobile view. probably has something to do with the touchstart part.


  $(".mobile-nav__menu-button").on('touchstart click', function(){
    $(".mobile-nav__menu-wrapper").addClass("mobile-nav--display");
  });

  $(".mobile-nav__close-button").on('touchstart click', function(){
    $(".mobile-nav__menu-wrapper").removeClass("mobile-nav--display");
  });

// This is for displaying/hiding the label for the contact form inputs
  $('.contact__item').on('change', function() {
    var input = $(this);
    if (input.val().length) {
      input.addClass('populated');
    } else {
      input.removeClass('populated');
    }
  });


});
