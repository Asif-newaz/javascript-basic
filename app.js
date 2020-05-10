// Alert function in Javascript
var name = "World!";
window.alert("Hello" + name);

var a = 2;
var b = 3;

var sum = (a + b);

document.write(sum);
//input in javascript
            //   var a = prompt("Enter a value: ");
            //   document.write(a);

    // case statement in javascript
    // var day = 3;
    // switch(day) {
    //     case 1:
    //     document.write("Friday");
    //     break;
    //     case 2:
    //     document.write("Saturday");
    //     break;
    //     case 3:
    //     document.write("Sunday");
    //     break;
    // }


            // for (i = 0; i < 5; i++) {
            //     if (i > 3) {
            //         break;
            //         // document.write(i)
            //     }
            //     document.write(i);
            //     document.write("<br>");
            // }

            // var i = 0;
            // do{
            //    document.write(i);
            //    i++;
            //    document.write("<br>");
            // } while(i < 5);

            // var i = 0;
            // while(i < 10) {
            //     document.write(i);
            //     i++;
            //     document.write("<br>")
            // }

            // var i = 0;
            // do {
            //     document.write("<strong>Outer Loop: </strong>");
            //     document.write(i);
            //     i++;
            //     document.write("<br>");

            //     var j = 0;
            //     do{
            //         document.write("Inner Loop: ");
            //         document.write(j);
            //         j++;
            //         document.write("<br>");
            //     }while(j < 5);

            // }while(i < 3);

            // for(i = 1; i <= 10; i++) {
            //     if (i === 8) {
            //         continue;
            //     }
            //     document.write(i);
            //     document.write("<br>");
            // }

            // function display() {
            //     /*document.write(arguments[0], arguments[1], arguments[2]);
            //     document.write(arguments.length);*/
            //     for (i = 0; i < arguments.length; i++) {
            //         document.write(arguments[i] + " ");
            //     }

            // }

            // display("Welcome to", "my world", "!");

            //arguments object
            /*
    function add(a, b) {
        document.write(a + b + arguments[2] + arguments[3]);
    }
    add(10, 20, 30, 40);
    function addArrayInFunction(a, b = ["Good", "Bad"]) {
        document.write(a + "<br>" + b[0] + "<br>" + b[1]);
    }
    addArrayInFunction(20, ["Best", 3]);
*/

            //rest parameter
            /*
    function show(a, b, ...args) {
        document.write(a);
        document.write("<br>");
        document.write(args[0]);
    }
    show(1, 3, 4, 5, 6, 10);
*/

            //rest parameter vs arguments object
            /*
    function restShow(a, ...args) {
        console.log(args);
        console.log(a);
    }
    restShow(1, 2, 3, 4, 5);
    function show(a) {
        console.log(arguments);
        console.log(a);
    }
    show(20, 30, 40, 50, 60);
*/

            // return value in function
            /*function add(a, b) {
        return (a + b);
    }
    document.write(add(20, 30) + "<br>");
    document.write(add(23, 30) + "<br>");
    document.write(add(26, 30) + "<br>");
*/

            // Local Scope and Global scope
            /*       function outerFunction() {
        i = "I a global variable of outer function"
        var j = "J a local variable of outer function";
        document.write(j + "<br>");
        function innerFunction() {
            var k = "K a local variable of inner function";
            document.write(k + "<br>");
            document.write(j)
        }
        innerFunction();
    }
    outerFunction();
*/

            //block scope in javascript
            //In javascript we can access a local variable outside of block statement
            //But other language it can not possible
            /*
if (true) {
    j = 15;
    var i = 10;
    document.write(i + "<br>" + "<br>");
}

document.write(i + "<br>");
document.write(j)
*/

            //If we use let and const then we can't access outside of block statement
            /*
if (true) {
    const i = 10;
    j = 15;
    document.write(i + "<br>" + "<br>");
    document.write(i + "<br>" + "<br>");
}

document.write(i + "<br>");
document.write(j);
*/

            //variable hoisting
            /*
var a = 10;
document.write(a + "<br>" + b);
var b = 20;
*/

            //actually javascript work like this way
            /*
var a;
var b;
a = 10;
document.write(a + "<br>" + b);
b = 20;
*/

            //variable hoisting in function
            /*
var i = "Hello";
document.write(i + "<br>" + "<br>");

function show() {
    document.write(i + "<br>" + "<br>");
    var i = "JavaScript";
    document.write(i);
}
show();
*/

            //anonymous function
            /*
var disp = function() {
    document.write("I am anonymous function");
};
disp();
*/

            //passing anonymous function as a argument
            /*
function display(myfun) {
    return myfun();
}

document.write(display(function() {
    return "Hello JavaScript"
}));
*/

            //returning anonymous function
