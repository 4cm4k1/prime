var $peopleObject;
var $personArray;
var currentlyFocusedPerson;
var intervalID;

$(document).ready(function(){
    getData();
});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {

            populateDOM(data);

            initializePage();

            $('button').on('click', function () {
                buttonClickEvent(this);
            });

            startAutoAdvance();
        },
        error: function() {
            console.log('ERROR: Unable to contact the server.');
        }

    });
}

function populateDOM(data){
    $peopleObject = data;
    $personArray = $peopleObject.personArray;
    $.each($personArray, function(i, person) {
        $('#focus').append(
            '<div class="list-group" id="person' + i + '">' +
            '<a class="list-group-item" style="background: #efefef url(\'' + person.imageURL + '\')' +
            'no-repeat center; background-size: cover; height: 555px;">' +
            '<h2 class="list-group-item-heading" style="color: #efefef; text-shadow: 1px 1px #333;">' + person.name +
            '</h2></a><ul><li class="list-group-item"><h3>Favorite movies</h3>' + person.favoriteMovie1 + '<br/>' +
            person.favoriteMovie2 + '</li><li class="list-group-item"><h3>Favorite song</h3>' + '<br/>' +
            person.favoriteSong + '</li></ul>' + '</div>');
        $('.btn-group').append('<button class="btn btn-default" id ="' + i + '">' + (i+1) + '</button>');
    });
}

function initializePage () {
    currentlyFocusedPerson = 0;
    $('#person' + currentlyFocusedPerson).addClass('focused');
    $('#focus div:not(".focused")').addClass('unfocused');
}

function buttonClickEvent (element) {
    $('#person' + currentlyFocusedPerson).fadeOut(1000);
    if (isNaN(element.id)) {
        if (element.id == 'left-arrow' && currentlyFocusedPerson > 0) {
            currentlyFocusedPerson--;
        } else if (element.id == 'right-arrow' && currentlyFocusedPerson < $personArray.length-1) {
            currentlyFocusedPerson++;
        } else if (element.id == 'right-arrow' && currentlyFocusedPerson == $personArray.length-1) {
            currentlyFocusedPerson = 0;
        } else if (element.id == 'left-arrow' && currentlyFocusedPerson == 0) {
            currentlyFocusedPerson = $personArray.length-1;
        }
    } else {
        currentlyFocusedPerson = parseInt(element.id);
    }
    $('#person' + currentlyFocusedPerson).delay(1000).fadeIn(1000);
    clearTimer();
    startAutoAdvance();
}

function startAutoAdvance () {
    intervalID = setInterval(autoAdvance, 10000);
}

function autoAdvance () {
    $('#person' + currentlyFocusedPerson).fadeOut(1000);
    if (currentlyFocusedPerson < $personArray.length-1) {
        currentlyFocusedPerson++;
    } else if (currentlyFocusedPerson == $personArray.length-1) {
        currentlyFocusedPerson = 0;
    }
    $('#person' + currentlyFocusedPerson).delay(1000).fadeIn(1000);
}

function clearTimer () {
    clearInterval(intervalID);
}