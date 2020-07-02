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

/**********
*if else statement in Javascript
*/

/*
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
*/

/*********
*Boolean Logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age <= 20 && age < 30 ) {
    console.log(firstName + ' is a young man.');
}
else {
    console.log(firstName + ' is a man.');
}
*/


/**************
*The ternary operator and switch statement
*/

var firstName = 'John';
var age = 16;

/*
if (age >= 18) {
    console.log(firstName + ' dirnks beer.')
} else {
    console.log(firstName + ' drinks juice.')
}
*/

/*The ternary operator*/
/*
age >= 18 ? console.log(firstName + ' dirnks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'drinks beer' : 'drinks juice';
console.log(firstName + ' ' + drink);
*/
/*
if (age >= 18) {
    var drink = 'drinks beer';
} else {
    var drink = 'drinks juice';
}

console.log(firstName + ' ' + drink);
*/


/*Switch statement*/


























