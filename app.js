$(document).ready(function(){

var studentArray=["richard", "jon", "sahasha", "tracy", "megan", "justin", "hillary", "liz", "brian v", "donovan", "connor", "cormick", "ryan", "kyle", "andrew", "brian a", "anthony", "katie", "trent"]
var numTeams=2;
var teams=[];
var maxNumber=parseInt(studentArray.length/2);
function randomizeArray(array){
  var i, num, temp;
  for (i=array.length; i; i--){
    num=Math.floor(Math.random()*i);
    temp=array[i-1];
    array[i-1]=array[num];
    array[num]=temp;
  }
}
function appendButtons(){
  for (var i=0; i<maxNumber; i++){
    $("#numberOfTeams").append('<button type="button" class="btn btn-lg btn-default" id="numTeamsChosen">'+(i+1)+'</button>')
  }
}
function makeTeams(){
  // var divNum=parseInt(studentArray.length/numTeams);
  // var remainder=studentArray.length % numTeams;
  var tempArray=[];
  tempArray = chunkify(studentArray, numTeams, true);
  console.log(tempArray);
  // for (i=0; i<studentArray.length; i+=divNum){
  //   if(divNum > studentArray.length) {
  //
  //   }
  //   tempArray.push(studentArray.slice(i, divNum));
  //   divNum+=divNum+1;
  // }
  return tempArray;
}

function chunkify(arrayYouWantToChunkify, howManyChunksYouWant, doYouWantChunksOfSimilarSize) {
    if (howManyChunksYouWant < 2)
        return [arrayYouWantToChunkify];
    var len = arrayYouWantToChunkify.length,
            out = [],
            i = 0,
            size;
    if (len % howManyChunksYouWant === 0) {
        size = Math.floor(len / howManyChunksYouWant);
        while (i < len) {
            out.push(arrayYouWantToChunkify.slice(i, i += size));
        }
    }
    else if (doYouWantChunksOfSimilarSize) {
        while (i < len) {
            size = Math.ceil((len - i) / howManyChunksYouWant--);
            out.push(arrayYouWantToChunkify.slice(i, i += size));
        }
    }
    else {
        howManyChunksYouWant--;
        size = Math.floor(len / howManyChunksYouWant);
        if (len % size === 0)
            size--;
        while (i < size * howManyChunksYouWant) {
            out.push(arrayYouWantToChunkify.slice(i, i += size));
        }
        out.push(arrayYouWantToChunkify.slice(size * howManyChunksYouWant));
    }
    return out;
}

function appendTeams(){
  $('#teamList').empty();
  for (var i = 0; i < teams.length; i++) {
    $("#teamList").append("<ul class=\"list-group\"></ul>");
    $("#teamList").find("ul:last").append("<li class=\"list-group-item list-group-item-success\">"+"Team: "+(i+1)+"</li>");
    for (var j = 0; j < teams[i].length; j++) {
        $("#teamList").find("ul:last").append("<li class=\"list-group-item\">"+teams[i][j]+"</li>");
    }
  }
}
$("#randomize").on("click",function(event){
  event.preventDefault();
  randomizeArray(studentArray);
  teams=makeTeams();
  console.log(teams);
  appendTeams();
});
$("#numberOfTeams").on("click", "#numTeamsChosen", function(event){
  event.preventDefault();
  numTeams=$(this).text();
  console.log(this);
});
appendButtons();
// var divNum=studentArray.length/numTeams;
// for (i=0; i<studentArray.length; i+=divNum){
//   studentArray.slice(i, divNum);
//   divNum+=divNum;
// }


});
