// ES6 practice

// const now = 2037;
// const ageDavid = now - 1994;
// const ageSarah = now - 2018;

// console.log(ageDavid, ageSarah);

// let x = 10 + 5;
// x += 5;
// x *= 4;
// x++;
// x--;
// x--;
// console.log(x);

// console.log(ageDavid < ageSarah);
// console.log(ageSarah >= 18);

// const fullAddress = {
//   name: "Asif",
//   profession: "Job",
//   address: {
//     village: "Sonmania",
//     district: "Gazipur",
//   },
// };

// console.log(fullAddress.address?.village);
// console.log(fullAddress.credentials?.district);
// console.log(fullAddress.occupation);

// Coding challenge 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// console.log(bmiMark);
// console.log(bmiJohn);

// const markHigherBmi = bmiMark > bmiJohn;
// console.log("Mark has a higher BMI than John" + " " + markHigherBmi);

// const firstName = "David";
// const job = "Programer";
// const age = 2037 - 1991;

// console.log("I'm" + " " + firstName + ", a " + age + " years old " + job);
// console.log(`I'm ${firstName}, a ${age} years old ${job}`);

// Coding challenge 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBmi = bmiMark > bmiJohn;

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`);
// } else {
//   console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`);
// }

// Javascript type conversion
// const inputYear = "1994";
// console.log(Number(inputYear) + 30);

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// Javascript type coercion
// console.log("I am " + 23 + " years old.");
// console.log("I am " - 23 - " years old.");

// let n = '1' + 1;
// n = n - 1;

// console.log(n);

// Truthy and Falsy values
// Falsy values in javascript: 0, '', undefined, null, NaN
// All other values are Truthy except Falsy values

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
// console.log(Boolean(false));

// console.log(Boolean("Newaz"));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all;");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YaY! Height is defined");
// } else {
//   console.log("Height is not defined");
// }

// Logical operator
// const hasDriversLicense = true;
// const hasGoodVision = false;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// const isTired = false;

// if (hasDriversLicense && hasGoodVision && isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// Challenge 3
// const averageDolphinsScores = (96 + 108 + 89) / 3;
// const averageKoalasScores = (88 + 91 + 110) / 3;

// if (
//   averageDolphinsScores > averageKoalasScores &&
//   averageDolphinsScores >= 100
// ) {
//   console.log(`Dolphins wins with ${averageDolphinsScores} score!`);
// } else if (
//   averageDolphinsScores < averageKoalasScores &&
//   averageKoalasScores >= 100
// ) {
//   console.log(`Koalas wins with ${averageDolphinsScores} score!`);
// } else if (
//   averageDolphinsScores === averageKoalasScores &&
//   averageKoalasScores >= 100 &&
//   averageDolphinsScores >= 100
// ) {
//   console.log("The game is drawn!");
// } else {
//   console.log("No team wins the trophy");
// }

// console.log(averageDolphinsScores, averageKoalasScores);

// const day = "Sunday";

// switch (day) {
//   case "Saturday":
//     console.log("Plans weekly tasks");
//     break;
//   case "Sunday":
//   case "Monday":
//     console.log("Try to finish all of the major tasks");
//     break;
//   case "Tuesday":
//     console.log("Make sure to complete most of the tasks");
//     break;
//   case "Wednesday":
//     console.log("Finish all of the small and major tasks");
//     break;
//   case "Thursday":
//     console.log("Prepare for sprint meeting!");
//     break;
//   default:
//     console.log("Not a working day");
// }

// Coding challenge

// const billValue = 275;

// const tip =
//   billValue >= 50 && billValue <= 300
//     ? (15 / 100) * billValue
//     : (20 / 100) * billValue;

// console.log(
//   `The bill was ${billValue}, the tip was ${tip}, and the total value ${
//     billValue + tip
//   }`
// );

// const cutPieces = function (fruit) {
//   return fruit * 4;
// };

// const fruitProcessor = function (apple, orange) {
//   const applePieces = cutPieces(apple);
//   const orangePieces = cutPieces(orange);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;

//   return juice;
// };

// console.log(fruitProcessor(5, 3));

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 60 - age;

//   if (retirement > 0) {
//     return `${firstName} retires in ${retirement} years.`;
//   } else {
//     return `${firstName} has already retired.`;
//   }
// };

// console.log(yearsUntilRetirement(1994, "Sara"));
// console.log(yearsUntilRetirement(1952, "Rita"));

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

console.log(calcAverage(44, 23, 71));

