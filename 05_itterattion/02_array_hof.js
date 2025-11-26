// ===================================================================
// 02_array_hof.js
// map(), filter(), reduce(), forEach() — Full Theory + Execution Flow + Examples
// ===================================================================

console.log("\n📂 Loaded: 04_array_hof.js (map, filter, reduce, forEach)\n");

// ===================================================================
// 1️⃣ HIGHER ORDER FUNCTIONS (HOF)
// ===================================================================
/*
👉 A Higher Order Function is a function that:
   ✔ takes a function as an argument (callback), OR
   ✔ returns a function

Array HOFs:
   ✔ map()
   ✔ filter()
   ✔ reduce()
   ✔ forEach()

All these methods:
   ✔ iterate over array items
   ✔ execute a callback on each element
   ✔ DO NOT modify original array (except forEach can modify manually)
*/
// ===================================================================

// ===================================================================
// 2️⃣ forEach() — Only loops (no return)
// ===================================================================
/*
forEach(callback(element, index, array))

✔ Used for looping / printing
✔ NO return value → always returns undefined
✔ CANNOT break using break/continue
✔ Best for side-effects (logging, changing outer vars)
*/

console.log("\n2️⃣ forEach(): Loop only, no return");

const nums1 = [10, 20, 30];

nums1.forEach((value, index) => {
  console.log(`2.1 forEach → index: ${index}, value: ${value}`);
});

console.log(
  "2.2 forEach return:",
  nums1.forEach(() => {})
); // undefined

// ===================================================================
// 3️⃣ map() — Transform array (returns NEW array)
// ===================================================================
/*
map(callback(element, index, array))

✔ Creates NEW array
✔ Returns transformed values
✔ Does NOT change original array
✔ Perfect for data transformation
*/

console.log("\n3️⃣ map(): Transform array → new array");

const nums2 = [1, 2, 3, 4];

const doubled = nums2.map((n) => n * 2);

console.log("3.1 original:", nums2);
console.log("3.2 doubled using map:", doubled);

// Example: Return objects
const users = ["Jeel", "Asha", "Ravi"];
const userObjects = users.map((name) => ({ name }));

console.log("3.3 map to objects:", userObjects);

// ===================================================================
// 4️⃣ filter() — Keep only values that satisfy a condition
// ===================================================================
/*
filter(callback(element, index, array))

✔ Returns NEW array with elements where callback returns true
✔ Original array unchanged
✔ Used for searching / filtering items
*/

console.log("\n4️⃣ filter(): Keep matching elements");

const marks = [30, 45, 80, 10, 60];

const passed = marks.filter((m) => m >= 40);

console.log("4.1 original:", marks);
console.log("4.2 passed (>=40):", passed);

// ===================================================================
// 5️⃣ reduce() — Reduce array to a single value
// ===================================================================
/*
reduce(callback(accumulator, currentValue, index, array), initialValue)

✔ Produces a single result
✔ Used for sum, product, max, min, grouping, etc.
✔ Most powerful array method
*/

console.log("\n5️⃣ reduce(): Reduce array to single value");

const nums3 = [10, 20, 30];

const total = nums3.reduce((acc, value) => {
  console.log(`   reduce → acc=${acc}, value=${value}`);
  return acc + value;
}, 0);

console.log("5.1 total sum:", total);

// Example: find max
const biggest = nums3.reduce((max, value) => (value > max ? value : max));
console.log("5.2 max using reduce:", biggest);

// ===================================================================
// 6️⃣ EXECUTION FLOW (EC) OF HOF CALLBACKS
// ===================================================================
/*
For each element in array:

forEach:
   callback(value, index, array)
   → no return used

map:
   callback(value)
   → return transformedValue
   → collects returned values into new array

filter:
   callback(value)
   → return true → keep value
   → return false → skip value

reduce:
   callback(acc, value)
   → return newAcc
   → accumulator updates each iteration
*/

// Example showing flow
console.log("\n6️⃣ Execution Flow Example:");

