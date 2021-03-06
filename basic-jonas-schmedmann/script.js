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

//var firstName = 'John';
//var age = 16;

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
//var job = 'teacher';
//
//switch(job) {
//    case 'teacher':
//    case 'instructor':
//        console.log(firstName + ' teaches kids how to code.');
//        break;    
//    case 'driver':
//        console.log(firstName + ' drives an Uber in Dhaka.');
//        break;
//    case 'designer':
//        console.log(firstName + ' designs a beautiful websites.');
//        break;
//    default:
//        console.log(firstName + ' does something else.');
//}


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

// We can do above program using switch statement instead of if else condition
//age = 56;
//switch(false) {
//    case age < 13:
//        console.log(firstName + ' is a boy.');
//        break;
//    case age >= 13 && age < 20:
//        console.log(firstName + ' is a teenager.');
//        break;
//    case age <= 20 && age < 30:
//        console.log(firstName + ' is a young man.');
//        break;
//    default:
//        console.log(firstName + ' is a man.');
//}



/*********************
*Truthy and Falsy values and equality operators
*/
//falsy values: undefined, null, 0, '', NAN
//truthy values: NOT falsy values

//var height;
//
//height = 0;
//
//if (height || height === 0) {
//    console.log('Variable is defined');
//} else {
//    console.log('Variable has NOT been defined');
//}

//Equality operators
/*
var weight;

weight = 27;

if (weight == '27') {
    console.log('The == operator does type coercion');
} else {
    console.log('The == operator does not type coercion')
}

if (weight === '27') {
    console.log('The === operator does type coercion');
} else {
    console.log('The === operator doesn\'t type coercion');
}
*/

/*********************
*Functions
*/
//function calculateAge(birthYear) {
//    return 2020 - birthYear;
//}

/*
var ageJohn = calculateAge(1993);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' ' + 'already retired.');
    }
    
}

yearsUntilRetirement(1993, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/*********************
*Function statements and expressions
*/


// Function declaration
//function whatDoYouDo(job, firstName) {}

//Function expression
/*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        
        case 'driver':
            return firstName + ' drives a cab in Dhaka.';
            
        case 'designer':
            return firstName + ' designs beautiful websites.';
            
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/*********************
*Arrays
*/
/*
// Initialize new Array
var names = ['John', 'Mark', 'Jane'];
var year = new Array(1990, 1969, 1948);


console.log(names[1]);
console.log(names.length);

// Mutate Array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data type in Array

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('Blue');
john.unshift('Mr.');

john.pop();
john.pop();
john.shift();
john.shift();

console.log(john);


var jane = ['Mrs', 'Jane', 1994, 'Foster', 'Teacher', false, 'Pink'];
console.log(jane.indexOf(false));

var isDesigner = jane.indexOf('Designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

//console.log(isDesigner);
//if (jane.indexOf('Teacher') === -1) {
//    console.log('John is NOT a designer');
//} else {
//    console.log('John IS a designer');
//}
*/


/*********************
*Objects and properties
*/

/* Object literal */
/*
var john = {
    firstName : 'John',
    lastName : 'smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
}

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);
*/

/* Object mutation */
/*
john.job = 'designer';
console.log(john.job);
john.isMarried = true;
console.log(john.isMarried);

console.log(john.family);
*/

/* new Object syntax */
/*
var jane = new Object();

jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
*/

/*********************
*Objects and methods
*/

/*
var john = {
    firstName : 'John',
    lastName : 'smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    //This function expression is called method of "john" object 
    calcAge: function(birthYear) { 
        return 2020 - birthYear;
    }

};

console.log(john.calcAge(1993));
*/
 /*
var john = {
    firstName : 'John',
    lastName : 'smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    //This function expression is called method of "john" object
    calcAge: function() { 
        //Here "this" keyword means john which is used existing 'birthYear' value of john object
        return 2020 - this.birthYear;
    }

};

console.log(john.calcAge());
*/ 

/*
var john = {
    firstName : 'John',
    lastName : 'smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    //This function expression is called method of "john" object
    calcAge: function() { 
        //Here "this" keyword means john which is used existing 'birthYear' value of john object
        this.age = 2020 - this.birthYear;
    }

};

john.calcAge();
console.log(john);
*/

/*********************
*Loops and iteration
*/


//for loop
/*
for (var i = 0; i<=10; i += 2) {
    console.log(i);
}


var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}
*/

//while loop
/*
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}
*/


//continue and break statements
/*
var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++) {
    
    if (typeof john[i] !== 'string') {
        continue;
    }
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    
    if (typeof john[i] !== 'string') {
        break;
    }
    console.log(john[i]);
}
*/

/*
var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/


/* HOW JavaScript WORKS BEHIND THE SCENES */

//HOISTING
/*
calculateAge(1990);

function calculateAge(year) {
    console.log(2020 - year);
}
*/

//calculateAge(1990);
/*
var retirement = function(year) {
    console.log(65 - (2020 - year));
};

retirement(1956);
*/

//Variables
/*
console.log(age);
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}

foo();
console.log(age);
*/


//SCOPING
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/


//The This keyword

//console.log(this);

/*
calculateAge(1994);

function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        
        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984  
};

// Below is a example of the method borrowing
mike.calculateAge = john.calculateAge;

mike.calculateAge();





































