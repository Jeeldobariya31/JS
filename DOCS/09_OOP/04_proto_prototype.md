# 📘 05_builtins_proto_prototype.md
### Full Deep Dive into `__proto__`, `prototype`, and Built-in Prototype Chains

---

# 🎯 Learning Goals

After completing this chapter, you should be able to:

- ✅ Understand **prototype chains**
- ✅ Differentiate **`prototype` vs `__proto__`**
- ✅ Understand built-in prototypes of:
  - Object
  - Array
  - String
  - Function
  - Number
  - Boolean
  - Date
  - RegExp
  - Map
  - Set
- ✅ Use:
  - `Object.getPrototypeOf()`
  - `Object.setPrototypeOf()`
  - `isPrototypeOf()`
- ✅ Solve prototype-related interview questions.

---

# 1️⃣ Global Object Model

## Key Ideas

All built-in constructors are **functions**.

### Examples

```javascript
typeof Object;   // "function"
typeof Array;    // "function"
typeof String;   // "function"
typeof Date;     // "function"
```

Every constructor function has:

- `prototype` → used by objects created using `new`
- `__proto__` → points to `Function.prototype`

---

## Instance Relationships

```javascript
{}.__proto__             === Object.prototype;
[].__proto__             === Array.prototype;
"abc".__proto__          === String.prototype;
(function(){}).__proto__ === Function.prototype;
(123).__proto__          === Number.prototype;
(true).__proto__         === Boolean.prototype;
(new Date()).__proto__   === Date.prototype;
```

---

## Prototype Relationships

```javascript
Array.prototype.__proto__    === Object.prototype;
String.prototype.__proto__   === Object.prototype;
Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__   === null;
```

---

# 2️⃣ Object Prototype

```javascript
const obj = { x: 10 };

obj.__proto__ === Object.prototype; // true
```

## Prototype Chain

```text
obj
 ↓
Object.prototype
 ↓
null
```

## Constructor Relationship

```javascript
typeof Object; // "function"

Object.__proto__ === Function.prototype; // true
```

---

# 3️⃣ Array Prototype

```javascript
const arr = [1, 2, 3];

arr.__proto__ === Array.prototype;
Array.prototype.__proto__ === Object.prototype;
Array.__proto__ === Function.prototype;
```

## Prototype Chain

```text
arr
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

## Array Methods Live Here

```javascript
Array.prototype.push;
Array.prototype.pop;
Array.prototype.map;
Array.prototype.filter;
Array.prototype.reduce;
Array.prototype.forEach;
```

---

# 4️⃣ String Prototype

## Primitive vs Wrapper

```javascript
const s1 = "hello";
const s2 = new String("hello");

typeof s1; // "string"
typeof s2; // "object"
```

## Relationships

```javascript
s1.__proto__ === String.prototype;
String.prototype.__proto__ === Object.prototype;
String.__proto__ === Function.prototype;
```

## Prototype Chain

```text
"hello"
 ↓
String.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 5️⃣ Function Prototype

Functions are both:

- Functions ✅
- Objects ✅

```javascript
function greet() {}

greet.__proto__ === Function.prototype;
```

## Prototype Chain

```text
greet
 ↓
Function.prototype
 ↓
Object.prototype
 ↓
null
```

---

## Constructor Function Example

```javascript
function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    console.log(this.name);
};

const u = new User("Jeel");

u.__proto__ === User.prototype;
```

## Prototype Chain

```text
u
 ↓
User.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 6️⃣ Number Prototype

```javascript
(42).__proto__ === Number.prototype;

Number.prototype.__proto__ === Object.prototype;

Number.__proto__ === Function.prototype;
```

## Prototype Chain

```text
42
 ↓
Number.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 7️⃣ Boolean Prototype

```javascript
true.__proto__ === Boolean.prototype;

Boolean.prototype.__proto__ === Object.prototype;

Boolean.__proto__ === Function.prototype;
```

## Prototype Chain

```text
true
 ↓
Boolean.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 8️⃣ Date Prototype

```javascript
const now = new Date();

now.__proto__ === Date.prototype;

Date.prototype.__proto__ === Object.prototype;

Date.__proto__ === Function.prototype;
```

## Prototype Chain

```text
Date Instance
 ↓
Date.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 9️⃣ RegExp Prototype

```javascript
const regex = /js/gi;

regex.__proto__ === RegExp.prototype;

RegExp.prototype.__proto__ === Object.prototype;

RegExp.__proto__ === Function.prototype;
```

## Prototype Chain

```text
RegExp Instance
 ↓
RegExp.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 🔟 Map Prototype

```javascript
const map = new Map();

