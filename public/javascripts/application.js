

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



// Hide q form, display when button is pressed // 


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



// Supplier answer form 




$(function(){ 
	var questionform2 = $(".questionform2"); 
	var answerq = $("#answerq"); 
	var submitans = $("#submitans"); 

	questionform2.hide();

	$("#answerq").on("click", function() {
		questionform2.show()
		answerq.hide();
	});
	
});




// On pressing submit, give feedback the question is sent // 



$(function(){ 
	var questionform = $(".questionform"); 
	var submitquestion = $("#submitquestion"); 
	var qfeedback = $(".qfeedback"); 
	var feedbackclose = $("#feedbackclose"); 
	
	qfeedback.hide(); 

	$("#submitquestion").on("click", function() {
		questionform.hide()
		qfeedback.fadeIn(200);

	});


	$("#feedbackclose").on("click", function() {
		$(".qfeedback").hide();

		return false;

	});
	

});






// Show extra questions // 


$(function(){ 
	var extraquestions = $("#extraquestions"); 
	var viewextraqs = $("#viewextraqs"); 

	extraquestions.hide(); 


	$("#viewextraqs").on("click", function() {
		extraquestions.show()
		viewextraqs.hide();

		
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


// Show answer 1 // 


$(function(){ 
	var answerlink = $("a.show-answer1"); 
	var answer = $("#answer1"); 

	answer.hide(); 
	answerlink.on("click", function() {
	
	answerlink.hide();
	answer.show();	

	return false;

	});

});


// Show answer 2 // 

$(function(){ 
	var answerlink2 = $("a.show-answer2"); 
	var answer2 = $("#answer2"); 

	answer2.hide(); 
	answerlink2.on("click", function() {
	
	answerlink2.hide();
	answer2.show();	

	return false;

	});

});


// Choose a shortlist // 


$(function(){ 
	var shortlistadd = $("#shortlist-add");
	var shortlistpicker = $(".shortlist-picker"); 
	var shortlistclose = $("#shortlist-close");
	var addtoproj = $(".add-to-proj");
	var shortlistcms = $("#shortlist-cms");
	var onshortlist = $(".on-shortlist");

	shortlistpicker.hide(); 
	onshortlist.hide(); 
	
	shortlistadd.on("click", function() {
	
	shortlistpicker.show();	
	addtoproj.hide();
	
	});
	
	
	shortlistclose.on("click", function() {
	$(".shortlist-picker").hide();
	$(".add-to-proj").show();
	
	
	}); 
	
	shortlistcms.on("click", function() { 
	$(".shortlist-picker").hide();
	console.log('HEY');
	addtoproj.hide();
	onshortlist.show();

	return false;

	});

});


$(function(){ 
	$("#btnon").on("click",function(){window.location="add-project-with-compare.html";});
	console.log('am i working');
});

// Change project // 



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
