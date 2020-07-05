/*****************************
* CODING CHALLENGE 1
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

// Solved normal way
/*
var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;


var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

//Solved challenge 1 using if else condition
/*
var massMark = 78; //kg
var heightMark = 1.69; //meters

var massJohn = 92;
var heightJohn = 1.95;


var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s');
} else {
    console.log('John\'s BMI is higher than Mark\'s');
}
*/



/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team

2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.

3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnFirstGame = 189;
var johnSecondGame = 141;
var johnThirdGame = 103;

var johnScore = ((johnFirstGame + johnSecondGame + johnThirdGame) / 3);

console.log(johnScore);


var mikeFirstGame = 150;
var mikeSecondGame = 94;
var mikeThirdGame = 123;

var mikeScore = ((mikeFirstGame + mikeSecondGame + mikeThirdGame) / 3);

console.log(mikeScore);

var maryFirstGame = 97;
var marySecondGame = 134;
var maryThirdGame = 102;

var maryScore = ((maryFirstGame + marySecondGame + maryThirdGame) / 3);

console.log(maryScore);

if (johnScore > mikeScore && johnScore > maryScore) {
    console.log('John\'s Team is winner');
} else if ( maryScore > mikeScore && maryScore > johnScore) {
    console.log('mary\'s Team is winner');
} else if (maryScore < mikeScore && mikeScore > johnScore) {
    console.log('Mike\'s Team is winner');
} else {
    console.log('The game is drawn');
}


























