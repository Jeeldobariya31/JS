// ======================================================================
// 📘 02_oop_theory.js
// Complete OOP Theory (Encapsulation, Abstraction, Inheritance, Polymorphism)
// ======================================================================

/*
===========================================================
🔵 1️⃣ What is OOP?
===========================================================
OOP = Object Oriented Programming (class-based programming)

4 PILLARS:
----------
1. Encapsulation → wrapping data & methods inside class
2. Abstraction   → hiding internal details
3. Inheritance   → child class getting features of parent
4. Polymorphism  → same method name, different behavior
===========================================================


===========================================================
🔵 2️⃣ Encapsulation
===========================================================
- Data hiding using class properties
- Access using methods (get/set)
*/

class Student {
  constructor(name, marks) {
    this._name = name;
    this._marks = marks;
  }

  get marks() {
    return this._marks;
  }
  set marks(m) {
    this._marks = m;
  }
}

const st = new Student("Jeel", 95);
console.log(st.marks);

/*
===========================================================
🔵 3️⃣ Abstraction
===========================================================
- User sees WHAT, not HOW
*/

class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }
  deposit(amount) {
    this._balance += amount;
  }
  getBalance() {
    return this._balance;
  }
}

const acc = new BankAccount(500);
acc.deposit(200);
console.log(acc.getBalance());

/*
===========================================================
🔵 4️⃣ Inheritance
===========================================================
*/

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

new Dog().speak();

/*
===========================================================
🔵 5️⃣ Polymorphism
===========================================================
- One interface, different implementations
*/

class Shape {
  draw() {
    console.log("Drawing shape");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing Circle");
  }
}

class Square extends Shape {
  draw() {
    console.log("Drawing Square");
  }
}

function render(shape) {
  shape.draw();
}

render(new Circle());
render(new Square());

// ======================================================================
console.log("OOP theory completed.");
