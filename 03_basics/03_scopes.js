// ===================================================================
// 📘 07_scopes.js — COMPLETE JAVASCRIPT SCOPES NOTES + EXAMPLES
// ===================================================================
console.log("\n📂 Loaded: 03_scopes.js (Ultimate Scopes Guide)\n");

// ===================================================================
// 1️⃣ What is Scope?
// ===================================================================
// 👉 Scope = where a variable is accessible
// 👉 Determines visibility of variables
// 👉 JavaScript has 3 main types:
//     ✔ Global Scope
//     ✔ Function Scope
//     ✔ Block Scope
// 👉 Extra: Lexical Scope, Hoisting Scope, Module Scope
// ===================================================================

// ===================================================================
// 2️⃣ Global Scope
// ===================================================================
// ✔ Variables declared outside any function/block
// ✔ Accessible from anywhere in the file
// ===================================================================

let globalVar = "🌍 I am Global";

function testGlobal() {
  console.log("2️⃣ Access global inside function:", globalVar);
}
testGlobal();
console.log("2️⃣ Access global outside function:", globalVar);

// ===================================================================
// 3️⃣ Function Scope (var only)
// ===================================================================
// ✔ Variables declared with var inside a function → accessible only inside that function
// ✔ let & const inside function also remain inside function
// ===================================================================

function functionScope() {
  var inside = "🔒 Inside Function";
  console.log("3️⃣ Inside function:", inside);
}
functionScope();
// console.log(inside); // ❌ ERROR: not accessible

// ===================================================================
// 4️⃣ Block Scope (let & const)
// ===================================================================
// ✔ Block = { }
// ✔ let and const are block scoped
// ✔ var is NOT block scoped
// ===================================================================

{
  let a = 10;
  const b = 20;
  var c = 30; // var escapes block
  console.log("4️⃣ Inside block:", a, b, c);
}

// console.log(a); // ❌ Error
// console.log(b); // ❌ Error
console.log("4️⃣ c using var is accessible:", c); // var escapes → allowed

// ===================================================================
// 5️⃣ Lexical Scope (VERY IMPORTANT)
// ===================================================================
// ✔ Inner functions can access variables of outer functions
// ✔ Also called "STATIC SCOPE"
// ===================================================================

function outer() {
  let x = 100;

  function inner() {
    console.log("5️⃣ Lexical Scope:", x); // inner can access outer
  }

  inner();
}
outer();

// ===================================================================
// 6️⃣ Scope Chain
// ===================================================================
// ✔ If variable is not found inside function → JS checks parent scope
// ✔ Goes upward until global scope
// ===================================================================

let p = 10;

function A() {
  let q = 20;

  function B() {
    let r = 30;
    console.log("6️⃣ Chain:", p, q, r); // all accessible
  }

  B();
}
A();

// ===================================================================
// 7️⃣ var vs let vs const (Scope Differences)
// ===================================================================
/*
var:
✔ Function scoped
✔ Attaches to window/global object
✔ Can be redeclared
✔ Hoisted with undefined

let:
✔ Block scoped
✔ Cannot be redeclared
✔ Hoisted but in TDZ (Temporal Dead Zone)

const:
✔ Block scoped
✔ Cannot be redeclared or reassigned
✔ Hoisted but in TDZ
*/
// ===================================================================

// ===================================================================
// 8️⃣ Temporal Dead Zone (TDZ)
// ===================================================================
// ⭐ Accessing let/const before declaration = ERROR
// ===================================================================

// console.log(tdzLet); // ❌ ReferenceError
let tdzLet = "TDZ done correctly!";
console.log("8️⃣ TDZ example:", tdzLet);

// ===================================================================
// 9️⃣ Hoisting + Scope
// ===================================================================
// ✔ var is hoisted with default value undefined
// ✔ let/const are hoisted but not initialized (TDZ)
// ✔ functions are fully hoisted
// ===================================================================

console.log("9️⃣ Hoisting var example:", hoistedVar); // undefined (not error)
var hoistedVar = "I am hoisted";

// console.log(notHoistedLet); // ❌ error
let notHoistedLet = "Not Hoisted";

// console.log(notHoistedConst); // ❌ error
const notHoistedConst = "Not Hoisted";


// Function hoisting
hoistedFun(); // works
function hoistedFun() {
  console.log("9️⃣ Function hoisted!");
}

// ===================================================================
// 🔟 Module Scope (ES6 Modules)
// ===================================================================
// ✔ Every JS file in module mode has its own scope
// ✔ Variables do NOT leak into global scope
// NOTE: Only works in ES module environment (import/export)
// ===================================================================

// ===================================================================
// 1️⃣1️⃣ Closures (Scope + Memory)
// ===================================================================
// ✔ Function remembers variables from parent scope even after parent is gone
// ===================================================================

function counter() {
  let count = 0; // local variable (private)

  return function () {
    count++;
    return count;
  };
}

const c1 = counter();
console.log("11️⃣ Closure:", c1(), c1(), c1()); // remembers value

// ===================================================================
// 1️⃣2️⃣ Shadowing
// ===================================================================
// ✔ Inner scope variable hides outer variable of same name
// ===================================================================

let v = "outer";

function shadow() {
  let v = "inner";
  console.log("12️⃣ Shadowing inside:", v);
}
shadow();
console.log("12️⃣ Shadowing outside:", v);

// ===================================================================
// 1️⃣3️⃣ Illegal Shadowing (let vs var)
// ===================================================================
// ❌ let cannot be shadowed by var inside same block
// ===================================================================

function illegal() {
  let x = 10;
  // var x = 20; // ❌ SyntaxError (illegal shadowing)
}
illegal();

// ===================================================================
// 1️⃣4️⃣ Block vs Function Scope Demo (important)
// ===================================================================

if (true) {
  var z1 = "var example"; // not block scoped
  let z2 = "let example"; // block scoped
}

console.log("14️⃣ var outside block:", z1);
// console.log(z2); // ❌ Error

// ===================================================================
// 1️⃣5️⃣ Real-world example: loop + setTimeout (var bug)
// ===================================================================
// var creates bug because it's NOT block scoped
// ===================================================================

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("15️⃣ var loop:", i), 100);
}
// OUTPUT: 4, 4, 4

for (let j = 1; j <= 3; j++) {
  setTimeout(() => console.log("15.1 let loop:", j), 100);
}
// OUTPUT: 1, 2, 3

// ===================================================================
// 1️⃣6️⃣ Interview Questions
// ===================================================================
/*
Q1: What is scope?
A: Area where a variable is accessible.

Q2: var vs let vs const?
var → function scoped
let/const → block scoped

Q3: What is lexical scope?
A: Inner functions can access outer variables.

Q4: What is TDZ?
A: Time between hoisting & actual declaration for let/const.

Q5: What is closure?
A: Function remembering outer variables even after outer function ends.

Q6: Difference between block and function scope?
A: var = function scoped, let/const = block scoped.

Q7: Why does var cause problems in loops?
A: It is not block scoped, so all iterations share same value.
*/
// ===================================================================

console.log(
  "\n🎉 COMPLETED — Full JavaScript Scopes File (Easy + All Examples)\n"
);
// ===================================================================
