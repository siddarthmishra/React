// import { apiKey } from "./util.js";

// import apiKey from "./util.js"; // way to import export default

// import { another_apikey, abc } from "./util.js";
// we can also change the variable name using 'as'
// import { another_apikey, abc as ABC } from "./util.js";

// way to import all from a file i.e grouping under a common name
import * as util from "./util.js"

// console.log(apiKey + " - " + another_apikey + " - " + abc);
// console.log(apiKey + " - " + another_apikey + " - " + ABC);
console.log(util.default + " - " + util.another_apikey + " - " + util.abc);

let userMessage = "I am Siddarth."
// this is const. This can't be reassigned. It is a read-only (final)
const welcomeMessage = "Welcome to the course.";
// welcomeMessage = "reassing";
console.log("Hello World!!!" + userMessage);
console.log("\"10\" == 10 - " + ("10" == 10));
console.log("\"10\" === 10 - " + ("10" === 10));
console.log("10 == 10 - " + (10 == 10));
console.log("10 === 10 - " + (10 === 10));

// defining function
function greet(message = "default value") {
    console.log("Invoking function greet - " + message);
}
// invoking function
greet(userMessage);
greet();
greet();
function greetTwo(message) { 
    console.log("Invoking function greetTwo - " + message);
}
greetTwo();

function returnValue() {
    return ("This is the returned value");
}
const returnedValue = returnValue();
console.log(returnedValue);
// arrow function or anonymous function
export default () => console.log("Default anonymous function");


(param1, param2) =>  param1 + " " + param2; // returns concatination of both params

// objects
const user = {
    name: "Siddarth",
    age: 30,
    newFunction() {
        console.log("function inside object - " + this.name + " - " + this.age);
    }
};

console.log(user);
console.log(user.name);
user.newFunction();

// we can also create object using class
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    newFunction() {
        console.log("function inside class ");
    }
}

const user1 = new User("Siddarth", "30");
console.log(user1);
user1.newFunction();

// arrays
const hobbies = ["Chess", "Coding", "Cricket"];
console.log(hobbies[0]);
hobbies.push("Chilling");

const index = hobbies.findIndex(item => item === "Cricket");
console.log("Index - " + index);

// convert to upper case
const hobbiesUpperCase = hobbies.map(item => item.toUpperCase());
console.log(hobbiesUpperCase);

// we can also convert to JavaScript Object
const jsObject = hobbies.map(item => ({hobby: item}));
console.log(jsObject);