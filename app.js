$(function() {

    var numOfButtons = 10;
    var numbArray = [];

    function appendButtons(numOfButtons) {
      $('#buttonSpace').append('<div class="btn-group"></div>');
        for (var i = 0; i < numOfButtons; i++) {
            $('#buttonSpace .btn-group').append("<button type='button' class='btn btn-lg btn-default' id='numChosen'></button>");
            $('#buttonSpace button:last').text(i);
        }
    }

    function storeNumbers(numChosen) {
        numbArray.push(numChosen);

        if (numbArray.length >= 2) {
            appendAnswer(numbArray);
            numbArray = [];
        }
    }

    function appendAnswer(numbArray) {
        $('#answerSpace').empty();
        var answer = numbArray[0] + numbArray[1];
        $('#answerSpace').append('<h3></h3>');
        $('#answerSpace h3').append(numbArray[0] + ' + ' + numbArray[1] + ' = ' + answer);
    }

    appendButtons(numOfButtons);

    $('#buttonSpace').on('click', '#numChosen', function() {
        var tempNumChosen = parseInt($(this).text());
        storeNumbers(tempNumChosen);
    })

    //End
});
