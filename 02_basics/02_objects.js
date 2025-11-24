// ===================================================================
// 📘 02_objects.js — EASY + COMPLETE JAVASCRIPT OBJECT NOTES WITH EXAMPLES
// Fully explained line-by-line with simple comments for interview & viva
// ===================================================================

console.log("\n📂 Loaded: 02_objects.js (Ultimate Object Guide)\n");

// ===================================================================
// 1️⃣ What is an Object?
// ===================================================================
// 👉 Object stores data as key–value pairs.
// 👉 Keys → string or symbol.
// 👉 Values → any datatype (string, number, float, boolean, array, function, object).
// 👉 Use objects when data needs structure (like real-world entities).
// ===================================================================

let person = { name: "Jeel", age: 21 };
console.log("1️⃣ Basic Object:", person);

// ===================================================================
// 2️⃣ Ways to Create Objects (6 Most Used Methods)
// ===================================================================

// ------------------------------
// 2.1 Object Literal (MOST COMMON)
// ------------------------------
let obj1 = { a: 10, b: 20 };
console.log("2.1 Literal:", obj1);

// ------------------------------
// 2.2 Using new Object()
// ------------------------------
let obj2 = new Object(); // creates empty object
obj2.title = "JS"; // add property
console.log("2.2 new Object:", obj2);

// ------------------------------
// 2.3 Constructor Function (Old OOP style)
// ------------------------------
function Car(model, year) {
  this.model = model;
  this.year = year;
}
let car1 = new Car("BMW", 2020);
console.log("2.3 Constructor:", car1);

// ------------------------------
// 2.4 Class (Modern ES6 OOP)
// ------------------------------
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
}
console.log("2.4 Class:", new Student("Aarya", 15));

// ------------------------------
// 2.5 Object.create() → creates object with prototype
// ------------------------------
let base = { role: "Human" };
let user = Object.create(base);
user.name = "Ravi";
console.log("2.5 Object.create:", user);

// ------------------------------
// 2.6 Factory Function → returns new object
// ------------------------------
function createUser(name, email) {
  return { name, email };
}
console.log("2.6 Factory:", createUser("Nina", "nina@mail.com"));

// ===================================================================
// 3️⃣ Access, Add, Update, Delete Properties
// ===================================================================

let obj = { x: 10, y: 20, z: 30 };

// ------------------------------
// Access values
// ------------------------------
console.log("3.1 Access dot notation (obj.x):", obj.x);
console.log("3.2 Access bracket notation (obj['y']):", obj["y"]);
console.log('3.2 Bracket (string key — must be in quotes ["z"]):', obj["z"]);

// ------------------------------
// Add property
// ------------------------------
obj.newKey = 50;
console.log("3.3 Add newKey:", obj);

// ------------------------------
// Update property
// ------------------------------
obj.x = 100;
console.log("3.4 Update x:", obj);

// ------------------------------
// Delete property
// ------------------------------
delete obj.y;
console.log("3.5 Delete y:", obj);

// ===================================================================
// 4️⃣ Check Properties
// ===================================================================

console.log("4.1 'x' in obj → checks existence:", "x" in obj);

console.log(
  "4.2 hasOwnProperty → checks if property belongs to object:",
  obj.hasOwnProperty("x")
); // does object itself contain key?

console.log("4.3 Object.keys → only keys:", Object.keys(obj));
console.log("4.4 Object.values → only values:", Object.values(obj));
console.log("4.5 Object.entries → key-value pairs:", Object.entries(obj));

// ===================================================================
// 5️⃣ Loop Through Object
// ===================================================================

let loopObj = { name: "Jeel", city: "Rajkot" };

console.log("\n5️⃣ Looping through object:");
for (let key in loopObj) {
  console.log("   🔑 Key:", key, "➡️ Value:", loopObj[key]);
}

// ===================================================================
// 6️⃣ Spread Operator & Destructuring
// ===================================================================

// ------------------------------
// Spread → clone or merge objects
// ------------------------------
let newObj = { ...loopObj, country: "India" };
console.log("6.1 Spread:", newObj);

// ------------------------------
// Destructuring → extract values into variables
// ------------------------------
let { name, city } = loopObj;
console.log("6.2 Destructuring:", name, city);

// ===================================================================
// 7️⃣ Nested Objects (Real World Example)
// ===================================================================

let company = {
  name: "TechSphere",
  address: {
    city: "Ahmedabad",
    pin: 380001,
  },
};

console.log("7️⃣ Nested access (city):", company.address.city);

// ===================================================================
// 8️⃣ Optional Chaining (?.)
// ===================================================================
// Prevents crash when accessing property of undefined/null
// ===================================================================

console.log("8️⃣ Existing key:", company.address?.pin);
console.log("8️⃣ Missing key (safe):", company.contact?.phone);

// ===================================================================
// 9️⃣ JSON Methods (Convert object ↔ JSON)
// ===================================================================

let jsObj = { name: "Jeel", age: 21 };

let jsonStr = JSON.stringify(jsObj); // object → JSON
console.log("9.1 JSON.stringify:", jsonStr);

let back = JSON.parse(jsonStr); // JSON → object
console.log("9.2 JSON.parse:", back);

// ===================================================================
// 🔟 Important Object Methods
// ===================================================================

