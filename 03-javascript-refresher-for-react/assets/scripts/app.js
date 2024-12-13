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


// Destructuring - Example
// we have an array of first name and last name. We can extract like below and continue to use.
const userName = ["Siddarth", "Mishra"];
const firstName = userName[0];
const lastName = userName[1];

// Or else we can use as below, the shorter format.
// On the right side, the array is created as usual and on the left side, destructuring is done.
// Zeroth is mapped to Zeroth index and so on.
const [fname, lname] = ["Siddarth", "Mishra"];
console.log("First Name - " + fname);
console.log("Last Name - " + lname);

// Destructuring can also done for Objects
const user2 = {name : "Siddarth", age : 30};
console.log("Name = " + user2.name);

// Or else we can use below, the shorter format.
// Here, we have to use field name as defined in the object. So, it should match unlike in arrays.
// We can also assign alias.
const {name : uname, age} = {name : "Siddarth", age : 30};
console.log("User Name - " + uname);
console.log("Age = " + age);

// Destructuring can also be done for methods
// For example, a method "storeOrder" accepts an object "Order"
class Order {
    constructor(id, currency, amount, country) {
        this.id = id;
        this.currency = currency;
        this.amount = amount;
        this.country = country;
    }
}
function storeOrder(Order) { // takes single parameter
    // accessing via dot notation
    console.log("Dot Notation - " + Order.id + " - " + Order.amount + " " + Order.currency);
}
const order = new Order(1, "INR", 20.5);
storeOrder(order);

// If we want to Destructure the function, then
function storeOrderDS({id, amount}) { // destructuring. Still takes single parameter but in curly braces.
    console.log("Destructured = " + id + " - " + amount);
}
storeOrderDS({id : 1, amount : 35.89, currency : "INR"});

// SPREAD OPERATOR (...)
const newHobbies = ["Travelling", "Binge Watching"];
// this would create an array within an array i.e nested array like the below
// [['Chess', 'Coding', 'Cricket', 'Chilling'], ['Travelling', 'Binge Watching']]
const mergeHobbies1 = [hobbies, newHobbies];
console.log(mergeHobbies1);
// But if we want to pull out the values and add as a standalone, then use the spread (...) operator
// This will create a single array like this the below
// ['Chess', 'Coding', 'Cricket', 'Chilling', 'Travelling', 'Binge Watching']
const mergeHobbies2 = [...hobbies, ...newHobbies];
console.log(mergeHobbies2);

// We can use the Spread operator on Objects.
// All that are present in the user are extracted to etendedUser like below.
// {isAdmin: true, name: 'Siddarth', age: 30, newFunction: ƒ}
const extendedUser = {
    isAdmin : true,
    ...user
};
console.log(extendedUser);

// Control Structures - if, else, for
const password = prompt("Enter the password");
if(password.toLowerCase() === "hello") {
    alert("Success");
} else {
    alert("Fail");
}

for(const hobby of mergeHobbies2) {
    console.log(hobby);
}

// Manipulating the DOM - Not with React
const list = document.querySelectorAll("li");
list[0].remove();// This will remove "Base Syntax & Rules"
