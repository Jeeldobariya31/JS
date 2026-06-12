# 📘 JavaScript OOP Theory – Complete Guide

> **OOP (Object-Oriented Programming)** is a programming paradigm that organizes code using **objects** and **classes**.

---

# 🤔 What is OOP?

```text
OOP = Object-Oriented Programming
```

---

## Purpose of OOP

```text
✔ Better code organization

✔ Reusability

✔ Maintainability

✔ Scalability

✔ Real-world modeling
```

---

# 4 Pillars of OOP ⭐⭐⭐⭐

```text
1. Encapsulation

2. Abstraction

3. Inheritance

4. Polymorphism
```

---

# OOP Structure

```text
Class

↓

Object

↓

Encapsulation

↓

Abstraction

↓

Inheritance

↓

Polymorphism
```

---

# 1️⃣ Encapsulation

## Definition

```text
Wrapping data and methods together
inside a single unit (class).

+

Restricting direct access to data.
```

---

# Goal

```text
Protect object data.
```

---

# Example

```javascript
class Student {
  constructor(name, marks) {
    this._name = name;
    this._marks = marks;
  }

  get marks() {
    return this._marks;
  }

  set marks(value) {
    this._marks = value;
  }
}

const st = new Student("Jeel", 95);

console.log(st.marks);
```

---

## Output

```text
95
```

---

# Encapsulation Flow

```text
Private Data

↓

Getter / Setter

↓

Controlled Access

↓

User
```

---

# Benefits

```text
✔ Data protection

✔ Better validation

✔ Improved maintainability
```

---

# 2️⃣ Abstraction

## Definition

```text
Showing WHAT an object does

while hiding HOW it works internally.
```

---

# Goal

```text
Reduce complexity.
```

---

# Example

```javascript
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
```

---

## Output

```text
700
```

---

# User Perspective

```javascript
acc.deposit(200);
```

---

# Internal Logic

```text
User doesn't know

↓

How balance updates internally

↓

Only knows the method.
```

---

# Abstraction Flow

```text
User

↓

Public Methods

↓

Hidden Internal Logic
```

---

# Benefits

```text
✔ Simpler interfaces

✔ Reduced complexity

✔ Improved security
```

---

# 3️⃣ Inheritance

## Definition

```text
Mechanism where one class acquires

properties and methods of another class.
```

---

# Goal

```text
Code reuse.
```

---

# Syntax

```javascript
class Child extends Parent {

}
```

---

# Example

```javascript
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
```

---

## Output

```text
Dog barks
```

---

# Hierarchy

```text
Animal

↓

Dog
```

---

# Benefits

```text
✔ Reusability

✔ Reduced duplication

✔ Easier maintenance
```

---

# 4️⃣ Polymorphism

## Definition

```text
One interface,

multiple implementations.
```

---

# Goal

```text
Allow the same method name

to behave differently.
```

---

# Example

```javascript
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
```

---

## Output

```text
Drawing Circle

Drawing Square
```

---

# Polymorphism Flow

```text
render(shape)

↓

shape.draw()

↓

Circle.draw()

OR

Square.draw()
```

---

# Benefits

```text
✔ Flexibility

✔ Extensibility

✔ Cleaner code
```

---

# OOP Example Using Real Life

## Vehicle System

```text
Vehicle

↓

Car

Bike

Truck
```

---

## Encapsulation

```text
Speed hidden inside object.
```

---

## Abstraction

```text
drive()

without knowing engine internals.
```

---

## Inheritance

```text
Car extends Vehicle.
```

---

## Polymorphism

```text
start()

↓

Different behavior for each vehicle.
```

---

# Class vs Object

| Class | Object |
|--------|---------|
| Blueprint | Actual instance |
| Defines structure | Contains data |
| Reusable | Created from class |

---

# Example

```javascript
class Person {

}

const p = new Person();
```

---

# Output

```text
Person → Class

p → Object
```

---

# Pillars Summary

| Pillar | Meaning |
|---------|----------|
| Encapsulation | Data hiding |
| Abstraction | Hide complexity |
| Inheritance | Reuse code |
| Polymorphism | One interface, many behaviors |

---

# OOP Relationship

```text
Class

↓

Object

↓

Encapsulation

↓

Abstraction

↓

Inheritance

↓

Polymorphism
```

---

# Interview Questions ⭐⭐⭐⭐

---

## What is OOP?

```text
Programming paradigm based on

objects and classes.
```

---

## What are the 4 pillars of OOP?

```text
1. Encapsulation

2. Abstraction

3. Inheritance

4. Polymorphism
```

---

## What is Encapsulation?

```text
Wrapping data and methods together

while restricting direct access.
```

---

## What is Abstraction?

```text
Showing essential features

while hiding implementation details.
```

---

## What is Inheritance?

```text
Allowing child classes to reuse

parent class functionality.
```

---

## What is Polymorphism?

```text
Same interface,

different implementations.
```

---

## Why use OOP?

```text
✔ Better organization

✔ Reusability

✔ Maintainability

✔ Scalability
```

---

# Real JavaScript Note ⭐⭐⭐

```text
JavaScript is PROTOTYPE-BASED.

ES6 classes provide

class-like syntax

over prototypes.
```

---

# Quick Revision 🚀

```text
OOP

↓

4 Pillars

↓

Encapsulation

↓

Abstraction

↓

Inheritance

↓

Polymorphism
```

---

# Memory Trick 🧠

```text
EAIP

E → Encapsulation

A → Abstraction

I → Inheritance

P → Polymorphism
```

---

# Most Important Topics ⭐⭐⭐⭐

```text
⭐⭐⭐⭐ Encapsulation

⭐⭐⭐⭐ Abstraction

⭐⭐⭐⭐ Inheritance

⭐⭐⭐⭐ Polymorphism

⭐⭐⭐ Getter / Setter

⭐⭐⭐ Method Overriding

⭐⭐⭐ extends keyword

⭐⭐⭐ Real-world examples
```

---

# Final Summary

```text
Encapsulation

↓

Protect Data


Abstraction

↓

Hide Complexity


Inheritance

↓

Reuse Code


Polymorphism

↓

Flexible Behavior
```

> 🎯 **Golden Rule:**  
> OOP helps you write **organized, reusable, and maintainable code** by modeling software using real-world concepts and the four core pillars.