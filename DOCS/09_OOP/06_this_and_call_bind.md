# 📘 06_this_and_call_bind.md
## Complete Guide to `this`, `call()`, `apply()`, `bind()`, and Arrow Functions

---

# 🎯 Learning Objectives

After completing this chapter, you should understand:

- ✅ What `this` means in JavaScript
- ✅ How `this` changes based on invocation
- ✅ Global vs function vs object `this`
- ✅ Constructor function `this`
- ✅ Arrow function lexical `this`
- ✅ `call()`, `apply()`, and `bind()`
- ✅ Function borrowing
- ✅ `this` inside `setTimeout`
- ✅ Common interview questions

---

# 1️⃣ What is `this`?

## Theory

`this` refers to the **execution context** of a function.

> ⚠️ `this` does **NOT** refer to the function itself.

JavaScript determines `this` based on **how a function is called**, not where it is defined.

---

## Six Rules of `this`

| Rule | `this` Value |
|--------|-------------|
| Global execution | Global object |
| Simple function call | `undefined` (strict mode) |
| Object method call | The object |
| Constructor (`new`) | Newly created object |
| `call()`, `apply()`, `bind()` | Manually specified object |
| Arrow function | Lexically inherited |

---

# 2️⃣ Global `this`

```javascript
console.log(this);
```

### Browser Output

```text
Window {...}
```

### Node.js Output

```text
{}
```

---

# 3️⃣ Simple Function Call

```javascript
function simpleFunction() {
    console.log(this);
}

simpleFunction();
```

---

## Strict Mode

```javascript
"use strict";

function test() {
    console.log(this);
}

test();
```

### Output

```text
undefined
```

---

## Non-Strict Mode

### Browser Output

```text
Window {...}
```

---

# 4️⃣ Object Method

When a function is called through an object:

```javascript
const user = {
    name: "Jeel",

    show() {
        console.log(this.name);
    }
};

user.show();
```

### Output

```text
Jeel
```

---

## Rule

```text
object.method()

↓

this = object
```

---

# 5️⃣ Constructor Function

When called with `new`:

```javascript
function Car(model, price) {
    this.model = model;
    this.price = price;
}

const car = new Car("BMW", 50000);

console.log(car);
```

---

## Output

```text
Car {
    model: "BMW",
    price: 50000
}
```

---

## Rule

```text
new Constructor()

↓

this = newly created object
```

---

# 6️⃣ Arrow Functions and `this`

---

## Important Facts

Arrow functions do NOT have their own:

```text
❌ this
❌ arguments
❌ prototype
```

Instead:

```text
Arrow functions inherit this from their surrounding scope.
```

---

## Example

```javascript
const obj = {
    name: "Asha",

    normal() {
        console.log(this.name);
    },

    arrow: () => {
        console.log(this);
    }
};

obj.normal();
obj.arrow();
```

---

### Output

```text
Asha

Window {...}     // Browser

or

{}               // Node.js
```

---

## Rule

```text
Arrow Function

↓

Uses parent's this
```

---

# 7️⃣ call(), apply(), bind()

These methods allow us to manually control `this`.

---

## Shared Function

```javascript
function greet(city, country) {
    console.log(
        `Hi I am ${this.name} from ${city}, ${country}`
    );
}
```

---

# 7.1️⃣ call()

## Syntax

```javascript
fn.call(thisArg, arg1, arg2, ...);
```

---

## Example

```javascript
const person1 = { name: "Jeel" };

greet.call(
    person1,
    "Rajkot",
    "India"
);
```

---

### Output

```text
Hi I am Jeel from Rajkot, India
```

---

## Rule

```text
call()

↓

Executes immediately

Arguments → comma separated
```

---

# 7.2️⃣ apply()

## Syntax

```javascript
fn.apply(thisArg, [args]);
```

---

## Example

```javascript
greet.apply(
    person1,
    ["Surat", "India"]
);
```

---

### Output

```text
Hi I am Jeel from Surat, India
```

---

## Rule

```text
apply()

↓

Executes immediately

Arguments → array
```

---

# 7.3️⃣ bind()

## Syntax

```javascript
const newFn = fn.bind(thisArg);
```

---

## Example

```javascript
const greetJeel =
    greet.bind(
        person1,
        "Goa",
        "India"
    );

greetJeel();
```

---

### Output

