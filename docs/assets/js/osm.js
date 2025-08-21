// coordinate array with popup text
const points28M = [
    [39.680147, -3.983713, "06:30 - Recogida 1ª, 2ª, 3ª y 4ª de la Virgen"],  // C/ Viena, 5
    [39.675614, -3.977083, "06:45 - Recogida Bastón"],  // Pasaje Maestro Ceferino Ruiz, 9
    [39.678187, -3.976823, "06:50 - Recogida Junco"],  // C/ Ramón y Cajal, 60
    [39.675726, -3.982308, "07:00 - Recogida Niño de la Bandera y Ayudante"],  // C/ S. Ignacio, 1
    [39.678100, -3.976807, "07:15 - Desayuno Junco"],  // C/ Ramón y Cajal, 60
    [39.672289, -3.973722, "08:20 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.67693, -3.97068, "08:30 - Ermita del Cristo"],
    [39.67801, -3.97556, "09:00 - Plaza Majuelo"],
    [39.67924, -3.97824, "09:25 - Plazuela del Cerrillo"],
    [39.67632, -3.97357, "10:00 - Misa en la Iglesia Parroquial"],
    [39.67858, -3.97097, "11:15 - Ermita de la Virgen"],
    [39.67747, -3.97244, "11:45 - Casa Parroquial"],
    [39.67552, -3.97546, "12:10 - Plaza Juan Carlos I"],
    [39.67723, -3.97068, "12:30 - Casa de la Alcaldesa"],  // Avda. Fray Gabriel de la Magdalena, 15
    [39.67754, -3.98055, "13:45 - Casa del Administrador"],  // C/ Belén, 14
    [39.67269, -3.97425, "15:15 - Regreso"],
];

const points28T = [
    [39.672289, -3.973722, "17:30 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.67577, -3.97894, "17:40 - Plaza Malpica"],
    [39.67602, -3.99056, "18:10 - Residencia de Mayores"],  // Av. de los Olmos, 44
    [39.67316, -3.98299, "19:00 - Cementerio"],
    [39.67184, -3.97892, "19:30 - Plaza del Oteruelo"],
    [39.672111, -3.978840, "19:45 - Vivienda de Mayores"],  // Plaza del Oteruelo, 15
    [39.67430, -3.97217, "19:55 - Plaza del Pozobueno"],
    [39.67654, -3.96836, "20:15 - Glorieta de Jesús Nazareno"],
    [39.685905, -3.975361, "20:50 - Cuarta de la Virgen"],  // Avda. Río Algodor, 15
    [39.672289, -3.973722, "22:45 - Regreso"],  // C/ S. Pedro de la Mata, 8
];

const pointsFinde1M = [
    [39.679737, -3.966776, "08:00 - Recogida 1ª, 2ª, 3ª y 4ª de la Virgen"],  // C/ Greco, 10
    [39.675614, -3.977083, "08:20 - Recogida Bastón"],  // Pasaje Maestro Ceferino Ruiz, 9
    [39.678187, -3.976823, "08:25 - Recogida Junco"],  // C/ Ramón y Cajal, 60
    [39.675726, -3.982308, "08:35 - Recogida Niño de la Bandera y Ayudante"],  // C/ S. Ignacio, 1
    [39.675614, -3.977083, "08:50 - Desayuno Bastón"],  // Pasaje Maestro Ceferino Ruiz, 9
    [39.672289, -3.973722, "10:00 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.67693, -3.97068, "10:10 - Ermita del Cristo"],
    [39.67858, -3.97097, "10:30 - Ermita de la Virgen"],
    [39.67801, -3.97556, "10:50 - Plaza Majuelo"],
    [39.675614, -3.977083, "11:00 - Bastón"],  // Pasaje Maestro Ceferino Ruiz, 9
    [39.676883, -3.988106, "12:45 - Subayudante"],  // C/ Caléndula, 34
    [39.672289, -3.973722, "14:35 - Recogida"],  // C/ S. Pedro de la Mata, 8
];

const pointsFinde1T = [
    [39.672289, -3.973722, "17:15 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.679221, -3.981766, "17:30 - 1ª Dama"],  // C/ Nazaret, 4
    [39.678156, -3.981871, "19:10 - 2ª del Junco"],  // C/ Santa Rosa de Lima, 9
    [39.676690, -3.982214, "20:45 - Labradora"],  // C/ San Miguel, 14
    [39.672289, -3.973722, "22:30 - Regreso"],  // C/ S. Pedro de la Mata, 8
];

const pointsFinde2M = [
    [39.675162, -3.972234, "06:30 - Recogida 1ª, 2ª, 3ª y 4ª de la Virgen"],  // C/ Don César Pérez, 16
    [39.675614, -3.977083, "06:45 - Recogida Bastón"],  // Pasaje Maestro Ceferino Ruiz, 9
    [39.678187, -3.976823, "06:50 - Recogida Junco"],  // C/ Ramón y Cajal, 60
    [39.675726, -3.982308, "07:00 - Recogida Niño de la Bandera y Ayudante"],  // C/ S. Ignacio, 1
    [39.675614, -3.977083, "07:10 - Desayuno Bastón"],  // Pasaje Maestro Ceferino Ruiz, 9
    [39.672289, -3.973722, "08:30 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.67693, -3.97068, "08:40 - Ermita del Cristo"],
    [39.67858, -3.97097, "09:00 - Ermita de la Virgen"],
    [39.67801, -3.97556, "09:30 - Plaza Majuelo"],
    [39.679809, -3.984593, "10:00 - Arriera"],  // C/ Viena, 23
    [39.67632, -3.97357, "12:00 - Misa en la Iglesia Parroquial"],  // C/ Pedro de Heredia, 7
    [39.675726, -3.982308, "13:20 - Niño de la Bandera"],  // C/ S. Ignacio, 1
    [39.672289, -3.973722, "15:15 - Regreso"],  // C/ S. Pedro de la Mata, 8
];

const pointsFinde2T = [
    [39.672289, -3.973722, "18:40 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.676242, -3.971861, "18:50 - Panadera"],  // C/ Mora, 7
    [39.678187, -3.976823, "10:20 - Junco"],  // C/ Ramón y Cajal, 60
    [39.672289, -3.973722, "22:10 - Regreso"],  // C/ S. Pedro de la Mata, 8
];

const pointsFinde3M = [
    [39.685927, -3.975366, "07:15 - Recogida 1ª, 2ª, 3ª y 4ª de la Virgen"],  // Avda. Río Algodor, 15
    [39.675614, -3.977083, "07:35 - Recogida Bastón"],  // Pasaje Maestro Ceferino Ruiz, 9
    [39.678187, -3.976823, "07:45 - Recogida Junco"],  // C/ Ramón y Cajal, 60
    [39.675726, -3.982308, "07:55 - Recogida Niño de la Bandera y Ayudante"],  // C/ S. Ignacio, 1
    [39.678100, -3.976807, "08:15 - Desayuno Junco"],  // C/ Ramón y Cajal, 60
    [39.672289, -3.973722, "09:20 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.67693, -3.97068, "09:30 - Ermita del Cristo"],
    [39.67858, -3.97097, "09:50 - Ermita de la Virgen"],
    [39.67801, -3.97556, "10:10 - Plaza Majuelo"],
    [39.670950, -3.973379, "10:30 - 2ª Dama"],  // C/ Mirasierra, 25
    [39.675193, -3.972526, "12:10 - 3ª de la Virgen"],  // C/ Orgaz, 17
    [39.679916, -3.983882, "14:00 - Reina"],  // C/ Belgrado, 14
    [39.672289, -3.973722, "15:50 - Regreso"],  // C/ S. Pedro de la Mata, 8
];

const points7 = [
    [39.672289, -3.973722, "17:20 - Salida Oficial"],  // C/ S. Pedro de la Mata, 8
    [39.67579, -3.97511, "17:35 - Recogida de Autoridades"],
    [39.67747, -3.97244, "17:45 - Recogida de Patronato"],
    [39.67853, -3.97123, "18:00 - Eucaristía con Vísperas"],
    [39.672289, -3.973722, "19:30 - Alférez"],  // C/ S. Pedro de la Mata, 8
    [39.67790, -3.96973, "21:30 - Pregón"],
    [39.67858, -3.97094, "23:30 - Salve"],
    [39.68151, -3.97019, "00:00 - Pólvora"],
    [39.672289, -3.973722, "01:00 - Regreso"],  // C/ S. Pedro de la Mata, 8
];

const points8 = [
    [39.67659, -3.97452, "08:30 - Salida con Banda de Música"],  // C/ Toledo, 7
    [39.675726, -3.982308, "08:45 - Desayuno y Baile Niño de la Bandera"],  // C/ S. Ignacio, 1
    [39.672289, -3.973722, "10:00 - Salida Oficial con Banda de Música"], // C/ S. Pedro de la Mata, 8
    [39.67579, -3.97511, "10:10 - Recogida de Autoridades"],
    [39.67747, -3.97244, "10:15 - Recogida de Patronato"],
    [39.67853, -3.97123, "10:30 - Eucaristía"],
    [39.67575, -3.97518, "11:40 - Recepción popular"],
    [39.67847, -3.97133, "12:30 - Ofrecimiento"],
    [39.67858, -3.97094, "20:30 - Rosario y Procesión"],
];

const pointsOctM = [
    [39.67658, -3.97453, "10:10 - Salida con Banda de Música"],  // C/ Toledo, 7
    [39.675726, -3.982308, "10:20 - Desayuno Niño de la Bandera"],  // C/ S. Ignacio, 1
    [39.672289, -3.973722, "11:30 - Salida Oficial"], // C/ S. Pedro de la Mata, 8
    [39.67579, -3.97511, "11:40 - Recogida de Autoridades"],
    [39.67747, -3.97244, "11:45 - Recogida de Patronato"],
    [39.67853, -3.97123, "12:00 - Eucaristía"],
    [39.67860, -3.97082, "13:00 - Rifa del grano"],
];

const pointsOctT = [
    [39.67858, -3.97094, "19:30 - Novena y Procesión"],
    // [39.67842, -3.97081, "22:00 - Cambio de alabardas"],
    [39.67847, -3.97110, "22:30 - Rifa de la bandera"],
    [39.67835, -3.97114, "23:30 - Bailes de bandera de antiguos Alféreces"],
    [39.67858, -3.97055, "00:00 - Traca final de Feria"],
    [39.67853, -3.97058, "00:15 - Nuevo Niño de la bandera"],
    [39.672289, -3.973722, "01:30 - Regreso"],  // C/ S. Pedro de la Mata, 8
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
const pFinde1M = new L.FeatureGroup();
const pFinde1T = new L.FeatureGroup();
const pFinde2M = new L.FeatureGroup();
const pFinde2T = new L.FeatureGroup();
const pFinde3M = new L.FeatureGroup();
const p7 = new L.FeatureGroup();
const p8 = new L.FeatureGroup();
const pOctM = new L.FeatureGroup();
const pOctT = new L.FeatureGroup();

// adding markers to the layer points28M
create_group(points28M, p28M, '05519E', '03366B', 'FFF')

// adding markers to the layer points28T
create_group(points28T, p28T, 'FFD326', 'C1A32D', 'FFF')

// adding markers to the layer pointsFinde1M
create_group(pointsFinde1M, pFinde1M, '23B721', '146A13', 'FFF')

// adding markers to the layer pointsFinde1T
create_group(pointsFinde1T, pFinde1T, 'CB2B3E', '982E40', 'FFF')

// adding markers to the layer pointsFinde2M
create_group(pointsFinde2M, pFinde2M, '9C2BCB', '742E98', 'FFF')

// adding markers to the layer pointsFinde2T
create_group(pointsFinde2T, pFinde2T, '7B7B7B', '6B6B6B', 'FFF')

// adding markers to the layer pointsFinde3M
create_group(pointsFinde3M, pFinde3M, 'F0EEAC', 'D9CF91', '000')

// adding markers to the layer points7
create_group(points7, p7, 'FFFFFF', '000', '000')

// adding markers to the layer points8
create_group(points8, p8, '00BCD4', '007887', 'FFF')

// adding markers to the layer pointsOctM
create_group(pointsOctM, pOctM, 'C26224', '753B15', 'FFF')

// adding markers to the layer pointsOctT
create_group(pointsOctT, pOctT, 'f9191A', 'AC1112', 'FFF')

// object with layers
const overlayMaps = {
    "28/8 Ma\u00F1ana": p28M,
    "28/8 Tarde": p28T,
    "30/8 Ma\u00F1ana": pFinde1M,
    "30/8 Tarde": pFinde1T,
    "31/8 Ma\u00F1ana": pFinde2M,
    "31/8 Tarde": pFinde2T,
    "6/9 Ma\u00F1ana": pFinde3M,
    "7/9 Tarde": p7,
    "8/9 Ma\u00F1ana": p8,
    "15/9 Ma\u00F1ana": pOctM,
    "15/9 Tarde": pOctT,
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
legend[0].parentElement.style.color = '#05519E';
legend[1].parentElement.style.color = '#C1A32D';
legend[2].parentElement.style.color = '#23B721';
legend[3].parentElement.style.color = '#CB2B3E';
legend[4].parentElement.style.color = '#742E98';
legend[5].parentElement.style.color = '#6B6B6B';
legend[6].parentElement.style.color = '#D9CF91';
legend[7].parentElement.style.color = '#000000';
legend[8].parentElement.style.color = '#007887';
legend[9].parentElement.style.color = '#C26224';
legend[10].parentElement.style.color = '#AC1112';

function create_group(array, group, background, line, text) {
    for (let i = 0; i < array.length; i++) {
        // URL de Google Maps con las coordenadas
        const googleMapsUrl = `https://www.google.com/maps?q=${array[i][0]},${array[i][1]}`;

        // Texto del enlace con el icono de enlace
        const linkHtml = `<br><a href="${googleMapsUrl}" target="_blank" style="color: #0078ff;">&#128279; Ir</a>`;

        // Popup con el texto original más el enlace a Google Maps
        marker = L.marker([array[i][0], array[i][1]], {
            icon: new L.Icon({
                iconUrl: `https://marker.nanoka.fr/map_pin-${background}-${text}-${line}-${(i + 1)}-40.svg`,
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            })
        }).bindPopup(array[i][2] + linkHtml);

        group.addLayer(marker);
    }

    for (let i = 0; i < array.length - 1; i++) {
        var pointA = new L.LatLng(array[i][0], array[i][1]);
        var pointB = new L.LatLng(array[i + 1][0], array[i + 1][1]);

        var firstpolyline = new L.Polyline([pointA, pointB], {
            color: `#${line}`,
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        group.addLayer(firstpolyline);
    }
}