var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

function employeeEvaluator(employee){
  var evaluatedEmployee = [];
  var percentage = calcBonus(employee);
  var salary = employee[2];
  var adjustedSalary = (salary*(100+(percentage))/100).toFixed(2).toString();
  var totalBonusRounded = Math.round(adjustedSalary - salary);

  evaluatedEmployee.push(employee[0], (percentage + "%"), "$" +adjustedSalary, totalBonusRounded);

  return evaluatedEmployee;
}

function calcBonus(employee){
  var rating = employee[3];
  var empNum = employee[1];
  var percentBonus = 0;
  var empSalary = employee[2];

  switch(rating){
    case 3:
      percentBonus = 4;
      break;
    case 4:
      percentBonus = 6;
      break;
    case 5:
      percentBonus = 10;
      break;
    default:
      break;
  }
  if(empNum.length<=4){
    percentBonus +=5;
  }
  if(empSalary > 65000){
    percentBonus -= 1;
  }
  if(percentBonus > 13){
    percentBonus = 13;
  }

  return percentBonus;
}


for(var i = 0; i < employees.length; i++){
  console.log(employeeEvaluator(employees[i]));
}
