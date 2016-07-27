//  Peer Challenge - 06/21/2016 - Ryan Mattson & Anthony Maki

var provided = 'Hello World!';

//  Step 1
console.log(provided.charAt(0).length);

//  Step 2
console.log(parseFloat(provided));

//  Step 3
console.log(provided.substring(0, 5).split(''));

//  Step 4
console.log(typeof provided);

//  Step 5
console.log(provided.slice(-9).length);

//  Step 6
console.log(provided.charAt(1));

//  Step 7
console.log(provided.toUpperCase());

//  Step 8
console.log(provided.replace('!', '?'));

//  HARD MODE - Step 1
console.log(provided.substring(0, 5).replace('H', '\''));

//  HARD MODE - Step 2
console.log(provided.split('').reverse().join(''));

//  HARD MODE - Step 3
console.log(provided.charAt(0).length.toString().repeat(4));

//  HARD MODE - Step 4
console.log(provided.split(' '));
