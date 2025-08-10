 $(document).ready(function(){

    let googleMapsLoaded = false;

    fetch('./config.json')
    .then(response => response.json())
    .then(config => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${config.googleMapsApiKey}&callback=initCustomMap`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
    })
    .catch(error => {
        console.error('No se pudo cargar la API key de Google Maps:', error);
    });

    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    if (googleMapsLoaded && typeof init === 'function') {
        init();
    }
    });
      
    let myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
    }, [
        {
        title:"Labels",
        artist:"DJ Lenin",
        mp3:"./assets/music/neovaii_1.mp3",
        poster:"assets/images/news-grid1.jpg"
        },
        {
        title:"Your eyes",
        artist:"DJ Lenin",
        mp3:"./assets/music/neovaii_2.mp3",
        poster:"assets/images/news-grid1.jpg"
        },
        {
        title:"Serendipity",
        artist:"DJ Lenin",
        mp3:"./assets/music/neovaii_3.mp3",
        poster:"assets/images/news-grid1.jpg"
        },
        {
        title:"Buga",
        artist:"DJ Lenin",
        mp3:"./assets/music/neovaii_4.mp3",
        poster:"assets/images/news-grid1.jpg"
        },
        
    ], {
        swfPath: "jplayer",
        supplied: "mp3",
        wmode: "window",
        useStateClassSkin: true,
        autoBlur: false,
        smoothPlayBar: true,
        keyEnabled: true,
        remainingDuration: true,
        toggleDuration: true
    });

    const startPlayback = () => {
        myPlaylist.play();
        document.removeEventListener('click', startPlayback); 
    };

    document.addEventListener('click', startPlayback);
});

function initCustomMap() {
    googleMapsLoaded = true;

    const script = document.createElement('script');
    script.src = './assets/js/custom-map.js';
    script.onload = () => {
        if (typeof init === 'function') init(); 
    };
    
    document.body.appendChild(script);
}