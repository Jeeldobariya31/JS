// ======================================================================
// 📘 05_builtins_proto_prototype.js
// FULL DEEP DIVE: proto / prototype of Object, Array, String, Function,
// Number, Boolean, Date, RegExp, Map, Set
// + PROPER DEMO of __proto__, getPrototypeOf, setPrototypeOf, isPrototypeOf
// ======================================================================
//
// HOW TO USE:
// -----------
// - Run: node 05_builtins_proto_prototype.js
// - Or paste into browser DevTools.
//
// GOAL:
// -----
// ✅ Understand prototype chain of ALL core built-in types
// ✅ See how __proto__ and prototype connect for each
// ✅ Understand how to READ + CHANGE prototypes using proper methods
// ✅ Be ready for OOP/Prototype interview questions
// ======================================================================

function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================\n");
}

// Small helper to print prototype chain using Object.getPrototypeOf
function printProtoChain(obj, label = "obj") {
  console.log(`🔎 Prototype chain for ${label}:`);
  let current = obj;
  let level = 0;
  while (current !== null) {
    console.log(`  [${level}]`, current);
    current = Object.getPrototypeOf(current);
    level++;
  }
  console.log("  [end] null\n");
}

// ======================================================================
// 1️⃣ GLOBAL OBJECT MODEL QUICK SUMMARY
// ======================================================================
/*
KEY IDEAS:
----------
- All built-in types (Object, Array, String, etc.) are FUNCTIONS.
- These functions have:
    • A prototype property      → used for instances via new
    • A __proto__ of their own  → Function.prototype (because they are functions)

- Instances (like {}, [], "abc", function(){}, 123, true, new Date())
  all have an internal [[Prototype]] (seen as __proto__) pointing to
  the corresponding Constructor.prototype.

EXAMPLES (usually true in JS engines):
--------------------------------------
{}.__proto__            === Object.prototype
[].__proto__            === Array.prototype
"abc".__proto__         === String.prototype
(function(){}).__proto__=== Function.prototype
(123).__proto__         === Number.prototype
(true).__proto__        === Boolean.prototype
(new Date()).__proto__  === Date.prototype

THEN:
Array.prototype.__proto__   === Object.prototype
String.prototype.__proto__  === Object.prototype
Function.prototype.__proto__=== Object.prototype
Object.prototype.__proto__  === null
*/

// ======================================================================
// 2️⃣ OBJECT — THE BASE OF (ALMOST) EVERYTHING
// ======================================================================

sep("2️⃣ Object — Root Prototype");

const objLiteral = { x: 10 };
console.log("objLiteral:", objLiteral);

console.log(
  "objLiteral.__proto__ === Object.prototype ?",
  objLiteral.__proto__ === Object.prototype
);

console.log(
  "Object.prototype.__proto__ === null ?",
  Object.prototype.__proto__ === null
);

// Built-in constructor itself is a function:
console.log("typeof Object:", typeof Object); // function
console.log(
  "Object.__proto__ === Function.prototype ?",
  Object.__proto__ === Function.prototype
);

// ======================================================================
// 3️⃣ ARRAY — Array.prototype → Object.prototype → null
// ======================================================================

sep("3️⃣ Array — Prototype Chain");

const arr = [1, 2, 3];

console.log("arr:", arr);
console.log(
  "arr.__proto__ === Array.prototype ? ",
  arr.__proto__ === Array.prototype
);
console.log(
  "Array.prototype.__proto__ === Object.prototype ? ",
  Array.prototype.__proto__ === Object.prototype
);
console.log(
  "Array.__proto__ === Function.prototype ? ",
  Array.__proto__ === Function.prototype
);

// Common array methods come from Array.prototype
console.log(
  "Keys in Array.prototype (partial):",
  Object.getOwnPropertyNames(Array.prototype).slice(0, 10)
);

// Proof: map is from prototype
console.log(
  "arr.map === Array.prototype.map ? ",
  arr.map === Array.prototype.map
);

// ======================================================================
// 4️⃣ STRING — Wrapper Object & String.prototype
// ======================================================================

sep("4️⃣ String — Primitive vs Wrapper & Prototype");

const strPrimitive = "hello";
const strObject = new String("hello"); // rarely needed

console.log("typeof strPrimitive:", typeof strPrimitive); // "string"
console.log("typeof strObject:", typeof strObject); // "object"

