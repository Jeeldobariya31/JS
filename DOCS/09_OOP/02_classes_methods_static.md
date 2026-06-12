# 📘 JavaScript Classes — Complete Guide

> **Topics Covered:** Classes, Constructors, Instance Methods, Getters & Setters, Static Methods, Static Properties, Static Blocks, Inheritance, and `super()`.

---

# 1️⃣ Basic Class

## Theory

- A **class** is a blueprint for creating objects.
- The `constructor()` runs automatically when an object is created using `new`.
- Methods defined inside a class are stored on the class prototype.

---

## Example

```javascript
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  greet() {
    console.log("👋 Hello " + this.name);
  }
}

const u1 = new User("Jeel", "jeel@mail.com");
u1.greet();
```

### Output

```text
👋 Hello Jeel
```

---

# 2️⃣ Getter & Setter

## Theory

### Getter (`get`)
- Accesses a value like a property.
- Allows computed values.

### Setter (`set`)
- Controls how values are assigned.
- Useful for validation.

---

## Example

```javascript
class Product {
  constructor(name, price) {
    this.name = name;
    this._price = price;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    if (value <= 0) {
      throw new Error("❌ Price must be positive!");
    }

    this._price = value;
  }
}

let pr = new Product("Laptop", 50000);

console.log(pr.price);

pr.price = 55000;

console.log(pr.price);
```

### Output

```text
50000
55000
```

---

# 3️⃣ Static Members

## Theory

Static members belong to the **class itself**, not to objects.

---

## Static Methods

```javascript
class MathUtil {
  static square(n) {
    return n * n;
  }
}

console.log(MathUtil.square(5));
```

### Output

```text
25
```

---

## Static Properties

```javascript
class MathUtil {
  static version = "1.0.0";
}

console.log(MathUtil.version);
```

### Output

```text
1.0.0
```

---

## Static Block

### Theory

- Runs only once.
- Executes when the class is loaded.
- Useful for initialization.

---

## Example

```javascript
class MathUtil {
  static version = "1.0.0";

  static {
    console.log("Static block executed");
    this.author = "Jeel";
  }
}
```

### Output

```text
Static block executed
```

---

## Combined Example

```javascript
class MathUtil {
  static version = "1.0.0";

  static {
    console.log("⚙️ MathUtil loaded");
    this.author = "Jeel";
  }

  static square(n) {
    return n * n;
  }

  static cube(n) {
    return n * n * n;
  }
}

console.log(MathUtil.square(5));
console.log(MathUtil.cube(3));
console.log(MathUtil.version);
console.log(MathUtil.author);
```

---

# 4️⃣ Inheritance

## Theory

- Implemented using `extends`.
- Child class inherits methods and properties from the parent class.

---

## Example

```javascript
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

c1.hi();
c1.hello();
```

### Output

```text
👨 Hello from Parent
🧒 Hello from Child
```

---

# 5️⃣ super()

## Theory

- Used inside child classes.
- Calls the parent constructor.
- Must be called before using `this`.

---

## Example

```javascript
class Vehicle {
  constructor(name) {
    this.name = name;
  }
}

class Bike extends Vehicle {
  constructor(name, cc) {
    super(name);

    this.cc = cc;
  }
}

const b1 = new Bike("BMW", 200);

console.log(b1);
```

### Output

```javascript
Bike {
  name: "BMW",
  cc: 200
}
```

---

# Execution Flow

```text
new Bike("BMW", 200)

↓

Bike constructor()

↓

super(name)

↓

Vehicle constructor()

↓

this.name assigned

↓

Back to Bike constructor

↓

this.cc assigned

↓

Object returned
```

---

# Class vs Object

| Feature | Class | Object |
|----------|--------|---------|
| Meaning | Blueprint | Actual instance |
| Created Using | `class` keyword | `new` keyword |
| Stores Methods | Yes | Uses inherited methods |
| Reusable | Yes | No |

---

# Static vs Instance Members

| Feature | Instance | Static |
|----------|-----------|---------|
| Belongs To | Object | Class |
| Accessed By | `obj.method()` | `Class.method()` |
| Uses `this` | Object | Class |
| Created Per Object | Yes | No |

---

# Getter vs Setter

| Getter | Setter |
|---------|---------|
| Reads value | Updates value |
| Uses `get` | Uses `set` |
| No arguments | One parameter |
| Called like property | Called like assignment |

---

# Interview Questions

## What is a class?

A blueprint used to create objects.

---

## What is a constructor?

A special method that runs automatically during object creation.

---

## What is inheritance?

A mechanism where one class acquires properties and methods from another class.

---

## Why use `super()`?

To invoke the parent class constructor.

---

## What are static methods?

Methods that belong to the class itself rather than its instances.

---

## Can objects access static methods?

```javascript
const obj = new MathUtil();

obj.square(5); // ❌ Error
```

Only classes can access static members.

---

## Why use getters and setters?

- Validation
- Encapsulation
- Controlled access to data

---

# Quick Revision

```text
class User {}

↓

constructor()

↓

new User()

↓

Instance Methods

↓

Getter / Setter

↓

static Methods

↓

static Properties

↓

static Blocks

↓

extends

↓

super()
```

---

# Important Points ⭐

```text
⭐⭐⭐⭐ Constructor runs automatically.

⭐⭐⭐⭐ Static members belong to the class.

⭐⭐⭐⭐ Child classes use extends.

⭐⭐⭐⭐ super() initializes parent properties.

⭐⭐⭐ Getters and setters provide controlled access.

⭐⭐⭐⭐ Instance methods are stored on prototype.
```

---

# Final Summary

```text
Class         → Blueprint

Constructor   → Initializes objects

Method        → Object behavior

Getter        → Read property

Setter        → Validate/update property

Static        → Class-level members

extends       → Inheritance

super()       → Parent constructor call
```

---

🎯 **Master these concepts thoroughly because they are frequently asked in JavaScript interviews and are fundamental to Object-Oriented Programming in JavaScript.**