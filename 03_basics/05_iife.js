//05_iife.js
// ===================================================================
// 📘 IIFE — Immediately Invoked Function Expression (Full Theory + Examples)
// ===================================================================
// 👉 IIFE is a function that runs IMMEDIATELY after its creation.
// 👉 Syntax Pattern: (function(){ ... })();
// 👉 Purpose: Create a private scope, avoid global variable pollution.
// 👉 Used before ES6 modules to protect code and variables.
// 👉 IIFE works because JavaScript treats (function(){}) as an expression,
//    and an expression can be executed immediately using ().
// ===================================================================

// ===================================================================
// 1️⃣ WHY IIFE? (Full Theory)
// ===================================================================
/*
IIFE solves main problems:

1. Avoiding Global Scope Pollution
   - Variables inside an IIFE are PRIVATE.
   - They do not leak into global scope.

2. Data Encapsulation (Private Data)
   - Data inside IIFE cannot be accessed directly from outside.
   - Useful for modules and secure code.

3. Execute Initialization Code Immediately
   - Good for config setups, startup code, event bootstrapping.

4. Before ES6 modules existed, IIFE was the ONLY way to create modules.

5. Creates its own SCOPE (like separate box of memory)

6. Protect code from variable name conflicts.
*/
// ===================================================================

// ===================================================================
// 2️⃣ Basic IIFE Syntax (Most Common)
// ===================================================================

(function () {
  console.log("2️⃣ Basic IIFE executed immediately!");
})();
//semicole is used o end flow of his funcion 
// ===================================================================
// 3️⃣ IIFE with Parameters
// ===================================================================

(function (name, age) {
  console.log("3️⃣ IIFE with parameters:", name, age);
})("Jeel", 21);

// ===================================================================
// 4️⃣ IIFE Returning a Value
// ===================================================================

const sum = (function (a, b) {
  return a + b;
})(10, 20);

console.log("4️⃣ IIFE returning value:", sum);

// ===================================================================
// 5️⃣ Arrow Function IIFE (Modern Style)
// ===================================================================

(() => {
  console.log("5️⃣ Arrow IIFE executed!");
})();

// ===================================================================
// 6️⃣ IIFE Creating PRIVATE Variables (Encapsulation)
// ===================================================================
// NOTE: count is PRIVATE — cannot be accessed directly outside
// ===================================================================

const counter = (function () {
  let count = 0; // private variable

  return {
    inc() {
      count++;
      return count;
    },
    dec() {
      count--;
      return count;
    },
  };
})();

console.log("6️⃣ Private counter:", counter.inc(), counter.inc(), counter.dec());
// console.log(count); ❌ ERROR (private)

// ===================================================================
// 7️⃣ Named IIFE (rare but possible)
// ===================================================================

(function initApp() {
  console.log("7️⃣ Named IIFE executed (initApp)");
})();

// ===================================================================
// 8️⃣ Multiple IIFEs Together (Advanced Syntax Trick)
// ===================================================================

(function () {
  console.log("8️⃣ First IIFE");
})(
  (function () {
    console.log("8️⃣ Second IIFE");
  })()
);

// ===================================================================
// 9️⃣ IIFE Variants (Important for Interviews)
// ===================================================================
/*
A. Classic Function IIFE:
   (function(){ ... })();

B. Arrow IIFE:
   (() => { ... })();

C. Unary Operator IIFE:
   +function(){ ... }();
   -function(){ ... }();
   !function(){ ... }();

D. IIFE with async:
   (async () => { await ... })();
*/
// Example:

+(function () {
  console.log("9️⃣ Unary Operator IIFE executed!");
})();

// ===================================================================
// 🔟 How IIFE Works Internally (Mini Theory)
// ===================================================================
/*
Q: Why wrap the function in parentheses?
A: JavaScript needs to differentiate between:

   function test(){}   → function declaration
   (function(){})      → function expression

Functions can ONLY be executed immediately if they are expressions.
Wrapping in () forces JS to treat it as an expression.

Then using () after it → executes it.
*/
// ===================================================================

// ===================================================================
// 1️⃣1️⃣ When to Use IIFE (Real World)
// ===================================================================
/*
✔ Protect variables from leaking into global scope
✔ Initialize modules
✔ Run startup code immediately
✔ Create private data (similar to private fields)
✔ Build small self-contained components
✔ Avoid naming conflicts in large projects
✔ Before ES modules → used for module pattern
*/
// ===================================================================

// ===================================================================
// 1️⃣2️⃣ When NOT to Use IIFE
// ===================================================================
/*
❌ When using ES6 module system (import/export)
❌ For reusable functions (IIFE runs only once)
❌ For constructors or classes
*/
// ===================================================================

// ===================================================================
// 1️⃣3️⃣ IIFE Interview Questions (Short Answers)
// ===================================================================
/*
Q1: What is an IIFE?
A: A function that runs immediately after it is created.

Q2: Why do we wrap IIFE in parentheses?
A: To force JavaScript to treat it as a function expression, not a declaration.

Q3: Does IIFE create its own scope?
A: YES — it creates a private scope.

Q4: Can IIFE be async or arrow?
A: YES — (() => {})() or (async () => {})()

Q5: Why was IIFE used before ES6?
A: To simulate private variables and modules.
*/
// ===================================================================

// ===================================================================
console.log("\n🎉 COMPLETED — Full IIFE Theory + Examples File\n");
// ===================================================================
