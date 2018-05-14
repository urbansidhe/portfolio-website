console.log("Thank you for visiting. Please contact me if you have any questions.") 

$(document).ready (function() {
	$(".column-4").on("mouseenter",function(){
		$(this).children(".proj_desc").show();
	});
	$(".column-4").on("mouseleave",function(){
		$(this).children(".proj_desc").hide();
	});
})