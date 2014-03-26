

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
	var customWords = $(".customwords"); 
	var addanother =$("#addanother");
	
	
	$("#addanother").on("click", function() {
	
	console.log("hey")
	
	customWords.append(customWords.find(".adv-form-group").first().clone()); 

	return false;
		
	});
	
});





$(function(){ 
	var answerlink = $("a.show-answer"); 
	var answer = $("#answer1"); 

	answer.hide(); 
	answerlink.on("click", function() {
	
	answerlink.hide();
	answer.show();	


		
	return false;

	});

});





$(function(){ 
	var shortlistadd = $("#shortlist-add");
	var shortlistpicker = $(".shortlist-picker"); 
	var shortlistclose = $("#shortlist-close");
	var addtoproj = $(".add-to-proj");

	shortlistpicker.hide(); 
	shortlistadd.on("click", function() {
	
	shortlistpicker.show();	
	addtoproj.hide();
	
	});
	
	shortlistclose.on("click", function() {
	$(".shortlist-picker").hide();
	$(".add-to-proj").show();
	
	return false;

	});

});



$(function(){ 
	var changeproj = $("#changeproj");
	var projectpicker = $(".project-picker");
	var projectclose = $("#project-close"); 
	var addtoproj = $(".add-to-proj");


	projectpicker.hide(); 
	changeproj.on("click", function() {

	projectpicker.show();
	addtoproj.hide();	
	
	});
	
	projectclose.on("click", function() {
	$(".project-picker").hide();
	$(".add-to-proj").show();
	
	return false;

	});

});



