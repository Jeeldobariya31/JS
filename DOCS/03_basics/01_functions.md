# 📘 JavaScript Functions – Complete Guide

A **function** is a reusable block of code designed to perform a particular task.

```text
Function = Reusable Block of Code
```

Functions can:

- ✅ Take input (**parameters**)
- ✅ Process data
- ✅ Return output (**return value**)

---

# 🎯 Why Use Functions?

✅ Code Reusability

✅ Reduces Repetition

✅ Improves Readability

✅ Makes Maintenance Easier

---

# 1️⃣ Basic Function

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

### Output

```text
Hello!
```

---

# 2️⃣ Types of Functions

JavaScript supports many types of functions:

```text
✔ Function Declaration
✔ Function Expression
✔ Arrow Function
✔ Anonymous Function
✔ IIFE
✔ Callback Function
✔ Higher-Order Function
✔ Constructor Function
✔ Function Returning Function
✔ Object Methods
✔ Closures
```

---

# 3️⃣ Function Declaration

Most common type.

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(5, 10));
```

### Output

```text
15
```

---

## Syntax

```javascript
function functionName(parameters) {

}
```

---

# 4️⃣ Function Expression

Store function inside a variable.

```javascript
const multiply = function(x, y) {
    return x * y;
};

console.log(multiply(3, 4));
```

### Output

```text
12
```

---

# 5️⃣ Arrow Functions (ES6)

Modern syntax.

---

## Short Form

```javascript
const divide = (a, b) => a / b;

console.log(divide(20, 5));
```

### Output

```text
4
```

---

## Block Body

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

---

## Single Parameter

```javascript
const square = n => n * n;
```

---

# 📊 Arrow vs Normal Function

| Feature | Normal | Arrow |
|----------|---------|--------|
| Own `this` | ✅ | ❌ |
| Constructor | ✅ | ❌ |
| `arguments` object | ✅ | ❌ |
| Hoisted (declaration) | ✅ | ❌ |
| Short Syntax | ❌ | ✅ |

---

# 6️⃣ Anonymous Function

Function without a name.

```javascript
setTimeout(function() {
    console.log("Anonymous");
}, 1000);
```

---

# 7️⃣ IIFE

Immediately Invoked Function Expression.

Runs immediately.

```javascript
(function() {
    console.log("IIFE");
})();
```

---

## Arrow IIFE

```javascript
(() => {
    console.log("Arrow IIFE");
})();
```

---

# Why Use IIFE?

```text
✔ Private Scope
✔ Avoid Global Variables
✔ Execute Once
```

---

# 8️⃣ Default Parameters

Provide fallback values.

```javascript
function welcome(name = "Guest") {
    console.log(name);
}

welcome("Jeel");
welcome();
```

---

### Output

```text
Jeel
Guest
```

---

# 9️⃣ Rest Parameters

Accept unlimited arguments.

```javascript
function sumAll(...nums) {

    return nums.reduce(
        (sum, n) => sum + n,
        0
    );
}

console.log(sumAll(1, 2, 3, 4));
```

---

### Output

```text
10
```

---

# Difference: Rest vs Arguments

| Rest | Arguments |
|--------|------------|
| Real Array | Array-like Object |
| Modern | Old |
| Arrow Support | ❌ |

---

# 🔟 Function Returning Function

```javascript
function outer(a) {

    return function(b) {

        return a + b;
    };
}

const add10 = outer(10);

console.log(add10(20));
```

---

### Output

```text
30
```

---

# 1️⃣1️⃣ Higher-Order Function

Function that:

```text
✔ Takes another function

OR

✔ Returns another function
```

---

## Example

```javascript
function operate(a, b, fn) {

    return fn(a, b);
}

const result = operate(

    10,

    5,

    (x, y) => x * y
);

console.log(result);
```

---

### Output

```text
50
```

---

# 1️⃣2️⃣ Callback Function

Function passed as an argument.

```javascript
function fetchData(callback) {

    callback("Data Loaded");
}

fetchData((msg) => {

    console.log(msg);
});
```

---

### Output

```text
Data Loaded
```

---

# 1️⃣3️⃣ Object Methods

Functions inside objects.

```javascript
const user = {

    name: "Jeel",

    greet() {

        console.log("Hello");
    }
};

