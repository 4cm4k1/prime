var clickQuantity = 0;

function onGenerateClick () {
	clickQuantity++;
	$('.container').append('<div id="button-container" class="bg-yellow assessment-buttons form-group" style="display:none;"><button id="delete-button" class="assessment-button btn btn-danger">Delete</button><button id="change-button" class="assessment-button btn btn-default">Change</button></div>');
	$('.container').children().last('#button-container').fadeIn();
	$('#click-quantity').text(clickQuantity);
}

function onDeleteClick () {
	$(this).parent().delay(3000).remove();
}

function onChangeClick () {
	$(this).parent().toggleClass('bg-red');
}

$(document).ready( function() {
	$('.container').append('<div class="jumbotron"><button id="generate-button" class="btn btn-default">Generate</button> <div class="navbar-right"><strong>Number of times clicked:</strong> <span id="click-quantity">0</span></div></div>');
	$('.container').on('click', '#generate-button', onGenerateClick);
	$('.container').on('click', '#delete-button', onDeleteClick);
	$('.container').on('click', '#change-button', onChangeClick);
});

