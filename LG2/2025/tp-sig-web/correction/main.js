// ----------- ADD POINTS ------------------------------------------------------

/*
 * Add a point to the view, given its screen coordinates
 *
 * @param {Object} screenCoordinates - An object storing screen space
 * coordinates of the point.
 * @param {Number} screenCoordinates.x - The screen space coorinate of the point
 * along side the horizontal axis.
 * @param {Number} screenCoordinates.y - The screen space coorinate of the point
 * along side the vertical axis.
 */
function addPoint(screenCoordinates) {

	const { x, y } = screenCoordinates;

	const point = document.createElement('div');
	point.setAttribute('class', 'point');

	movePoint(
		point,
		{
			movementX: x - 5,
			movementY: y - 5,
		},
	);

	document.body.appendChild(point);

}



// ----------- REMOVE POINTS ---------------------------------------------------

/*
 * Remove a given point from the view.
 *
 * @param {Object} point - The point to remove, given as an HTML element.
 */
function removePoint(point) {

	point.remove();

}



// ---------- MOVE POINTS ------------------------------------------------------

/*
 * Translate a point's position within the view.
 *
 * @param {Object} point - The point to move, given as an HTML element.
 * @param {Object} movement - The translation to apply to the point.
 * @param {Object} movement.movementX - The translation along side the view
 * space horizontal axis.
 * @param {Object} movement.movementY - The translation along side the view
 * space vertical axis.
 */
function movePoint(point, movement) {

	topInPixel = point.offsetTop + movement.movementY;
	leftInPixel = point.offsetLeft + movement.movementX;

	topInPercent = 100 * topInPixel / document.body.offsetHeight;
	leftInPercent = 100 * leftInPixel / document.body.offsetWidth;

	point.style.top = topInPercent + '%';
	point.style.left = leftInPercent + '%';

}



// ---------- EVENT LISTENERS --------------------------------------------------


// Mouse left button click

/*
 * What to do when user clicks on the map.
 *
 * @param {Event} event - The default browser click event. You can read its
 * properties with a `console.log(event)` in the function.
 */
function onClick(event) {

	if (event.ctrlKey) {

		const screenCoordinates = {
			x: event.clientX,
			y: event.clientY,
		};
		addPoint(screenCoordinates);

	} else if (
		event.altKey
		&& event.target.classList.contains('point')
	) {

		event.target.remove();

	}

}

document.body.addEventListener('click', onClick);


// Mouse right button click

let pointMovingFunction;

/*
 * What to do when user right clicks on the map.
 *
 * @param {Event} event - The default browser right click event. You can read
 * its properties with a `console.log(event)` in the function.
 */
function onRightClick(event) {

	event.preventDefault();

	if (event.target.classList.contains('point')) {

		const point = event.target;
		pointMovingFunction = function (event) {
			movePoint(point, event);
		};
		window.addEventListener('mousemove', pointMovingFunction);

	}

}

document.body.addEventListener('contextmenu', onRightClick);


// Mouse button release

document.body.addEventListener('mouseup', function () {

	window.removeEventListener('mousemove', pointMovingFunction);

});



// ---------- CONVERT COORDINATES ----------------------------------------------

/*
 * An object storing methods to convert WGS84 coordinates into screen
 * coordinates and the opposite.
 */
const conversion = {

	wgs84ToScreen: function (wgs84Coordinates) {

		const longitude = wgs84Coordinates.x;
		const latitude = wgs84Coordinates.y;

		const screenWidth = document.body.offsetWidth;
		const screenHeight = document.body.offsetHeight;

		const screenX = screenWidth * (longitude + 180) / 360;
		const screenY = screenHeight * (1 - (latitude + 90) / 180);

		return {
			x: screenX,
			y: screenY,
		};
	},

	screenToWgs84: function (screenCoordinates) {

		const screenX = screenCoordinates.x;
		const screenY = screenCoordinates.y;

		const screenWidth = document.body.offsetWidth;
		const screenHeight = document.body.offsetHeight;

		const longitude = 360 * screenX / screenWidth - 180;
		const latitude = 180 * (1 - screenY / screenHeight) - 90;

		return {
			x: longitude,
			y: latitude,
		};

	},

}



// ---------- FUNCTION TO LOAD DATA --------------------------------------------

/*
 * Load a GeoJSON file given its URL and display the points it contains on the
 * map.
 *
 * @param {String} url - The URL of the GeoJSON file to load
 */
function loadFile(url) {

	fetch(url)
	.then(function (binaryResult) {

		return binaryResult.json();

	})
	.then(function (jsonResult) {

		jsonResult.features.forEach(function (feature) {

			const worldCoordinates = {
				x: feature.geometry.coordinates[0],
				y: feature.geometry.coordinates[1],
			}

			const screenCoordinates = conversion.wgs84ToScreen(
				worldCoordinates,
			);

			addPoint(screenCoordinates);

		});

	});
}


// ---------- DATA URL FORM ----------------------------------------------------

const form = document.getElementById('data-form');

form.addEventListener('submit', function (event) {

	// Prevent default form validation (which reloads the page
	event.preventDefault();

	// Retreive what was typed in the form
	const formData = new FormData(form);
	const url = formData.get('data-url');

	// Load the GeoJSON at the requested URL
	loadFile(url);

});



// ---------- EXPORT DATA ------------------------------------------------------

/*
 * Downloads some data within a file.
 *
 * @param {String} content - The content of the file to download
 * @param {String} fileName - The name of the file to download
 */
function download(content, fileName) {

	const a = document.createElement('a');
	const file = new Blob([content], {type: 'text/plain'});
	a.href = URL.createObjectURL(file);
	a.download = fileName;
	a.click();

}


/*
 * Export all data displayed on the map within a geojson file, named
 * output.geojson.
 */
function exportData() {

	const exportJson = {
		type: "FeatureCollection",
		features: [],
	};

	const points = document.getElementsByClassName('point');

	for (point of points) {

		const screenCoordinates = {
			x: point.offsetLeft+ 5,
			y: point.offsetTop + 5,
		};
		const worldCoordinates = conversion.screenToWgs84(
			screenCoordinates,
		);

		exportJson.features.push({
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [worldCoordinates.x, worldCoordinates.y],
			},
			properties: {},
		});

	}

	download(JSON.stringify(exportJson), 'output.geojson');

}


// Export data when clicking the export button

const exportButton = document.getElementById('export-button');

exportButton.addEventListener('click', function () {

	exportData();

});
