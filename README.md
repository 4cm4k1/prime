# Group jQuery Challenge Week 2

You will create a team randomizer. In order to complete this challenge, you will need to use Javascript and jQuery. Not only will you need to randomly create teams, but you will also need to animate the assignment to add a layer of ‘cool’. 

The basic functionality should be that you include all 22 of your peers into the randomizer. Then, have a series of buttons, 2 - 10, that will set how many groups you would like to create. You will need to additionally create a generate button, that once a team size is selected, can be pressed to begin the team assigning process.

If the user clicks on the generate button without a team size selected, an alert should be presented, prompting the user to pick the number of teams they need to create.

As the group assignment is occurring, not only should the names appear in the group, but a group header should also be presented. You can get fancy with Team names, but ‘Team 1’, ‘Team 2’ and so on will work just fine as well.

Finally, if the generate button is hit again, a new randomization should occur, clearing out the old information.

Possible stretches for you on this assignment:
You may need to do a little research on how to shuffle the information.
Additionally, you may need to play with the .delay() jQuery method to time out the animations (hint: .delay(i * seconds) )

##Hard Mode
Add in an additional set of buttons that allows for team size, in addition to the set of buttons that figures out team amounts.

##Pro Mode
Write unit tests using QUnit.
