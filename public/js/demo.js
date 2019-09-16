
$(() => {

	var meta = {
		columns: [
			{
				id: "bcsrgrp",
				label: "Crime",
				dimenion: true
			},
			{
				id: "incyear",
				label: "Incident Yr",
				dimenion: true
			},
			{
				id: "incmonth",
				label: "Incident Month",
				dimenion: true
			},
			{
				id: "bcsrgclat",
				label: "Geo Lat",
				geo: "lat"
			},
			{
				id: "bcsrgclng",
				label: "Geo Lon",
				geo: "lon"
			},
			{
				id: "locsurb",
				label: "Suburb",
				dimenion: true
			},
			{
				id: "poi_age",
				label: "Age",
				measure: true
			},
			{
				id: "poi_sex",
				label: "Gender",
				dimension: true
			}
		]

	}
	console.log("qb-demo: %o -> %o", qbd, meta);

	new qbd({
		debug: false,
		qbd: [
			{
				"el": "#qb-container",
				"url": "/data/nsw_gov_crime_poi.json",
				"colors": "orange",
				"charts": [{
					"disabled": false,
					"width": 330,
					"height": 600,
					"header": "Incidents by Suburb",
					"type": "row",
					"showControls": false,
					"renderHorizontalGridLines": false,
					"renderVerticalGridLines": false,
					"valueAccessor": "count",
					"measure": "poi_age",
					"dimension": "locsurb"
				}, {
					"debug": true,
					"width": 200,
					"height": 200,
					"header": "Incident Type",
					"type": "row",
					"gap": 5,
					"renderLabel": true,
					"valueAccessor": "count",
					"measure": "poi_age",
					"dimension": "bcsrgrp"
				},
				{
					"disabled": false,
					"width": 200,
					"height": 200,
					"header": "POI Gender",
					"type": "donut",
					"valueAccessor": "count",
					"measure": "poisex",
					"labels": {
						"M": "Male",
						"F": "Female",
						"": "Unknown"
					},
					"dimension": "poisex"
				},
				{
					"el": "#count_summary",
					"disabled": false,
					"width": 800,
					"height": 400,
					"header": "Fact",
					"type": "count",
					"measure": "poi_age",
					"dimension": "incyear"
				},
				{
					"width": 350,
					"height": 200,
					"header": "Incidents by Year",
					"type": "row",
					"gap": 5,
					"margins": {
						"left": 50
					},
					"valueAccessor": "count",
					"measure": "poi_age",
					"dimension": "incyear"
				},
				{
					"disabled": false,
					"width": 760,
					"height": 350,
					"header": "Monthly Incidents",
					"type": "bar",
					"ordinal": true,
					"margins": {
						"left": 60
					},
					"y": {
						"label": "Number of incidents"
					},
					"valueAccessor": "count",
					"measure": "poisex",
					"dimension": "incmonth"
				},
				{
					"disabled": true,
					"width": 200,
					"height": 200,
					"header": "Price",
					"type": "row",
					"valueAccessor": "average",
					"measure": "locsurb",
					"dimension": "bcsrgrp"
				}
				]
			}]
	});

})();