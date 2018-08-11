function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: -21.76141, lng: -41.32061}
    });
  
    var ciclovias = new google.maps.KmlLayer({
      url: 'https://raw.githubusercontent.com/EnzoRobaina/javascript-busu/master/linestring.kml',
      map: map
    });
  }