user.greet();
```

---

### Output

```text
Hello
```

---

# 1️⃣4️⃣ Named vs Anonymous

---

## Named

```javascript
function sayHi() {

    return "Hi";
}
```

---

## Anonymous

```javascript
const sayHi = function() {

    return "Hi";
};
```

---

# 1️⃣5️⃣ Pure vs Impure Functions

---

## Pure Function

```javascript
function add(a, b) {

    return a + b;
}
```

Properties:

```text
✔ Same Input → Same Output

✔ No Side Effects
```

---

## Impure Function

```javascript
let count = 0;

function increment() {

    count++;

    return count;
}
```

Properties:

```text
❌ Modifies External State
```

---

# 1️⃣6️⃣ Constructor Function

Used to create objects.

```javascript
function Person(name, age) {

    this.name = name;

    this.age = age;
}

const p = new Person(

    "Jeel",

    21
);
```

---

### Output

```text
Person {
    name: 'Jeel',
    age: 21
}
```

---

# 1️⃣7️⃣ Arguments Object

Old way to access arguments.

```javascript
function demo() {

    console.log(arguments);
}

demo(1, 2, 3);
```

---

### Output

```text
[Arguments] {
    0: 1,
    1: 2,
    2: 3
}
```

---

⚠️ Avoid in modern JS.

Use:

```javascript
(...args)
```

---

# 1️⃣8️⃣ Closures ⭐⭐⭐

One of the most important concepts.

---

## Definition

```text
A closure remembers variables
from its outer scope even after
the outer function has finished.
```

---

## Example

```javascript
function counter() {

    let count = 0;

    return function() {

        count++;

        return count;
    };
}

const c = counter();

console.log(c());
console.log(c());
console.log(c());
```

---

### Output

```text
1
2
3
```

---

# Why Closures?

Used in:

```text
✔ Data Privacy

✔ Event Handlers

✔ Memoization

✔ Modules
```

---

# 1️⃣9️⃣ Function Hoisting

---

## Function Declaration

```javascript
sayHello();

function sayHello() {

    console.log("Hello");
}
```

---

### Output

```text
Hello
```

---

## Function Expression

```javascript
sayHello();

const sayHello = function() {};
```

---

### Output

```text
ReferenceError
```

---

# 📊 Hoisting Summary

| Type | Hoisted |
|--------|----------|
| Function Declaration | ✅ |
| Function Expression | ❌ |
| Arrow Function | ❌ |

---

# 2️⃣0️⃣ Interview Questions

---

## What is a Function?

```text
Reusable block of code.
```

---

## Declaration vs Expression?

```text
Declaration → Hoisted

Expression → Not Hoisted
```

---

## What is a Callback?

```text
Function passed into another function.
```

---

## What is a Closure?

```text
Function remembers outer variables.
```

---

## Arrow vs Normal Function?

```text
Arrow

❌ No own this

❌ No arguments

❌ Cannot use new
```

---

## What is IIFE?

```text
Runs immediately after creation.
```

---

## What is Higher-Order Function?

```text
Function taking or returning functions.
```

---

# 📊 Function Types Summary

| Type | Example |
|--------|----------|
| Declaration | `function fn(){}` |
| Expression | `const fn = function(){}` |
| Arrow | `const fn = () => {}` |
| Anonymous | `function(){}` |
| IIFE | `(function(){})()` |
| Callback | `fn(callback)` |
| Higher-Order | `fn(fn)` |
| Constructor | `new Person()` |
| Closure | `outer()()` |

---

# 🚀 Quick Revision

```text
Declaration
↓
Hoisted

Expression
↓
Variable Function

Arrow
↓
Short Syntax

Callback
↓
Passed Function

Closure
↓
Remembers Scope

IIFE
↓
Runs Immediately

Rest
↓
Unlimited Arguments
```

---

## 💡 Memory Trick

```text
DAICHCR

Declaration
Arrow
IIFE
Callback
Higher-Order
Closure
Rest
```

### Golden Rules

```text
Functions are First-Class Citizens.

Closures are Interview Favorites.

Prefer Rest over Arguments.

Understand Arrow vs Normal Functions.
```

> 🎯 **Most Important Topics for Interviews:**  
> Closures • Callbacks • Higher-Order Functions • Hoisting • Arrow Functions