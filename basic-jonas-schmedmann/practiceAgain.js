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

// var firstName = "John";
// var age = 18;

// var drink = age >= 18 ? firstName + " drinks beer" : firstName + " drinks juice";
// console.log(drink);

// var job = "constructor";

// switch (job) {
//   case "teacher":
//   case "constructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber in Dhaka.");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// var age = 24;

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a boy");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager");
//     break;
//   case age >= 20 && age <= 30:
//     console.log(firstName + " is a young man");
//     break;
//   default:
//     console.log(firstName + " is a man");
// }

// Falsy Values: undefined, 0, ' ', null, NaN
// Truthy Values: Not falsy values

// var height;
// height = NaN;

// if (height) {
//   console.log("variable is defined");
// } else {
//   console.log("variable has not been defined");
// }

// var x = '0';

// if (x == 0 ) {
//   console.log('The == operator does type coercion!')
// } else {
//   console.log('The === operator does not type coercion')
// }

// Challenge 2
// var firstTeam,
//   secondTeam,
//   thirdTeam,
//   johnFirstGame,
//   johnSecondGame,
//   johnThirdGame,
//   mikeFirstGame,
//   mikeSecondGame,
//   mikeThirdGame,
//   maryFirstGame,
//   marySecondGame,
//   maryThirdGame;

// firstTeam = "John's";
// secondTeam = "Mike's";
// thirdTeam = "Mary's"

// johnFirstGame = 89;
// johnSecondGame = 120;
// johnThirdGame = 103;

// var johnTeamAverage = (johnFirstGame + johnSecondGame + johnThirdGame) / 3;

// mikeFirstGame = 97;
// mikeSecondGame = 134;
// mikeThirdGame = 105;

// var mikeTeamAverage = (mikeFirstGame + mikeSecondGame + mikeThirdGame) / 3;

// maryFirstGame = 97;
// marySecondGame = 134;
// maryThirdGame = 105;

// var maryTeamAverage = (maryFirstGame + marySecondGame + maryThirdGame) / 3;

// console.log(
//   firstTeam + " score is " + johnTeamAverage,
//   secondTeam + " score is " + mikeTeamAverage
// );

// if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
//   console.log(
//     firstTeam + " team wins! " + " And the average score is " + johnTeamAverage
//   );
// } else if (
//   mikeTeamAverage > johnTeamAverage &&
//   mikeTeamAverage > maryTeamAverage
// ) {
//   console.log(
//     secondTeam + " team wins! " + " And the average score is " + mikeTeamAverage
//   );
// } else if (
//   maryTeamAverage > johnTeamAverage &&
//   maryTeamAverage > mikeTeamAverage
// ) {
//   console.log(
//     thirdTeam + " team wins! " + " And the average score is " + maryTeamAverage
//   );
// } else {
//   console.log("The game has been drawn!");
// }

// Function declaration
// function calculateAge(birthYear) {
//   return 2021 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1991);
// var ageJane = calculateAge(1992);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

// Normal if else condition
// if (retirement > 0) {
//   console.log(firstName + " retires in " + retirement + " years.");
// } else {
//   console.log(firstName + " already retired.");
// }

// Ternary operator
//   retirement > 0
//     ? console.log(firstName + " retires in " + retirement + " years.")
//     : console.log(firstName + " already retired.");
// }

// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1944, "Mike");
// yearsUntilRetirement(1995, "Jane");

// Function expression
// var whatDoYouDo = function (job, firstName) {
// if (job === "teacher") {
//   return firstName + " teaches kids how to code.";
// } else if (job === "driver") {
//   return firstName + " drive a cab in Dhaka.";
// } else if (job === "designer") {
//   return firstName + " designs a beautiful websites.";
// } else {
//   return firstName + " does something else.";
// }

//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code.";
//     case "driver":
//       return firstName + " drive a cab in Dhaka.";
//     case "designer":
//       return firstName + " designs a beautiful websites.";
//     default:
//       return firstName + " does something else.";
//   }
// };

// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("retired", "Mark"));
// console.log(whatDoYouDo("designer", "Jane"));

