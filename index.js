let marker, marker2, marker3, map;

function initMap() {
    const posicion = {
        lat: -25.363,
        lng: 131.044
    }

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición inicial"
    })

    marker2 = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición inicial"
    })

    marker3 = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición inicial"
    })

    // Obtener la Geolocalización
    geoPosiciona()
}

function geoPosiciona () {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const options = { timeout: 60000}
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options)
    }else {
        alert("Tu navegador no admite Geolocalización")
    }
}

function centraMapa (position) {
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    const nuevaPos2 = {
        lat: 21.893263,
        lng: -79.747150
    }

    const nuevaPos3 = {
        lat: 20.972084494517862,
        lng: -89.6226484385591
    }
    console.log(nuevaPos)
    marker.setPosition(nuevaPos)
    marker2.setPosition(nuevaPos2)
    marker3.setPosition(nuevaPos3)
    map.setCenter(nuevaPos)
}

function onError (error) {
    alert("No hemos podido acceder a tu ubicación")
}

