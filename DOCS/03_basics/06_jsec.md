# 📘 JavaScript Execution Context (Complete Guide)

Execution Context is the **environment in which JavaScript code is evaluated and executed**.

```text
Execution Context = Where JavaScript Runs
```

---

# 🎯 Definition

```text
Execution Context is an environment that contains:

✔ Variables
✔ Functions
✔ Scope Information
✔ this Binding
✔ Instructions to Execute
```

---

# 📚 Types of Execution Context

JavaScript has **3 types** of Execution Context.

| Type | Description |
|--------|-------------|
| Global Execution Context (GEC) | Created when JS file starts |
| Function Execution Context (FEC) | Created whenever a function is called |
| Eval Execution Context | Created by `eval()` (rarely used) |

---

# 🌍 1️⃣ Global Execution Context (GEC)

The first execution context created.

```javascript
console.log("Hello");
```

As soon as JavaScript starts:

```text
Global Execution Context Created
```

---

# GEC Contains

```text
✔ Global Object

✔ this Binding

✔ Global Memory
```

---

## Browser

```javascript
console.log(this);
```

### Output

```text
window
```

---

## Node.js

```text
global
```

or

```text
{}
```

(depending on module type)

---

# ⚙️ Two Phases of Execution Context

Every Execution Context goes through **two phases**.

```text
1. Memory Creation Phase

2. Code Execution Phase
```

---

# 1️⃣ Memory Creation Phase

Also called:

```text
Hoisting Phase
```

JavaScript scans the code.

---

## What Happens?

| Item | Memory Phase |
|--------|-------------|
| var | undefined |
| let | TDZ |
| const | TDZ |
| Function Declaration | Entire Function Stored |

---

## Example

```javascript
console.log(a);

var a = 10;
```

---

### Memory Phase

```text
a → undefined
```

---

### Execution Phase

```text
undefined

10
```

---

# 2️⃣ Code Execution Phase

Code executes **line by line**.

---

## Example

```javascript
var x = 10;

x = x + 5;
```

---

### Execution

```text
x = 10

x = 15
```

---

# Execution Context Lifecycle

```text
Creation
    ↓

Memory Phase
    ↓

Execution Phase
    ↓

Destruction
```

---

# 🏠 2️⃣ Function Execution Context (FEC)

Created **every time a function is invoked**.

---

## Example

```javascript
function add(a, b) {

    let c = a + b;

    return c;
}

add(5, 10);
```

---

# FEC Contains

```text
✔ Parameters

✔ Local Variables

✔ arguments Object

✔ this Binding

✔ Lexical Environment Reference
```

---

# FEC Example

```text
Function: add(5, 10)

↓

Memory

a → 5

b → 10

c → undefined

↓

Execution

c → 15

return 15
```

---

# 📦 Structure of Execution Context

```text
Execution Context

↓

Variable Environment

↓

Thread of Execution
```

---

## Variable Environment

Stores:

```text
var

let

const

functions
```

---

## Thread of Execution

```text
Line-by-line execution
```

---

# 🌟 Hoisting

Hoisting happens during **Memory Phase**.

---

# Function Declaration

```javascript
sayHi();

function sayHi() {

    console.log("Hi");
}
```

---

### Output

```text
Hi
```

---

# var

```javascript
console.log(a);

var a = 50;
```

---

### Output

```text
undefined
```

---

# let

```javascript
console.log(b);

let b = 20;
```

---

### Output

```text
ReferenceError
```

---

# const

```javascript
console.log(c);

const c = 30;
```

---

### Output

```text
ReferenceError
```

---

# 📊 Hoisting Summary

| Type | Hoisted | Initial Value |
|--------|----------|---------------|
| var | ✅ | undefined |
| let | ✅ | TDZ |
| const | ✅ | TDZ |
| Function | ✅ | Complete Function |

---

# ☠️ Temporal Dead Zone (TDZ)

The period between:

