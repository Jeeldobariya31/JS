// ======================================================================
// 📘 06_custom_prototypes.js
// CUSTOM PROTOTYPE METHODS — Object, String, Number, Function
// ======================================================================
//
// ⚠ IMPORTANT WARNING (THEORY):
// -----------------------------
// - Modifying built-in prototypes (Object.prototype, Array.prototype, etc.)
//   is DANGEROUS in real production code.
// - Can cause conflicts with:
//     • other libraries
//     • future JS features
//     • for...in loops (if made enumerable)
//
// ✅ GOOD:
//   - For learning
//   - For your own practice files
//   - For interview demos
//
// We’ll do it in a SAFE way using Object.defineProperty
// to make them NON-ENUMERABLE.
// ======================================================================

function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================\n");
}

// Small helper to define methods safely
function defineSafePrototypeMethod(targetProto, name, fn) {
  Object.defineProperty(targetProto, name, {
    value: fn,
    writable: true,
    configurable: true,
    enumerable: false, // 🔴 prevent showing up in for...in loops
  });
}

// ======================================================================
// 1️⃣ Object.prototype — Custom Methods
// ======================================================================
/*
THEORY:
-------
- Object.prototype is parent of almost all normal objects.
- If we add methods here, ALL objects will have that method.
- So we MUST make them non-enumerable.

We’ll implement:
  - obj.isEmpty()     → true if no own keys
  - obj.keysCount()   → number of own keys
*/

sep("1️⃣ Object.prototype — Custom Methods");

// 🔹 Object.prototype.isEmpty()
defineSafePrototypeMethod(Object.prototype, "isEmpty", function () {
  // 'this' = current object
  return Object.keys(this).length === 0;
});

// 🔹 Object.prototype.keysCount()
defineSafePrototypeMethod(Object.prototype, "keysCount", function () {
  return Object.keys(this).length;
});

// DEMO:
const o1 = {};
const o2 = { a: 1, b: 2 };

console.log("o1.isEmpty():", o1.isEmpty()); // true
console.log("o2.isEmpty():", o2.isEmpty()); // false
console.log("o2.keysCount():", o2.keysCount()); // 2

// Proof that methods are not shown in for...in:
console.log("\nObject o2 keys using for...in:");
for (let k in o2) {
  console.log("  key:", k); // will not show isEmpty / keysCount
}

// ======================================================================
// 2️⃣ String.prototype — Custom Methods
// ======================================================================
/*
THEORY:
-------
String.prototype holds methods like:
  - toUpperCase, toLowerCase, trim, etc.

We’ll implement:
  - str.toTitleCase()  → "hello world" → "Hello World"
  - str.reverse()      → "abc" → "cba"
  - str.isPalindrome() → "madam" → true
*/

sep("2️⃣ String.prototype — Custom Methods");

