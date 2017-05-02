$(document).ready(function(){
  // To generate the nutrional fact table for bread anf bagels
  $("table").stupidtable();


  $(".mobile-nav__menu-button").on('click', function(e){
    $(this).hide();
    $(".mobile-nav__menu-wrapper").addClass("mobile-nav--display");
  });

  $(".mobile-nav__close-button").on('touchstart click', function(e){
    $(".mobile-nav__menu-button").show();
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

  $('.sidebar__dropdown-button').mouseover(function(){
    $('.sidebar__dropdown').show();
  });

  $('.sidebar__dropdown-button').mouseout(function(){
    $('.sidebar__dropdown').hide();
  });

  $('#previousProduct').click(function() {

  });

  $('#nextProduct').click(function() {

  });

});
