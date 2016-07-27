//  Weekend Challenge #3 - Anthony Maki - 2016-02-15
$(document).ready(function(){
    //  Calls initialization function shown below.
    initResultBox();

    //  Event listeners for calculator buttons!
    $('form').on('click', '#num', function(){
        putNumbersInResultBox(this);
    });

    $('#add').on('click', function(){
        putOperatorsInResultBox(this);
    });
    $('#subtract').on('click', function(){
        putOperatorsInResultBox(this);
    });
    $('#multiply').on('click', function(){
        putOperatorsInResultBox(this);
    });
    $('#divide').on('click', function(){
        putOperatorsInResultBox(this);
    });

    //  Extra special event listener, since this one actually talks
    //  to the server and gets a response.
    $('#equals').on('click', function(){
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/' + $('#result').data().operation,
            data: $('#result').data(),
            success: function(data) {
                console.log('From server: ' + data);
                $('#result').data(data);
                refreshResultBox();
            }
        })
    });

    //  Somewhat special event listener - just tells all the
    //  data value properties of the result box to GTFO.
    $('#clear').on('click', initResultBox);
});

//  Initializes by passing an object with several properties to the result
//  box, using jQuery data method.
function initResultBox () {
    console.log('Entering initResultBox');
    $('#result').val('0').data({'x': '', 'y': '', 'operation': '', 'equality': '', 'result': ''});
    console.log('Exiting initResultBox');
}

//  Modifies the operation data value of the result box after pressing an
//  operator button.
function putOperatorsInResultBox (element) {
    $('#result').data().operation = element.id;
    refreshResultBox();
}

//  Modifies the x/y data values of the result box after each number press,
//  but doesn't allow more than 2 presses without clearing.
function putNumbersInResultBox (element) {
    if ($('#result').data().x == '') {
        $('#result').data().x = $(element).text();
    } else if ($('#result').data().y == '') {
        $('#result').data().y = $(element).text();
    } else {
        alert('You\'ve already chosen 2 numbers!');
    }
    refreshResultBox();
}

//  Refreshes the result box's visible contents essentially after each event.
function refreshResultBox () {
    $('#result').val(
        $('#result').data('x') + ' ' +
        $('#' + $('#result').data('operation')).text() + ' ' +
        $('#result').data('y') + ' ' + $('#result').data('equality') + ' ' +
        $('#result').data('result')
    );
}