```text
Hoisting
    ↓

Initialization
```

---

# Example

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

# 📚 Call Stack ⭐⭐⭐

JavaScript is **single-threaded**.

It uses a **Call Stack** to manage Execution Contexts.

---

# LIFO Principle

```text
Last In

First Out
```

---

# Example

```javascript
function one() {

    two();
}

function two() {

    three();
}

function three() {

    console.log("Done");
}

one();
```

---

# Call Stack Flow

```text
Global()

↓

one()

↓

two()

↓

three()

↓

three() removed

↓

two() removed

↓

one() removed

↓

Global()
```

---

# Visualization

```text
┌─────────┐
│ three() │
├─────────┤
│ two()   │
├─────────┤
│ one()   │
├─────────┤
│ Global  │
└─────────┘
```

---

# 🌐 Lexical Environment

Each Execution Context stores:

```text
Local Memory

+

Reference to Parent Scope
```

---

# Example

```javascript
let x = 10;

function outer() {

    let y = 20;

    function inner() {

        let z = 30;

        console.log(x, y, z);
    }

    inner();
}

outer();
```

---

### Output

```text
10 20 30
```

---

# Scope Chain

```text
inner()

↓

outer()

↓

Global

↓

ReferenceError
```

---

# 🔄 Closures and Execution Context

Closures preserve data even after FEC is removed.

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
```

---

### Output

```text
1

2
```

---

# Why?

```text
Closure keeps Execution Context alive.
```

---

# ⚡ Arrow Functions and Execution Context

Arrow Functions:

```text
✔ Have Execution Context

❌ No own this

❌ No own arguments

❌ No prototype
```

---

# Example

```javascript
const obj = {

    name: "Jeel",

    normal() {

        console.log(this.name);
    },

    arrow: () => {

        console.log(this?.name);
    }
};

obj.normal();

obj.arrow();
```

---

### Output

```text
Jeel

undefined
```

---

# 📊 Global vs Function EC

| Feature | Global EC | Function EC |
|----------|------------|-------------|
| Created When | JS Starts | Function Call |
| Count | One | Many |
| Contains Local Variables | ❌ | ✅ |
| Has Global Object | ✅ | ❌ |
| Destroyed | End of Program | After Return |

---

# 🎯 Interview Questions

---

## What is Execution Context?

```text
Environment where JavaScript code executes.
```

---

## Types of Execution Context?

```text
Global

Function

Eval
```

---

## Two Phases?

```text
Memory Creation

Code Execution
```

---

## What happens during Memory Phase?

```text
Hoisting occurs.
```

---

## What is Hoisting?

```text
Variables and functions moved to memory before execution.
```

---

## What is TDZ?

```text
Period between hoisting and initialization of let/const.
```

---

## What is Call Stack?

```text
Stack managing execution contexts using LIFO.
```

---

## What is Lexical Environment?

```text
Local memory + reference to outer scope.
```

---

## When is FEC created?

```text
Whenever a function is invoked.
```

---

## What happens after FEC completes?

```text
It is removed from Call Stack.
```

---

## Exception?

```text
Closures can preserve memory.
```

---

# 🚀 Quick Revision

```text
Execution Context

↓

Memory Phase

↓

Hoisting

↓

Code Execution

↓

Function Calls

↓

Call Stack

↓

Lexical Scope

↓

Closures
```

---

# 💡 Memory Trick

```text
MECAL

Memory Phase

Execution Phase

Call Stack

Activation (FEC)

Lexical Scope
```

---

# 🏆 Most Important Topics

⭐⭐⭐ Call Stack

⭐⭐⭐ Hoisting

⭐⭐⭐ TDZ

⭐⭐⭐ Function Execution Context

⭐⭐⭐ Closures

> 🎯 **Golden Rule:**  
> Every JavaScript program starts with a **Global Execution Context**, and every function call creates a **new Function Execution Context** that is managed by the **Call Stack**.