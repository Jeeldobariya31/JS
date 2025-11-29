// ======================================================================
// 📘 07_getter_setter.js
// FULL GUIDE — Getters & Setters in JavaScript (Object + Class + defineProperty)
// ======================================================================
//
// HOW TO USE:
// -----------
// - Run: node 07_getter_setter.js
// - Or paste into browser DevTools console.
//
// YOU WILL LEARN:
// ---------------
// ✅ What are getters & setters?
// ✅ How to define in object literals
// ✅ How to define in classes
// ✅ Why use them (validation, computed, encapsulation)
// ✅ How they look in property descriptors
// ✅ Object.defineProperty with get/set
// ✅ Common pitfalls (+ MCQs in comments)
// ======================================================================

console.log("📌 Loaded: 07_getter_setter.js\n");

function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================\n");
}

// ======================================================================
// 1️⃣ THEORY — WHAT ARE GETTERS & SETTERS?
// ======================================================================
/*
GETTER:
  - A function that acts like a property read.
  - Called when you access obj.prop (no parentheses).
  - Syntax:
        get propName() { ... }

SETTER:
  - A function that acts like a property write.
  - Called when you assign obj.prop = value.
  - Syntax:
        set propName(value) { ... }

WHY USE THEM?
-------------
✅ Encapsulation: hide internal details (e.g. _price)
✅ Validation: check the value before setting
✅ Computed properties: fullName derived from firstName + lastName
✅ Backward compatibility: change internal logic without changing API

IMPORTANT:
----------
- Getter must RETURN something.
- Setter receives EXACTLY ONE argument (the value being set).
*/

// ======================================================================
// 2️⃣ GETTER / SETTER IN OBJECT LITERALS
// ======================================================================

sep("2️⃣ Getters & Setters in OBJECT LITERALS");

const user = {
  firstName: "Jeel",
  lastName: "Dobariya",

  // computed full name (getter)
  get fullName() {
    console.log("🔍 fullName getter called");
    return this.firstName + " " + this.lastName;
  },

  // setter to update BOTH firstName and lastName from "First Last"
  set fullName(value) {
    console.log("✏ fullName setter called with:", value);
    const parts = value.split(" ");
    this.firstName = parts[0] || "";
    this.lastName = parts[1] || "";
  },
};

console.log("user.firstName:", user.firstName);
console.log("user.lastName :", user.lastName);
console.log("user.fullName :", user.fullName); // calls getter

user.fullName = "Arya Stark"; // calls setter
console.log("After setting fullName:");
console.log("user.firstName:", user.firstName);
console.log("user.lastName :", user.lastName);
console.log("user.fullName :", user.fullName);

// ======================================================================
// 3️⃣ GETTER / SETTER FOR VALIDATION (OBJECT LITERAL)
// ======================================================================

sep("3️⃣ Getter/Setter with validation (Object Literal)");

const account = {
  owner: "Ravi",
  _balance: 0, // internal storage

  get balance() {
    console.log("🔍 Getting balance");
    return this._balance;
  },

  set balance(amount) {
    console.log("✏ Setting balance =", amount);
    if (typeof amount !== "number" || Number.isNaN(amount)) {
      throw new Error("❌ Balance must be a valid number");
    }
    if (amount < 0) {
      throw new Error("❌ Balance cannot be negative");
    }
    this._balance = amount;
  },
};

account.balance = 1000; // calls setter
console.log("Current balance:", account.balance); // calls getter

// account.balance = -50; // uncomment to see error

// ======================================================================
// 4️⃣ GETTER / SETTER IN ES6 CLASSES
// ======================================================================

sep("4️⃣ Getters & Setters in CLASSES");

class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price; // internal
  }

  // getter
  get price() {
    console.log("🔍 Getting price");
    return this._price;
  }

  // setter
  set price(value) {
    console.log("✏ Setting price =", value);
    if (value <= 0) {
      throw new Error("❌ Price must be positive");
    }
    this._price = value;
  }

  // normal method (for comparison)
  show() {
    console.log(`📦 Product: ${this.name}, Price: ${this._price}`);
  }
}

const p1 = new Product("Laptop", 50000);
p1.show();
console.log("p1.price:", p1.price); // calls getter
p1.price = 55000; // calls setter
console.log("p1.price after update:", p1.price);
p1.show();

// ======================================================================
// 5️⃣ ACCESSOR DESCRIPTORS — get/set in Property Descriptor
// ======================================================================
/*
THEORY:
-------
In JS, properties are of two main types:
1) Data Property (value, writable, enumerable, configurable)
2) Accessor Property (get, set, enumerable, configurable)

If a property has get/set instead of value/writable → Accessor descriptor.
*/

sep("5️⃣ Accessor descriptor (Object.getOwnPropertyDescriptor)");

const person = {
  _age: 21,
  get age() {
    return this._age;
  },
  set age(v) {
    if (v < 0) throw new Error("Invalid age");
    this._age = v;
  },
};

const desc = Object.getOwnPropertyDescriptor(person, "age");
console.log("Descriptor of person.age:", desc);
/*
Will show something like:
{
  get: [Function: get age],
  set: [Function: set age],
  enumerable: true,
  configurable: true
}
*/

