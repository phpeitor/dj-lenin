// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // The latitude and longitude to center the map (always required)
    var myLatlng = new google.maps.LatLng(-6.778465, -79.848971);
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,
        scrollwheel: false,
        streetViewControl: false,
        
        center: myLatlng, // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"0"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"weight":"3.21"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":"2.15"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"weight":"1.50"}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');


    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Dj Lenin Chiclayo"
    });
};

$('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    init();
});

