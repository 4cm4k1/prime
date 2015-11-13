# prime_solo_jq_01
The first weekend assignment!

Let's recap the entire week! This challenge will use *all of the things* that you have learned this week, and perhaps a little more. You will be building a system that manages employee information.

Make a form that can capture and store employee information:

- First Name
- Last Name
- Employee Number
- Title
- Last Review Score
- Salary 

Store that information in an object.

Then, with that information captured, construct a list of the most current employee information. Meaning that there should be a full list of employees represented on the screen.

In addition to the employee information add a 'remove' button next to each employee's information. Clicking the 'remove' button will remove that specific employee from the DOM.

In the review score section, implment some sort of color indicator based on their review. The employee reviews should only be able to be 1 - 5. 5 would indicate a good score, 1 would be poor. The way you display this is up to you. 

Some potential methods of implementing the color indicator are:

- highlighting the entire `li` or `div` that the employee information is in
- or adding a different colored number for each score as it is displayed.

The system need not persist when the page refresh. Meaning that a page refresh will reload the entire screen. 

Your solution should be as visually appealing as possible, and there will be some consideration of styling when you submission is reviewed. Just using the base styles isn't enough.

## Hard Mode (Optional)
Include a button to generate a completely random employee. As one more step of hard mode, alphabetically sort the employees in the generated list.

## Pro Mode (More Optional)
Include a section at the top of the page that totals the salaries of all the employees (Hint: the trick will be what happens when you remove an employee).
