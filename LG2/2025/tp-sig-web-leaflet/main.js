const map = L.map('map').setView([0, 0], 2);

L.tileLayer(
	'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
	{
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	},
).addTo(map);


function createMarker(latlng) {

	const marker = L.marker(
		latlng,
		{
			draggable: 'true',
		},
	);

	marker.on('click', function (event) {

		if (event.originalEvent.altKey) {

			geojson.removeLayer(marker);

		}

	});

	return marker;

}

let geojson;

fetch('http://localhost:8080/data.geojson')
.then((binResult) => { return binResult.json() })
.then((result) => {

	geojson = L.geoJSON(
		result,
		{
			pointToLayer: function (features, latlng) {

				return createMarker(latlng);

			}
		},
	);

	geojson.addTo(map);

});


map.addEventListener('click', function (event) {

	if (event.originalEvent.ctrlKey) {

		createMarker(event.latlng).addTo(geojson);

	}

});

