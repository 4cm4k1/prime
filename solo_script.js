// ! ! !
// Three Bugs
// ANTHONY MAKI - 2016-02-01
// 1. In for loop, added [i] to argument being passed into calculateSTI function
// 2. On line 45, added Math.round() to round to nearest whole number
// 3. Removed "- 1" on line 71 because it was returning a negative & wrong bonus percent

// Added this initial transition effect of jQuery
$(document).ready(function(){
  $('body').delay(500).fadeIn(2000);
});
// Above bit of code added

var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);   // !!! added [i] after array argument
 	newEl = document.createElement('li');
	newText = document.createTextNode(array[i][0] + ', ' + array[i][1] + ', ' + array[i][2] + ', ' + array[i][3]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
  document.getElementsByTagName('li')[i].className = 'list-group-item';
}

function calculateSTI(array1) {
  var newArray = [];
  newArray[0] = array1[0];

  var employeeNumber = array1[1];
  var baseSalary = array1[2];
  var reviewScore = array1[3];

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus)); // !!! Added Math.round()
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;

}

function getBaseSTI(reviewScore) {
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; // !!! basePercent - 1 ?!?!?!!
}

function getYearAdjustment(employeeNumber) {
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(baseSalary) {
  var incomeAdjustment = 0;
  baseSalary = parseInt(baseSalary);
  if (baseSalary > 65000) {
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}