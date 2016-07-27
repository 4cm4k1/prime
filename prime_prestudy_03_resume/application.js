$(document).ready( function() {
	$('button').click( function() {
		$('main').fadeIn();
		$('footer').fadeIn();
		$(this).fadeOut();
	})
});