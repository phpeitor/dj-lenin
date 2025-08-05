function init() {
    var myLatlng = new google.maps.LatLng(-6.778465, -79.848971);
    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        streetViewControl: false,
        center: myLatlng, 
        styles: [{"featureType":"administrative.locality","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"saturation":"0"}]},{"featureType":"administrative.land_parcel","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"weight":"3.21"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"weight":"2.15"}]},{"featureType":"road.arterial","elementType":"labels.text","stylers":[{"weight":"1.50"}]}]
    };
    var mapElement = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapElement, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Dj Lenin Chiclayo"
    });
};

