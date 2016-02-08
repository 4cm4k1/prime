// ANTHONY MAKI 2016-02-08
// A few global variables declared.
var $peopleObject;
var $personArray;
var currentlyFocusedPerson;
var intervalID;

// Essentially everything loads on document being ready. ;)
$(document).ready(function(){
    getData();
});

function getData(){
    $.ajax({
        type: "GET",
        url:"/data",
        success: function(data) {

            //  Functions called here are listed below this function in the order they appear.

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

/*  Populating the DOM:
 *  This function takes the data received from the AJAX server query, stores it to an object, then to an array, then
 *  populates the DOM for each person's entries. Certain tags are classed for initialization and for Bootstrap.
 */

function populateDOM(data){
    $peopleObject = data;
    $personArray = $peopleObject.personArray;
    $.each($personArray, function(i, person) {
        $('#focus').append(
            '<div class="reveal list-group" id="person' + i + '">' +
            '<a class="list-group-item" style="background: #efefef url(\'' + person.imageURL + '\')' +
            'no-repeat center; background-size: cover; height: 555px;">' +
            '<h2 class="list-group-item-heading" style="color: #efefef; text-shadow: 1px 1px #333;">' + person.name +
            '</h2></a><ul><li class="list-group-item"><h3>Favorite movies</h3>' + person.favoriteMovie1 + '<br/>' +
            person.favoriteMovie2 + '</li><li class="list-group-item"><h3>Favorite song</h3>' +
            person.favoriteSong + '</li></ul>' + '</div>');
        $('.btn-group').append('<button class="btn btn-default" id ="' + i + '">' + (i+1) + '</button>');
    });
}

/*  Page initialization:
 *  This function sets starting points/states for the page including initial fade-ins, and the index counter.
 */

function initializePage () {
    currentlyFocusedPerson = 0;
    $('#iota').delay(1000).fadeIn(1000);
    $('#person' + currentlyFocusedPerson).delay(1000).fadeIn(1000);
    $('#left-arrow').delay(1000).fadeIn(1000);
    $('#right-arrow').delay(1000).fadeIn(1000);
    $('#carousel-index').delay(1000).fadeIn(1000);
    $('button#' + currentlyFocusedPerson).toggleClass('btn-primary');
}

/*  Button click functionality:
 *  This function handles all the logic of the left and right arrow buttons, as well as the
 *  numbered indices at the bottom of the page.
 */

function buttonClickEvent (element) {
    $('#person' + currentlyFocusedPerson).fadeOut(1000);
    $('button#' + currentlyFocusedPerson).toggleClass('btn-primary');
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
    $('button#' + currentlyFocusedPerson).toggleClass('btn-primary');
    clearTimer();
    startAutoAdvance();
}

/*  Auto-Advance Functions below:
 *  1. Starts autoAdvance function at interval of 10s
 *  2. Does the actions needed to advance at each interval
 *  3. Clears timer (when called by button click events)
 */

function startAutoAdvance () {
    intervalID = setInterval(autoAdvance, 10000);
}

function autoAdvance () {
    $('#person' + currentlyFocusedPerson).fadeOut(1000);
    $('button#' + currentlyFocusedPerson).toggleClass('btn-primary');
    if (currentlyFocusedPerson < $personArray.length-1) {
        currentlyFocusedPerson++;
    } else if (currentlyFocusedPerson == $personArray.length-1) {
        currentlyFocusedPerson = 0;
    }
    $('#person' + currentlyFocusedPerson).delay(1000).fadeIn(1000);
    $('button#' + currentlyFocusedPerson).toggleClass('btn-primary');
}

function clearTimer () {
    clearInterval(intervalID);
}