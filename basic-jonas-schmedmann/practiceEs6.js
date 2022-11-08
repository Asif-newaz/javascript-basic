// ES6 practice
// "use strict";

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

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// console.log(calcAverage(44, 23, 71));

// const checkWinner = (avgDolphins, avgKoalas) => {
//   return console.log(calcAverage(avgDolphins));

//   calcAverage(avgKoalas)
// };

// console.log(checkWinner(44, 23, 71));

// Object
// const david = {
//   age: 28,
//   zodiacSign: "Libra",
//   profession: "Software engineer",
//   address: "Nevada",
//   friends: ["Asif", "Morgan freeman", "Tom hanks", "Julia", "Russell crowe"],
// };

// console.log(david.friends[1]);

// Strict mode in javascript
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive 😂");

// const interface = "Jhakanaka Dh";
// console.log(interface);

// function foodProcessor(oranges, apples) {
//   console.log(
//     `There are ${oranges} oranges and ${apples} apples in the basket.`
//   );
//   document.querySelector(
//     ".heading-practice"
//   ).innerHTML = `There are ${oranges} oranges and ${apples} apples in the basket.`;
// }

// foodProcessor(2, 4);

// const cutFruitPieces = function (fruit) {
//   return fruit * 4;
// };

// const foodProcessor = (apples, oranges) => {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   return (document.querySelector(
//     ".heading-practice"
//   ).innerHTML = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`);
// };

// foodProcessor(2, 4);

// const arr1 = ["test", "actual", 1];

// console.log(arr1[0]);
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.length);
// console.log(newLength);

// const smartphone = ["Apple", "Google", "OnePlus", "Samsung", 26, arr1];

// console.log(smartphone.indexOf("Google"));
// const newLength = smartphone.push("Nokia");
// console.log(newLength);
// console.log(smartphone.includes("Huawei"));
// console.log(smartphone.includes("26"));

// if (smartphone.includes("Siemens")) {
//   console.log("Can you manage onePlus 9rt for me with reasonable price?");
// } else {
//   console.log("What brand of phones are available to you?");
// }

// const car = {
//   brandName: "Audi",
//   origin: "Germany",
//   model: "Q8",
//   launchDate: "2020 - 2022",
//   availableReleased: 2023,
//   type: "Auto",
//   keyPeople: [
//     "Dr. Manfred Döss",
//     "Peter Mosch",
//     "Rainer Schirmer",
//     "Irene Schulz",
//   ],
// };

// document.querySelector(".heading-practice").innerHTML = car.model;

// console.log(car.model);

// const nameKey = "Name";
// console.log(car["brand" + nameKey]);
// console.log(
//   `${car.brandName} is one of the best car brand in ${car.origin} and ${car.keyPeople[0]} is the man who did this.`
// );

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "Teacher",
//   friends: ["Micheal", "Peter", "Steven"],
//   hasDriverLicense: true,

// calcAge: function () {
//   console.log(this);
//   return 2037 - this.birthYear;
// },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   jonasSummary: function () {
//     const licenseCheck = this.hasDriverLicense ? "a" : "no";
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${licenseCheck} driver's license.`;
//   },
// };

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas.jonasSummary());

// Loop practice

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");

// for (let rep = 1; rep <= 5; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const david = [
//   "David",
//   28,
//   "Libra",
//   38,
//   "Software engineer",
//   "Nevada",
//   ["Asif", "Morgan freeman", "Tom hanks", "Julia", "Russell crowe"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < david.length; i++) {
//Reading from david array
// console.log(david[i], typeof david[i]);

//Filling types array
//   types[i] = david[i];
// }

// console.log(types);

// const years = [1991, 1994, 2007, 1959, 1912];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   function ageCalc() {
//     return 2037 - years[i];
//   }

//   //   ages[i] = ageCalc();
//   ages.push(ageCalc());
// }

// console.log(ages);

//continue and break
// console.log(`--ONLY STRING--`);

// for (let i = 0; i < david.length; i++) {
//   if (typeof david[i] !== "string") continue;

//   console.log(david[i], typeof david[i]);
// }

// console.log(`--BREAK WITH NUMBER--`);
// for (let i = 0; i < david.length; i++) {
//   if (typeof david[i] === "number") break;

//   console.log(david[i], typeof david[i]);
// }

// const jonas = [
//   "Jonas",
//   "schmedtmann",
//   31,
//   "Software engineer",
//   "Nevada",
//   ["Asif", "Morgan freeman", "Tom hanks", "Julia", "Russell crowe"],
//   true,
// ];

// console.log(jonas);

// for (let i = jonas.length; i >= 0; i--) {
//   console.log(jonas[i]);
// }

//While loop
// let i = 0;

// while (i <= 3) {
//   console.log(`${i} while loop running on...`);
//   i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You ruled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;

//   if (dice === 6) {
//     console.log("Loop is about to end...");
//   }
// }

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `Your name is ${firstName}. And you are ${age} years old, born in ${birthYear}.`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = "David";
calcAge(1994);
// document.querySelector(".heading-practice").textContent = calcAge(1994);
