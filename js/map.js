var map;
var cafes;
var markets;
var grocery;
var groceryData;
var marketData;
var cafeData;

function initMap() {
  var gabes = new google.maps.LatLng(45.5308236, -122.6444298);

  map = new google.maps.Map(document.getElementById('map'), {
    center: gabes,
    zoom: 10
  });
}

function appendData(location) {
  for (var i = 0; i < location.features.length; i++) {
    $('#locationGrid').append("<div class='product-box img-responsive'><img class='bread' src=" + location.features[i].properties.image + " alt=" + location.features[i].properties.title + "><h2>" + location.features[i].properties.title + "</h2> <p>" + location.features[i].properties.address + "</p></div>");
  }
}

function displayLocations(grocery, market, cafe) {
  groceryData.setMap(grocery);
  marketData.setMap(market);
  cafeData.setMap(cafe);
}


function loadLocationData(callback){
  $.getJSON("../data/locations/cafes.json", function(cafeResult) {
    cafes = cafeResult;
  });
  $.getJSON("../data/locations/markets.json", function(marketResult){
    markets = marketResult;
  });
  $.getJSON("../data/locations/grocery.json", function(groceryResult){
    grocery = groceryResult;

    groceryData = new google.maps.Data();
    marketData = new google.maps.Data();
    cafeData = new google.maps.Data();
    groceryData.loadGeoJson('../data/locations/grocery.json');
    marketData.loadGeoJson('../data/locations/markets.json');
    cafeData.loadGeoJson('../data/locations/cafes.json');

    callback();
  });
}

$(function() {
  initMap();
  loadLocationData(function(){
    displayLocations(map, map, map);
    appendData(grocery);
    appendData(cafes);
    appendData(markets);

    $('#findByType').click(function() {
      var locationType = $("input:radio[name=locationType]:checked").val();
      switch(locationType){
        case 'grocery':
          displayLocations(map, null, null);
          $("#locationGrid").html("");
          appendData(grocery);
        break;
        case 'market':
          displayLocations(null, map, null);
          $("#locationGrid").html("");
          appendData(markets);
        break;
        case 'cafe':
          displayLocations(null, null, map);
          $("#locationGrid").html("");
          appendData(cafes);
        break;
        default:
          displayLocations(map, map, map);
      }
    });
  });
});
