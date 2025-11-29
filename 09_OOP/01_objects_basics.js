// ======================================================================
// 📘 01_objects_basics.js
// JAVA​SCRIPT OBJECTS — Theory + Examples
// ======================================================================

console.log("📌 Loaded: 01_objects_basics.js");

// =============================================================
// 1️⃣ What is an Object?
// =============================================================
/*
Object = collection of key–value pairs.
Keys → strings or symbols
Values → any data type (string, number, boolean, array, function, object)
*/

// Object literal
const person = {
  name: "Jeel",
  age: 21,
  city: "Rajkot",
  skills: ["JS", "React"],
  greet() {
    console.log("Hello, " + this.name);
  },
};

console.log("➤ Person Object:", person);
person.greet();

// =============================================================
// 2️⃣ Ways to Create Objects
// =============================================================

// A. Object Literal
const obj1 = { a: 10 };

// B. new Object()
const obj2 = new Object();
obj2.x = 100;

// C. Constructor Function
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Jeel", 21);

// D. Object.create()
const base = { role: "Admin" };
const user1 = Object.create(base);

// E. Class (modern)
class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}
const c1 = new Car("BMW", 500000);

// =============================================================
// 3️⃣ Accessing / Adding / Removing Properties
// =============================================================

console.log(person.name); // dot
console.log(person["city"]); // bracket

person.email = "jeel@mail.com"; // add
delete person.age; // delete

// =============================================================
// 4️⃣ Important Object Methods
// =============================================================

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("name"));

// =============================================================
// 5️⃣ Symbols as Object Keys
// =============================================================

const id = Symbol("id");
const emp = { [id]: 101, name: "Asha" };

console.log(emp[id]); // access symbol key

// =============================================================
// 6️⃣ Nested Objects
// =============================================================

const company = {
  name: "TechSoft",
  address: {
    city: "Mumbai",
    pin: 400001,
  },
};

console.log(company.address.city);

// =============================================================
// 7️⃣ Looping Object
// =============================================================

for (let key in company) {
  console.log(key, ":", company[key]);
}

// =============================================================
// END
// ======================================================================
