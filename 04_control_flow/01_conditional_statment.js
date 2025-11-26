// ===================================================================
// 📘 01_conditional_statement.js
// JavaScript Conditional Statements (Full Theory + Truthy/Falsy + Nullish)
// ===================================================================

console.log(
  "\n📂 Loaded: 01_conditional_statement.js (Complete Conditionals Guide)\n"
);

// ===================================================================
// 1️⃣ What are Conditional Statements?
// ===================================================================
/*
👉 Conditional statements control the flow of execution based on conditions.
👉 They decide:
      ✔ which block of code runs
      ✔ which block is skipped

👉 JS Conditional Tools:
   1. if
   2. if...else
   3. if...else if...else
   4. nested if
   5. switch
   6. ternary operator (?:)
   7. logical operators (&&, ||, !)
   8. nullish operators (??, ??=)
   9. optional chaining (?.)
*/
// ===================================================================

// ===================================================================
// 2️⃣ Comparison Operators (Used in Conditions)
// ===================================================================
/*
>    greater than
>=   greater than or equal
<    less than
<=   less than or equal
==   loose equal (type conversion happens) ❌ avoid
===  strict equal (recommended)
!=   loose not equal
!==  strict not equal (recommended)
*/

console.log("2️⃣ Comparisons:");
console.log("5 > 3:", 5 > 3);
console.log("5 == '5':", 5 == "5", "← loose true");
console.log("5 === '5':", 5 === "5", "← strict false");
console.log("5 !== '5':", 5 !== "5", "← strict true");

// ===================================================================
// 3️⃣ Truthy & Falsy — VERY IMPORTANT
// ===================================================================
/*
JavaScript treats values as TRUE or FALSE automatically in conditions.

Falsy values (ONLY these 8):
1. false
2. 0
3. -0
4. 0n (BigInt zero)
5. "" (empty string)
6. null
7. undefined
8. NaN

Everything else is truthy:
✔ "0"        (string)
✔ "false"    (string)
✔ " "        (space string)
✔ []         (empty array)
✔ {}         (empty object)
✔ function(){}
✔ any number except 0
✔ Infinity
*/

console.log("\n3️⃣ Falsy Check:");
const falsyList = [false, 0, -0, 0n, "", null, undefined, NaN];
falsyList.forEach((v) =>
  console.log(`   Value: ${String(v).padEnd(8)} →`, v ? "Truthy" : "Falsy")
);

// ===================================================================
// 4️⃣ if Statement
// ===================================================================
let marks = 75;

if (marks >= 40) {
  console.log("\n4️⃣ if: You passed!");
}

// ===================================================================
// 5️⃣ if...else
// ===================================================================
let age = 17;

if (age >= 18) {
  console.log("5️⃣ You are adult.");
} else {
  console.log("5️⃣ You are NOT adult.");
}

// ===================================================================
// 6️⃣ if...else if...else
// ===================================================================
let score = 68;

if (score >= 90) {
  console.log("6️⃣ Grade: A+");
} else if (score >= 75) {
  console.log("6️⃣ Grade: A");
} else if (score >= 60) {
  console.log("6️⃣ Grade: B");
} else {
  console.log("6️⃣ Grade: C");
}

// ===================================================================
// 7️⃣ Nested if (use carefully)
// ===================================================================
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
  if (isAdmin) {
    console.log("7️⃣ Welcome Admin");
  } else {
    console.log("7️⃣ Welcome User");
  }
} else {
  console.log("7️⃣ Please log in");
}

// ===================================================================
// 8️⃣ Ternary Operator (?:)
// ===================================================================
let canVote = age >= 18 ? "Yes" : "No";
console.log("\n8️⃣ Ternary: Can vote?", canVote);

let grade = score >= 90 ? "A+" : score >= 75 ? "A" : score >= 60 ? "B" : "C";

console.log("8️⃣ Nested Ternary Grade:", grade);

// ===================================================================
// 9️⃣ switch Statement
// ===================================================================
let day = 4;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("\n9️⃣ switch dayName:", dayName);

// ===================================================================
// 🔟 Logical Operators (AND || OR !)
// ===================================================================

// AND (&&)
console.log("\n🔟 AND true && false:", true && false);

// OR (||)
console.log("🔟 OR false || true:", false || true);

// NOT (!)
console.log("🔟 NOT !true:", !true);

// ===================================================================
// 1️⃣1️⃣ NULLISH COALESCING (??)
// ===================================================================
/*
?? returns the RIGHT value ONLY when the LEFT value is:
✔ null
✔ undefined
*/

let username = null;
let display1 = username ?? "Guest (??)";
console.log("\n1️⃣1️⃣ Nullish (??):", display1);

console.log("1️⃣1️⃣ '' ?? 'Guest':", "" ?? "Guest", "← '' is truthy (kept)");
console.log("1️⃣1️⃣ 0 ?? 100:", 0 ?? 100, "← 0 is truthy (kept)");

// ===================================================================
// 1️⃣2️⃣ NULLISH ASSIGNMENT (??=)
// ===================================================================
/*
x ??= y
Means:
   if (x === null || x === undefined)
         x = y;
*/

let a;
a ??= 50; // assigned 50 (because a is undefined)
console.log("\n1️⃣2️⃣ Nullish Assignment ??=:", a);

let b = 0;
b ??= 100; // NOT assigned because 0 is NOT null/undefined
console.log("1️⃣2️⃣ b after ??=:", b);

// ===================================================================
// 1️⃣3️⃣ OPTIONAL CHAINING (?.)
// ===================================================================
/*
Used to safely access nested properties without errors.

obj?.prop
obj?.prop?.sub
obj?.method?.()
*/

const user = {
  name: "Jeel",
  address: { city: "Rajkot" },
};

console.log("\n1️⃣3️⃣ Optional Chaining city:", user?.address?.city);

// Access missing value safely:
console.log("1️⃣3️⃣ Optional missing:", user?.job?.title); // undefined (no error)

// ===================================================================
// 1️⃣4️⃣ Best Practices
// ===================================================================
/*
✔ Always use === instead of ==  
✔ Prefer switch for multiple constant cases  
✔ Ternary only for small decisions  
✔ Avoid deep nested if  
✔ Use ?? instead of || when empty string ('') or 0 are valid values  
✔ Use ?. to avoid "Cannot read property of undefined" errors  
*/

// ===================================================================
// 1️⃣5️⃣ INTERVIEW QUESTIONS (Strong Concepts)
// ===================================================================
/*
Q1: What are conditional statements?
A: Statements that execute code based on true/false evaluations.

Q2: Difference between == and ===?
A: == allows type coercion, === checks type + value (strict).

Q3: List all falsy values.
A: false, 0, -0, 0n, "", null, undefined, NaN.

Q4: Difference between || and ???
A:
   || returns right value when left is falsy.
   ?? returns right only when left is null/undefined.

Q5: What is optional chaining?
A: Safe property access. obj?.prop returns undefined instead of throwing error.

Q6: When to use switch instead of if?
A: When testing one variable against fixed values.

Q7: What is nullish assignment (??=)?
A: Assigns only when variable is null/undefined.

Q8: Is [] truthy or falsy? Is {} truthy or falsy?
A: Both are TRUTHY.

Q9: Why avoid nested if?
A: Hard to read → use switch/else-if or return early.
*/

// ===================================================================
console.log(
  "\n🎉 COMPLETED — Full Conditional Statements File (With Nullish + Truthy/Falsy)\n"
);
// ===================================================================
