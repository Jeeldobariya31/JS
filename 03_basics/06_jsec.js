// ===================================================================
// 📘 06_execution_context.js — JavaScript Execution Context (Full Theory + Interview Qs)
// ===================================================================
console.log("\n📂 Loaded: 09_execution_context.js\n");

// ===================================================================
// 1️⃣ What is Execution Context?
// ===================================================================
/*
👉 Execution Context = Environment where JavaScript code is evaluated and executed.
👉 Created when:
      ✔ JS file starts (Global Execution Context)
      ✔ A function is called (Function Execution Context)
      ✔ eval() runs (rarely used)

Each Execution Context has 2 phases:
----------------------------------------------------
1️⃣ Memory Creation Phase  (Hoisting Phase)
2️⃣ Code Execution Phase   (Line-by-line execution)
----------------------------------------------------
*/
// ===================================================================

// ===================================================================
// 2️⃣ GLOBAL EXECUTION CONTEXT (GEC)
// ===================================================================
/*
GEC has:
✔ Global Object (window in browser, global in Node)
✔ this → refers to global object
✔ Global Memory
*/

// Memory Phase Example:
console.log("2️⃣ var before declaration:", x); // undefined → hoisted
var x = 10;
console.log("2️⃣ x after:", x);

// console.log(y); // ❌ ReferenceError (TDZ)
// let y = 20;

// ===================================================================
// 3️⃣ FUNCTION EXECUTION CONTEXT (FEC)
// ===================================================================
/*
Every time a function is invoked:

FEC = {
   1. Local Memory (local vars, params, arguments)
   2. this binding
   3. Outer Environment Reference (Lexical Scope)
}
*/

function test(a, b) {
  console.log("3️⃣ FEC params:", a, b);
  let c = a + b;
  return c;
}
console.log("3️⃣ test result:", test(5, 7));

// ===================================================================
// 4️⃣ Execution Context Structure (Visual)
// ===================================================================
/*
Execution Context = {
   Variable Environment (Memory):
        var → undefined
        let/const → TDZ
        function → whole function stored
   Thread of Execution:
        Code runs line-by-line
}
*/
// ===================================================================

// ===================================================================
// 5️⃣ Hoisting (Memory Phase Behaviour)
// ===================================================================
/*
Hoisting rules:
----------------------------------------------------
var → hoisted as undefined
let/const → hoisted but in TDZ (not accessible)
function declaration → fully hoisted
----------------------------------------------------
*/

hoistedFun(); // Works
function hoistedFun() {
  console.log("5️⃣ Function hoisted!");
}

console.log("5️⃣ hoisted var:", n); // undefined
var n = 80;

// console.log(a); ❌ TDZ
// let a = 10;

// ===================================================================
// 6️⃣ CALL STACK (MOST IMPORTANT)
// ===================================================================
/*
JavaScript is single-threaded.

CALL STACK = Manages Execution Contexts in LIFO order:
1. GEC pushed first
2. Each function call → new FEC pushed
3. When function returns → FEC popped
*/

function one() {
  console.log("6️⃣ one()");
  two();
}
function two() {
  console.log("6️⃣ two()");
  three();
}
function three() {
  console.log("6️⃣ three()");
}

one(); // triggers full call stack example

// ===================================================================
// 7️⃣ LEXICAL ENVIRONMENT + SCOPE CHAIN
// ===================================================================
/*
Lexical Environment = local memory + reference to parent scope.

If variable not found → JS looks up the chain.
*/

let p = 10;
function A() {
  let q = 20;
  function B() {
    let r = 30;
    console.log("7️⃣ Scope chain:", p, q, r);
  }
  B();
}
A();

// ===================================================================
// 8️⃣ Temporal Dead Zone (TDZ)
// ===================================================================
/*
TDZ = Time from variable hoisting to its initialization.
*/

let tdz = "initialized after TDZ";
console.log("8️⃣ TDZ OK:", tdz);

// ===================================================================
// 9️⃣ Execution Context of Arrow Functions
// ===================================================================
/*
Arrow functions DO NOT get:
✔ their own this
✔ arguments object
✔ prototype
They use parent's Execution Context.
*/

const obj = {
  name: "Jeel",
  normalFn() {
    console.log("9️⃣ normal this:", this.name);
  },
  arrowFn: () => {
    console.log("9️⃣ arrow this:", this?.name);
  },
};

obj.normalFn();
obj.arrowFn();

// ===================================================================
// 🔟 Summary (Perfect for final revision)
// ===================================================================
/*
✔ EC(Execution Context) = Memory Phase + Code Phase
✔ Memory Phase = Hoisting
✔ function declaration hoisted fully
✔ var hoisted as undefined
✔ let/const hoisted but in TDZ
✔ Each function call → new EC
✔ Call Stack maintains EC order
✔ Lexical Scope decides variable access
✔ Arrow functions share parent's EC
*/

// ===================================================================
// 1️⃣1️⃣ Execution Context — Top Interview Questions (Combined Section)
// ===================================================================
/*
Q1: What is an Execution Context?
A: Environment where JS code runs (Memory + Code Execution + Scope).

Q2: Types of Execution Context?
A:
1. Global Execution Context (GEC)
2. Function Execution Context (FEC)
3. Eval Execution Context (rare)

Q3: Two phases of Execution Context?
A:
✔ Memory Creation Phase  
✔ Code Execution Phase

Q4: Explain hoisting.
A: vars → undefined  
   let/const → TDZ  
   functions → fully hoisted.

Q5: What is TDZ?
A: Time between hoisting and initialization of let/const.

Q6: What is the Call Stack?
A: Stack structure holding all execution contexts (LIFO).

Q7: What is Lexical Environment?
A: Local memory + reference to outer environment.

Q8: What is Scope Chain?
A: When JS searches upward for variables through lexical parents.

Q9: Do arrow functions have their own Execution Context?
A: They have EC but NO own:
   ✘ this  
   ✘ arguments  
   They share from parent.

Q10: When is a new Function Execution Context created?
A: On every function invocation.

Q11: Difference between var, let, const in EC?
A:
var → undefined, function scoped  
let/const → TDZ, block scoped.

Q12: What happens to EC after function completes?
A: It is destroyed (popped from call stack) unless closure keeps data alive.

Q13: Relation between Execution Context and Scope?
A:
Execution context creates scope; scope defines variable accessibility.
*/

// ===================================================================
console.log(
  "\n🎉 COMPLETED — Final Combined Execution Context File (Theory + Q/A)\n"
);
// ===================================================================
