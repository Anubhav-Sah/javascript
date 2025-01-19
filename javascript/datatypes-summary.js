//There are two types of data type primitive and non primitive datatype 
//JavaScript data types are classified based on how data is stored and accessed in memory, as well as the behavior of the data

// 1.Memory Allocation:
// Primitive Data Types: Stored in the stack (fixed size, faster access).
// Non-Primitive Data Types: Stored in the heap (dynamic size, slower access).

// 2.Mutability:
// Primitive Data Types: Immutable. Operations create new values rather than modifying the original value.
// Non-Primitive Data Types: Mutable. Changes are applied directly to the original object.

// 3.Behavior with Variables:
// Primitive: Copied by value. If you assign one variable to another, the original and the copy are independent.
let x = 10;
let y = x;
y = 20;
console.log(x); // 10
//Non-Primitive: Copied by reference. If you assign one variable to another, both point to the same object
let obj1 = { a: 1 };
let obj2 = obj1;
obj2.a = 2;
console.log(obj1.a); // 2

// Data Representation:

// Primitive: Represents a single value (e.g., 42, true, "hello").
// Non-Primitive: Represents a collection of values or complex data (e.g., arrays, objects).

//-----------------------------------------------------------------------------------------

//Primitive Data Types in JavaScript
//1. Number
//2. String
//3. Boolean
//4. Null
//5. Undefined
//6. Symbol (ES6)
//7. BigInt (ES2020)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


//Non -Primitive Data Types in JavaScript
//1. Array
//2. Object
//3. Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//JavaScript is a dynamically typed language.