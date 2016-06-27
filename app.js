var claim1 = new Claim('John Doe', 'Specialist', 1100);

var claim2 = new Claim('Jane Doe', 'Optical', 100);

var claim3 = new Claim('Joe Johnson', 'Emergency', 31000);

var claim4 = new Claim('Sharon Smith', 'Emergency', 1300);

var claim5 = new Claim('Steve Wright', 'Primary Care', 770);

var claim6 = new Claim('Anthony Maki', 'Primary Care', 357);

var claim7 = new Claim('James Bond', 'Emergency', 300000);

var claim8 = new Claim('Jeff Goldblum', 'Optical', 775);

var claim9 = new Claim('Namey McNameface', 'Specialist', 11235813);

var claim10 = new Claim('Mr. X', 'Optical', 12345);

var initialList = [claim1, claim2, claim3, claim4, claim5];

initialList.push(claim6, claim7, claim8, claim9, claim10);

//	console.log('claims array:', initialList);

var totalPaidOut = 0;

//	Processing claims on load
$(document).ready(function(){

	var $main = $("main");

	for (var i = 0; i < initialList.length; i++) {
		$($main).append('<p></p>');

		var $p = $("main p:last-child");

		var claimPayout = amountCovered(percentCovered(initialList[i].visitType), initialList[i].visitCost);

		var claimPayoutLocalized = claimPayout.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

		var claimPatient = initialList[i].patientName;

		totalPaidOut += claimPayout;

		console.log('Paid out $' + claimPayout + ' for ' + claimPatient);

		$($p).append('Paid out <span class="label label-danger">' + claimPayoutLocalized + '</span> for <strong>' + claimPatient + '</strong>');
	}

	var totalPaidOutLocalized = totalPaidOut.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

	console.log('Total claim payouts: $' + totalPaidOut);

	$($main).append('<h3><span class="label label-info">Total claim payouts</span> ' + totalPaidOutLocalized + '</h3>');
});

//	FUNCTION DECLARATIONS
//	Constructor for claims
function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//	Function to determine percent covered
function percentCovered(claimType){
	var percentCovered = 0;

	switch(claimType){
		case 'Emergency':
			percentCovered = 100;
			break;
		case 'Optical':
			percentCovered = 0;
			break;
		case 'Primary Care':
			percentCovered = 50;
			break;
		case 'Specialist':
			percentCovered = 10;
			break;
		default:
			percentCovered = 0;
			break;
	}

	return percentCovered;
}

//	Function to determine amount covered
function amountCovered(percentCovered, claimAmount){
	var amountCovered = parseInt((claimAmount * percentCovered / 100).toFixed());

	return amountCovered;
}
