(function(document) {
  'use strict';

  document.addEventListener('polymer-ready', function() {

  	var connector = document.querySelector('th-connector');
  	setTimeout(function() {
  		var url = document.querySelector('#url');
	  		if(url && !url.value) {
	  			url.value = 'http://sepans.com/misc/test.csv';
			  	if(connector) {
			  		var stacked = document.querySelector('th-stacked-chart');
			  		var csv = document.querySelector('th-csv');
			  		console.log(csv);
			  		if(stacked && csv) {
			  			connector.connectElements(csv,'chartDataOutput', stacked, 'chartData');
			  		}
				}
		  }
  	},12000)
  });

})(wrap(document));
