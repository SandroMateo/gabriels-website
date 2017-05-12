$(document).ready(function(){

  function startSlideshow(array, index, arrayLength) {
    $(".new-item__wrapper").css("background-image", array[index])
      // .fadeTo(3000, 1, function(
      //   if (index < arrayLength) {
      //     index++;
      //   } else {
      //     index = 0;
      //   }
      //   startSlideshow(array, index, arrayLength);
      // ));
  }
  // To generate the nutritional fact table for bread anf bagels
  $("table").stupidtable();

  var images = $(".new-item__wrapper").css("background-image");
  var imageArray = images.split(",");
  for (var i = 0; i < imageArray.length; i++) {
    $(".new-item__wrapper").css("background-image", imageArray[i]);
  }
  // startSlideshow(imageArray, 0, imageArray.length);
  console.log(imageArray);


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
