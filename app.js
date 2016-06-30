$(function(){

var numOfButtons = 10;
var numbArray = [];
var answer = '';

function appendButtons(numOfButtons){
  for (var i = 0; i < numOfButtons; i++) {
    $('#buttonSpace').append("<button type='button' class='btn btn-lg btn-default' id='numChosen'></button>");
    $('#buttonSpace button:last').text(i);
  }
}

appendButtons(numOfButtons);


$('#buttonSpace').on('click', '#numChosen', function(){
  console.log($(this).text());
})


function storeNumbers(numChosen, numbArray){
    numbArray.push(numChosen);

    if (numbArray.length === 2){
    appendAnswer(numbArray);
    numbArray = [];
  }
}


//Build this!!!
function appendAnswer(){

}


//End
})
