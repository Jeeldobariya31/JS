# 📘 JavaScript Scopes – Complete Guide

Scope determines **where a variable can be accessed** in your code.

```text
Scope = Visibility / Accessibility of Variables
```

---

# 🎯 Why is Scope Important?

✅ Prevents variable conflicts

✅ Improves security

✅ Helps manage memory efficiently

✅ Essential for closures and modules

---

# 📚 Types of Scope in JavaScript

```text
1. Global Scope
2. Function Scope
3. Block Scope
4. Lexical Scope
5. Module Scope
```

---

# 1️⃣ Global Scope

Variables declared **outside all functions and blocks**.

```javascript
let globalVar = "🌍 I am Global";

function show() {
    console.log(globalVar);
}

show();

console.log(globalVar);
```

### Output

```text
🌍 I am Global
🌍 I am Global
```

---

## Characteristics

```text
✔ Accessible everywhere

✔ Exists throughout program execution
```

---

# 2️⃣ Function Scope

Variables declared inside functions are accessible **only within that function**.

```javascript
function demo() {

    var inside = "🔒 Function Scope";

    console.log(inside);
}

demo();
```

### Output

```text
🔒 Function Scope
```

---

## Outside Access

```javascript
console.log(inside);
```

### Output

```text
ReferenceError
```

---

# Function Scope Example

```javascript
function test() {

    let x = 10;

    const y = 20;

    var z = 30;
}
```

All three variables exist **only inside the function**.

---

# 3️⃣ Block Scope

A block is:

```javascript
{
    // block
}
```

---

## `let` and `const`

```javascript
{

    let a = 10;

    const b = 20;
}
```

---

### Outside Access

```javascript
console.log(a);
console.log(b);
```

---

### Output

```text
ReferenceError
ReferenceError
```

---

# `var` is NOT Block Scoped

```javascript
{

    var c = 30;
}

console.log(c);
```

### Output

```text
30
```

---

# 📊 Block Scope Summary

| Keyword | Block Scoped |
|----------|--------------|
| `var` | ❌ |
| `let` | ✅ |
| `const` | ✅ |

---

# 4️⃣ Lexical Scope ⭐⭐⭐

Inner functions can access variables from outer functions.

---

## Example

```javascript
function outer() {

    let x = 100;

    function inner() {

        console.log(x);
    }

    inner();
}

outer();
```

---

### Output

```text
100
```

---

# Definition

```text
Lexical Scope =
Scope determined by where functions are written.
```

---

# 5️⃣ Scope Chain

JavaScript searches variables upward.

---

## Example

```javascript
let a = 10;

function first() {

    let b = 20;

    function second() {

        let c = 30;

        console.log(a, b, c);
    }

    second();
}

first();
```

---

### Output

```text
10 20 30
```

---

# Scope Chain Flow

```text
Local Scope
     ↓

Parent Scope
     ↓

Global Scope
     ↓

ReferenceError
```

---

# 6️⃣ `var` vs `let` vs `const`

| Feature | var | let | const |
|----------|-----|------|--------|
| Scope | Function | Block | Block |
| Redeclare | ✅ | ❌ | ❌ |
| Reassign | ✅ | ✅ | ❌ |
| Hoisted | ✅ | ✅ | ✅ |
| TDZ | ❌ | ✅ | ✅ |
| Global Object | ✅ | ❌ | ❌ |

---

# Example

```javascript
var a = 10;

var a = 20;
```

---

### Output

```text
Allowed
```

---

```javascript
let b = 10;

let b = 20;
```

---

### Output

```text
SyntaxError
```

---

# 7️⃣ Temporal Dead Zone (TDZ)

The period between hoisting and initialization.

---

## Example

```javascript
console.log(name);

let name = "Jeel";
```

---

### Output

```text
ReferenceError
```

---

# Correct Usage

```javascript
let name = "Jeel";

console.log(name);
```

---

### Output

```text
Jeel
```

---

# TDZ Timeline

