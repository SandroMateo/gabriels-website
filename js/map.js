function MapMaker() {
  this.map;
  this.infowindow = null;
  this.markerArray = [];
}

MapMaker.prototype.initiateMap = function() {
  var gabes = new google.maps.LatLng(45.5308236, -122.6444298);

  this.map = new google.maps.Map(document.getElementById('map'), {
        center: gabes,
        zoom: 11
  })
}

MapMaker.prototype.markLocations = function(location) {
  var that = this;
  var latLng = new google.maps.LatLng(location.geometry.coordinates[1], location.geometry.coordinates[0]);
  var marker = new google.maps.Marker({
    position: latLng,
    map: this.map,
    animation: google.maps.Animation.DROP,
    title: location.properties.title
  });
  this.markerArray.push(marker);
  marker.addListener('click', function() {
    console.log(that.infowindow);
    if(that.infowindow) {
      that.infowindow.close();
    };
    that.infowindow = new google.maps.InfoWindow({
      content: marker.title
    })
    that.infowindow.open(map, marker);
  });
  marker.setMap(this.map);
}

function loadLocationData(_map, _locationType){
  $.getJSON("../data/locations/" + _locationType + ".json").then(function(locationResult) {
    for (var i = 0; i < locationResult.features.length; i++) {
      _map.markLocations(locationResult.features[i]);
    };
    appendData(locationResult);
  }).fail(function(error) {
    console.log("FAILURE");
  });
}

function removeLocationData(_map) {
  for (var i = 0; i < _map.markerArray.length; i++) {
    _map.markerArray[i].setMap(null);
  }
  _map.markerArray = [];
  $("#locationGrid").html("");
}

function appendData(location) {
  for (var i = 0; i < location.features.length; i++) {
    $('#locationGrid').append("<div class='location-box img-responsive'><img class='bread' src=" + location.features[i].properties.image + " alt=" + location.features[i].properties.title + "><h3>" + location.features[i].properties.title + "</h3> <p>" + location.features[i].properties.address + "</p></div>");
  }
}

$(document).ready(function() {
  var map = new MapMaker();
  var locationTypeArray = ["cafes", "grocery", "markets"];
  map.initiateMap();
  for (var i = 0; i < locationTypeArray.length; i++) {
    loadLocationData(map, locationTypeArray[i]);
  };

  $('#findByType').click(function() {
    var locationType = $("input:radio[name=locationType]:checked").val();
    switch(locationType){
      case locationType:
        removeLocationData(map);
        loadLocationData(map, locationType);
      break;
    }
  });
});
