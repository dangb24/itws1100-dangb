//this file reads in the projects json file and creates a dynamic menu of the labs
$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'projects.json',
		dataType: 'json',
		success: function(responseData, status){
		 var output = '';  
		 $.each(responseData.item, function(i, item) {
		   output += '<h3>' + item.title + '</h3>';
		   output += '<div> <p> <a href = "' + item.link + '">' + item.description + '</a></p> </div>';
	  });
	$( function() { //this function creates an accordion menu that hides and displays a description and link to a lab
		$( "#labs" ).accordion({
			collapsible: true,
		});
	});
	$('#labs').html(output);
	}, error: function(msg) { // there was a problem
	  alert('There was a problem: ' + msg.status + ' ' + msg.statusText);
	}
  	});	
});

  