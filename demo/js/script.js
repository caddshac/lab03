var map = L.map('map').setView([35, -95], 4);

var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
				attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

		}).addTo(map);

var precipitation = L.tileLayer.wms("http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi", {
		    layers: 'nexrad-n0r-900913',
		    format: 'image/png',
		    transparent: true,
		    attribution: "Weather data © 2012 IEM Nexrad"
		}).addTo(map);


var tornadowarnings = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/wwa_meteoceanhydro_shortduration_hazards_watches_time/MapServer/WMSServer", {
				layers: '2',
				format: 'image/png',
				transparent: true,
				attribution: "NOAA Watches"
		}).addTo(map);


var relativehumidity = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_relhumidity_offsets/MapServer/WMSServer", {
				layers: '1',
				format: 'image/png',
				transparent: true,
				attribution: "NOAA Relative Humidity",
				opacity: 0.25
		}).addTo(map);


// Create an object with Layers for each basemap
var baseLayers = {
				    "Streets": streets
				};

var overlays = {
				    "Precipitation": precipitation,
				    "Tornado Warnings": tornadowarnings,
						"Relative Humidity": relativehumidity
				};

L.control.layers(baseLayers, overlays).addTo(map);
