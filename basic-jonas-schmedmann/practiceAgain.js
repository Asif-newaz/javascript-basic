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
// var weightMark = 97;
// var heightMark = 1.8;
// var weightJohn = 75;
// var heightJohn = 1.6;

// var bmiMark = weightMark / (heightMark * heightMark);
// var bmiJohn = weightJohn / (heightJohn * heightJohn);

// if (bmiMark > bmiJohn) {
//   console.log("Mark's BMI is higher than John's.");
// } else {
//   console.log("John's BMI is higher than Mark's.");
// }

// if else condition
// var firsName = "Asif";
// var civilStatus = "single";

// if (civilStatus === "married") {
//   console.log(firsName + " is married!");
// } else {
//   console.log(firsName + " will marry soon!!!");
// }

// var isMarried = false;

// if (isMarried) {
//   console.log(firsName + " is married!");
// } else {
//   console.log(firsName + " will marry soon!!!");
// }

// var firstName = "John";
// var age = 20;

// if (age < 13) {
//   console.log(firstName + " is a boy");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager");
// } else if (age >= 20 && age <= 30) {
//   console.log(firstName + " is a young man");
// } else {
//   console.log(firstName + " is a man");
// }

var firstName = "John";
// var age = 18;

// var drink = age >= 18 ? firstName + " drinks beer" : firstName + " drinks juice";
// console.log(drink);

var job = "constructor";

switch (job) {
  case "teacher":
  case "constructor":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console.log(firstName + " drives an uber in Dhaka.");
    break;
  case "designer":
    console.log(firstName + " designs beautiful websites.");
    break;
  default:
    console.log(firstName + " does something else.");
}

var age = 20;

switch(false) {
  case (age < 13):
    console.log(firstName + " is a boy");
    break;
  case (age >= 13 && age < 20):
    console.log(firstName + " is a teenager");
    break;
  case (age >= 20 && age <= 30):
    console.log(firstName + " is a young man");
    break;
  default:
    console.log(firstName + " is a man");
}