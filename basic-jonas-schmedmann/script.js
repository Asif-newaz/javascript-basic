// Now I have started working with Jonas Schmedtmann here
console.log('Hello World!');

/*
var firstName = 'John';
console.log(firstName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
*/

/*
var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. ' + 'Is he married? ' + isMarried);

//variable Mutation
age = 28;
job = 'Driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. ' + 'Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

//Basic operators
/*
var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math operator
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

//Logical operator
var johnOlder = yearJohn < yearMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
*/


//Operator precedence
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);
    
//Grouping Operator
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 -6 //32 -6 //26
console.log(x, y);

//More operators
x /= 2;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);
*/

//if else statement in Javascript
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' ' + 'is married!');
} else {
    console.log(firstName + ' ' + 'will hopefully marry soon!');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' ' + 'is married!');
} else {
    console.log(firstName + ' ' + 'will hopefully marry soon!');
}
























