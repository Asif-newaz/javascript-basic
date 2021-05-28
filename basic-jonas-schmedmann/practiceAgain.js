// Want to practice again

// var firstName = 'John';
// var lastName = 'smith';
// var age = 28;

// console.log('My name is ' + firstName + ' ' + lastName +'.' + `I'm ` + age + 'years old.');

/* Variable mutation and type coercion */

// var job, isMarried;

// job = 'teacher'
// isMarried = false;

// console.log(job, isMarried)

// Operator precedence
// var now = 2021;
// var john = 2008;
// var fullAge = 20;

// var isFullAge = now - john >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - john;
// var markAge = 30;
// var average = (ageJohn + markAge) / 2;
// console.log(average);

// Challenge 1
var weightMark = 87;
var heightMark = 1.8;
var weightJohn = 75;
var heightJohn = 1.6;

var bmiMark = weightMark / (heightMark * heightMark);
var bmiJohn = weightJohn / (heightJohn * heightJohn);

var bmiComparison = bmiJohn < weightMark;

console.log("Is mark's BMI higher than John's?" + " ", bmiComparison);
