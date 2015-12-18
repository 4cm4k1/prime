# Theta Weekend Challenge 02

Hello Primers!

Welcome to your second weekend challenge!

When pulling down this file, open it up in Webstorm and run 'npm install' in the terminal. 

Don't forget, to test an application with a node server, you will need to enter 'npm start' (as defined in the package.json file). 

To shut down a server, hold down control and press 'C'. 

I created a new JSON data file, inside it, you will find an array of objects. Each object, is each one of you. It includes your name, your github profile link, your spirit animal.

You first task is to make an AJAX call from the client side app.js, using the .ajax method, which will be set to GET, and access the '/data' url. When successful, it should bring the data back down. You will then need to combine that with what you learned today about making a carousel. 

What I would like to see on the DOM, is one person represented. A series of 22 index points with the first person's index highlighted or called out in style differently than the others. Also on the DOM should be a 'next' and 'prev' button. Clicking on the next button should navigate to the next person, clicking on the prev button should navigate to the previous person. The highlighted index point should update also as you click next and prev. 

When a person is displayed, show their name, their GitHub Link, and their piece of shoutout feedback. Only one person should be show cased at any given time. 

You will need to combine everything you learned this week to accomplish this task, and each of the challenges you have completed this week play a part in this task. 

###HARD MODE
Include a fade out and fade in animation in-between transitioning people.

###PRO MODE
Include a timer that moves to the next person if the user is not clicking on next or prev. If the user clicks on next or prev, the timer should be reset. The timer should transition between people every 10 seconds. 

###MASTER MODE
Head over to the theta.json file, and include a 'imageURL' property for each person. Then, manually head over to GitHub and right click on each person's user image and select 'COPY IMAGE URL'. Then past that into the 'imageURL' property. Display the new image information on the DOM, so that the person's GitHub image appears above their name. This will give you some experience in working with JSON and give you a better idea of how data is put together for distribution. 