map.__proto__ === Map.prototype;

Map.prototype.__proto__ === Object.prototype;

Map.__proto__ === Function.prototype;
```

---

# 1️⃣1️⃣ Set Prototype

```javascript
const set = new Set();

set.__proto__ === Set.prototype;

Set.prototype.__proto__ === Object.prototype;

Set.__proto__ === Function.prototype;
```

---

# 1️⃣2️⃣ Master Prototype Summary

## Instances

```javascript
{}.__proto__           === Object.prototype;
[].__proto__           === Array.prototype;
"".__proto__           === String.prototype;
(123).__proto__        === Number.prototype;
(true).__proto__       === Boolean.prototype;
new Date().__proto__   === Date.prototype;
/regex/.__proto__      === RegExp.prototype;
new Map().__proto__    === Map.prototype;
new Set().__proto__    === Set.prototype;
```

---

## Prototypes

```javascript
Array.prototype.__proto__   === Object.prototype;
String.prototype.__proto__  === Object.prototype;
Number.prototype.__proto__  === Object.prototype;
Boolean.prototype.__proto__ === Object.prototype;
Date.prototype.__proto__    === Object.prototype;
RegExp.prototype.__proto__  === Object.prototype;
Map.prototype.__proto__     === Object.prototype;
Set.prototype.__proto__     === Object.prototype;
```

---

## Constructors

```javascript
Array.__proto__    === Function.prototype;
String.__proto__   === Function.prototype;
Number.__proto__   === Function.prototype;
Boolean.__proto__  === Function.prototype;
Date.__proto__     === Function.prototype;
RegExp.__proto__   === Function.prototype;
Map.__proto__      === Function.prototype;
Set.__proto__      === Function.prototype;
Object.__proto__   === Function.prototype;
Function.__proto__ === Function.prototype;
```

---

# 1️⃣3️⃣ `prototype` vs `__proto__`

| Feature | `prototype` | `__proto__` |
|----------|-------------|-------------|
| Exists on | Constructor Functions | Objects |
| Purpose | Blueprint for instances | Actual prototype link |
| Recommended | ✅ Yes | ⚠️ Learning only |
| Example | `User.prototype` | `obj.__proto__` |

---

# 1️⃣4️⃣ Object.getPrototypeOf()

## Read Prototype

```javascript
Object.getPrototypeOf(obj);
```

Preferred over:

```javascript
obj.__proto__;
```

---

# 1️⃣5️⃣ Object.setPrototypeOf()

## Change Prototype

```javascript
const animal = {
    eat() {
        console.log("Eating");
    }
};

const dog = {};

Object.setPrototypeOf(dog, animal);

dog.eat();
```

---

# 1️⃣6️⃣ isPrototypeOf()

Checks whether an object exists in another object's prototype chain.

```javascript
animal.isPrototypeOf(dog);
```

Output:

```javascript
true
```

---

# 1️⃣7️⃣ Prototype Chain Visualization

```text
Object Instance
       ↓
Specific Constructor Prototype
       ↓
Object.prototype
       ↓
null
```

Example:

```text
[]
 ↓
Array.prototype
 ↓
Object.prototype
 ↓
null
```

---

# 1️⃣8️⃣ Interview Questions

### Q1. Difference between `prototype` and `__proto__`?

**Answer:**

- `prototype` belongs to constructor functions.
- `__proto__` belongs to object instances.

---

### Q2. Top of prototype chain?

```javascript
null
```

---

### Q3. Where is `Array.prototype.map()` stored?

```javascript
Array.prototype
```

---

### Q4. Recommended way to read prototype?

```javascript
Object.getPrototypeOf(obj);
```

---

### Q5. Recommended way to change prototype?

```javascript
Object.setPrototypeOf(obj, proto);
```

---

### Q6. Where are class methods stored?

```javascript
class Person {
    sayHi() {}
}
```

Answer:

```javascript
Person.prototype
```

---

# 🎯 Final Revision

```text
prototype  → Constructor's blueprint for instances

__proto__  → Actual link to object's prototype

Object.getPrototypeOf() → Read prototype

Object.setPrototypeOf() → Change prototype

isPrototypeOf() → Check prototype chain

Object.prototype → Top object prototype

null → End of prototype chain
```

---

# 🎉 Chapter Complete

You now understand:

- ✅ JavaScript Prototype System
- ✅ Built-in Prototype Chains
- ✅ Constructor vs Instance relationships
- ✅ `prototype` vs `__proto__`
- ✅ Modern prototype APIs
- ✅ Prototype interview questions

> **Everything in JavaScript is an object... except primitives. But primitives temporarily borrow methods through prototypes.** 🚀