/*            
function disp(a) {
    return function(b) {
        return a + b;
    };
}

var af = (disp(10));
document.write(af(20));
*/

            //function expression
            /*
var myfun1 = function disp() {
    document.write("Hello, I am function expression");
}
myfun1();
*/

            //Anonymous function
            /*
var myfun2 = function() {
    document.write("Hello, I am anonymous function");
}
myfun2();
*/

            //Arrow function
            /*
var myfun = () => {
    document.write("Hello, I am Arrow function");
}
myfun();
*/

            //Difference between var and let
            /*
function myVar() {
    var a = 10;
    if (true) {
        var a = 20;
        document.write(a + "<br>");
    }
    document.write(a + "<br>" + "<br>");
}
myVar();

function myLet() {
    let b = 30;
    if (true) {
        let b = 40;
        document.write(b + "<br>");
    }
    document.write(b);
}
myLet();
*/

            //Object in javaScript
            // let fees = {};
            /*
fees['Lena'] = 100;
fees['Rita'] = 200;
fees['David'] = 300;
fees["Super Man"] = 400;
document.write(fees['Rita']);
*/
            /*
fees.Lena = 100;
fees.Rita = 200;
fees.David = 300;
document.write(fees.Rita);
*/

            //Method in javaScript
            //When we write a function inside an object then this function is method
            /*
var fees = {};
fees.Lena = 100;
// fees.Rita = 200;
// fees.David = 300;
fees.total = function() {return (100+200);};

document.write(fees.total());
*/
            /*
var fees = {
    Lena: 100,
    Rita: 200,
    David: 300,
    total: function() {
        return (100 + 200 + 300)
    }
}
document.write(fees.total());
*/

            //Object constructor in JavaScript
            /*
var fees = new Object();
fees.Lena = 200;
fees.Rita = 300;
fees.David = 400;
fees.total = function () {return (200 + 300 + 400);};
document.write(fees.total());
*/

            //Add properties in object
            /*
var fees = {
    Lena: 100,
    Rita: 200,
    David: 300,
    total: function() {
        return (100 + 200 + 300)
    }
}
delete fees.David;
fees.Lia = 500; //This object added later
fees.show = function (){return (100 + 200 + 300+ 500)} //This method added later

// document.write(fees);
document.write(fees.Lena + "<br>" + " " + fees.Rita + "<br>" + " " + fees.David + "<br>" + " " + fees.Lia + "<br>" + "<br>");

console.log(fees.Lena + " " + fees.Rita + " " + fees.Lia + "<br>");

document.write(fees.show());
*/

            //Factory function in JavaScript
            /*
function mobile () {
    return {
        model: "Model: iphone XL",
        price: function() {
            return ("Price: 950$");
        }
    };
}

// var apple = mobile();
var samsung = mobile();
// document.write(apple.model + "<br>" + "<br>" + apple.price());
// document.write(samsung.model + "<br>" + "<br>" + samsung.price());
document.write(samsung.model);
*/

            //Simple program using factory function
            /*
function mobile(model_no) {
    return {
        model: model_no,
        price: function(price_value) {
            return price_value;
        }
    };
}

let apple = mobile("Model: iphone XL");
let samsung = mobile("Model: Galaxy Fold");
let nokia = mobile("Model: Lumia 630");

document.write(apple.model + "<br>" + apple.price("Price is 950$") + "<br>");
document.write("<br>" + "<br>");
document.write(samsung.model + "<br>" + samsung.price("Price is 750$"));
document.write("<br>" + "<br>");
document.write(nokia.model + "<br>" + nokia.price("Price is 250$"));
*/

            //Simple program using Constructor
            /*
function Mobile(model_no) {
    this.model = model_no;
    this.price = function(price_value) {
        document.write(this.model + "<br>" + price_value +"<br>");
    }
}

var nokia = new Mobile("3310");
nokia.price("Price: 50$");
let apple = new Mobile("iphone XL");
apple.price("Price: 970$")
*/

            //How to check object properties using this and typeof keyword in javaScript
            /*
function Mobile (model_no) {
    this.model = model_no;
    this.price = function() {
        document.write(this.model + "<br>" + price_value + "<br>");
    };
    // this.memory = "4GB";
    
}

var samsung = new Mobile("Galaxy");
var apple = new Mobile("iphone XL");
if (typeof apple.memory !== 'undefined') {
    document.write("Available");
} 
else {
    document.write("Doesn't exist");
}
*/

            // How to check object properties using in keyword in JavaScript
            /*
function Mobile (model_no) {
    this.model = model_no;
    this.price = function() {
        document.write(this.model + "<br>" + price_value + "<br>");
    };
    this.memory = "4GB";
    
}

var samsung = new Mobile("Galaxy");
var apple = new Mobile("iphone XL");
if ("memory" in apple) {
    document.write("Available");
} 
else {
    document.write("Doesn't exist");
}
*/

            // forEach method in JavaScript
            /*
let fruits = ["Apple", "Orange"];
fruits.forEach(function(value, index, arr) {
    document.write(index + `:` + value + `<br>` + `<br>`);
    // document.write(arr);
})
*/

            // indexOf method in array in javaScript
            /*
let nameIndex = ["Rita", "Lea", "David", "William", "Sarah", "Rita"];

let getName = nameIndex.indexOf("Rita", 2); // let getName = nameIndex.indexOf(item, start);
document.write(getName);
*/

            // slice method in javascript
            /*
let nameSlice = ["Rita", "Lea", "David", "William", "Sarah"];

let getName = nameSlice.slice(3, 5); // let getName = nameIndex.indexOf(start, end);
document.write(getName  + "<br>");

let getNameNegative = nameSlice.slice(-4, -1);
document.write(getNameNegative);
*/

            // indexOf method in JavaScript

            // let str = "I am string";

            // let getIndexOfString = str.replace( "am", "was");
            // document.write(getIndexOfString);

            // trim and toUpperCase method
            /*
const s = ["  I", "am   ", " ", " Asif "];

const x = s.map(word => {
    return word.trim().toUpperCase();
} );
console.log(x);
*/

            // array
            // let arrOne = [1, 2, 3, 4, 5, 6];
            // let arrTwo = [6, 5, 4, 3, 2, 1];

            // let targetValue = 10;

            // let a = arrOne[0] + arrTwo[0];
            // let b = arrOne[1] + arrTwo[1];
            // let c = arrOne[2] + arrTwo[2];
            // let d = arrOne[3] + arrTwo[3];
            // let e = arrOne[4] + arrTwo[4];
            // let f = arrOne[5] + arrTwo[5];

            // console.log(a, b, c, d, e, f);
            // document.write(a, b, c, d, e, f);

            //   for (let i = 0; i <= 3; i++) {
            //       // document.write("*" + "<br>");
            //       for (let j = 3; j >= i; j--) {
            //           document.write("* &nbsp;");
            //       }
            //       document.write("<br>");
            //   }

            // for (let i = 0; i <= 5; i++) {
            //   document.write("* &nbsp" + "<br>");

            //   for (let j = 0; j <= 5; j++) {
            //     document.write("# &nbsp" + "<br>");
            //   }
            // }

            // const max = 7;
            // let spaces = max / 2;
            // for (let i = 1; i <= max; i += 2) {
            //   for(let k = spaces; k >= 1; k--) {
            //     document.write(' ')
            //   }
            //   for(let j = 1; j<= i; j++) {
            //     document.write('*')
            //   }
            //   document.write('<br />')
            //   spaces--;
            // }

            /*
const max = 7;
let spaces = 0;

for (let i = 1; i <= max; i++) {
    for (let k = 1; k <= spaces; k++) {
        document.write(" ");
    }
    for (let j = max; j >= i; j--) {
        document.write("*");
    }
    document.write("<br>");
    spaces++;
}
*/

            // let name = (a, b) => {
            //     return a + b;
            // }

            // document.write(name(2,4));

            // for (let i = 1; i <= 5; i++) {
            //     document.write(i + "<br />");
            // }

/*
const max = 7;
let spaces = 0;

for (let i = 1; i <= max; i++) {
    for (let k = 1; k <= spaces; k++) {
        document.write(" ");
    }
    for (let j = max; j >= i; j--) {
        document.write("*");
    }
    document.write("<br>");
    spaces++;
}
*/

/*
let radius = 7;
const pi = 3.14159;

let areaOfCircle = pi * (radius * radius);

document.write(areaOfCircle + " Sq inch");
*/

/*
let usdToBdt = 84.52;
let bdt = 5000;
let usd = bdt / usdToBdt;
document.write("$" + usd);
*/

// let x;
// let y = 4;

// x = y++;

// document.write(" x = " + x, "<br />" + "y = " + y, "<br />" + "<br />");

// let a;
// let b = 7;

// a = b++;
// document.write(" a = " + a, "<br />" + "b = " + b);