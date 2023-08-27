var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var goldIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


var violetIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});


var greyIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-grey.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// coordinate array with popup text
const points28M = [
    [39.67243, -3.97446, "06:00 - Recogida 1ª, 2ª, 3ª y 4ª de la Virgen"],
    [39.67920, -3.97325, "06:30 - Recogida Bastón"],
    [39.68055, -3.97650, "06:40 - Recogida Junco"],
    [39.67902, -3.97405, "06:50 - Recogida Niño de la Bandera"],
    [39.67915, -3.97318, "07:00 - Desayuno Bastón"],
    [39.67268, -3.97440, "08:15 - Salida Oficial"],
    [39.67693, -3.97068, "08:30 - Ermita del Cristo"],
    [39.67801, -3.97556, "09:00 - Plaza Majuelo"],
    [39.67924, -3.97824, "09:30 - Barrio del Cerrillo"],
    [39.67632, -3.97357, "10:00 - Misa en la Iglesia Parroquial"],
    [39.67858, -3.97097, "11:15 - Ermita de la Virgen"],
    [39.67747, -3.97244, "11:50 - Casa Parroquial"],
    [39.67552, -3.97546, "12:10 - Plaza Juan Carlos I"],
    [39.67752, -3.97047, "12:30 - Casa de la Alcaldesa"],
    [39.67754, -3.98055, "13:45 - Casa del Administrador"],
    [39.67263, -3.97431, "15:15 - Regreso"],
];

const points28T = [
    [39.67268, -3.97440, "17:00 - Salida Oficial"],
    [39.67577, -3.97894, "17:10 - Plaza Malpica"],
    [39.67316, -3.98299, "17:25 - Cementerio"],
    [39.67184, -3.97892, "17:55 - Plaza del Oteruelo"],
    [39.67193, -3.97261, "18:20 - 2ª Dama"],
    [39.6743, -3.97217, "19:55 - Plaza del Pozobueno"],
    [39.67654, -3.96836, "20:15 - Glorieta de Jesús Nazareno"],
    [39.67920, -3.97325, "20:40 - Bastón"],
    [39.67263, -3.97431, "22:10 - Regreso"],
];

const points2M = [
    [39.67634, -3.99198, "06:45 - Recogida 1ª, 2ª, 3ª y 4ª de la Virgen"],
    [39.68055, -3.97650, "07:15 - Recogida Junco"],
    [39.67920, -3.97325, "07:25 - Recogida Bastón"],
    [39.67902, -3.97405, "07:30 - Recogida Niño de la Bandera"],
    [39.66983, -3.97593, "07:55 - Desayuno Junco"],
    [39.67268, -3.97440, "08:45 - Salida Oficial"],
    [39.67693, -3.97068, "09:00 - Ermita del Cristo"],
    [39.67858, -3.97097, "09:20 - Ermita de la Virgen"],
    [39.67801, -3.97556, "09:40 - Plaza Majuelo"],
    [39.68582, -3.97582, "10:00 - Arriera"],
    [39.67243, -3.97446, "11:50 - 4ª de la Virgen"],
    [39.67247, -3.96911, "13:30 - Ayudante"],
    [39.67263, -3.97431, "15:00 - Regreso"],
];

const points2T = [
    [39.67268, -3.97440, "16:15 - Salida Oficial"],
    [39.67602, -3.99056, "16:40 - Residencia de Mayores"],
    [39.67849, -3.97765, "18:00 - Hortelana"],
    [39.67525, -3.97447, "19:40 - 3ª de la Virgen"],
    [39.67086, -3.97294, "21:20 - 1ª Dama"],
    [39.67263, -3.97431, "22:50 - Regreso"],
];

const points3M = [
    [39.67525, -3.97447, "06:30 - Recogida 1ª, 2ª, 3ª y 4ª de la Virgen"],
    [39.68055, -3.97650, "06:45 - Recogida Junco"],
    [39.67920, -3.97325, "06:55 - Recogida Bastón"],
    [39.67902, -3.97405, "07:00 - Recogida Niño de la Bandera"],
    [39.66987, -3.97597, "07:30 - Desayuno Junco"],
    [39.67268, -3.97440, "08:20 - Salida Oficial"],
    [39.67693, -3.97068, "08:35 - Ermita del Cristo"],
    [39.67858, -3.97097, "08:55 - Ermita de la Virgen"],
    [39.67801, -3.97556, "09:30 - Plaza Majuelo"],
    [39.6799, -3.98388, "10:00 - 1ª de la Virgen"],
    [39.67632, -3.97357, "12:00 - Misa en la Iglesia Parroquial"],
    [39.67910, -3.97410, "13:30 - Niño de la Bandera"],
    [39.67263, -3.97431, "22:50 - Regreso"],
];

