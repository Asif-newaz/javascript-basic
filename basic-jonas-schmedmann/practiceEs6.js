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
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBmi = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`);
} else {
  console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`);
}
