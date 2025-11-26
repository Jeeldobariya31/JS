// ===================================================================
// 📘 01_loops.js
// JavaScript Loops (for, while, do-while, for-of, for-in + break/continue)
// ===================================================================

console.log("\n📂 Loaded: 02_loops.js (Complete Loops Guide)\n");

// ===================================================================
// 1️⃣ What is a Loop?
// ===================================================================
/*
👉 Loop = repeat a block of code multiple times.
👉 Useful when:
   ✔ Performing same action on many items (array, string, etc.)
   ✔ Running code until a condition becomes false.

Main loop types in JS:
   1. for
   2. while
   3. do...while
   4. for...of (ES6)
   5. for...in
Plus:
   ✔ break  → exit loop early
   ✔ continue → skip current iteration
*/
// ===================================================================

// ===================================================================
// 2️⃣ for Loop (Most Common)
// ===================================================================
/*
Syntax:
for (initialization; condition; update) {
   // code
}

Flow:
1. initialization → run once
2. condition check → if true → body executes
3. update → after body
4. repeat from step 2
*/

console.log("\n2️⃣ for Loop Examples:");

// basic for loop
for (let i = 1; i <= 5; i++) {
  console.log("2.1 for loop i:", i);
}

// reverse counting
for (let i = 5; i >= 1; i--) {
  console.log("2.2 reverse i:", i);
}

// ===================================================================
// 3️⃣ while Loop
// ===================================================================
/*
Syntax:
while (condition) {
   // code
}

Flow:
1. Check condition
2. If true → run body
3. Repeat from step 1
*/

console.log("\n3️⃣ while Loop Examples:");

let w = 1;
while (w <= 3) {
  console.log("3.1 while w:", w);
  w++;
}

// ⚠️ Warning: if you forget to update `w`, while can become infinite.

// ===================================================================
// 4️⃣ do...while Loop
// ===================================================================
/*
Syntax:
do {
   // code
} while (condition);

Difference:
✔ do...while RUNS AT LEAST ONCE (even if condition is false)
*/

console.log("\n4️⃣ do...while Loop Examples:");

let d = 1;
do {
  console.log("4.1 do...while d:", d);
  d++;
} while (d <= 3);

// condition false from start
let count = 10;
do {
  console.log(
    "4.2 do...while (runs once even if condition false) count:",
    count
  );
  count++;
} while (count < 5);

// ===================================================================
// 5️⃣ break & continue (Control inside loops)
// ===================================================================
console.log("\n5️⃣ break & continue:");

// break → exit loop completely
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("5.1 break when i == 5");
    break;
  }
  console.log("5.1 i:", i);
}

// continue → skip current iteration
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("5.2 skipping 3");
    continue; // skips console for i = 3
  }
  console.log("5.2 i:", i);
}

// ===================================================================
// 6️⃣ Nested Loops (Loop inside loop)
// ===================================================================
/*
Useful for:
✔ table generation
✔ matrix operations
✔ combinations

Be careful: nested loops can be heavy on performance.
*/

console.log("\n6️⃣ Nested Loops (small table 1-3):");

for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 3; col++) {
    line += `(${row},${col}) `;
  }
  console.log("Row:", line);
}

// ===================================================================
// 7️⃣ for...of (ES6) — Best for Arrays & Iterables
// ===================================================================
/*
👉 for...of iterates over VALUES of iterable objects:
   ✔ arrays
   ✔ strings
   ✔ sets
   ✔ maps
*/

console.log("\n7️⃣ for...of Examples:");

const nums = [10, 20, 30];
for (const value of nums) {
  console.log("7.1 for...of value:", value);
}

// string
for (const ch of "Jeel") {
  console.log("7.2 for...of char:", ch);
}

// ===================================================================
// 8️⃣ for...in — for Objects (keys)
// ===================================================================
/*
👉 for...in iterates over ENUMERABLE KEYS (property names).
✔ Best used with objects.
⚠ Not recommended for plain arrays (order is not guaranteed).
*/

console.log("\n8️⃣ for...in Examples:");

// object
const student = { name: "Jeel", age: 21, city: "Rajkot" };

for (const key in student) {
  console.log("8.1 for...in → key:", key, "| value:", student[key]);
}

