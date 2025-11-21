// 04_operation.js

// Demonstrating various operations in JavaScript

// 1. Arithmetic Operations
let a = 10;
let b = 5;
console.log("Addition:", a + b); // Output: 15
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponentiation:", a ** b); // Output: 100000


// 2. Comparison Operations
let x = 10;
let y = 5;

console.log("Equal (==):", x == y); // Output: false
console.log("Strict Equal (===):", x === y); // Output: false  => also check data type
console.log("Not Equal (!=):", x != y); // Output: true
console.log("Strict Not Equal (!==):", x !== y); // Output: true
console.log("Greater Than (>):", x > y); // Output: true
console.log("Less Than (<):", x < y); // Output: false
console.log("Greater Than or Equal (>=):", x >= y);// Output: true
console.log("Less Than or Equal (<=):", x <= y); // Output: false

// 3. Logical Operations
let p = true;
let q = false;

console.log("Logical AND (&&):", p && q); // Output: false
console.log("Logical OR (||):", p || q); // Output: true
console.log("Logical NOT (!):", !p); // Output: false

// 4. Assignment Operations
let c = 20;
console.log("Initial value of c:", c); // Output: 20
c += 5; // c = c + 5
console.log("After += 5:", c);
c -= 3; // c = c - 3
console.log("After -= 3:", c);
c *= 2; // c = c * 2
console.log("After *= 2:", c);
c /= 4; // c = c / 4
console.log("After /= 4:", c);
c %= 3; // c = c % 3
console.log("After %= 3:", c);
c **= 2; // c = c ** 2
console.log("After **= 2:", c);

// 5. String Concatenation
let str1 = "Hello, ";
let str2 = "World!";
let greeting = str1 + str2;
console.log("String Concatenation:", greeting); // Output: Hello, World!

// 6. Ternary Operator
let age = 18;
let canVote = (age >= 18) ? "Yes, can vote." : "No, cannot vote.";
console.log("Ternary Operator:", canVote); // Output: Yes, can vote.


