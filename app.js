var blockArray = [
  {r:0,g:0,b:0,id:''},
  {r:0,g:0,b:0,id:''},
  {r:0,g:0,b:0,id:''},
  {r:0,g:0,b:0,id:''}
];

var answerIndex = 0;

var oldBlockArrayID = [0,0,0,0];

$(document).ready(function(){

  randomColor(blockArray);
  console.log(blockArray);

  appendDom(blockArray);
  answerIndex = blockArray[getRandomInt(0, blockArray.length)];
  alert('Pick one of the blocks. Only one is correct.');

  $("main").on('click', '.block', function(){
    //  logic for choosing correct button and color changes/animations
    console.log('you clicked:', this);
    answerChecker(this);
  });
});

function randomColor(array){
  for (var i = 0; i < array.length; i++) {
    oldBlockArrayID[i] = array[i].id;
    array[i].r = getRandomInt(0,255);
    array[i].g = getRandomInt(0,255);
    array[i].b = getRandomInt(0,255);
    array[i].id = getRandomInt(0,10000);
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function appendDom(array) {
  for (var i = 0; i < array.length; i++) {
    $("main").append('<div class="col-md-3 block" id="' + array[i].id + '"></div>');
    $("main").children().last().css('background-color', 'rgb(' + array[i].r + ',' + array[i].g + ',' + array[i].b + ')');
  }
};

function updateDom(array){
  for (var i = 0; i < array.length; i++) {
    $('#' + oldBlockArrayID[i]).css('background-color', 'rgb(' + array[i].r + ',' + array[i].g + ',' + array[i].b + ')');
    $('#' + oldBlockArrayID[i]).attr('id', array[i].id);
    answerIndex = blockArray[getRandomInt(0, blockArray.length)];
  }
}

function answerChecker(div) {
  var id = parseInt($(div).attr('id'));
  console.log(id);
  console.log(answerIndex.id);
  if(id === answerIndex.id){
    alert('You\'re correct!');
    randomColor(blockArray);
    updateDom(blockArray);

  } else {
    alert('You suck!');
  }
}