console.log(
  "strPrimitive.__proto__ === String.prototype ?",
  strPrimitive.__proto__ === String.prototype
);

console.log(
  "String.prototype.__proto__ === Object.prototype ?",
  String.prototype.__proto__ === Object.prototype
);

console.log(
  "String.__proto__ === Function.prototype ?",
  String.__proto__ === Function.prototype
);

// String methods are from String.prototype
console.log("strPrimitive.toUpperCase():", strPrimitive.toUpperCase());
console.log(
  "strPrimitive.toUpperCase === String.prototype.toUpperCase ?",
  strPrimitive.toUpperCase === String.prototype.toUpperCase
);

// ======================================================================
// 5️⃣ FUNCTION — Function.prototype & dual role
// ======================================================================

sep("5️⃣ Function — function is also an object and a function 😅");

/*
Function is special:
--------------------
- It is itself a function → typeof Function === "function"
- It has its own prototype (Function.prototype)
- Any function you declare has:
    • fn.__proto__ === Function.prototype
    • fn.prototype  (used when doing new fn())
*/

function normalFn() {}
const arrowFn = () => {};

console.log("typeof normalFn:", typeof normalFn); // function
console.log(
  "normalFn.__proto__ === Function.prototype ?",
  normalFn.__proto__ === Function.prototype
);
console.log(
  "arrowFn.__proto__ === Function.prototype ?",
  arrowFn.__proto__ === Function.prototype
);

// Function.prototype itself is an object:
console.log(
  "Function.prototype.__proto__ === Object.prototype ?",
  Function.prototype.__proto__ === Object.prototype
);

// And Function itself:
console.log(
  "Function.__proto__ === Function.prototype ?",
  Function.__proto__ === Function.prototype
);

/*
Also:
- When you create function Foo() {}, it gets:
    Foo.prototype  → used for objects created via new Foo()
*/

// Demo:
function User(name) {
  this.name = name;
}
User.prototype.sayHi = function () {
  console.log("Hi from", this.name);
};

const u1 = new User("Jeel");
u1.sayHi();

console.log(
  "u1.__proto__ === User.prototype ?",
  u1.__proto__ === User.prototype
);

// ======================================================================
// 6️⃣ NUMBER — Wrapper Object & Number.prototype
// ======================================================================

sep("6️⃣ Number — Primitive vs Wrapper & Prototype");

const nPrimitive = 42;
const nObject = new Number(42);

console.log("typeof nPrimitive:", typeof nPrimitive); // number
console.log("typeof nObject:", typeof nObject); // object

console.log(
  "nPrimitive.__proto__ === Number.prototype ?",
  nPrimitive.__proto__ === Number.prototype
);

console.log(
  "Number.prototype.__proto__ === Object.prototype ?",
  Number.prototype.__proto__ === Object.prototype
);

console.log(
  "Number.__proto__ === Function.prototype ?",
  Number.__proto__ === Function.prototype
);

// Number methods come from Number.prototype
console.log("nPrimitive.toFixed(2):", nPrimitive.toFixed(2));
console.log(
  "nPrimitive.toFixed === Number.prototype.toFixed ?",
  nPrimitive.toFixed === Number.prototype.toFixed
);

// ======================================================================
// 7️⃣ BOOLEAN — Wrapper Object & Boolean.prototype
// ======================================================================

sep("7️⃣ Boolean — Primitive vs Wrapper & Prototype");

const bPrimitive = true;
const bObject = new Boolean(true);

console.log("typeof bPrimitive:", typeof bPrimitive); // boolean
console.log("typeof bObject:", typeof bObject); // object

console.log(
  "bPrimitive.__proto__ === Boolean.prototype ?",
  bPrimitive.__proto__ === Boolean.prototype
);

console.log(
  "Boolean.prototype.__proto__ === Object.prototype ?",
  Boolean.prototype.__proto__ === Object.prototype
);

console.log(
  "Boolean.__proto__ === Function.prototype ?",
  Boolean.__proto__ === Function.prototype
);

// ======================================================================
// 8️⃣ DATE — Object with special prototype
// ======================================================================

sep("8️⃣ Date — Prototype Chain");

const now = new Date();

console.log("now:", now);
console.log(
  "now.__proto__ === Date.prototype ?",
  now.__proto__ === Date.prototype
);

console.log(
  "Date.prototype.__proto__ === Object.prototype ?",
  Date.prototype.__proto__ === Object.prototype
);

