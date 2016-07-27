//	ANTHONY MAKI 2016-02-02

//	EMPLOYEE CONSTRUCTOR
//	====================
function Employee(name, employeeNumber, income, rating, bonusPercentage, adjustedIncome, bonusAmount) {
	this.name = name;
	this.employeeNumber = employeeNumber;
	this.income = income;
	this.rating = rating;
	this.bonusPercentage = bonusPercentage;	//	These property values will
	this.adjustedIncome = adjustedIncome;		//	be stored later in the 
	this.bonusAmount = bonusAmount;					//	functions below.
}

//	NEW EMPLOYEE OBJECTS
//	====================

var atticus = new Employee("Atticus", "2405", "47000", 3, null, null, null);
var jem = new Employee("Jem", "62347", "63500", 4, null, null, null);
var boo = new Employee("Boo", "11435", "54000", 3, null, null, null);
var scout = new Employee("Scout", "6243", "74750", 5, null, null, null);

var employees = [atticus, jem, boo, scout];

employeeBonuses(employees);

//	MASTER FUNCTION
//	===============

function employeeBonuses (employeesArray) {
	for (var i = 0; i < employeesArray.length; i++) {
		employeesArray[i].bonusPercentage = bonusPercentage(employeesArray[i]);	//	MODULE 1
		employeesArray[i].adjustedIncome = adjustedIncome(employeesArray[i]);	//	MODULE 2
		employeesArray[i].bonusAmount = bonusAmount(employeesArray[i]);	//	MODULE 3
		$('#employees ul').append('<li class="list-group-item"><strong>' + employeesArray[i].name + ':</strong><br/>' + employeesArray[i].bonusPercentage + ' % bonus<br/>$' + employeesArray[i].adjustedIncome + ' adjusted annual income<br/>$' + employeesArray[i].bonusAmount + ' bonus');
	};
}

//	MODULES IN employeeBonuses FUNCTION
//	===================================

// MODULE 1
function bonusPercentage (employee) {
	var rat = employee.rating;
	var bP = employee.bonusPercentage;
	var eN = employee.employeeNumber;
	var inc = parseInt(employee.income);

	switch(rat) {

		case 0:
		case 1:
		case 2:
			bP = 0;
			break;
		case 3:
			bP = .04;
			break;
		case 4:
			bP = .06;
			break;
		case 5:
			bP = .10;
			break;
		default:
			bP = 0;
			break;
	}

	if (eN.length == 4) {
		bP += .05;
	}
	if (inc > 65000) {
		bP -= .01;
	}
	if (bP > .13) {
		bP = .13;
	}

	console.log('bonusPercentage function sez: ' + rat + ' ' + bP + ' ' + eN + ' ' + inc);	//	Is this thing on?

	return bP * 100;
}

// MODULE 2
function adjustedIncome (employee) {
	var inc = parseInt(employee.income);
	var bP = employee.bonusPercentage;

	console.log('adjustedIncome function sez: ' + inc + ' ' + bP);	//	Testing, testing

	return Math.round(inc * (1 + bP / 100));
}

// MODULE 3
function bonusAmount (employee) {
	var inc = parseInt(employee.income);
	var bP = employee.bonusPercentage;

	return Math.round(inc * bP / 100);
}