var itsATrap = 10;
var theAnswer = 42;

// Step 1 - Mathematical Evaluation
itsATrap *= itsATrap;
console.log("After Step 1, the value of itsATrap changed from 10 to... " + itsATrap +"!");

// Step 2 - Conditional Statement
if (Math.pow(itsATrap, 0.5) == theAnswer) {
	itsATrap = theAnswer;
	console.log("After Step 2, the value of itsATrap changed to... " + itsATrap + ", meaning we\'ve found the answer to life, the universe, and everything!");
} else { 
	itsATrap = Math.pow(itsATrap, 0.5);
	console.log("After Step 2, the value of itsATrap changed to... " + itsATrap + ". :( Looks like we have to just keep searching.")
}

// Step 3 - Loop
for (var i = 0; i < 8; i++) {
	itsATrap++;
	itsATrap--;
	itsATrap--;
}
console.log("After Step 3, the value of itsATrap changed to... " + itsATrap + ".");

// Step 4 - Function
function makeItSo(thing1, thing2) {
	return thing2 / thing1;
}
var deusExMachina = makeItSo(itsATrap, theAnswer);
console.log("After Step 4-- well, you just needed to multiply by " + deusExMachina + " to get what you were looking for! Silly.");