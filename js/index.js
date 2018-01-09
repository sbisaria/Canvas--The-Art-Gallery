/*  Tab section switching   */
$("#loginView").hide();
$("#signup").click(function(){
	$("#signup").addClass("active");
	$("#login").removeClass("active");
	$("#loginView").hide();
	$("#signupView").show();
});
$("#login").click(function(){
	$("#login").addClass("active");
	$("#signup").removeClass("active");
	$("#signupView").hide();			
	$("#loginView").show();
});

$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});