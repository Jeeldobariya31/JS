// ===================================================================
// 📘 05_functions.js — COMPLETE JAVASCRIPT FUNCTIONS NOTES + EXAMPLES
// ===================================================================
console.log("\n📂 Loaded: 01_functions.js from 03_basics (Ultimate Functions Guide)\n");

// ===================================================================
// 1️⃣ What is a Function?
// ===================================================================
// 👉 Function = block of reusable code
// 👉 Reduces repetition, increases reusability
// 👉 Can take input (parameters) and return output (return value)
// ===================================================================

function greet() {
  console.log("1️⃣ Hello from greet() function!");
}
greet();

// ===================================================================
// 2️⃣ Types of Functions in JavaScript
// ===================================================================
// ✔ Function Declaration (Named function)
// ✔ Function Expression
// ✔ Arrow Function (ES6)
// ✔ Anonymous Function
// ✔ IIFE (Immediately Invoked Function Expression)
// ✔ Callback Function
// ✔ Higher-Order Function
// ✔ Constructor Function
// ✔ Default Parameters
// ✔ Rest Parameters (...args)
// ✔ Function returning function
// ✔ Function inside object (method)
// ===================================================================

// ===================================================================
// 3️⃣ Function Declaration (MOST COMMON)
// ===================================================================
function add(a, b) {
  return a + b;
}
console.log("3️⃣ Function Declaration (add):", add(5, 10)); // 15

// ===================================================================
// 4️⃣ Function Expression
// ===================================================================
const multiply = function (x, y) {
  return x * y;
};
console.log("4️⃣ Function Expression (multiply):", multiply(3, 4)); // 12

// ===================================================================
// 5️⃣ Arrow Function (Modern ES6)
// ===================================================================
const divide = (a, b) => a / b; // short arrow
console.log("5️⃣ Arrow Function (divide):", divide(20, 5));

// long arrow function
const arrowExample = () => {
  console.log("5.1 Arrow with block body!");
};
arrowExample();

// ===================================================================
// 6️⃣ Anonymous Functions (no name)
// ===================================================================

// example: used in setTimeout, array methods, etc.
setTimeout(function () {
  console.log("6️⃣ Anonymous Function in setTimeout");
}, 100);

// ===================================================================
// 7️⃣ IIFE — Immediately Invoked Function Expression
// ===================================================================
// Runs immediately after creation
// ===================================================================

(function () {
  console.log("7️⃣ IIFE executed immediately");
})();

// Arrow IIFE
(() => {
  console.log("7.1 Arrow IIFE executed");
})();

// ===================================================================
// 8️⃣ Default Parameters
// ===================================================================
function welcome(name = "Guest") {
  console.log("8️⃣ Welcome", name);
}
welcome("Jeel");
welcome(); // uses default

// ===================================================================
// 9️⃣ Rest Parameters (...args)
// ===================================================================
// Useful when infinite arguments are needed
// ===================================================================

function sumAll(...nums) {
  return nums.reduce((total, num) => total + num);
}
console.log("9️⃣ Rest (sumAll):", sumAll(1, 2, 3, 4, 5));

// ===================================================================
// 🔟 Function returning a Function
// ===================================================================
function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

const add10 = outer(10);
console.log("🔟 Function returning function:", add10(20)); // 30

// ===================================================================
// 1️⃣1️⃣ Higher-Order Function (function that takes/returns function)
// ===================================================================
function operate(a, b, fn) {
  return fn(a, b); // fn is callback
}

const result = operate(10, 5, (x, y) => x * y);
console.log("11️⃣ Higher-Order Function:", result);

// ===================================================================
// 1️⃣2️⃣ Callback Functions
// ===================================================================
function fetchData(callback) {
  console.log("12️⃣ Fetching data...");
  callback("Data Received!");
}

fetchData((msg) => {
  console.log("Callback says:", msg);
});

// ===================================================================
// 1️⃣3️⃣ Function inside Object (Method)
// ===================================================================

const user = {
  name: "Jeel",
  greet() {
    console.log("13️⃣ Hello from object method!");
  },
};
user.greet();

// ===================================================================
// 1️⃣4️⃣ Named vs Anonymous Comparison
// ===================================================================
function namedFn() {
  return "Named Function";
}

const anonymousFn = function () {
  return "Anonymous Function";
};

console.log("14️⃣ Named:", namedFn());
console.log("14️⃣ Anonymous:", anonymousFn());

// ===================================================================
// 1️⃣5️⃣ Pure vs Impure Functions
// ===================================================================
let count = 0;

// Pure → same output for same input, no side effects
function pure(a, b) {
  return a + b;
}

// Impure → depends on external variable
function impure() {
  count++;
  return count;
}

console.log("15️⃣ Pure:", pure(2, 2));
console.log("15️⃣ Impure:", impure(), impure(), impure());

// ===================================================================
// 1️⃣6️⃣ Constructor Function (creates objects)
// ===================================================================
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Asha", 22);
console.log("16️⃣ Constructor Function:", p1);

// ===================================================================
// 1️⃣7️⃣ Arguments Object (old JS)
// ===================================================================
// ⚠️ Not used much in modern JS → replaced by rest (...args)
// ===================================================================

function oldArgs() {
  console.log("17️⃣ arguments object:", arguments);
}
oldArgs(1, 2, 3);

// ===================================================================
// 1️⃣8️⃣ Closures (VERY IMPORTANT)
// ===================================================================
// A closure remembers variables even after outer function is gone
// ===================================================================

function counter() {
  let value = 0;

  return function () {
    value++;
    return value;
  };
}

const c1 = counter();
console.log("18️⃣ Closure counter:", c1(), c1(), c1()); // 1 2 3

// ===================================================================
// 1️⃣9️⃣ Function Hoisting
// ===================================================================
// Function Declaration → hoisted (can be called before declared)
// Function Expression / Arrow → NOT hoisted
// ===================================================================

hoisted(); // works

function hoisted() {
  console.log("19️⃣ This function is hoisted!");
}

// ❌ Not hoisted:
// notHoisted(); // ERROR
const notHoisted = () => {
  console.log("Not hoisted function");
};

// ===================================================================
// 2️⃣0️⃣ Common Interview Questions (Short Answers)
// ===================================================================
/*
Q1: What is a function?
A: Block of reusable code.

Q2: Function declaration vs expression?
A: Declaration is hoisted, expression is not.

Q3: What is a callback?
A: Function passed as argument to another function.

Q4: What is a closure?
A: Function remembers outer variables even after outer function exits.

Q5: Arrow vs normal function?
A: Arrow doesn't bind 'this', shorter syntax, not hoisted.

Q6: Pure vs impure function?
A: Pure has no side effects, impure changes external state.

Q7: What is IIFE?
A: Immediately invoked function expression.

Q8: What is higher-order function?
A: Function that takes/returns another function.
*/

// ===================================================================
console.log(
  "\n🎉 COMPLETED — Full JavaScript Functions File (Easy + All Examples)\n"
);
// ===================================================================