console.log(
  "Date.__proto__ === Function.prototype ?",
  Date.__proto__ === Function.prototype
);

// Date methods are from Date.prototype
console.log("now.getFullYear():", now.getFullYear());

// ======================================================================
// 9️⃣ REGEXP — RegExp.prototype
// ======================================================================

sep("9️⃣ RegExp — Prototype Chain");

const regex = /js/gi;

console.log("regex:", regex);
console.log(
  "regex.__proto__ === RegExp.prototype ?",
  regex.__proto__ === RegExp.prototype
);

console.log(
  "RegExp.prototype.__proto__ === Object.prototype ?",
  RegExp.prototype.__proto__ === Object.prototype
);

console.log(
  "RegExp.__proto__ === Function.prototype ?",
  RegExp.__proto__ === Function.prototype
);

// RegExp methods
console.log("regex.test('I love js'):", regex.test("I love js"));

// ======================================================================
// 🔟 MAP & SET — ES6 Collections
// ======================================================================

sep("🔟 Map & Set — Prototype Chains");

const m = new Map();
m.set("name", "Jeel");

console.log("m.__proto__ === Map.prototype ?", m.__proto__ === Map.prototype);
console.log(
  "Map.prototype.__proto__ === Object.prototype ?",
  Map.prototype.__proto__ === Object.prototype
);
console.log(
  "Map.__proto__ === Function.prototype ?",
  Map.__proto__ === Function.prototype
);

const s = new Set([1, 2, 3]);
console.log("s.__proto__ === Set.prototype ?", s.__proto__ === Set.prototype);
console.log(
  "Set.prototype.__proto__ === Object.prototype ?",
  Set.prototype.__proto__ === Object.prototype
);
console.log(
  "Set.__proto__ === Function.prototype ?",
  Set.__proto__ === Function.prototype
);

// ======================================================================
// 1️⃣1️⃣ MASTER PROTOTYPE CHAIN SUMMARY (IMPORTANT FOR INTERVIEW)
// ======================================================================
/*
COMMON PATTERNS:

1) Instances:
-------------
{}.__proto__          → Object.prototype
[].__proto__          → Array.prototype
"".__proto__          → String.prototype
(123).__proto__       → Number.prototype
(true).__proto__      → Boolean.prototype
(new Date()).__proto__→ Date.prototype
(/regex/).__proto__   → RegExp.prototype
(new Map()).__proto__ → Map.prototype
(new Set()).__proto__ → Set.prototype

2) Prototypes:
--------------
Array.prototype.__proto__   → Object.prototype
String.prototype.__proto__  → Object.prototype
Number.prototype.__proto__  → Object.prototype
Boolean.prototype.__proto__ → Object.prototype
Date.prototype.__proto__    → Object.prototype
RegExp.prototype.__proto__  → Object.prototype
Map.prototype.__proto__     → Object.prototype
Set.prototype.__proto__     → Object.prototype

3) Constructors:
----------------
Array.__proto__   → Function.prototype
String.__proto__  → Function.prototype
Number.__proto__  → Function.prototype
Boolean.__proto__ → Function.prototype
Date.__proto__    → Function.prototype
RegExp.__proto__  → Function.prototype
Map.__proto__     → Function.prototype
Set.__proto__     → Function.prototype
Object.__proto__  → Function.prototype
Function.__proto__→ Function.prototype (special case)

4) Top of chain:
----------------
Object.prototype.__proto__ → null
*/

// ======================================================================
// 1️⃣2️⃣ INTERVIEW MCQs (Built-in Prototypes) — WITH ANSWERS
// ======================================================================
/*
MCQ 1:
------
For array `const arr = [];` which is TRUE?

A) arr.__proto__ === Object.prototype
B) arr.__proto__ === Array.prototype         ✔
C) Array.prototype.__proto__ === null
D) Array.__proto__ === Object.prototype

Correct: B

MCQ 2:
------
Which is prototype chain for string primitive "hi"?

A) "hi" → Object.prototype → null
B) "hi" → String.prototype → Object.prototype → null ✔
C) "hi" → Function.prototype → null
D) "hi" → null

Correct: B

MCQ 3:
------
What is true about function f(){} ?

A) f.__proto__ === Object.prototype
B) f.prototype === Function.prototype
C) f.__proto__ === Function.prototype         ✔
D) f.prototype === Object.prototype

Correct: C

MCQ 4:
------
What is top of prototype chain?

A) undefined
B) Object.prototype
C) null ✔
D) Function.prototype

Correct: C

MCQ 5:
------
Which holds instance methods like push, pop, map, filter for arrays?

A) Array
B) Array.prototype ✔
C) Object.prototype
D) arr.__proto__.__proto__

Correct: B

MCQ 6:
------
In class Person { sayHi() {} }, sayHi is stored on:

A) each object instance
B) Person.prototype ✔
C) Person.__proto__
D) global object

Correct: B

MCQ 7:
------
Which is recommended to use in production instead of __proto__?

A) Object.getPrototypeOf / Object.setPrototypeOf ✔
B) Function.prototype.bind
C) new Object()
D) Reflect.prototype

Correct: A
*/

