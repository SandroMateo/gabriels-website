var infowindow;

function MapMaker() {
  this.map;
}

MapMaker.prototype.initiateMap = function() {
  var gabes = new google.maps.LatLng(45.5308236, -122.6444298);

  this.map = new google.maps.Map(document.getElementById('map'), {
        center: gabes,
        zoom: 10
  })
}

MapMaker.prototype.markLocations = function(location, _markerArray) {
  var latLng = new google.maps.LatLng(location.geometry.coordinates[1], location.geometry.coordinates[0]);
  var marker = new google.maps.Marker({
    position: latLng,
    map: this.map,
    animation: google.maps.Animation.DROP,
    title: location.properties.title
  });
  _markerArray.push(marker);
  marker.addListener('click', function() {
    if(infowindow) {
      infowindow.close();
    };
    infowindow = new google.maps.InfoWindow({
      content: marker.title
    })
    infowindow.open(map, marker);
  });
  marker.setMap(this.map);
}

function loadLocationData(_map, _markerArray, _locationType){
  $.getJSON("../data/locations/" + _locationType + ".json", function(locationResult) {
    for (var i = 0; i < locationResult.features.length; i++) {
      _map.markLocations(locationResult.features[i], _markerArray);
    };
    appendData(locationResult);
  });
}

function removeLocationData(_map, _markerArray) {
  for (var i = 0; i < _markerArray.length; i++) {
    _markerArray[i].setMap(null);
  }
  $("#locationGrid").html("");
}

function appendData(location) {
  for (var i = 0; i < location.features.length; i++) {
    $('#locationGrid').append("<div class='product-box img-responsive'><img class='bread' src=" + location.features[i].properties.image + " alt=" + location.features[i].properties.title + "><h2>" + location.features[i].properties.title + "</h2> <p>" + location.features[i].properties.address + "</p></div>");
  }
}

$(document).ready(function() {
  var map = new MapMaker();
  var markerArray = [];
  infowindow = null;
  map.initiateMap();
  loadLocationData(map, markerArray, "cafes");
  loadLocationData(map, markerArray, "grocery");
  loadLocationData(map, markerArray, "markets");

  $('#findByType').click(function() {
    var locationType = $("input:radio[name=locationType]:checked").val();
    switch(locationType){
      case 'grocery':
        removeLocationData(map, markerArray);
        loadLocationData(map, markerArray,  locationType);
      break;
      case 'markets':
        removeLocationData(map, markerArray);
        loadLocationData(map, markerArray,  locationType);
      break;
      case 'cafes':
        removeLocationData(map, markerArray);
        loadLocationData(map, markerArray,  locationType);
      break;
      // default:
      // loadLocationData(map, markerArray, "cafes");
      // loadLocationData(map, markerArray, "grocery");
      // loadLocationData(map, markerArray, "markets");
    }
  });
});
