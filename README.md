#Weekend Challenge 02
Welcome to your second weekend challenge!


##Instructions
I created a new JSON data file, inside it, you will find an array of objects. Each object, is each one of you. It includes your name, your favorite movies, and favorite song.

You first task is to make an AJAX call from the client side app.js, using the .ajax method, which will be set to GET, and access the '/data' url. When successful, it should bring the data back down. You will then need to combine that with what you learned today about making a carousel. 

What I would like to see on the DOM, is one person represented. A series of 22 (or the number of people in the cohort) index points with the first person's index highlighted or called out in style differently than the others. Also on the DOM should be a 'next' and 'prev' button. Clicking on the next button should navigate to the next person, clicking on the prev button should navigate to the previous person. The highlighted index point should update also as you click next and prev. 

When a person is displayed, show their name, their favorite movies, and favorite song. Only one person should be showcased at any given time. 

You will need to combine everything you learned this week to accomplish this task, and each of the challenges you have completed this week play a part in this task. 


###HARD MODE
Include a fade out and fade in animation in-between transitioning people.

###PRO MODE
Include a timer that moves to the next person if the user is not clicking on next or prev. If the user clicks on next or prev, the timer should be reset. The timer should transition between people every 10 seconds. 

###MASTER MODE
Head over to the json file, and include a 'imageURL' property for each person. Then, manually head over to GitHub and right click on each person's user image and select 'COPY IMAGE URL'. Then past that into the 'imageURL' property. Display the new image information on the DOM, so that the person's GitHub image appears above their name. This will give you some experience in working with JSON and give you a better idea of how data is put together for distribution. 


## Running the Node Server
In order for our app to run and serve the files we need, you'll need to run the server.

1. From the project directory, use the command: npm start
    1. You should see a message on the command line: 'Listening on port: 5000'
2. Go to http://localhost:5000 in your browser to see the index.html file in action

**NOTE Do not close this Terminal window as it is actively running the Node server**

If you need to issue any more commands, open another Terminal window (or tab)


## Making Changes
Make changes in the /public/scripts, /pubic/styles, and public/views folders. In order to see the changes, you need to restart the server.

1. In the Terminal window that is running the server, hit the keys Control + C (to Cancel). You will see: '^C'
2. Once changes are made, start the server again with: npm start
