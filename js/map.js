$(document).ready(function(){

  var map;
  function initMap() {
    var gabes = new google.maps.LatLng(45.5308236, -122.6444298);

    map = new google.maps.Map(document.getElementById('map'), {
      center: gabes,
      zoom: 10
    });
  }

  google.maps.event.addDomListener(window, 'load', function() {
    initMap();

    var groceryData = new google.maps.Data();
    var marketData = new google.maps.Data();
    var cafeData = new google.maps.Data();
    groceryData.loadGeoJson('../js/grocery.json');
    marketData.loadGeoJson('../js/markets.json');
    cafeData.loadGeoJson('../js/cafes.json');
    groceryData.setMap(map);
    marketData.setMap(map);
    cafeData.setMap(map);

    $('#findByType').click(function() {
      var locationType = $("input:radio[name=locationType]:checked").val();
      console.log(locationType);
      switch(locationType){
        case 'grocery':
          groceryData.setMap(map);
          marketData.setMap(null);
          cafeData.setMap(null);
        break;
        case 'market':
          groceryData.setMap(null);
          marketData.setMap(map);
          cafeData.setMap(null);
        break;
        case 'cafe':
          groceryData.setMap(null);
          marketData.setMap(null);
          cafeData.setMap(map);
        break;
        default:
          groceryData.setMap(map);
          marketData.setMap(map);
          cafeData.setMap(map);
      }

    });

  });






});
