	var map; 

	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});  // function define initMap .

	}

$(document).ready(function() {

	$.getJSON("topspots.JSON", function(result) { // $.getJSON pulls data from topspots.json and turns it into a object called result.
		$(result.topspots).each(function(i,subject) { // $ to select the parent topspots and select everything within topspots and create teh values inside into i and subject.

			$("table").append($("<tr><td>" + subject.name + "</td><td>" + subject.description + "</td><td>" + "<a href=https://www.google.com/maps?q=" + subject.location[0] + ',' + subject.location[1] + "><button type=button class='btn btn-primary'>Open in Google Maps</button>" + "</td></tr>")); 

		}); // concatination to select my table selector in HTML and append the second values into table row and table data called out. 
			// anchor element to create a button to call on google maps and load the lat and lng of each location using JSON.
	});

});
