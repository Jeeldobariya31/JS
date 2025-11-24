// ===================================================================
// 🔔 Destructuring — Object & Array (Complete Examples + Notes)
// ===================================================================
console.log("\n📂 Loaded: Destructuring Examples\n");

// ===================================================================
// ✅ Quick idea
// ===================================================================
// Destructuring = extract values from arrays or objects into variables
// Benefits: concise, readable, common in modern JS (ES6+)
// ===================================================================

// ===================================================================
// 1️⃣ Array Destructuring — Basic
// ===================================================================
const arr = [10, 20, 30, 40];

const [a, b] = arr; // take first two values
console.log("1️⃣ array basic:", a, b); // 10 20

// skip items
const [, second, , fourth] = arr;
console.log("1.1 skip items:", second, fourth); // 20 40

// default values (when array item is undefined)
const arr2 = [1];
const [x = 100, y = 200] = arr2;
console.log("1.2 defaults:", x, y); // 1 200

// rest operator with arrays
const [first, ...rest] = arr;
console.log("1.3 rest:", first, rest); // 10 [20,30,40]

// swapping variables (nice trick)
let m = 1,
  n = 2;
[m, n] = [n, m];
console.log("1.4 swap:", m, n); // 2 1

// nested array destructuring
const nested = [1, [2, 3], 4];
const [n1, [n2, n3], n4] = nested;
console.log("1.5 nested:", n1, n2, n3, n4); // 1 2 3 4

// destructuring in function parameters (array)
function sum([p, q, r = 0]) {
  return p + q + r;
}
console.log("1.6 function param array:", sum([5, 6])); // 11

// ===================================================================
// 2️⃣ Object Destructuring — Basic
// ===================================================================
const person = {
  fname: "Jeel",
  lname: "Dobariya",
  age: 26,
  address: { city: "Rajkot", pin: 360001 },
  skills: ["JS", "HTML"],
};

// basic object destructuring (must match property names)
const { fname, age } = person;
console.log("2️⃣ object basic:", fname, age); // Jeel 26

// rename variables while destructuring
const { lname: lastName } = person;
console.log("2.1 rename:", lastName); // Dobariya

// default values if property missing
const { country = "India" } = person;
console.log("2.2 default:", country); // India

// nested object destructuring
const {
  address: { city, pin },
} = person;
console.log("2.3 nested:", city, pin); // Rajkot 360001

// rest with objects (collect remaining properties)
const { skills, ...other } = person;
console.log("2.4 rest object:", skills, other);

// computed property names & dynamic destructuring
const key = "fname";
const { [key]: dynamicName } = person; // equivalent to person['fname']
console.log("2.5 dynamic key:", dynamicName);

// destructuring with different property order (order doesn't matter for objects)
const { age: personAge, fname: personName } = person;
console.log("2.6 order independent:", personName, personAge);

// destructuring function parameters (object)
function printUser({ fname, lname, age = 0 }) {
  return `${fname} ${lname} — ${age}`;
}
console.log("2.7 function param object:", printUser(person));

// ===================================================================
// 3️⃣ Destructuring combined: arrays inside objects & objects inside arrays
// ===================================================================

const data = {
  title: "Report",
  items: [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
  ],
};

// get first item's value
const {
  items: [{ value: firstValue }],
} = data;
console.log("3️⃣ combo:", firstValue); // 10

// destructuring array of objects
const [{ id: firstId }, { id: secondId }] = data.items;
console.log("3.1 array of objects:", firstId, secondId); // 1 2

// ===================================================================
// 4️⃣ Important patterns & gotchas
// ===================================================================

// 4.1 Parentheses needed when assigning to existing variables
let aa, bb;
[aa, bb] = [5, 6]; // ok
console.log("4.1 assign existing vars:", aa, bb);

// But for objects when starting a line with { } you may need parentheses if it's an assignment expression:
({ aa, bb } = { aa: 7, bb: 8 }); // parentheses needed to avoid block-interpretation
console.log("4.1 object assign with paren:", aa, bb);