```text
Hoisted
   ↓

TDZ
   ↓

Declaration
   ↓

Initialization
```

---

# 8️⃣ Hoisting and Scope

---

# `var`

```javascript
console.log(a);

var a = 10;
```

---

### Output

```text
undefined
```

---

Equivalent To:

```javascript
var a;

console.log(a);

a = 10;
```

---

# `let`

```javascript
console.log(a);

let a = 10;
```

---

### Output

```text
ReferenceError
```

---

# Function Hoisting

```javascript
greet();

function greet() {

    console.log("Hello");
}
```

---

### Output

```text
Hello
```

---

# Function Expression

```javascript
greet();

const greet = function(){};
```

---

### Output

```text
ReferenceError
```

---

# 9️⃣ Module Scope

Every JavaScript module has its own scope.

```javascript
export const name = "Jeel";
```

---

```javascript
import { name }

from "./file.js";
```

---

## Characteristics

```text
✔ No global pollution

✔ Better encapsulation
```

---

# 🔟 Closures ⭐⭐⭐

Closures depend on lexical scope.

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

# Closure Definition

```text
A closure remembers variables from
its outer scope even after the
outer function finishes execution.
```

---

# 1️⃣1️⃣ Variable Shadowing

Inner variable hides outer variable.

---

## Example

```javascript
let value = "outer";

function demo() {

    let value = "inner";

    console.log(value);
}

demo();

console.log(value);
```

---

### Output

```text
inner
outer
```

---

# 1️⃣2️⃣ Illegal Shadowing

---

## Invalid

```javascript
let x = 10;

{

    var x = 20;
}
```

---

### Output

```text
SyntaxError
```

---

# Valid

```javascript
var x = 10;

{

    let x = 20;
}
```

---

# 1️⃣3️⃣ Block vs Function Scope

```javascript
if (true) {

    var a = 10;

    let b = 20;
}

console.log(a);

console.log(b);
```

---

### Output

```text
10

ReferenceError
```

---

# 1️⃣4️⃣ Loop Scope Problem

---

# Using `var`

```javascript
for (var i = 1; i <= 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 100);
}
```

---

### Output

```text
4
4
4
```

---

# Using `let`

```javascript
for (let i = 1; i <= 3; i++) {

    setTimeout(() => {

        console.log(i);

    }, 100);
}
```

---

### Output

```text
1
2
3
```

---

# Why?

```text
var
↓
Single shared variable

let
↓
New variable per iteration
```

---

# 📊 Scope Hierarchy

```text
Global Scope
     ↓

Function Scope
     ↓

Block Scope
```

---

# 🎯 Interview Questions

---

## What is Scope?

```text
Area where a variable is accessible.
```

---

## Difference between Function and Block Scope?

```text
Function Scope
↓
var

Block Scope
↓
let / const
```

---

## What is Lexical Scope?

```text
Inner functions access outer variables.
```

---

## What is TDZ?

```text
Time between hoisting and initialization.
```

---

## What is Closure?

```text
Function remembering outer variables.
```

---

## Why does `var` fail in loops?

```text
Because it is not block scoped.
```

---

# 🚀 Quick Revision

```text
Global
↓
Accessible Everywhere

Function
↓
Inside Function Only

Block
↓
Inside { }

Lexical
↓
Inner → Outer Access

Closure
↓
Remembers Scope

TDZ
↓
let / const Dead Zone
```

---

# 💡 Memory Trick

```text
GFBLC

Global
Function
Block
Lexical
Closure
```

### Remember

```text
var
↓
Function Scope

let / const
↓
Block Scope
```

---

# 🏆 Most Important for Interviews

⭐⭐⭐ Closures

⭐⭐⭐ Lexical Scope

⭐⭐⭐ TDZ

⭐⭐⭐ Hoisting

⭐⭐⭐ var vs let vs const

> 🎯 **Golden Rule:**  
> JavaScript always looks for variables from **inside → outside** following the **scope chain** until it finds the variable or throws a `ReferenceError`.