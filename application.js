$(document).ready( function() {
	$("#button").click( function() {
		$("body #reveal").fadeIn();
		$(this).fadeOut();
	})
});