// 4.2 When destructuring from possibly null/undefined, provide defaults or guard
const maybe = null;
// const { foo } = maybe; // ❌ TypeError: cannot destructure property from 'maybe' (if maybe is null)
// Safe approach:
const { foo: fooVal } = maybe ?? {}; // using nullish coalescing
console.log("4.2 safe destructure:", fooVal);

// 4.3 Primitive wrappers: destructuring primitive throws? (works for strings)
const str = "hi";
const [c1, c2] = str;
console.log("4.3 string destructuring:", c1, c2); // 'h' 'i'

// 4.4 Destructuring non-iterable into array pattern will throw
// const [z1, z2] = 123; // ❌ TypeError in strict environments

// ===================================================================
// 5️⃣ Advanced: defaults and nested defaults
// ===================================================================

const config = {
  host: "localhost",
  // port missing
  db: { name: "test" },
};

// default for top-level and nested
const {
  host: h = "127.0.0.1",
  port: p = 3306,
  db: { name: dbName = "defaultDB", user: dbUser = "root" } = {},
} = config;

console.log("5️⃣ defaults:", h, p, dbName, dbUser); // localhost 3306 test root

// ===================================================================
// 6️⃣ Use with Map, Set and iterables
// ===================================================================

// NOTE: renamed variables to avoid redeclaration errors when this file is merged
// or executed with other sections that may use the same names.

// safer map variable name (map1 instead of m)
const map1 = new Map([
  ["k1", 1],
  ["k2", 2],
]);

// destructure map entries (each entry is [key, value])
for (const [k, v] of map1) {
  console.log("6️⃣ Map entry:", k, v);
}

// safer set variable name (set1 instead of s)
const set1 = new Set([100, 200, 300]);
const [s1, s2] = set1;
console.log("6.1 Set destructure:", s1, s2); // 100 200

// ===================================================================
// 7️⃣ Practical interview examples (short & crisp)
// ===================================================================

// Example: function returns [err, data] pattern and destructuring
function fetchDataSim(success = true) {
  if (success) return [null, { name: "ok" }];
  return ["error", null];
}
const [err, dataOrNull] = fetchDataSim(true);
console.log("7️⃣ fetch pattern:", err, dataOrNull);

// Example: destructuring with rest to separate metadata from items
const result = { meta: { total: 2 }, items: [1, 2] };
const { meta, items: resultItems } = result;
console.log("7.1 meta & items:", meta, resultItems);

// ===================================================================
// 8️⃣ Common interview Qs & short answers
// ===================================================================
/*
Q1: What's the difference between array & object destructuring?
A: Array uses position (order matters). Object uses property names (order doesn't matter).

Q2: How do you provide default values?
A: Use = syntax: const [a = 1] = arr; const {x = 0} = obj;

Q3: Can you rename properties when destructuring an object?
A: Yes: const { propName: localVarName } = obj;

Q4: How to destructure nested structures?
A: Use nested patterns: const { a: { b } } = obj;

Q5: How to capture remaining properties?
A: Use rest: const { a, ...rest } = obj; or const [x, ...rest] = arr;

Q6: Pitfall: destructuring from undefined/null throws. Use defaults or nullish coalescing.
*/

// ===================================================================
// 9️⃣ Quick checklist (copy for interview)
// ===================================================================
/*
✔ Array: [a, b] = arr
✔ Object: {x, y} = obj
✔ Rename: {x: newX}
✔ Defaults: {x = 10}, [a = 1]
✔ Rest: [first, ...rest], {a, ...restObj}
✔ Nested: {a: {b}}
✔ Dynamic key: const { [key]: val } = obj
✔ Function params: fn({a, b}) or fn([x, y])
✔ Beware null/undefined sources
*/

// ===================================================================
console.log(
  "\n🎯 Destructuring examples completed — practice these patterns for interviews.\n"
);
// ===================================================================
