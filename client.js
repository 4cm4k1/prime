angular.module('calcApp', []);

angular.module('calcApp').filter('reverse', function() {
 return function(items) {
  return items.slice().reverse();
 };
});

angular.module('calcApp').controller('CalcCtrl', ['$scope', function($scope) {

    //  These create new objects (first and second), from which to call the infixToPostfix and solvePostfix methods respectively on the output string
    //  Example usage: first.infixToPostfix(displayOutput);
    //  Example usage: second.solvePostfix(postfixExpression);

    var first = new InfixToPostfix();
    var second = new SolvePostfix();

    $scope.displayOutput = '';    //  What's displayed on calculator 'screen'
    var displayExpression = '';   //  Where 'screen' is saved when evaluated
    var postfixExpression = '';    //  Postfix version of 'screen' expression
    var postfixSolution = '';      //  Answer to evaluated expression
    var expressionSolved = false; //  Calculator state tracker
    $scope.prevOutputs = [];      //  Log of past expressions solved

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
        point: '.'
    };

    $scope.operator = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        pow: '^',
        sqrt: 'sqrt',
        leftParens: '(',
        rightParens: ')',
        equal: '='
    };

    $scope.misc = {
        clear: 'CE'
    };

    $scope.evaluate = function(exp) {

        postfixExpression = first.infixToPostfix(exp);

        postfixSolution = second.solvePostfix(postfixExpression);

        displayExpression = exp;

        $scope.displayOutput = exp + ' = ' + postfixSolution;

        expressionSolved = true;

        $scope.prevOutputs.push({
          expression: displayExpression,
          solution: postfixSolution,
          timestamp: new Date().toLocaleTimeString('en-US')
        });
    };

    $scope.concatOutputString = function(valuePressed) {

      if (expressionSolved) {
        $scope.displayOutput = '';

        switch(valuePressed) {
          case '+':
          case '-':
          case '*':
          case '/':
          case '^':
          case 'sqrt':
          case '(':
          console.log('inside if valuePressed', valuePressed);
          $scope.displayOutput = postfixSolution;
        }

        expressionSolved = false;
      }

      if(valuePressed === 'sqrt') {
        $scope.displayOutput += '^0.5';
      } else {
            $scope.displayOutput += valuePressed;
      }

    };

    $scope.clearOutput = function() {
      $scope.displayOutput = '';
      displayExpression = '';
      postfixExpression = '';
      postfixSolution = '';
    };

}]);


//  The code BELOW is cited from Nic Raboy (https://thepolyglotdeveloper.com)
//  And lightly adapted for my purposes (and added a bug fix)

//  Two additional methods needed on the String and Array global objects:

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

//  Infix to Postfix conversion function:

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

//  Postfix evaluation function:

function SolvePostfix() {

    this.solvePostfix = function(postfix) {

        var resultStack = [];
        //  The line BELOW was missing the custom '.clean()' method, which was
        //  leading to there being an empty string in the last index of the
        //  array, which in turn caused this function to return an empty string
        //  as the 'solution.'
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