```text
Hi I am Jeel from Goa, India
```

---

## Rule

```text
bind()

↓

Returns NEW function

Does NOT execute immediately
```

---

# 8️⃣ call vs apply vs bind

| Feature | call() | apply() | bind() |
|----------|---------|----------|---------|
| Executes immediately | ✅ | ✅ | ❌ |
| Returns new function | ❌ | ❌ | ✅ |
| Arguments style | Individual | Array | Individual |
| Changes `this` | ✅ | ✅ | ✅ |

---

# 9️⃣ Hard Binding

Binding permanently fixes `this`.

---

## Example

```javascript
const obj = {
    name: "Fixed Name"
};

function show() {
    console.log(this.name);
}

const hard =
    show.bind(obj);

hard();
```

---

### Output

```text
Fixed Name
```

---

# 🔟 Function Borrowing

One object can use another object's methods.

---

## Example

```javascript
const student = {
    name: "Ravi",

    showInfo() {
        console.log(this.name);
    }
};

const teacher = {
    name: "Professor"
};

student.showInfo.call(teacher);
```

---

### Output

```text
Professor
```

---

# 1️⃣1️⃣ Nested Objects

```javascript
const nested = {
    name: "Outer",

    inner: {
        name: "Inner",

        show() {
            console.log(this.name);
        }
    }
};

nested.inner.show();
```

---

### Output

```text
Inner
```

---

## Rule

```text
this

↓

Object before the dot
```

---

# 1️⃣2️⃣ `this` Inside setTimeout

---

## Normal Function

```javascript
const timerObj = {
    name: "Timeout",

    start() {
        setTimeout(function () {
            console.log(this);
        }, 1000);
    }
};

timerObj.start();
```

---

### Output

#### Browser

```text
Window {...}
```

#### Node

```text
Timeout {...}
```

---

## Arrow Function

```javascript
const timerObj = {
    name: "Timeout",

    start() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

timerObj.start();
```

---

### Output

```text
Timeout
```

---

## Rule

```text
Normal function

↓

Own this

Arrow function

↓

Parent's this
```

---

# 1️⃣3️⃣ Event Listener `this`

> Browser Only

---

## Normal Function

```javascript
button.addEventListener(
    "click",
    function () {
        console.log(this);
    }
);
```

### Output

```text
Clicked button element
```

---

## Arrow Function

```javascript
button.addEventListener(
    "click",
    () => {
        console.log(this);
    }
);
```

---

### Output

```text
Window {...}
```

---

# 🎯 Quick Revision

```text
Global Context
↓
this = global object

Simple Function
↓
this = undefined (strict mode)

Object Method
↓
this = object

Constructor
↓
this = new object

call/apply/bind
↓
this = manually specified object

Arrow Function
↓
this = parent scope
```

---

# 🧠 Interview Questions

---

## Q1. What determines `this`?

### Answer

```text
How the function is called.
```

---

## Q2. What is `this` inside arrow functions?

### Answer

```text
Lexically inherited from parent scope.
```

---

## Q3. Difference between `call()` and `apply()`?

### Answer

```text
call()  → comma-separated arguments

apply() → array arguments
```

---

## Q4. What does `bind()` return?

### Answer

```text
A new function.
```

---

## Q5. Can arrow functions be constructors?

### Answer

```text
No.
```

---

## Q6. Best use case of `bind()`?

### Answer

```text
Fixing this for callbacks.
```

---

## Q7. What is function borrowing?

### Answer

```text
Using another object's method via call/apply/bind.
```

---

## Q8. Which functions have no own `this`?

### Answer

```text
Arrow functions.
```

---

# 📝 Final Summary

```text
this = determined by invocation

call()  → invoke immediately
apply() → invoke immediately with array args
bind()  → return new function

Arrow functions:
❌ no own this
❌ no arguments
❌ no prototype

Object methods:
this → object

Constructors:
this → new object
```

---

# 🎉 Chapter Complete

You now understand:

- ✅ `this` keyword deeply
- ✅ Invocation-based `this`
- ✅ Arrow function lexical `this`
- ✅ `call()`
- ✅ `apply()`
- ✅ `bind()`
- ✅ Function borrowing
- ✅ `setTimeout` behavior
- ✅ Interview questions and answers

> **"In JavaScript, `this` is not about where a function is written — it's about how it is called."** 🚀