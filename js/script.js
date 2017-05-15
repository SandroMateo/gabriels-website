function startSlideshow(array, index, arrayLength) {
  $(".new-item__wrapper").css("background-image", array[index]).delay(3000).fadeOut(3000, function() {
    if (index < arrayLength) {
      index++;
    } else {
      index = 0;
    }
    $(".new-item__wrapper").css("background-image", array[index]).fadeIn(2000);
    startSlideshow(array, index, arrayLength)
  });
}

$(document).ready(function(){
  // To generate the nutritional fact table for bread anf bagels
  $("table").stupidtable();

  var images = $(".new-item__wrapper").css("background-image");
  if(images) {
    var imageArray = images.split(",");
    var imageLength = imageArray.length - 1;
    startSlideshow(imageArray, 0, imageLength);
  }

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

  $('.sidebar__dropdown-button').mouseover(function(){
    $('.sidebar__dropdown').show();
  });

  $('.sidebar__dropdown-button').mouseout(function(){
    $('.sidebar__dropdown').hide();
  });
});
