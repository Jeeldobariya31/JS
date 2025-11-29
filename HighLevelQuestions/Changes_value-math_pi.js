// ======================================================================
// Math.PI — Can we change it? Full explanation + demo + theory
// ======================================================================
//
// GOAL:
// -----
// ✅ Check if Math.PI is changeable (writable or not)
// ✅ Read its property descriptor
// ✅ Try to modify it using assignment and Object.defineProperty
// ✅ Understand WHY it cannot be changed
// ✅ Compare with a normal custom property
// ✅ Interview-ready explanation & MCQs in comments
// ======================================================================



function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================\n");
}

// ======================================================================
// 1️⃣ QUESTION
// ======================================================================
/*
Q: Is Math.PI value changeable or not?

🔹 Short Answer:
   ❌ NO, Math.PI cannot be changed.

🔹 Why?
   → Because its property descriptor has:
       writable: false
       configurable: false
       enumerable: false

   That means:
     - You cannot assign new value (writable: false)
     - You cannot redefine / delete / change descriptor (configurable: false)
     - It does not appear in enumerations (enumerable: false)
*/

// ======================================================================
// 2️⃣ VIEW PROPERTY DESCRIPTOR OF Math.PI
// ======================================================================

sep("2️⃣ Property Descriptor of Math.PI");

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log("📜 Math.PI descriptor:", descriptor);

/*
You will see something like:

{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// ======================================================================
// 3️⃣ TRY DIRECT ASSIGNMENT (Math.PI = ...)
// ======================================================================

sep("3️⃣ Trying to change Math.PI using direct assignment (Math.PI = ...)");

/*
THEORY:
-------
When writable: false → Assignment to Math.PI is ignored in non-strict mode.
In strict mode, it throws TypeError.

We are in normal (non-strict) mode here, so assignment will silently fail.
*/

console.log("Original Math.PI:", Math.PI);

Math.PI = 3.5; // attempt to change
console.log("After Math.PI = 3.5 → Math.PI =", Math.PI);
// Still original value! Because writable: false

// ======================================================================
// 4️⃣ TRY TO CHANGE DESCRIPTOR VIA Object.defineProperty
// ======================================================================

sep("4️⃣ Trying Object.defineProperty to change Math.PI");

// We will try to modify configuration:
try {
  Object.defineProperty(Math, "PI", {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 3.14159,
  });
} catch (error) {
  console.log("❌ Error while redefining Math.PI:", error.message);
}

// Check descriptor again
const descriptorAfter = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(
  "\n📜 Math.PI descriptor AFTER defineProperty attempt:",
  descriptorAfter
);
console.log("Math.PI value now:", Math.PI);

/*
THEORY:
-------
Because configurable: false,
  → Property cannot be redefined or removed.
So Object.defineProperty throws:
  TypeError: Cannot redefine property: PI
*/

// ======================================================================
// 5️⃣ COMPARE: NORMAL CUSTOM OBJECT PROPERTY (WRITABLE + CONFIGURABLE)
// ======================================================================

sep("5️⃣ Comparing with normal custom object property");

const myObj = {};

// Define a property "value" that IS writable & configurable
Object.defineProperty(myObj, "value", {
  value: 10,
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log("myObj initial:", myObj);
console.log(
  "Descriptor of myObj.value:",
  Object.getOwnPropertyDescriptor(myObj, "value")
);

// Change value (works because writable: true)
myObj.value = 99;
console.log("After myObj.value = 99:", myObj);

// Change descriptor (works because configurable: true)
Object.defineProperty(myObj, "value", {
  writable: false,
  configurable: false,
  enumerable: true,
  value: 123,
});
console.log("After redefine myObj.value:", myObj);
console.log(
  "Descriptor AFTER redefine:",
  Object.getOwnPropertyDescriptor(myObj, "value")
);

// Try change again (will silently fail in non-strict)
myObj.value = 999;
console.log("After myObj.value = 999 (writable=false):", myObj);

/*
Difference Summary:
-------------------
- Math.PI:
    writable: false
    configurable: false
  → Neither value nor descriptor can be changed.

- myObj.value (initial):
    writable: true
    configurable: true
  → Both value and descriptor can be changed UNTIL you set configurable: false.
*/

// ======================================================================
// 6️⃣ EXTRA: SEE OTHER MATH CONSTANT DESCRIPTORS (Optional)
// ======================================================================

sep("6️⃣ Other Math constant descriptors (read-only too)");

["E", "LN2", "SQRT2"].forEach((key) => {
  const d = Object.getOwnPropertyDescriptor(Math, key);
  console.log(`Math.${key} →`, d);
});

/*
Most Math constants are:
  writable: false,
  configurable: false,
  enumerable: false
*/

// ======================================================================
// 7️⃣ INTERVIEW-READY THEORY SUMMARY
// ======================================================================
/*
THEORY SUMMARY (IMPORTANT):
---------------------------

1️⃣ Property Descriptor
-----------------------
Every property in JS has hidden attributes:
  - value
  - writable      (can we change value with assignment?)
  - enumerable    (shows in for...in / Object.keys?)
  - configurable  (can we delete or redefine the property?)

We can read these with:
  Object.getOwnPropertyDescriptor(obj, "prop")

We can define/update with:
  Object.defineProperty(obj, "prop", { ...descriptor })

2️⃣ Math.PI Descriptor
-----------------------
Object.getOwnPropertyDescriptor(Math, "PI") gives:

{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

So:
- writable: false      → assignment "Math.PI = 3.5" fails
- configurable: false  → cannot redefine/delete property
- enumerable: false    → won't show up in Object.keys(Math)

3️⃣ Why is Math.PI read-only?
-----------------------------
- JS spec defines Math constants as read-only to prevent accidental
  modification of fundamental math values.
- Changing PI would break math-heavy code, libraries, and cause bugs.

4️⃣ Assignment behavior:
------------------------
In non-strict mode:
  - Writing to non-writable property is silently ignored.
In strict mode:
  - It throws TypeError.

5️⃣ Practical Interview Answer:
-------------------------------
Q: Can you change Math.PI value?
A:
  No. Math.PI is a non-writable, non-configurable property.
  Its descriptor has writable:false and configurable:false.
  So both direct assignments and Object.defineProperty attempts
  will NOT change it.
*/

// ======================================================================
// 8️⃣ MCQs (in comments)
// ======================================================================
/*
Q1. Which is TRUE about Math.PI?

A) writable: true, configurable: false
B) writable: false, configurable: true
C) writable: false, configurable: false   ✅
D) writable: true, configurable: true

Correct: C

--------------------------------------------

Q2. What will happen in non-strict mode?

Math.PI = 4;

A) Math.PI becomes 4
B) Throws TypeError
C) Silently fails, Math.PI remains same ✅
D) Deletes Math.PI

Correct: C

--------------------------------------------

Q3. What will happen in strict mode?

"use strict";
Math.PI = 4;

A) Math.PI becomes 4
B) Throws TypeError ✅
C) Silently fails
D) Math is frozen

Correct: B

--------------------------------------------

Q4. How to read descriptor of Math.PI?

A) Math.getDescriptor("PI")
B) Object.getOwnPropertyDescriptor(Math, "PI") ✅
C) Math.PI.descriptor()
D) Reflect.PI

Correct: B

--------------------------------------------

Q5. What does configurable: false mean?

A) Cannot change value
B) Cannot delete or redefine property ✅
C) Cannot iterate
D) Invisible in code

Correct: B
*/

// ======================================================================
console.log("\n🎉 Math.PI descriptor demo & explanation completed.\n");
// ======================================================================