// ------------------------------
// freeze → cannot change values
// ------------------------------
let f = { a: 1 };
Object.freeze(f);
console.log("10.1 freeze (no change allowed):", f);

// ------------------------------
// seal → update allowed, add/delete not allowed
// ------------------------------
let s = { x: 10 };
Object.seal(s);
s.x = 99;
console.log("10.2 seal (update ok):", s);

// ------------------------------
// assign → merge objects
// ------------------------------
console.log("10.3 assign → merge:", Object.assign({ p: 1 }, { q: 2 }));

// ------------------------------
// fromEntries → array → object
// ------------------------------
let arr = [
  ["name", "Jeel"],
  ["age", 21],
];
console.log("10.4 fromEntries:", Object.fromEntries(arr));

// ------------------------------
// getOwnPropertyNames → returns all keys
// ------------------------------
console.log("10.5 getOwnPropertyNames:", Object.getOwnPropertyNames(s));

// ===================================================================
// 1️⃣1️⃣ Property Descriptors
// ===================================================================
// Control: writable, enumerable, configurable
// ===================================================================

let pd = {};

Object.defineProperty(pd, "name", {
  value: "Jeel", // fixed value
  writable: false, // cannot modify
  enumerable: true, // will appear in loops
  configurable: false, // cannot delete/change descriptor
});

console.log(
  "11️⃣ Descriptor details:",
  Object.getOwnPropertyDescriptor(pd, "name")
);

// ===================================================================
// 1️⃣2️⃣ Getter & Setter (Encapsulation)
// ===================================================================

let user2 = {
  _name: "",
  get name() {
    // runs when reading user2.name
    return this._name;
  },
  set name(v) {
    // runs when writing user2.name
    this._name = v.toUpperCase();
  },
};

user2.name = "jeel"; // setter called
console.log("12️⃣ Getter & Setter:", user2.name); // getter called

// ===================================================================
// 1️⃣3️⃣ Symbol Keys (Unique + Hidden)
// ===================================================================
// Symbols are NOT enumerable (not shown in Object.keys())
// ===================================================================

const id = Symbol("id");
let sObj = { [id]: 111, name: "Asha" };
console.log("13️⃣ Symbol access → sObj[id]:", sObj[id]);

// ===================================================================
// 1️⃣4️⃣ Prototype Example (2nd Pillar of JS)
// ===================================================================

let proto = {
  greet() {
    return "Hello!";
  },
};

// child object inherits proto
let child = Object.create(proto);
child.name = "Ravi";

console.log("14️⃣ Prototype (inherited):", child.greet());

// ===================================================================
// 1️⃣5️⃣ Class Inheritance (Modern OOP)
// ===================================================================

class Parent {
  hi() {
    return "Hi from Parent";
  }
}

class Child extends Parent {
  hello() {
    return "Hello from Child";
  }
}

let c = new Child();

console.log("15️⃣ Inheritance:", c.hi(), "|", c.hello());

// ===================================================================
// 1️⃣6️⃣ Singleton Pattern (Interview Important)
// ===================================================================
// Ensures only ONE instance is created
// ===================================================================

const Singleton = (function () {
  let instance; // private instance
  return {
    getInstance() {
      if (!instance) instance = { id: Math.random() };
      return instance;
    },
  };
})();

console.log("16️⃣ Singleton instance:", Singleton.getInstance());

// ===================================================================
// 1️⃣7️⃣ Shallow vs Deep Clone
// ===================================================================

let original = { a: 1, nested: { b: 2 } };

// Shallow clone → copies only top level
let shallow = { ...original };
console.log("17.1 Shallow Clone:", shallow);

// Deep clone → copies entire structure
let deep = JSON.parse(JSON.stringify(original));
console.log("17.2 Deep Clone:", deep);

// ===================================================================
// 1️⃣8️⃣ Object.freeze & Object.seal Summary
// ===================================================================

let objFreeze = Object.freeze({ a: 10 });
let objSeal = Object.seal({ a: 10 });

console.log("18️⃣ freeze (no change):", objFreeze);
console.log("18️⃣ seal (change allowed):", objSeal);

// ===================================================================
// 1️⃣9️⃣ Map vs Object (When to use what?)
// ===================================================================
// ✔ Map allows ANY key type (string, number, object)
// ✔ Map remembers insertion order
// ✔ Map has size property
// ===================================================================

let map = new Map();
map.set("name", "Jeel");
console.log("19️⃣ Map example (map.get):", map.get("name"));

// ===================================================================
// 2️⃣0️⃣ Full Object Topics Checklist (Everything Covered)
// ===================================================================
/*
✔ What is an object?
✔ 6 ways to create objects
✔ Access / Add / Update / Delete
✔ "in" operator
✔ hasOwnProperty
✔ Object.keys(), values(), entries()
✔ for-in loop
✔ Spread operator
✔ Destructuring
✔ Nested objects
✔ Optional chaining
✔ JSON stringify & parse
✔ Object.freeze / seal / assign
✔ Property descriptors
✔ Getter & Setter
✔ Symbol keys
✔ Prototype inheritance
✔ Class inheritance (extends)
✔ Singleton pattern
✔ Shallow vs deep clone
✔ Map vs Object
*/

// ===================================================================
console.log(
  "\n🎉 COMPLETED — Full JavaScript Object File (Easy + All Examples + Perfect Comments)\n"
);
// ===================================================================
