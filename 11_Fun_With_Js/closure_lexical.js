// ======================================================================
// 📘 08_closure_lexical.js
// FULL GUIDE — Lexical Scope • Scope Chain • Closures • Interview Logic
// ======================================================================
//
// RUN USING:
// ----------
// node 08_closure_lexical.js
//
// YOU WILL LEARN:
// ---------------
// ✅ Lexical Scope
// ✅ Scope Chain
// ✅ Closure (full deep)
// ✅ Why closures exist
// ✅ Real-world uses
// ✅ Event handlers + setTimeout examples
// ✅ Interview problems + MCQ
// ======================================================================

console.log("📌 Loaded: 08_closure_lexical.js\n");

function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================\n");
}

// ======================================================================
// 1️⃣ LEXICAL SCOPE — The foundation of closures
// ======================================================================
sep("1️⃣ Lexical Scope — Code structure decides scope");

/*
THEORY:
-------
Lexical Scope = Scope defined by location of code written.

- A function can access:
    ✔ Its own variables
    ✔ Variables of its parent function
    ✔ Variables of global scope

BUT:
- Parent cannot access child's variables.
- Siblings cannot access each other's variables.

This is called the SCOPE CHAIN.
*/

let globalVar = "🌍 Global";

function outer() {
  let outerVar = "🌐 Outer";

  function inner() {
    let innerVar = "🔒 Inner";
    console.log("inner() →", globalVar, outerVar, innerVar);
  }

  inner();
}

outer();

// ======================================================================
// 2️⃣ SCOPE CHAIN ORDER (VERY IMPORTANT FOR INTERVIEWS)
// ======================================================================
sep("2️⃣ Scope Chain Order");

/*
When accessing a variable:

1) Check inside current function
2) If not found, go to parent function
3) If not found, go to parent of parent
4) … until global scope
5) If not found, ReferenceError

This chain is created at function CREATION
(not at execution).
*/

function a() {
  let x = 10;

  function b() {
    let y = 20;

    function c() {
      let z = 30;
      console.log("x + y + z =", x + y + z); // looks outward
    }
    c();
  }
  b();
}
a();

// ======================================================================
// 3️⃣ WHAT IS CLOSURE?
// ======================================================================
sep("3️⃣ Closure — Full Definition");

/*
Closure = A function + its LEXICAL ENVIRONMENT.

When a function returns another function,
the inner function REMEMBERS the variables from outer scope,
even after outer function has finished executing.

This happens because:
- JS does NOT delete outer variables
- If a returned function still references them, they are kept alive in memory
*/

function makeCounter() {
  let count = 0; // this stays alive due to closure

  return function () {
    count++;
    console.log("Counter =", count);
  };
}

const c1 = makeCounter();
c1(); // 1
c1(); // 2
c1(); // 3

const c2 = makeCounter(); // new closure
c2(); // 1
c2(); // 2

// ======================================================================
// 4️⃣ CLOSURE WITH PARAMETERS (Common Interview Question)
// ======================================================================
sep("4️⃣ Closure with Parameters");

function greet(name) {
  return function (msg) {
    console.log(`${name}: ${msg}`);
  };
}

const jeelGreeter = greet("Jeel");
jeelGreeter("Hello 👋");
jeelGreeter("How are you?");

// ======================================================================
// 5️⃣ PRACTICAL USE: Private Variables
// ======================================================================
sep("5️⃣ Real Use Case: Private Variables");

function bankAccount() {
  let balance = 1000; // private

  return {
    deposit(amount) {
      balance += amount;
    },
    withdraw(amount) {
      balance -= amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const acc = bankAccount();
acc.deposit(500);
acc.withdraw(200);
console.log("Balance =", acc.getBalance()); // 1300
// console.log(acc.balance); // undefined (private)

// ======================================================================
// 6️⃣ CLOSURE + setTimeout (VERY IMPORTANT)
// ======================================================================
sep("6️⃣ Closure + setTimeout (Callback Trap)");

/*
Common issue:
Using var inside loop creates wrong closure.
*/

console.log("❌ WRONG (var):");

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log("i =", i), 100);
}

console.log("Fixing with closure:");

for (var j = 1; j <= 3; j++) {
  ((x) => {
    setTimeout(() => console.log("j =", x), 200);
  })(j);
}

console.log("Fixing with let:");

for (let k = 1; k <= 3; k++) {
  setTimeout(() => console.log("k =", k), 300);
}

// ======================================================================
// 7️⃣ CLOSURE WITH EVENT HANDLERS
// ======================================================================
sep("7️⃣ Closures in Event Handlers (Browser Only Example)");

/*
This is just explanation — won't run in Node.

buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    console.log(`Button ${btn.textContent} clicked`);
  });
});
*/

// ======================================================================
// 8️⃣ INTERVIEW CLASSICS — Create once, use many times
// ======================================================================
sep("8️⃣ Classic Closure Patterns");

function multiply(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10

const triple = multiply(3);
console.log(triple(5)); // 15

// ======================================================================
// 9️⃣ WHY CLOSURES? (Theory Summary)
// ======================================================================
sep("9️⃣ Why Closures Exist?");

// Quick Summary Log:
console.log(`
✔ Allows data hiding (private variables)
✔ Allows function factories
✔ Provides persistent state
✔ Helps with event handlers, async code
✔ Enables functional programming patterns
`);

// ======================================================================
// 🔟 CLOSURE PITFALLS
// ======================================================================
sep("🔟 Common Mistakes with Closure");

/*
❌ Forgetting return inside outer function
❌ Using var → wrong closures inside loops
❌ Creating too many closures → memory leak
❌ Storing huge objects inside closure → memory heavy
*/

// ======================================================================
// 1️⃣1️⃣ INTERVIEW QUESTIONS (Concept-Based)
// ======================================================================
sep("1️⃣1️⃣ Interview Theory Q&A");

/*
Q1: What is closure?
A: A function + its lexical environment.

Q2: When is closure created?
A: At the time of function CREATION, not execution.

Q3: Why does closure keep outer variables alive?
A: Because returned function still has reference to them.

Q4: Does closure keep ALL outer variables?
A: Only the ones used by the inner function.

Q5: What is lexical scope?
A: Scope defined by code structure, not runtime.

Q6: What is the scope chain order?
A:
   local → parent → grandparent → global

Q7: How to fix closure inside a loop?
A:
   - use let
   - or an IIFE (Immediately invoked function expression)
*/

// ======================================================================
// 1️⃣2️⃣ MCQs (Closures + Lexical Scope)
// ======================================================================
sep("1️⃣2️⃣ MCQs — With Answers in Comments");

/*
MCQ 1:
------
Which defines closure?

A) A variable inside a function
B) A function + lexical environment ✔
C) A function calling another function
D) Block scope

Correct: B

MCQ 2:
------
What is lexical scope?

A) Scope defined by runtime
B) Scope defined by code position ✔
C) Scope inside loops
D) Scope of function arguments

Correct: B

MCQ 3:
------
What will be logged?

function a() {
  let x = 10;
  function b() { console.log(x); }
  return b;
}
let fn = a();
fn();

A) Error
B) 10 ✔
C) undefined
D) 0

Correct: B

MCQ 4:
------
Best way to fix closure issue inside loop?

A) Use var
B) Use let ✔
C) Use const
D) Use global variable

Correct: B

MCQ 5:
------
Closure is created:

A) At function execution
B) At function creation ✔
C) At variable declaration
D) During garbage collection

Correct: B
*/

// ======================================================================
console.log("\n🎉 closure_lexical.js — Completed.\n");
// ======================================================================