// ======================================================================
// 1️⃣3️⃣ PROPER DEMO: __proto__ vs getPrototypeOf vs setPrototypeOf
// ======================================================================

sep(
  "1️⃣3️⃣ PROPER DEMO — __proto__ / Object.getPrototypeOf / Object.setPrototypeOf"
);

/*
THEORY:
-------
1) __proto__          → older, not recommended, but easy for learning.
2) Object.getPrototypeOf(obj) → standard, safe way to READ prototype.
3) Object.setPrototypeOf(obj, proto) → standard, safe way to CHANGE prototype.
4) protoObj.isPrototypeOf(obj) → check if protoObj is in obj's prototype chain.
*/

// 💡 Example base prototypes:
const animalProto = {
  type: "animal",
  eat() {
    console.log(this.name, "is eating...");
  },
};

const dogProto = Object.create(animalProto);
dogProto.bark = function () {
  console.log(this.name, "says: Woof!");
};

// -------------------------------
// A) CREATE object with Object.create
// -------------------------------
const dog1 = Object.create(dogProto);
dog1.name = "Tommy";

console.log("dog1:", dog1);
dog1.eat(); // from animalProto
dog1.bark(); // from dogProto

printProtoChain(dog1, "dog1");

// -------------------------------
// B) READ prototype (getPrototypeOf vs __proto__)
// -------------------------------
const p1 = Object.getPrototypeOf(dog1);
console.log(
  "Object.getPrototypeOf(dog1) === dog1.__proto__ ?",
  p1 === dog1.__proto__
);
console.log("p1 === dogProto ?", p1 === dogProto);

// -------------------------------
// C) CHANGE prototype (setPrototypeOf vs __proto__)
// -------------------------------
const catProto = {
  type: "cat",
  meow() {
    console.log(this.name, "says: Meow!");
  },
};

const pet = { name: "Snow" };

console.log(
  "\nBefore setPrototypeOf, pet.__proto__:",
  Object.getPrototypeOf(pet)
);
Object.setPrototypeOf(pet, catProto); // ✅ standard way
// pet.__proto__ = catProto;              // ❌ older way, not recommended

console.log(
  "After setPrototypeOf, pet.__proto__ === catProto ?",
  Object.getPrototypeOf(pet) === catProto
);
pet.meow();

// -------------------------------
// D) isPrototypeOf DEMO
// -------------------------------
console.log("\n🔎 isPrototypeOf checks:");
console.log("catProto.isPrototypeOf(pet):", catProto.isPrototypeOf(pet)); // true
console.log(
  "animalProto.isPrototypeOf(dog1):",
  animalProto.isPrototypeOf(dog1)
); // true
console.log("dogProto.isPrototypeOf(dog1):", dogProto.isPrototypeOf(dog1)); // true
console.log(
  "Array.prototype.isPrototypeOf(arr):",
  Array.prototype.isPrototypeOf(arr)
); // true

/*
INTERVIEW NOTES (for this section):
-----------------------------------
Q1: How to get prototype of an object safely?
A: Object.getPrototypeOf(obj)

Q2: How to set prototype safely?
A: Object.setPrototypeOf(obj, proto)

Q3: What does a.isPrototypeOf(b) do?
A: Returns true if 'a' is in the prototype chain of 'b'.

Q4: Why __proto__ is not recommended in production?
A:
  - It's older and originally non-standard
  - Slower in some engines
  - Better to use standard methods getPrototypeOf / setPrototypeOf
*/

// ======================================================================
// ✅ END
// ======================================================================

sep("🎉 Built-in proto / prototype + proto methods DEMO COMPLETED");