// Array
// var names = ["John", "Mark", "Jane"];
// var years = new Array(1990, 1993, 1989);

// names[1] = "Mike";
// names[names.length] = "Mary";
// console.log(names);
// console.log(names.length);
// console.log(years[0]);

// Different data types in an Array
// var john = ["John", "Smith", 1990, "Teacher", false];

// john.push("black");
// john.unshift("Mr.");
// john.pop();
// john.shift();
// console.log(john);

// var x = john.indexOf("Smith");
// console.log(x);

// var isDesigner =
//   john.indexOf("Designer") === -1
//     ? "John is NOT a designer"
//     : "John is Designer";

// console.log(isDesigner);

// Challenge 3
// function tipCalculator(bill) {
//   if (bill < 50) {
//     return (20 / 100) * bill;
//   } else if (bill >= 50 && bill <= 200) {
//     return (15 / 100) * bill;
//   } else {
//     return (10 / 100) * bill;
//   }
// }

// var bills = [124, 48, 268];

// var tipOne = tipCalculator(bills[0]);
// var tipTwo = tipCalculator(bills[1]);
// var tipThree = tipCalculator(bills[2]);

// var Tips = [tipOne, tipTwo, tipThree];
// var totalBill = [Tips[0] + bills[0], Tips[1] + bills[1], Tips[2] + bills[2]];

// console.log(Tips, totalBill);

// Object
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   isMarried: false,
//   23: "It is a number",
// };

// console.log(john.family);
// console.log(john[23]);

// john.birthYear = 1993;
// john["isMarried"] = true;
// john.sibling = "Natalie";

// console.log(john);

// var jane = new Object();

// jane.firstName = "Jane";
// jane.lastName = "Foster";
// jane.birthYear = 1994;

// console.log(jane);

// Object and method
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1992,
//   family: ["Jane", "Mark", "Bob", "Emily"],
//   isMarried: false,
//   23: "It is a number",
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//   },
// };

// john.calcAge();

// console.log(john);

// Challenge 4

// var mark = {
//   fullName: "Mark Miller",
//   mass: 84,
//   height: 1.68,
//   calculateBmi: function () {
//     return (this.bmi = this.mass / (this.height * this.height));
//   },
// };

// console.log(mark.calculateBmi());
// var markBmi = mark.calculateBmi();
// console.log(mark);

// var john = {
//   fullName: "John Smith",
//   mass: 74,
//   height: 1.75,
//   calculateBmi: function () {
//     return (this.bmi = this.mass / (this.height * this.height));
//   },
// };

// console.log(mark.calculateBmi());
// var johnBmi = john.calculateBmi();
// console.log(john);

// if (markBmi > johnBmi) {
//   console.log(mark.fullName + " BMI is higher than " + john.fullName);
// } else if (johnBmi > markBmi) {
//   console.log(john.fullName + " BMI is higher than " + mark.fullName);
// } else {
//   console.log("Both are same BMI");
// }

// var john = ["John", "Smith", 1990, "Teacher", false, "Crimson"];

// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// var i = 0;

// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// var john = ["John", "Smith", 1990, "Teacher", false, "Crimson"];

// for (var i = 0; i < 10; i++) {
//   if (typeof john[i] !== "string") continue;

//   console.log(john[i]);
// }

// for (var i = 0; i < 10; i++) {
//   if (typeof john[i] === "string") break;

//   console.log(john[i]);
// }

// for (var i = john.length - 1; i <= john.length; i--) {
//   if (i === -1) break;
//   console.log(john[i]);
// }

// Challenge 5
var john = {
  bills: [124, 48, 268, 180, 42],
  tipCalculator: function (bills) {
    for (var i = 0; i <= this.bills.length; i++) {
      if (bills < 50) {
        return (20 / 100) * bills;
      } else if (bills >= 50 && bills < 200) {
        return (15 / 100) * bills;
      } else {
        return (10 / 100) * bills;
      }
    }
  },
  tips: [],
  billAndTips: []
};

console.log(john.tipCalculator(john.bills[1]));