[1, 2, 3].map((value, index) => {
  console.log(`   map flow → index=${index}, value=${value}`);
  return value * 2;
});

// ===================================================================
// 7️⃣ KEY DIFFERENCES (VERY IMPORTANT)
// ===================================================================
/*
forEach():
   ✔ Just loops (no return)
   ✔ Used for side-effects
   ❌ Cannot break

map():
   ✔ Returns NEW array
   ✔ Used for transformation
   ❌ Does not skip automatically (use filter first)

filter():
   ✔ Returns NEW array but only matching elements

reduce():
   ✔ Returns single value (string, number, object, array, anything)
   ✔ Very powerful (can implement map and filter using reduce)
*/

// ===================================================================
// 8️⃣ REAL-WORLD EXAMPLES
// ===================================================================

// 8.1 Transform array of prices → add 18% GST
const prices = [100, 200, 300];
const withGST = prices.map((p) => p * 1.18);

console.log("\n8.1 GST added:", withGST);

// 8.2 Filter odd numbers
const odds = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 !== 0);
console.log("8.2 odd numbers:", odds);

// 8.3 Use reduce to count frequency of items
const letters = ["a", "b", "a", "c", "b", "a"];
const freq = letters.reduce((acc, ch) => {
  acc[ch] = (acc[ch] || 0) + 1;
  return acc;
}, {});
console.log("8.3 frequency count:", freq);

// ===================================================================
// 9️⃣ RECREATE map(), filter(), reduce(), forEach (for Interview)
// ===================================================================

console.log("\n9️⃣ Recreating methods (shallow versions):");

// map polyfill
function myMap(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) result.push(cb(arr[i], i));
  return result;
}
console.log(
  "9.1 myMap:",
  myMap([1, 2, 3], (x) => x * 10)
);

// filter polyfill
function myFilter(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) if (cb(arr[i], i)) result.push(arr[i]);
  return result;
}
console.log(
  "9.2 myFilter:",
  myFilter([1, 2, 3, 4], (x) => x > 2)
);

// reduce polyfill
function myReduce(arr, cb, init) {
  let acc = init;
  for (let i = 0; i < arr.length; i++) acc = cb(acc, arr[i], i);
  return acc;
}
console.log(
  "9.3 myReduce:",
  myReduce([1, 2, 3], (acc, v) => acc + v, 0)
);

// ===================================================================
// 🔟 INTERVIEW QUESTIONS (TOP 15)
// ===================================================================
/*
Q1: Difference between map and forEach?
A:
   map → returns new array
   forEach → returns undefined

Q2: Difference between filter and find?
A:
   filter → returns array of all matches
   find → returns first match only

Q3: Can map modify original array?
A:
   No. But callback CAN modify original values if mutated manually.

Q4: Does reduce always return a number?
A:
   No. It can return ANYTHING (array, object, string, boolean).

Q5: Explain reduce accumulator.
A:
   The value carried forward to next iteration.

Q6: Why does forEach not support break?
A:
   It's designed as a pure iterator, not a control-flow loop.

Q7: Is map faster than for loop?
A:
   Performance is similar. map is cleaner but loop may be slightly faster.

Q8: What happens if map callback doesn't return?
A:
   New array will contain undefined values.

Q9: When would you use reduce instead of map + filter?
A:
   When doing BOTH operations in a single pass → more efficient.

Q10: How to get sum of array without reduce?
A:
   Using classic for loop.

Q11: Is filter always shorter than original array?
A:
   No — could be same length (if all pass) or empty (if none pass).

Q12: What is callback function?
A:
   A function passed as argument to another function.

Q13: Are these methods mutating?
A:
   map, filter, reduce → NON-MUTATING
   forEach → also non-mutating but can mutate manually

Q14: Can reduce be used to flatten arrays?
A:
   Yes — reduce + concat.

Q15: Which HOF is most powerful?
A:
   reduce (can recreate map, filter, forEach using reduce)
*/

// ===================================================================
console.log("\n🎉 COMPLETED — map, filter, reduce, forEach (FULL Chapter)\n");
// ===================================================================
