$(document).ready(function() {

	$("#arrow-down").click(function() {
		$(".clearfix").toggleClass("d-none");
	});

	$(".clearfix li").hover(function() {
		$(this).css("margin-left", "-6px");
	}, function() {
		$(this).css("margin-left", "-12px");
	})
})