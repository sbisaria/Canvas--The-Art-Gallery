/*  Tab section switching   */
$("#tab2-content").hide();
$("#tab2").click(function(){
	$("#tab2").addClass("active");
	$("#tab1").removeClass("active");
	$("#tab1-content").hide();
	$("#tab2-content").show();
});
$("#tab1").click(function(){
	$("#tab1").addClass("active");
	$("#tab2").removeClass("active");
	$("#tab2-content").hide();			
	$("#tab1-content").show();
});
/*  Navbar collapsing  */
$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});