$(document).ready(function(){

var tempArray=[];
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
    $("#numberOfTeams").append('<button type="button" class="btn btn-lg btn-default">'+i+1+'</button>')
  }
}
function makeTeams(){
  var divNum=parseInt(studentArray.length/numTeams);
  var tempArray=[];
  for (i=0; i<studentArray.length; i+=divNum){
    tempArray.push(studentArray.slice(i, divNum));
    divNum+=divNum;
  }
  return tempArray;
}
function appendTeams(){
  for (var i = 0; i < teams.length; i++) {
    $("#teamList").append("<ul class=\"list-group\"></ul>");
    $("#teamList").find("ul:last").append("<li class=\"list-group-item list-group-item-success\">"+"Team: "+i+1+"</li>");
    for (var j = 0; j < teams[i].length; j++) {
        $("#teamList").find("ul:last").append("<li class=\"list-group-item list-group-item-success\">"+teams[i][j]+"</li>");
    }
  }
}
$("#randomize").on("click",function(event){
  event.preventDefault();
  randomizeArray(studentArray);
  teams=makeTeams();
  appendTeams();
});
$("#numberOfTeams").on("click", function(event){
  event.preventDefault();
  numTeams=$(this).text();
});
appendButtons();
// var divNum=studentArray.length/numTeams;
// for (i=0; i<studentArray.length; i+=divNum){
//   studentArray.slice(i, divNum);
//   divNum+=divNum;
// }


});
