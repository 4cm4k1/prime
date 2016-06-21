//  Solo JS - 06/21/2016 - Anthony Maki

var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//  Step 1 - TODO
function monthsListed (array) {
  var output = '';
  for (var i = 0; i < array.length; i++) {
    output += array[i];
    if(array.length-1 == i) {
      output += '.';
    } else {
      output += ', ';
    }
  }
  return output;
}
console.log('Step 1:', 'Months listed are ' + monthsListed(stringList));

//  Step 2 - DONE
console.log('Step 2:', numList[numList.length-1]);

//  Step 3 - DONE
function numListToString (array) {
  var output = '';
  for (var i = 0; i < array.length; i++) {
    output += array[i];
  }
  return output;
}
console.log('Step 3:', numListToString(numList));

//  Step 4 - DONE
function numListSum (array) {
  var output = 0;
  for (var i = 0; i < array.length; i++) {
    output += array[i];
  }
  return output;
}
console.log('Step 4:', numListSum(numList));

//  Step 5 - DONE
function boolChecker (array) {
  if(array[1]) {
    return numList[0] + numList[numList.length-1];
  } else {
    return numList[1] * numList[1];
  }
}
console.log('Step 5:', boolChecker(boolList));

//  Step 6 - DONE
function boolIterate (array) {
  for (var i = 0; i < array.length; i++) {
    if(array[i]) {
      console.log('Step 6:', numList[i]);
    }
  }
}
boolIterate(boolList);

//  Step 7 -
function combineAndSort (array1, array2, array3) {
  return array1.concat(array2, array3).reverse();
}
console.log('Step 7:', combineAndSort(stringList,numList,boolList));
