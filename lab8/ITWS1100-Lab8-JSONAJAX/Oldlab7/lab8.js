//this file reads in the projects json file and creates a dynamic menu of the labs

$(document).ready(function() {
  
  	$.ajax({
   	 	type: "GET",
   	 	url: "projects.json",
   	 	dataType: "json",
   	 	success: function(responseData, status){
   	  	var output = "<ul>";  
    	 	$.each(responseData.items, function(i, item) {
       		output += '<li>' + menuItem.title;
			output += '<a href="' + menuItem.link + '" target="_blank"> </a>'; 
			output += '<p>' + menuItem.description + '<p>';
        	output += '</li>';
      	});
      	output += "</ul>";
      	$('#projects').html(output);
    	}, error: function(msg) {
      				// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
  	});
});