const points3T = [
    [39.67268, -3.97440, "16:15 - Salida Oficial"],
    [39.66974, -3.97587, "17:10 - Labradora"],
    [39.67388, -3.96889, "18:55 - Reina"],
    [39.67159, -3.97906, "Traslado en bus"],
    [39.67471, -3.99975, "20:45 - 1ª del Junco"],
    [39.67148, -3.97896, "Regreso en bus"],
    [39.67263, -3.97431, "21:30 - Regreso"],
];

// Map config
let config = {
    minZoom: 7,
    maxZoom: 18,
};
const zoom = 18;
const lat = 39.67194;
const lng = -3.97388;

// calling map
const map = L.map("map", config).setView([lat, lng], zoom);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);


const p28M = new L.FeatureGroup();
const p28T = new L.FeatureGroup();
const p2M = new L.FeatureGroup();
const p2T = new L.FeatureGroup();
const p3M = new L.FeatureGroup();
const p3T = new L.FeatureGroup();
const allMarkers = new L.FeatureGroup();

/*route = L.Routing.control({
    show: false,
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: true,
    waypoints: [
        L.latLng(39.67243, -3.97446, "06:00 - Recogida Cuatro de la Virgen"),
        L.latLng(39.67915, -3.97318, "06:30 - Recogida Bastón"),
        L.latLng(39.68055, -3.97650, "06:40 - Recogida Junco"),
        L.latLng(39.67902, -3.97405, "06:50 - Recogida Niño de la Bandera"),
        L.latLng(39.67920, -3.97325, "07:00 - Desayuno Bastón"),
        L.latLng(39.67263, -3.97431, "08:15 - Salida Oficial"),
        L.latLng(39.67693, -3.97068, "08:30 - Ermita del Cristo"),
        L.latLng(39.67801, -3.97556, "09:00 - Plaza Majuelo"),
        L.latLng(39.67924, -3.97824, "09:30 - Barrio del Cerrillo"),
        L.latLng(39.67632, -3.97357, "10:00 - Misa en la Iglesia Parroquial")
    ],
    createMarker: function (i, wp, nWps) {
        return L.marker(wp.latLng, { icon: goldIcon }).bindPopup(points28M[i][2]);
    },
});
route.addTo(map);*/

