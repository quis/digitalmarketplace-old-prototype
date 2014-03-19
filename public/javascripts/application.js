

// generic code


$("a.expander").closest('.fakeaccordion').next('.features').hide();
$("a.expander").text("Expand");

$("a.expander").on( "click", function() {
	var expander = $(this);
	var table = expander.closest('.fakeaccordion').next('.features');
	
	if (expander.text() == 'Close') {
		// table is showing
		expander.text("Expand");
		table.hide();
	}
	else {
		// table is hidden
		expander.text("Close");
		table.show();
	}
	return false;
});


// hide advanced searchbox 





$(function(){ 
	var advancedsearch = $(".advancedsearch"); 

	advancedsearch.hide(); 


	$("a.advsearch").on("click", function() {
		advancedsearch.show()
	});


	$("#advclose").on("click", function() {
		advancedsearch.hide();
		console.log('hide meeee');
	});

});



$(function(){ 
	var questionform = $(".questionform"); 

	questionform.hide(); 


	$("#askquestion").on("click", function() {
		questionform.show()
	});


	$("#questionclose").on("click", function() {
		questionform.hide();
		
		return false;

	});
	

});
	
	

$(function(){ 
	var customwords = $(".customwords"); 
	var addanother =$("#addanother");
	
	
	$("#addanother").on("click", function() {
	
	console.log("hey")
	
	customwords.append("<input type='text' class='adv-form-group' />"); 

	return false;
		
	});
	
});
