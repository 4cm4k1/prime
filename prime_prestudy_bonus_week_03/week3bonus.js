function doSomething(withThisNumber) {
	return withThisNumber * 12;
}

function doSomethingElse(withThatNumber) {
	if(withThatNumber >= 40) { 
		return withThatNumber + 3;
	} else {
		return withThatNumber--;
	}
}

function doSomethingEvenBetter(withActuallyThisNumber) {
	for(var i = 0; i < 8; i++) {
		if (withActuallyThisNumber != 21) {
			return withActuallyThisNumber * 2 - 11;
		} else if (withActuallyThisNumber < 30) { 
			return withActuallyThisNumber * withActuallyThisNumber;
		} else { 
			return withActuallyThisNumber - 3 * withActuallyThisNumber;
		}
	}
}

var bonusNumber = doSomethingEvenBetter(doSomethingElse(doSomething(42)));
console.log("The output of the 3 function chain is " + bonusNumber + ".");