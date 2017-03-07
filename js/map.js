$(document).ready(function(){
  var map;
  function initMap() {
    var gabes = new google.maps.LatLng(45.5308236, -122.6444298);

    map = new google.maps.Map(document.getElementById('map'), {
      center: gabes,
      zoom: 8
    });

    map.data.loadGeoJson('../js/markets.json');

  }
  google.maps.event.addDomListener(window, 'load', initMap);
});