// ======================================================================
// 6️⃣ Object.defineProperty with get/set (manual way)
// ======================================================================

sep("6️⃣ Using Object.defineProperty to create getter/setter");

const obj = {};
let internalValue = 0;

Object.defineProperty(obj, "value", {
  get() {
    console.log("🔍 getter of obj.value");
    return internalValue;
  },
  set(v) {
    console.log("✏ setter of obj.value =", v);
    if (typeof v !== "number") {
      throw new Error("Value must be number");
    }
    internalValue = v;
  },
  enumerable: true,
  configurable: true,
});

obj.value = 10; // calls setter
console.log("obj.value:", obj.value); // calls getter

console.log(
  "Descriptor of obj.value:",
  Object.getOwnPropertyDescriptor(obj, "value")
);

// ======================================================================
// 7️⃣ COMMON PITFALL — RECURSION (DON’T DO THIS)
// ======================================================================
/*
BAD:
----
set price(v) {
   this.price = v; // ❌ calls setter again → infinite recursion
}

CORRECT:
--------
- Use a DIFFERENT internal name, like _price
- Or use a Symbol, or closure
*/

sep("7️⃣ Pitfall: Recursive setter example (explained, not executed)");

/*
// ❌ WRONG (infinite recursion):
const badExample = {
  set value(v) {
    this.value = v; // ❌ setter calls itself forever
  }
};

// ✅ CORRECT:
const goodExample = {
  _value: 0,
  set value(v) {
    this._value = v; // uses different property internally
  },
  get value() {
    return this._value;
  }
};
*/

// ======================================================================
// 8️⃣ COMBINED EXAMPLE — FULL USER MODEL WITH ENCAPSULATION
// ======================================================================

sep("8️⃣ Combined Example — User with encapsulated password");

class UserAccount {
  constructor(username, password) {
    this.username = username;
    this._password = password; // do NOT expose directly in real apps
  }

  get maskedPassword () {
    // Do NOT ever return real password in real apps; this is just demo.
    return "*".repeat(this._password.length);
  }

  set password(newPass) {
    if (typeof newPass !== "string" || newPass.length < 6) {
      throw new Error("Password must be string & >= 6 chars");
    }
    this._password = newPass;
  }

  checkPassword(input) {
    return this._password === input;
  }
}

const ua = new UserAccount("jeel01", "secret1");
console.log("Username:", ua.username);
console.log("Masked password:", ua.maskedPassword);
// console.log("Real password (not accessible by getter):", ua._password); // still accessible but by convention private

console.log("Password correct?", ua.checkPassword("secret1"));
ua.password = "newsecret"; // uses setter
console.log("Password correct after change?", ua.checkPassword("newsecret"));



// ======================================================================
// 9️⃣ INTERVIEW THEORY SUMMARY (IN COMMENTS)
// ======================================================================
/*
Q1: What is the difference between a data property and an accessor property?
A:
  - Data property: { value, writable, enumerable, configurable }
  - Accessor property: { get, set, enumerable, configurable }

Q2: How do you declare a getter in:
    a) object literal
    b) class
A:
  a) const obj = { get prop() { ... } }
  b) class X { get prop() { ... } }

Q3: Can getter and setter have different names?
A:
  - Yes, but normally we use SAME name to represent one logical property.

Q4: Why use _price / _age etc.?
A:
  - To avoid recursive calls inside setter.
  - To separate internal field from public accessor property.

Q5: When to use Object.defineProperty?
A:
  - When you need fine control over descriptor.
  - When adding getter/setter to existing objects dynamically.

Q6: Are getters/setters inherited in prototype chain?
A:
  - Yes. They are normal properties on the prototype.
  - When accessed on instance, JS will call getter/setter from prototype.
*/

// ======================================================================
// 🔟 MCQs — Getters & Setters (with answers in comments)
// ======================================================================
/*
MCQ 1:
------
Which syntax correctly defines a getter in an object literal?

A) get: fullName() { ... }
B) get fullName() { ... }            ✅
C) fullName get() { ... }
D) getter fullName() { ... }

Correct: B

MCQ 2:
------
Given:

const obj = {
  _x: 10,
  get x() { return this._x; }
};

What does obj.x do?

A) Calls a function x()
B) Returns 10 ✅
C) Throws error
D) Returns getter function

Correct: B

MCQ 3:
------
In a setter, how many parameters are allowed?

A) 0
B) 1 ✅
C) 2
D) Any number

Correct: B

MCQ 4:
------
Which is TRUE about getter descriptor?

A) Descriptor has value and writable only
B) Descriptor has get, set, enumerable, configurable ✅
C) Descriptor has get, value, writable, set
D) Descriptor has only get and set

Correct: B

MCQ 5:
------
What is a common bug with setters?

A) Forgetting to use this
B) Returning a value
C) Calling this.prop inside setter for same prop (recursion/infinite loop) ✅
D) Using arrow functions

Correct: C
*/

// ======================================================================
console.log(
  "\n🎉 07_getter_setter.js — All Getter/Setter Concepts Completed.\n"
);
// ======================================================================