// adding markers to the layer points28M
for (let i = 0; i < points28M.length; i++) {
    marker = L.marker([points28M[i][0], points28M[i][1]], {
        icon: new L.Icon({
            iconUrl: 'https://marker.nanoka.fr/map_pin-2A81CB-FFF-3274A3-' + (i + 1) + '-40.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).bindPopup(points28M[i][2]);
    p28M.addLayer(marker);
}

for (let i = 0; i < points28M.length - 1; i++) {
    var pointA = new L.LatLng(points28M[i][0], points28M[i][1]);
    var pointB = new L.LatLng(points28M[i + 1][0], points28M[i + 1][1]);

    var firstpolyline = new L.Polyline([pointA, pointB], {
        color: '#3274A3',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    p28M.addLayer(firstpolyline);
}

// adding markers to the layer points28T
for (let i = 0; i < points28T.length; i++) {
    marker = L.marker([points28T[i][0], points28T[i][1]], {
        icon: new L.Icon({
            iconUrl: 'https://marker.nanoka.fr/map_pin-FFD326-FFF-C1A32D-' + (i + 1) + '-40.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).bindPopup(points28T[i][2]);
    p28T.addLayer(marker);
}

for (let i = 0; i < points28T.length - 1; i++) {
    var pointA = new L.LatLng(points28T[i][0], points28T[i][1]);
    var pointB = new L.LatLng(points28T[i + 1][0], points28T[i + 1][1]);

    var firstpolyline = new L.Polyline([pointA, pointB], {
        color: '#C1A32D',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    p28T.addLayer(firstpolyline);
}

// adding markers to the layer points2M
for (let i = 0; i < points2M.length; i++) {
    marker = L.marker([points2M[i][0], points2M[i][1]], {
        icon: new L.Icon({
            iconUrl: 'https://marker.nanoka.fr/map_pin-2AAD27-FFF-31882A-' + (i + 1) + '-40.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).bindPopup(points2M[i][2]);
    p2M.addLayer(marker);
}

for (let i = 0; i < points2M.length - 1; i++) {
    var pointA = new L.LatLng(points2M[i][0], points2M[i][1]);
    var pointB = new L.LatLng(points2M[i + 1][0], points2M[i + 1][1]);

    var firstpolyline = new L.Polyline([pointA, pointB], {
        color: '#31882A',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    p2M.addLayer(firstpolyline);
}

// adding markers to the layer points2T
for (let i = 0; i < points2T.length; i++) {
    marker = L.marker([points2T[i][0], points2T[i][1]], {
        icon: new L.Icon({
            iconUrl: 'https://marker.nanoka.fr/map_pin-CB2B3E-FFF-982E40-' + (i + 1) + '-40.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).bindPopup(points2T[i][2]);
    p2T.addLayer(marker);
}

for (let i = 0; i < points2T.length - 1; i++) {
    var pointA = new L.LatLng(points2T[i][0], points2T[i][1]);
    var pointB = new L.LatLng(points2T[i + 1][0], points2T[i + 1][1]);

    var firstpolyline = new L.Polyline([pointA, pointB], {
        color: '#982E40',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    p2T.addLayer(firstpolyline);
}

// adding markers to the layer points3M
for (let i = 0; i < points3M.length; i++) {
    marker = L.marker([points3M[i][0], points3M[i][1]], {
        icon: new L.Icon({
            iconUrl: 'https://marker.nanoka.fr/map_pin-9C2BCB-FFF-742E98-' + (i + 1) + '-40.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).bindPopup(points3M[i][2]);
    p3M.addLayer(marker);
}

for (let i = 0; i < points3M.length - 1; i++) {
    var pointA = new L.LatLng(points3M[i][0], points3M[i][1]);
    var pointB = new L.LatLng(points3M[i + 1][0], points3M[i + 1][1]);

    var firstpolyline = new L.Polyline([pointA, pointB], {
        color: '#742E98',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    p3M.addLayer(firstpolyline);
}

// adding markers to the layer points3T
for (let i = 0; i < points3T.length; i++) {
    marker = L.marker([points3T[i][0], points3T[i][1]], {
        icon: new L.Icon({
            iconUrl: 'https://marker.nanoka.fr/map_pin-7B7B7B-FFF-6B6B6B-' + (i + 1) + '-40.svg',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
        })
    }).bindPopup(points3T[i][2]);
    p3T.addLayer(marker);
}

for (let i = 0; i < points3T.length - 1; i++) {
    var pointA = new L.LatLng(points3T[i][0], points3T[i][1]);
    var pointB = new L.LatLng(points3T[i + 1][0], points3T[i + 1][1]);

    var firstpolyline = new L.Polyline([pointA, pointB], {
        color: '#6B6B6B',
        weight: 3,
        opacity: 0.5,
        smoothFactor: 1
    });
    p3T.addLayer(firstpolyline);
}

// object with layers
const overlayMaps = {
    "28/8 Mañana": p28M,
    "28/8 Tarde": p28T,
    "2/9 Mañana": p2M,
    "2/9 Tarde": p2T,
    "3/9 Mañana": p3M,
    "3/9 Tarde": p3T,
};

// centering a group of markers
map.on("layeradd layerremove", function () {
    // Create new empty bounds
    let bounds = new L.LatLngBounds();
    // Iterate the map's layers
    map.eachLayer(function (layer) {
        // Check if layer is a featuregroup
        if (layer instanceof L.FeatureGroup) {
            // Extend bounds with group's bounds
            bounds.extend(layer.getBounds());
        }
    });

    // Check if bounds are valid (could be empty)
    if (bounds.isValid()) {
        // Valid, fit bounds
        map.flyToBounds(bounds);
    } else {
        // Invalid, fit world
        // map.fitWorld();
    }
});

var layerControl = new L.control.layers(null, overlayMaps, { collapsed: false }).addTo(map);

var legend = document.querySelectorAll('.leaflet-control-layers-selector')
legend[0].parentElement.style.color = '#3274A3';
legend[1].parentElement.style.color = '#C1A32D';
legend[2].parentElement.style.color = '#31882A';
legend[3].parentElement.style.color = '#982E40';
legend[4].parentElement.style.color = '#742E98';
legend[5].parentElement.style.color = '#6B6B6B';