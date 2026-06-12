# 📘 JavaScript Objects — Complete Basics Guide

> **Objects are one of the most important data structures in JavaScript.**  
> They store data in the form of **key–value pairs**.

---

# 1️⃣ What is an Object?

```text
Object = Collection of key–value pairs.
```

---

## Keys

```text
✔ Strings
✔ Symbols
```

---

## Values

```text
✔ String
✔ Number
✔ Boolean
✔ Array
✔ Object
✔ Function
✔ Any JavaScript value
```

---

## Example

```javascript
const person = {
  name: "Jeel",
  age: 21,
  city: "Rajkot",
  skills: ["JS", "React"],

  greet() {
    console.log("Hello, " + this.name);
  },
};
```

---

## Output

```javascript
{
  name: "Jeel",
  age: 21,
  city: "Rajkot",
  skills: ["JS", "React"],
  greet: [Function]
}
```

---

# Calling Object Methods

```javascript
person.greet();
```

### Output

```text
Hello, Jeel
```

---

# 2️⃣ Ways to Create Objects

---

## A. Object Literal ⭐⭐⭐⭐

```javascript
const obj1 = {
  a: 10,
};
```

---

## B. Using `new Object()`

```javascript
const obj2 = new Object();

obj2.x = 100;
```

---

## Output

```javascript
{
  x: 100
}
```

---

## C. Constructor Function

```javascript
function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = new User("Jeel", 21);
```

---

## Output

```javascript
User {
  name: "Jeel",
  age: 21
}
```

---

## D. Object.create()

### Theory

```text
Creates a new object using another object as prototype.
```

---

## Example

```javascript
const base = {
  role: "Admin",
};

const user1 = Object.create(base);
```

---

## Output

```javascript
user1.role
```

```text
Admin
```

---

# Prototype Chain

```text
user1

↓

base

↓

Object.prototype

↓

null
```

---

## E. Using Class

```javascript
class Car {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }
}

const c1 = new Car("BMW", 500000);
```

---

## Output

```javascript
Car {
  brand: "BMW",
  price: 500000
}
```

---

# 3️⃣ Accessing Object Properties

---

## Dot Notation

```javascript
console.log(person.name);
```

### Output

```text
Jeel
```

---

## Bracket Notation

```javascript
console.log(person["city"]);
```

### Output

```text
Rajkot
```

---

# Dot vs Bracket

| Dot (`.`) | Bracket (`[]`) |
|------------|----------------|
| Simple syntax | Dynamic access |
| Static property names | Variables allowed |
| `obj.name` | `obj[key]` |

---

## Dynamic Access Example

```javascript
const key = "name";

console.log(person[key]);
```

### Output

```text
Jeel
```

---

# Adding Properties

```javascript
person.email = "jeel@mail.com";
```

---

## Result

```javascript
{
  email: "jeel@mail.com"
}
```

---

# Updating Properties

```javascript
person.city = "Ahmedabad";
```

---

# Removing Properties

```javascript
delete person.age;
```

---

# 4️⃣ Important Object Methods

---

# Object.keys()

```javascript
Object.keys(person);
```

---

## Output

```javascript
[
  "name",
  "city",
  "skills",
  "greet"
]
```

---

# Object.values()

```javascript
Object.values(person);
```

---

## Output

```javascript
[
  "Jeel",
  "Rajkot",
  ["JS", "React"],
  [Function]
]
```

---

# Object.entries()

```javascript
Object.entries(person);
```

---

## Output

```javascript
[
  ["name", "Jeel"],
  ["city", "Rajkot"],
]
```

---

# hasOwnProperty()

```javascript
person.hasOwnProperty("name");
```

---

## Output

```text
true
```

---

# Purpose

```text
Checks whether property exists directly
on the object.
```

---

# 5️⃣ Symbols as Object Keys ⭐⭐⭐

---

## Theory

```text
Symbols create UNIQUE property keys.
```

---

## Example

```javascript
const id = Symbol("id");

const emp = {
  [id]: 101,
  name: "Asha",
};
```

---

## Access

```javascript
console.log(emp[id]);
```

---

## Output

```text
101
```

---

# Why Symbols?

```text
Avoid accidental property collisions.
```

---

# 6️⃣ Nested Objects

