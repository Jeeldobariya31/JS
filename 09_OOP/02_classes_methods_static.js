// ======================================================================
// 📘 02_classes_methods_static.js
// 🎯 FULL GUIDE — Classes • Constructor • Methodsc
// 🎯 Static Methods • Static Properties • Static Block • Inheritance • super()
// ======================================================================

console.log("📌 Loaded: 02_classes_methods_static.js\n");

// ======================================================================
// 1️⃣ BASIC CLASS — Constructor + Instance Methods
// ======================================================================
/*
THEORY:
-------
- class is a blueprint for creating objects.
- constructor() runs automatically when new object is created.
- Methods defined inside class automatically go to Class.prototype.
*/

class User {
  constructor(name, email) {
    // 'this' refers to the object created by 'new User()'
    this.name = name;
    this.email = email;
  }

  // Instance method
  greet() {
    console.log("👋 Hello " + this.name);
  }
}

// Creating object using NEW keyword
const u1 = new User("Jeel", "jeel@mail.com");
u1.greet();
// Output → 👋 Hello Jeel

// ======================================================================
// 2️⃣ GETTER & SETTER — Controlled Access to Properties
// ======================================================================
/*
THEORY:
-------
- Getter → access property like a variable (pr.price)
- Setter → validate or modify value before assignment
- Good for validation, hiding internal logic, abstraction
*/

class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price; // Using underscore for internal variable
  }

  // Getter → read value
  get price() {
    return this._price;
  }

  // Setter → write value with validation
  set price(value) {
    if (value <= 0) throw new Error("❌ Price must be positive!");
    this._price = value;
  }
}

let pr = new Product("Laptop", 50000);
console.log("💰 Price:", pr.price);

pr.price = 55000; // Calls setter
console.log("💰 Updated Price:", pr.price);

// ======================================================================
// 3️⃣ STATIC — Static Methods + Static Properties + Static Block
// ======================================================================
/*
THEORY (Static):
----------------
- Static members belong to CLASS, not object.
- Call using ClassName.method() NOT object.method().

STATIC METHODS:
---------------
- Used for utility/helper logic.

STATIC PROPERTIES:
------------------
- Variables that belong to the class itself.

STATIC BLOCK:
-------------
- Runs ONCE when the class is first evaluated.
- Useful for initialization logic.
*/

class MathUtil {
  // Static property
  static version = "1.0.0";

  // Static block (runs once)
  static {
    console.log("⚙️ MathUtil static block executed (class loaded)");
    this.author = "Jeel"; // adding new static property inside static block
  }

  // Static methods
  static square(n) {
    return n * n;
  }

  static cube(n) {
    return n * n * n;
  }
}

console.log("🔢 Square:", MathUtil.square(5));
console.log("✖ Cube:", MathUtil.cube(3));
console.log("📦 MathUtil.version:", MathUtil.version);
console.log("👤 MathUtil.author:", MathUtil.author);

// ======================================================================
// 4️⃣ INHERITANCE — extends (Parent → Child)
// ======================================================================
/*
THEORY:
-------
- Child class inherits properties + methods of Parent class.
- Child can have its own methods also.
*/

class Parent {
  hi() {
    console.log("👨 Hello from Parent");
  }
}

class Child extends Parent {
  hello() {
    console.log("🧒 Hello from Child");
  }
}

const c1 = new Child();
c1.hi(); // Parent method
c1.hello(); // Child method

// ======================================================================
// 5️⃣ super() — Calling Parent Constructor
// ======================================================================
/*
THEORY:
-------
- When extending a class, child MUST call super() inside constructor.
- super() calls parent's constructor.
*/

class Vehicle {
  constructor(name) {
    this.name = name;
  }
}

class Bike extends Vehicle {
  constructor(name, cc) {
    super(name); // MUST be first line in child constructor
    this.cc = cc;
  }
}

const b1 = new Bike("BMW", 200);
console.log("🏍️ Bike Object:", b1);
/*
Output:
{
  name: "BMW",
  cc: 200
}
*/

// ======================================================================
console.log("\n📘 Classes file completed successfully.");
// ======================================================================
