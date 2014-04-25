

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



// New search builder // 


$(function(){ 
	var lotsaas = $("#lot-saas"); 
	var lotcategories = $("#lot-categories"); 
	
	lotcategories.hide(); 
	
	lotsaas.on("click", function() {
		
	$(this).find(".lot").addClass("lot-selected");
	$("#lot-categories").show()
	

	return false; 
	
	});
	
});


// selecting stuff // 


$(function(){ 
	var lot = $("#lot-categories .lot"); 


	
});


// reducing number //
$(function(){ 

	$(".lot")
	 .on("click", function(event){
	 
		 event.preventDefault();
	
	   var selectedLots = $(".lot-selected").length;
	   
		if ($(this).parents("#lot-categories").length) {
	
			$(this).toggleClass("lot-selected");
	
		   $("#counter").text(
		     parseInt(
			     ((Math.random() * 50) + 150) * (selectedLots + 1)
		     )
		   );
	   
	   } else {
	console.log(selectedLots)
		   $("#counter").text(
		     1830
		   );
	   
	   }
	   
	   
	
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



// show inline login form 


$(function(){ 
	var showlogin = $("#showlogin"); 
	var loginform1 = $("#loginform1"); 

	loginform1.hide();

	$("#showlogin").on("click", function() {
		loginform1.show()
		
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



// Saved search // 

$(function(){ 
	var savesearch = $("#savesearch"); 
	var savedsearch = $(".savedsearch"); 


	savedsearch.hide();

	$("#savesearch").on("click", function() {
		savedsearch.show()
		savesearch.hide();


		
		return false;
	});
	
});


// Saved search not logged in // 

$(function(){ 
	var savesearch1 = $("#savesearch1"); 
	var savedsearchlogin = $("#savedsearchlogin"); 

	savedsearchlogin.hide();

	savesearch1.on("click", function() {
	savedsearchlogin.show()
		
		return false;
	});
	
});






// show shortlist menu // 

$(function(){ 
	var addresults = $("#addresults"); 
	var shortlistholder = $("#shortlist-holder"); 
	var cancelshortlist = $("#cancelshortlist"); 


	shortlistholder.hide();

	$("#addresults").on("click", function() {
		shortlistholder.show()
		
		return false;
		
	});


	$("#cancelshortlist").on("click", function() {
	$("#shortlist-holder").hide();
		
		return false;


	});
	

});


// Pick a price unit // 

$(function(){ 
	var unitpickerbutton = $("#unitpickerbutton"); 
	var unitpickerm = $("#unitpickerm"); 

	unitpickerm.hide();

	$("#unitpickerbutton").on("click", function() {
	
	$("#unitpickerm").show();		
	
		return false;
	});
	
});






// Watchlist feedback // 

$(function(){ 
	var addtowatchlist = $("#addtowatchlist"); 
	var watchlist = $("#watchlist"); 

	watchlist.hide();

	$("#addtowatchlist").on("click", function() {
	
	$("#addtowatchlist").hide()
	$("#watchlist").show();		
	
		return false;
	});
	
});



// Show shortlist remove form // 

$(function(){ 
	var removefromshortlist = $("#remove-from-shortlist"); 
	var removereason = $("#remove-reason"); 
	var savereason = $("#save-reason"); 

	removereason.hide();
	removefromshortlist.on("click", function() {
	removereason.show();		
	
	
		return false;

	});
	
});



// Shortlist extras // 



$(function(){ 
	var shortlistitemremoved = $("#shortlist-item-removed"); 
	var savereason = $("save-reason");
	var achievecms = $("#achieve-cms");
	var dismissshortlistfeedback = $("#dismiss-shortlist-feedback");
	var numberonshortlist6 = $("#number-on-shortlist-6");
	var numberonshortlist7 = $("#number-on-shortlist-7");
	var cancelremove = $("#cancel-remove");
	var removereason = $("#remove-reason");

	numberonshortlist6.hide();
	shortlistitemremoved.hide();
	
	$("#save-reason").on("click", function() {
	shortlistitemremoved.show();
	achievecms.hide();
	numberonshortlist7.hide();
	numberonshortlist6.show();	
	
	});
	
	$("#dismiss-shortlist-feedback").on("click", function() {
	$("#shortlist-item-removed").hide();
	
	});
	
	$("#cancel-remove").on("click", function() {
	removereason.hide();
		
		return false;

	});
	
});





// Rename project// 

$(function(){ 
	var renameproject = $("#rename-project"); 
	var projectname = $("#project-name"); 
	var saveproject = $("#save-project");
	var cancelrename = $("#cancel-rename");
	var defaultname = $("#default-name");
	var newprojectname = $("#new-project-name");


	newprojectname.hide();
	projectname.hide();
	
	$("#rename-project").on("click", function() {
	projectname.show();		

	}); 
	
	$("#save-project").on("click", function() {
	
	$("#project-name").hide();
	defaultname.hide();
	newprojectname.show();
	
	});
	
	$("#cancel-rename").on("click", function() {
	projectname.hide();
	
	
		return false;

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
