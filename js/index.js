//1. Comments
//This is a comment. Comments are used to make others understand your code.
/*
    This
    is
    a
    multiline
    comment
*/
//--------------------------------------------------------------------------------------------------------------

//2. Console messages
//Print message to console. Open console at webbrowser(Firefox) via Ctrl+Shift+I and go to tab "Console"
console.log("I can't eat pizza! :(");
console.log("I know it's really good.");
//--------------------------------------------------------------------------------------------------------------

//3. Allerts
//Show allert at browser-window.
//window.alert("I REALLY WOULD LOVE TO EAT PIZZA!");
//--------------------------------------------------------------------------------------------------------------

//4. Variables (and constants)
//A variable is a container for storing simple data as numbers, sentences, letters, etc.
//A variable behaves as if it was the value that it contains.

//a) Declaration (var, let, const)
//b) Assignment(Definition) (= assignment-operator)

//To use let is best in terms of good programming behavior because variables declared with
//let can only be declared once at their scope, wjich means that we will get an error if we
//don't care about that rule.

//a)
let age;
console.log(age); //value of age is undefined, since we didn't assign any value to it.
//b)
age = 99; //age is now a variable from type "number".
console.log(age);

//a) + b)
let firstName = "WickedJack99"; //firstName is now a variable from type "string".
console.log(firstName);

//a) + b)
let student = true; //student is now a variable from type "boolean".
console.log(student);

//a) + b)
let age2 = "99";

//4.1 Differences between numbers and strings.
age = age + 1;
age2 = age2 + 1;
console.log(age);
console.log(age2);
//--------------------------------------------------------------------------------------------------------------

//5. Printing multiple strings together to console
//Using , instead of + automatically prints a whitespace behind the string.
//Using + to concatinate, doesn't print a whitespace behind the string.
console.log("Hello", firstName, "You are", age, "years old.");
console.log("Hello" + firstName + "You are" + age + "years old.");
//--------------------------------------------------------------------------------------------------------------

//6. Change text of html-element
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + student;
//--------------------------------------------------------------------------------------------------------------

//7.Arithmetic expressions
let students = 20;

//7.1 Addition
students = students + 1;
students++;
students += 2;
console.log(students);

//7.2 Subtraction
students = students - 1;
students--;
students -= 2;
console.log(students);

//7.3 Multiplication
students = students * 2;
students *= 2;
console.log(students);

//7.4 Division
students = students / 4;
students /= 4;
console.log(students);

//7.5 Modulus (Remainder of division)
students = students % 3;
students %= 3;
console.log(students);

//7.5.1 If number is even, number % 2 = 0
//7.5.2 If number is uneven, number % 2 != 0

/*  Operator pecedence
    1. Paranthesis ()
    2. Exponents ^2
    3. Multiplication and Division
    4. Addition and Subtraction
 */
//--------------------------------------------------------------------------------------------------------------

//8. Accept user input
//8.1 Easy way via prompt. Not very practical. Care that user input is at string datatype,
//so typeconversion may be needed.
//let username = window.prompt("What's your name?");
//console.log(username);
//8.2 
let username;
document.getElementById("myButton").onclick = function() {
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = username;
}
//--------------------------------------------------------------------------------------------------------------

//9. Typeconversion
//Change the datatype of a value to another. (strings, numbers, boolean)
let age3 = "23";
console.log(typeof age3);
age3 = Number(age3);
age3++;
console.log(age3);
console.log(typeof age3);

let y = String(3.14);
console.log(y);
console.log(typeof y);

//Useful to check if user entered some required input.
let z = Boolean(""); //empty string is converted to false
console.log(z);
console.log(typeof z);
z = Boolean("z"); //not empty string is converted to true
console.log(z);
console.log(typeof z);
//--------------------------------------------------------------------------------------------------------------

//10. const keyword
//A variable that can't be changed.
//Adds data security.
const pi = 3.14159;
let radius = 1;
let circumference;

//radius = window.prompt("Enter the radius of the circle.");
radius = Number(radius);
circumference = 2 * pi * radius;
console.log("The circumference is: " + circumference + " for radius: " + radius);
//--------------------------------------------------------------------------------------------------------------

//11. Math library
//Provides basic mathmatical functions for calculation and some built in constants.
//Functions
let x = 2.9;
x = Math.round(x); //rounds a number up or down
console.log(x);

x = Math.floor(7.9); //round number always down
console.log(x);

x = Math.ceil(7.1); //round number always up
console.log(x);

x = Math.pow(2,8); //pow(base, exponent) gives base to the power of exponent value
console.log(x);

x = Math.sqrt(9); //get squareroot of number
console.log(x);

x = Math.abs(-3); //returns absolute value from 0 (absolute value is always positive)
console.log(x);

let c = 5;
let d = 9;
let max;
let min;
max = Math.max(c,d); //get maximum out of array with numbers
min = Math.min(c,d); //get minimum out of array with numbers
console.log(max);
console.log(min);

//Constants
x = Math.PI; //pi
console.log(x);
x = Math.E; //e
console.log(x);
x = Math.SQRT2; //sqrt(2)
console.log(x);
//--------------------------------------------------------------------------------------------------------------

//https://youtu.be/8dWL3wF_OMw?t=2220