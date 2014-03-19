/*
$("#expand1").on( "click", function() {
console.log("click");
if ($("#expand1").text() == 'Close') {
	// table is showing
	$("#expand1").text("Expand");
	$("#sainfo").hide();
}
else {
	// table is hidden
	$("#expand1").text("Close");
	$("#sainfo").show();
}

return false;
});



$("#expand5").on( "click", function() {
console.log("click");
if ($("#expand5").text() == 'Close') {
	// table is showing
	$("#expand5").text("Expand");
	$("#pricinginfo").hide();
}
else {
	// table is hidden
	$("#expand5").text("Close");
	$("#pricinginfo").show();
}


*/

// generic code

/*

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

*/