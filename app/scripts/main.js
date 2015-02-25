/* global Slider  */

$(document).ready(function() {
	'use strict';

	$('#nav').affix({
	      offset: {
	        top: $('header').height()-$('#nav').height()
	      }
	});

	(function() {
		var mySlider;
		mySlider = new Slider('#ex13', {
			ticks: [0, 100, 200, 300, 400, 500],
			/* jshint camelcase: false */
			ticks_labels: ['2mm', '5mm', '10mm', '20mm', '30mm', '50mm'],
			ticks_snap_bounds: 30
			/* jshint camelcase: true */
		});
	}());

	// $('#ex13').bootstrapSlider({
	//     ticks: [0, 100, 200, 300, 400],
	//     ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
	//     ticks_snap_bounds: 30
	// });

});
