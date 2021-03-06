$(document).ready(function(){

  // To generate the nutritional fact table for bread and bagels
  $("table").stupidtable();


  //set up cookie for a welcome page for first time users
  var cookie = document.cookie;
  console.log(cookie);
  if(!cookie) {
    $(".welcome").show();
  }

  $(".welcome__enter-button").on('touchstart click', function(e){
    e.preventDefault();
    $(".welcome").fadeOut(1000);
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    var cookieString = "username=;" + expires + ";" + "path=/;";
    console.log(cookieString);
    document.cookie = cookieString;
  });

  //mobile nav functionality
  $(".mobile-nav__menu-button").on('touchstart click', function(e){
    e.preventDefault();
    $(this).hide();
    $(".mobile-nav__menu-wrapper").addClass("mobile-nav--display");
  });

  $(".mobile-nav__close-button").on('touchstart click', function(e){
    e.preventDefault();
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

  //sidebar submenu functionality
  $('.sidebar__dropdown-button').mouseover(function(){
    $('.sidebar__dropdown').show();
  });

  $('.sidebar__dropdown-button').mouseout(function(){
    $('.sidebar__dropdown').hide();
  });


});

// passive: true});
