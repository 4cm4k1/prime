# Prime Solo Challenge 4
## Overview
Experimenting with modules in Node.js.
## Instructions Given
### Module Madness
In this challenge, you will need to spin up a new project (much like we did in lecture). You will create three modules as specified below, create an app.js that will use these modules!

### Modules
### Module One
The first module will export a function that returns a random number after taking in a min and max value as arguments (hint: you can use random number functions from previous assignments). When you call this module, use 100 as your min, and 1000000 as your max.

### Module Two
The second module should accept a number and convert it to a USD value. You can find some good implementations of this online.

### Module Three
The third module should require the other two modules (i.e. Module One and Module Two). It should have two function exports:

The first function export should return the result of the first module being passed into the second module.

The second function export should return the text “Account balance: \n”.

### app.js
Finally, in the app.js file use the functions from your third module to produce the following output in the console:

> Account balance:
> $156,301
