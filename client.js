angular.module('calcApp', []);

angular.module('calcApp').controller('CalcCtrl', ['$scope', function($scope) {

    //  These create new objects (a and b), from which to call the infixToPostfix and solvePostfix methods respectively on the output string
    //  Example usage: a.infixToPostfix(displayOutput);
    //  Example usage: b.solvePostfix(postfixExpression);

    var first = new InfixToPostfix();
    var second = new SolvePostfix();

    $scope.displayOutput = '';
    var postfixExpression = '';
    var postfixSolution = '';
    $scope.prevOutputs = []; // Saved as original infix expressions

    // Buttons
    $scope.operand = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
        point: '.' //  This will need logic to put '0.' if a number does not precede the user placing a '.'
    };

    $scope.operator = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        pow: '^',
        sqrt: 'sqrt', //  This will need a special function since JS doesn't inherently understand sqrt (eg, '^0.5')
        parens: '( )', //  This will need logic to determine whether to place an opening or ending parens
        equal: '='
    };

    $scope.misc = {
      clear: 'CE'
    };

    $scope.evaluate = function() {
      console.log('Display output:', $scope.displayOutput);

      postfixExpression = first.infixToPostfix($scope.displayOutput);

      console.log('Display output converted to postfix:', postfixExpression);
      console.log('Typeof:', typeof postfixExpression);

      postfixSolution = second.solvePostfix(postfixExpression);

      $scope.displayOutput = $scope.displayOutput + ' = ' + postfixSolution;

      console.log('Postfix evaluated:', $scope.displayOutput);
        //  This will take the output string and call the infix to post fix function followed by the postfix evaluation function
    };

    $scope.concatOutputString = function() {

    };

    $scope.saveOutputString = function() {

    };

}]);


//  Imported functions from Nic Raboy - https://thepolyglotdeveloper.com

// Example implementation of InfixToPostfix
// var ms = new InfixToPostfix();
// console.log(ms.infixToPostfix('5 + 3 * 6 - ( 5 / 3 ) + 7'));

//  Infix to Postfix conversion

String.prototype.isNumeric = function() {
    return !isNaN(parseFloat(this)) && isFinite(this);
}

Array.prototype.clean = function() {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === '') {
            this.splice(i, 1);
        }
    }
    return this;
}

function InfixToPostfix() {

    this.infixToPostfix = function(infix) {
        var outputQueue = '';
        var operatorStack = [];
        var operators = {
            '^': {
                precedence: 4,
                associativity: 'Right'
            },
            '/': {
                precedence: 3,
                associativity: 'Left'
            },
            '*': {
                precedence: 3,
                associativity: 'Left'
            },
            '+': {
                precedence: 2,
                associativity: 'Left'
            },
            '-': {
                precedence: 2,
                associativity: 'Left'
            }
        }
        infix = infix.replace(/\s+/g, '');
        infix = infix.split(/([\+\-\*\/\^\(\)])/).clean();
        for (var i = 0; i < infix.length; i++) {
            var token = infix[i];
            if (token.isNumeric()) {
                outputQueue += token + ' ';
            } else if ('^*/+-'.indexOf(token) !== -1) {
                var o1 = token;
                var o2 = operatorStack[operatorStack.length - 1];
                while ('^*/+-'.indexOf(o2) !== -1 && ((operators[o1].associativity === 'Left' && operators[o1].precedence <= operators[o2].precedence) || (operators[o1].associativity === 'Right' && operators[o1].precedence < operators[o2].precedence))) {
                    outputQueue += operatorStack.pop() + ' ';
                    o2 = operatorStack[operatorStack.length - 1];
                }
                operatorStack.push(o1);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue += operatorStack.pop() + ' ';
                }
                operatorStack.pop();
            }
        }
        while (operatorStack.length > 0) {
            outputQueue += operatorStack.pop() + ' ';
        }
        return outputQueue;
    }

}

//  Postfix evaluation

function SolvePostfix() {

    this.solvePostfix = function(postfix) {
      console.log(postfix, postfix.length);

        var resultStack = [];
        postfix = postfix.split(' ').clean();
        console.log(postfix);
        for (var i = 0; i < postfix.length; i++) {
            if (postfix[i].isNumeric()) {
                resultStack.push(postfix[i]);
            } else {
                var a = resultStack.pop();
                var b = resultStack.pop();
                if (postfix[i] === '+') {
                    resultStack.push(parseFloat(a) + parseFloat(b));
                } else if (postfix[i] === '-') {
                    resultStack.push(parseFloat(b) - parseFloat(a));
                } else if (postfix[i] === '*') {
                    resultStack.push(parseFloat(a) * parseFloat(b));
                } else if (postfix[i] === '/') {
                    resultStack.push(parseFloat(b) / parseFloat(a));
                } else if (postfix[i] === '^') {
                    resultStack.push(Math.pow(parseFloat(b), parseFloat(a)));
                }
            }
            console.log('resultStack:', resultStack);
        }
        if (resultStack.length > 1) {
            return 'error';
        } else {
          console.log(resultStack);
            return resultStack.pop();
        }
    }

}
