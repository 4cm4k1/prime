var splinter = function ( numberOne, numberTwo ) {
	var z = numberOne * numberTwo;
	var numberArray = [ numberOne, numberTwo, z ];
	return numberArray;
};

console.log ( splinter ( 1, 2 ) );

// Output should be [ 1, 2, 2 ]