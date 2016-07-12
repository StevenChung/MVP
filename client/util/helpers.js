function initMap () {
  var myLatLng = {lat: 37.7749, lng: 122.4194};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });
}