// 🔹 String.prototype.toTitleCase()
defineSafePrototypeMethod(String.prototype, "toTitleCase", function () {
  // 'this' is a string (primitive wrapper)
  return this.split(" ")
    .filter(Boolean)
    .map((word) => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
});

// 🔹 String.prototype.reverse()
defineSafePrototypeMethod(String.prototype, "reverse", function () {
  return this.split("").reverse().join("");
});

// 🔹 String.prototype.isPalindrome()
defineSafePrototypeMethod(String.prototype, "isPalindrome", function () {
  const cleaned = this.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
});

// DEMO:
const s1 = "hello world from js";
console.log(`"${s1}".toTitleCase():`, s1.toTitleCase());

const s2 = "JavaScript";
console.log(`"${s2}".reverse():`, s2.reverse());

const s3 = "Madam";
console.log(`"${s3}".isPalindrome():`, s3.isPalindrome());

const s4 = "A man, a plan, a canal: Panama";
console.log(`"${s4}".isPalindrome():`, s4.isPalindrome());

// ======================================================================
// 3️⃣ Number.prototype — Custom Methods
// ======================================================================
/*
THEORY:
-------
Number.prototype holds methods like:
  - toFixed, toString, toLocaleString, etc.

We’ll implement:
  - num.isEven()
  - num.isOdd()
  - num.toIndianCurrency()  → 1234567 → "₹ 12,34,567.00"
*/

sep("3️⃣ Number.prototype — Custom Methods");

// 🔹 Number.prototype.isEven()
defineSafePrototypeMethod(Number.prototype, "isEven", function () {
  // 'this' is a Number object; this.valueOf() gives primitive value
  return this.valueOf() % 2 === 0;
});

// 🔹 Number.prototype.isOdd()
defineSafePrototypeMethod(Number.prototype, "isOdd", function () {
  return this.valueOf() % 2 !== 0;
});

// 🔹 Number.prototype.toIndianCurrency()
defineSafePrototypeMethod(Number.prototype, "toIndianCurrency", function () {
  // Use toLocaleString for INR format if available
  return (
    "₹ " +
    this.valueOf().toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
});

// DEMO:
const n1 = 42;
const n2 = 17;
const n3 = 1234567;

console.log("n1.isEven():", n1.isEven());
console.log("n1.isOdd():", n1.isOdd());
console.log("n2.isEven():", n2.isEven());
console.log("n2.isOdd():", n2.isOdd());

console.log("n3.toIndianCurrency():", n3.toIndianCurrency());

// ======================================================================
// 4️⃣ Function.prototype — Custom Methods
// ======================================================================
/*
THEORY:
-------
Function.prototype holds methods like:
  - call, apply, bind, etc.

We’ll implement:
  - fn.once()      → returns new function that can be called only once
  - fn.delay(ms)   → returns new function that calls original after delay
  - fn.myBind(thisArg, ...args) → simplified custom bind implementation
*/

sep("4️⃣ Function.prototype — Custom Methods");

// 🔹 Function.prototype.once()
//    - Ensures function is executed at most once.
defineSafePrototypeMethod(Function.prototype, "once", function () {
  const originalFn = this;
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = originalFn.apply(this, args);
    }
    return result;
  };
});

// 🔹 Function.prototype.delay(ms)
//    - Returns new function that runs original after ms milliseconds.
defineSafePrototypeMethod(Function.prototype, "delay", function (ms) {
  const originalFn = this;
  return function (...args) {
    setTimeout(() => {
      originalFn.apply(this, args);
    }, ms);
  };
});

// 🔹 Function.prototype.myBind(thisArg, ...bindArgs)
//    - Simplified version of native bind (no new handling)
defineSafePrototypeMethod(
  Function.prototype,
  "myBind",
  function (thisArg, ...bindArgs) {
    const originalFn = this;
    return function (...callArgs) {
      return originalFn.apply(thisArg, [...bindArgs, ...callArgs]);
    };
  }
);

// DEMO for once()
function greetOnce(name) {
  console.log("👋 Hello (once):", name);
  return "Done";
}

const greetOnceFn = greetOnce.once();
console.log("greetOnceFn('Jeel'):", greetOnceFn("Jeel"));
console.log("greetOnceFn('Aarya'):", greetOnceFn("Aarya")); // no effect second time

// DEMO for delay()
function logMessage(msg) {
  console.log("⏳ Delayed:", msg);
}

const delayedLog = logMessage.delay(500); // 0.5 second
delayedLog("This message appears after 500ms");

// DEMO for myBind()
function showUser(city, country) {
  console.log(`User: ${this.name}, City: ${city}, Country: ${country}`);
}

const user = { name: "Jeel" };
const boundShowUser = showUser.myBind(user, "Rajkot");
boundShowUser("India"); // User: Jeel, City: Rajkot, Country: India

// ======================================================================
// 5️⃣ QUICK INTERVIEW NOTES (IN COMMENTS)
// ======================================================================
/*
Q1: Why use Object.defineProperty for prototype methods?
A:
  - To make methods non-enumerable (enumerable:false)
  - This prevents them from appearing in for...in loops, avoiding bugs.

Q2: Is it safe to extend built-in prototypes?
A:
  - For LEARNING / YOUR OWN CODE: Yes.
  - In shared libraries / production: Generally NO (can break other code).

Q3: Example of useful custom methods:
A:
  - String.prototype.toTitleCase()
  - Number.prototype.isEven()
  - Object.prototype.isEmpty()
  - Function.prototype.once()

Q4: Where are these methods stored?
A:
  - e.g. String.prototype.toTitleCase → on String.prototype
  - All strings share this single function via prototype chain.

Q5: Alternatives instead of modifying prototypes?
A:
  - Use utility functions instead:
      function toTitleCase(str) { ... }
      function isEven(num) { ... }
*/

// ======================================================================
console.log(
  "\n🎉 Custom prototype methods (Object, String, Number, Function) — Completed.\n"
);
// ======================================================================
