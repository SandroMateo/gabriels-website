function MapMaker() {
  this.map;
  this.infowindow = null;
  this.markerArray = [];
}

MapMaker.prototype.initiateMap = function(_mapId) {
  var gabes = new google.maps.LatLng(45.5308236, -122.6444298);

  this.map = new google.maps.Map(document.getElementById(_mapId), {
        center: gabes,
        zoom: 10
  })
}

MapMaker.prototype.markLocations = function(location) {
  var that = this;
  var latLng = new google.maps.LatLng(location.geometry.coordinates[1], location.geometry.coordinates[0]);
  var marker = new google.maps.Marker({
    id: this.markerArray.length,
    position: latLng,
    map: this.map,
    animation: google.maps.Animation.DROP,
    title: location.properties.title,
    address: location.properties.address,
    url: location.properties.url
  });
  this.markerArray.push(marker);
  marker.addListener('click', function() {
    if(that.infowindow) {
      that.infowindow.close();
    };
    that.infowindow = new google.maps.InfoWindow({
      content: "<a href=" + marker.url + " target='_blank'><h4>" + marker.title + "</h4></a><p>" + marker.address + "</p>"
    })
    that.infowindow.open(map, marker);
  });
  appendData(marker);
  marker.setMap(this.map);
}

function loadLocationData(_map, _locationType){
  $.getJSON("../data/locations/" + _locationType + ".json").then(function(locationResult) {
    for (var i = 0; i < locationResult.features.length; i++) {
      _map.markLocations(locationResult.features[i]);
    };
  }).fail(function(error) {
    console.log("FAILURE");
  });
}

function loadProductLocationData(_map, _product, _productType) {
  $.getJSON("../data/locations/grocery.json").then(function(locationResult) {
    for (var i = 0; i < locationResult.features.length; i++) {
      for (var j = 0; j < location.features[i].properties._product.length; j++) {
        if (_productType === location.features[i].properties._product[j]) {
          _map.markLocations(locationResult.features[i]);
        };
      }
    }
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

function appendData(_marker) {
    $('#locationGrid').append("<li value=" + _marker.id + ">" + _marker.title + "</li>");
}

function switchLocation(_map, _locationType) {
  switch(_locationType){
    case _locationType:
      removeLocationData(_map);
      loadLocationData(_map, _locationType);
    break;
  }
}

$(document).ready(function(e) {
  var map = new MapMaker();
  if (window.location.href === window.location.origin + "/where-to-buy/") {
    var locationTypeArray = ["grocery", "markets"];
    map.initiateMap('map');
    console.log("HERE");
    for (var i = 0; i < locationTypeArray.length; i++) {
      loadLocationData(map, locationTypeArray[i]);
    };
  };


  $('#grocery').click(function() {
    var locationType = $(this).val();
    switchLocation(map, locationType);
  });

  $('#markets').click(function() {
    var locationType = $(this).val();
    switchLocation(map, locationType);
  });

  $('#locationGrid').on("click", "li", function() {
    var markerId = $(this).val();
    for (var i = 0; i < map.markerArray.length; i++) {
      if (map.markerArray[i].id === markerId) {
        if(map.infowindow) {
          map.infowindow.close();
        };
        map.infowindow = new google.maps.InfoWindow({
          content: "<a href=" + map.markerArray[i].url + " target='_blank'><h4>" + map.markerArray[i].title + "</h4></a><p>" + map.markerArray[i].address + "</p>"
        })
        map.infowindow.open(map, map.markerArray[i]);
      }
    }
  });

  $('#locations').click(function() {
    var locations_map = new MapMaker();
    var product = "bagel";
    var productType = this.val();
    console.log(productType);
    loadProductLocationData(locations_map, product, productType);
  })


});