// array with for...in (works, but not advised)
const letters = ["a", "b", "c"];
for (const index in letters) {
  console.log(
    "8.2 for...in on array index:",
    index,
    "| value:",
    letters[index]
  );
}

// ===================================================================
// 9️⃣ Loops with Arrays & Objects (Common Patterns)
// ===================================================================

console.log("\n9️⃣ Loops with Arrays & Objects:");

// 9.1 Classic for with array index
const arr = [5, 10, 15];
for (let i = 0; i < arr.length; i++) {
  console.log("9.1 classic for array:", i, arr[i]);
}

// 9.2 for...of → clean for arrays
for (const v of arr) {
  console.log("9.2 for...of array:", v);
}

// 9.3 forEach (not a loop keyword, but array method)
arr.forEach((value, index) => {
  console.log("9.3 forEach:", index, value);
});

// 9.4 Loop over object keys
const car = { brand: "BMW", model: "X5", year: 2022 };
Object.keys(car).forEach((k) => {
  console.log("9.4 Object.keys loop:", k, car[k]);
});

// ===================================================================
// 🔟 Avoid Infinite Loops (Important Reminder)
// ===================================================================
/*
Infinite loop happens when condition NEVER becomes false.

Example (❌ Do NOT run this):
while (true) {
   // no break → infinite
}

To avoid:
✔ Always update variables inside loop.
✔ Make sure condition will become false at some point.
✔ Use break when needed.
*/

// ===================================================================
// 1️⃣1️⃣ Practical Example — Sum of Array Using Loop
// ===================================================================

console.log("\n1️⃣1️⃣ Example: Sum of array elements");

const nums2 = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i < nums2.length; i++) {
  total += nums2[i];
}
console.log("1️⃣1️⃣ Sum using for:", total);

// Same with for...of
let total2 = 0;
for (const n of nums2) {
  total2 += n;
}
console.log("1️⃣1️⃣ Sum using for...of:", total2);

// ===================================================================
// 1️⃣2️⃣ Practical Example — Find First Even Number
// ===================================================================

console.log("\n1️⃣2️⃣ Example: Find first even number");

const list = [1, 3, 7, 9, 10, 12];
let firstEven = null;

for (let i = 0; i < list.length; i++) {
  if (list[i] % 2 === 0) {
    firstEven = list[i];
    break;
  }
}
console.log("1️⃣2️⃣ First even:", firstEven);

// ===================================================================
// 1️⃣3️⃣ Summary: When to use which loop?
// ===================================================================
/*
✔ for:
   - When you know count/length in advance
   - When working with array indices

✔ while:
   - When you don't know how many times loop will run
   - Run until a condition becomes false

✔ do...while:
   - When you must run code at least once

✔ for...of:
   - When you only need values from arrays/iterables
   - Cleaner, safer than index-based loops

✔ for...in:
   - When iterating over object properties (keys)
*/

// ===================================================================
// 1️⃣4️⃣ Interview Questions (Loops)
// ===================================================================
/*
Q1: Difference between for, while, and do...while?
A:
   for        → when you know iteration count
   while      → runs while condition is true (may run 0 times)
   do...while → runs at least once, condition checked after

------------------------------------------------------------

Q2: When to use for...of vs for...in?
A:
   for...of  → for values in arrays, strings, sets, maps (iterables)
   for...in  → for keys in objects

------------------------------------------------------------

Q3: What is an infinite loop?
A:
   A loop that never ends because the condition never becomes false.

------------------------------------------------------------

Q4: How to break out of a loop early?
A:
   Use `break` keyword.

------------------------------------------------------------

Q5: How to skip one iteration of a loop?
A:
   Use `continue` keyword.

------------------------------------------------------------

Q6: Is forEach a loop?
A:
   It is an array method that internally loops over elements.
   It cannot be broken using break/continue (use some/every or for for that).

------------------------------------------------------------

Q7: Which loop is better for arrays?
A:
   Usually `for...of` or `array.forEach`. Classic for is still fine and flexible.

------------------------------------------------------------

Q8: Can we use break and continue in for...of and while?
A:
   Yes, break and continue work in all loops (for, while, do...while, for...of, for...in).
*/

// ===================================================================
console.log(
  "\n🎉 COMPLETED — Loops (for, while, do-while, for-of, for-in + break/continue)\n"
);
// ===================================================================