---

## Example

```javascript
const company = {
  name: "TechSoft",

  address: {
    city: "Mumbai",
    pin: 400001,
  },
};
```

---

# Access Nested Properties

```javascript
console.log(company.address.city);
```

---

## Output

```text
Mumbai
```

---

# Structure

```text
company

├── name

└── address

     ├── city

     └── pin
```

---

# Optional Chaining ⭐⭐⭐

```javascript
console.log(

    company?.address?.city
);
```

---

## Output

```text
Mumbai
```

---

# If Property Doesn't Exist

```javascript
console.log(

    company?.location?.country
);
```

---

## Output

```text
undefined
```

---

# 7️⃣ Looping Through Objects

---

# for...in Loop

```javascript
for (let key in company) {

    console.log(

        key,

        company[key]
    );
}
```

---

## Output

```text
name TechSoft

address { city: "Mumbai", pin: 400001 }
```

---

# Object.entries() Loop

```javascript
for (const [key, value]

    of Object.entries(company)) {

    console.log(key, value);
}
```

---

# Output

```text
name TechSoft

address { city: "Mumbai", pin: 400001 }
```

---

# Object Destructuring

```javascript
const {

    name,

    address

} = company;
```

---

## Output

```text
name → TechSoft

address → { city: "Mumbai", pin: 400001 }
```

---

# Object Reference Behavior ⭐⭐⭐⭐

```javascript
const a = {

    x: 10
};

const b = a;

b.x = 50;

console.log(a.x);
```

---

## Output

```text
50
```

---

# Why?

```text
Objects are stored by REFERENCE.
```

---

# Copying Objects

---

## Shallow Copy

```javascript
const copy = {

    ...person
};
```

---

## Using Object.assign()

```javascript
const copy = Object.assign(

    {},

    person
);
```

---

# Freezing Objects

---

# Object.freeze()

```javascript
Object.freeze(person);

person.name = "ABC";
```

---

## Output

```text
No change
```

---

# Purpose

```text
Prevents modifications.
```

---

# Sealing Objects

---

# Object.seal()

```javascript
Object.seal(person);
```

---

## Behavior

```text
✔ Existing properties can be updated

❌ New properties cannot be added

❌ Existing properties cannot be deleted
```

---

# Object Memory Model

```text
Variable

↓

Reference

↓

Object in Heap Memory
```

---

# Interview Questions ⭐⭐⭐⭐

---

## What is an object?

```text
A collection of key–value pairs.
```

---

## Difference between dot and bracket notation?

```text
Dot:

obj.name

Bracket:

obj["name"]

Bracket supports dynamic keys.
```

---

## Difference between Object.keys() and Object.values()?

```text
keys()

↓

Returns property names.

values()

↓

Returns property values.
```

---

## What does Object.entries() return?

```text
Array of [key, value] pairs.
```

---

## Why use Symbols?

```text
To create unique object keys.
```

---

## What is Object.create()?

```text
Creates object with specified prototype.
```

---

## Are objects copied by value?

```text
NO.

Objects are copied by reference.
```

---

## Difference between freeze() and seal()?

```text
freeze()

↓

No add

No delete

No update


seal()

↓

No add

No delete

Update allowed
```

---

# Quick Revision 🚀

```text
Object

↓

Properties

↓

Methods

↓

Access

↓

Add

↓

Update

↓

Delete

↓

keys()

↓

values()

↓

entries()

↓

Symbols

↓

Nested Objects

↓

Looping

↓

References

↓

freeze()

↓

seal()
```

---

# Most Important Topics ⭐⭐⭐⭐

```text
⭐⭐⭐⭐ Object Literals

⭐⭐⭐⭐ Dot vs Bracket Notation

⭐⭐⭐⭐ Object.keys()

⭐⭐⭐⭐ Object.values()

⭐⭐⭐⭐ Object.entries()

⭐⭐⭐⭐ Object References

⭐⭐⭐ Symbols

⭐⭐⭐ Nested Objects

⭐⭐⭐ Object.create()

⭐⭐⭐ freeze() vs seal()
```

> 🎯 **Golden Rule:**  
> In JavaScript, objects are the foundation of almost everything—understanding how they are created, accessed, copied, and manipulated is essential for mastering the language.