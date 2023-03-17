import { Loader } from '@googlemaps/js-api-loader';

    const apiOptions = {
        apiKey: "AIzaSyDdncR3Xm9D6mhrC-gMPVottSjcG2PZa4c"
    }

    const loader = new Loader(apiOptions);

    loader.load().then(() => {
        console.log('Maps JS API loaded');
    }); 

    function displayMap() {
        const mapOptions = {
            center: { lat: -33.860664, lng: 151.208138 },
            zoom: 14
        };
        const mapDiv = document.getElementById('map');
        const map = new google.maps.Map(mapDiv, mapOptions);
            return map;
    }

export default displayMap;