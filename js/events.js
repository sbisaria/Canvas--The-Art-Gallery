$("#pastEvents").hide();
		$("#past").click(function(){
			$("#past").addClass("active");
			$("#upcoming").removeClass("active");
			$("#upcomingEvents").hide();
			$("#pastEvents").show();
		});
		$("#upcoming").click(function(){
			$("#upcoming").addClass("active");
			$("#past").removeClass("active");
			$("#pastEvents").hide();			
			$("#upcomingEvents").show();
		});
$(".toggle").on("click", function() {
  $(".toggle").parent().toggleClass('active');
});