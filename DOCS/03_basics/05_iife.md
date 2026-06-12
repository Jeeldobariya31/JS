# 📘 JavaScript IIFE (Immediately Invoked Function Expression)

An **IIFE** is a function that **executes immediately after it is created**.

```text
IIFE = Immediately Invoked Function Expression
```

---

# 🎯 Definition

```text
A function expression that runs immediately after its definition.
```

---

# Why Use IIFE?

Before ES6 modules, IIFE was commonly used to:

✅ Avoid global scope pollution

✅ Create private variables

✅ Encapsulate data

✅ Execute initialization code immediately

✅ Prevent variable name conflicts

---

# 🧠 Syntax

```javascript
(function () {

    // code here

})();
```

---

# How It Works

```javascript
(function () {})
```

↓

```text
Function Expression
```

↓

```javascript
()
```

↓

```text
Execute Immediately
```

---

# 1️⃣ Basic IIFE

```javascript
(function () {

    console.log(
        "Basic IIFE executed!"
    );

})();
```

---

### Output

```text
Basic IIFE executed!
```

---

# ⚠️ Semicolon Importance

```javascript
(function () {

    console.log("First");

})();

(function () {

    console.log("Second");

})();
```

---

### Output

```text
First
Second
```

---

## Without Semicolon

```javascript
(function () {

})()

(function () {

})();
```

---

### Possible Error

```text
TypeError
```

---

## Rule

```text
Always end IIFE with ;
```

---

# 2️⃣ IIFE with Parameters

```javascript
(function (

    name,

    age

) {

    console.log(

        name,

        age
    );

})(

    "Jeel",

    21
);
```

---

### Output

```text
Jeel 21
```

---

# 3️⃣ IIFE Returning Value

```javascript
const sum = (

    function (a, b) {

        return a + b;

    }

)(10, 20);

console.log(sum);
```

---

### Output

```text
30
```

---

# 4️⃣ Arrow Function IIFE

Modern syntax.

```javascript
(() => {

    console.log(

        "Arrow IIFE"
    );

})();
```

---

### Output

```text
Arrow IIFE
```

---

# 5️⃣ Private Variables ⭐⭐⭐

One of the biggest advantages.

```javascript
const counter = (

    function () {

        let count = 0;

        return {

            increment() {

                count++;

                return count;
            },

            decrement() {

                count--;

                return count;
            }
        };

    }

)();
```

---

## Usage

```javascript
console.log(

    counter.increment()
);

console.log(

    counter.increment()
);

console.log(

    counter.decrement()
);
```

---

### Output

```text
1
2
1
```

---

# Why Private?

```javascript
console.log(count);
```

---

### Output

```text
ReferenceError
```

---

## Scope Diagram

```text
Global Scope
     ↓

Counter Object
     ↓

Private count Variable
```

---

# 6️⃣ Named IIFE

Rare but valid.

```javascript
(function initApp() {

    console.log(

        "Application Initialized"
    );

})();
```

---

### Output

```text
Application Initialized
```

---

# Why Use Named IIFE?

```text
✔ Better debugging

✔ Stack traces show function name
```

---

# 7️⃣ Multiple IIFEs

```javascript
(function () {

    console.log("First");

})();

(function () {

    console.log("Second");

})();
```

---

### Output

```text
First
Second
```

---

# 8️⃣ Unary Operator IIFE

Alternative syntax.

---

## Plus

```javascript
+function () {

    console.log("Plus");

}();
```

---

## Minus

```javascript
-function () {

    console.log("Minus");

}();
```

---

## Logical NOT

```javascript
!function () {

    console.log("NOT");

}();
```

---

### Output

```text
Plus
Minus
NOT
```

---

# Why Unary Operators Work?

```text
They force JavaScript to treat
the function as an expression.
```

---

# 9️⃣ Async IIFE

Useful with `await`.

```javascript
(async () => {

    const data = await Promise.resolve(

        "Loaded"
    );

    console.log(data);

})();
```

---

### Output

```text
Loaded
```

---

# 🔟 How IIFE Works Internally

---

## Function Declaration

```javascript
function greet() {}
```

---

### Meaning

```text
Declaration
```

---

## Function Expression

```javascript
(function () {})
```

---

### Meaning

```text
Expression
```

---

## Execute Expression

```javascript
(function () {})();
```

---

### Meaning

```text
Expression + Invocation
```

---

# 1️⃣1️⃣ Module Pattern

Before ES6 modules.

```javascript
const UserModule = (

    function () {

        let username = "Jeel";

        return {

            getName() {

                return username;
            }
        };

    }

)();
```

---

## Usage

```javascript
console.log(

    UserModule.getName()
);
```

---

### Output

```text
Jeel
```

---

## Private Access

```javascript
console.log(username);
```

---

### Output

```text
ReferenceError
```

---

# 1️⃣2️⃣ When to Use IIFE

```text
✔ Protect variables

✔ Create private data

✔ Execute startup code

✔ Module Pattern

✔ Avoid naming conflicts

✔ Self-contained components
```

---

# 1️⃣3️⃣ When NOT to Use IIFE

```text
❌ Using ES Modules

❌ Reusable functions

❌ Constructors

❌ Classes
```

---

# ES Modules vs IIFE

| Feature | IIFE | ES Modules |
|----------|------|-------------|
| Private Scope | ✅ | ✅ |
| Reusable Imports | ❌ | ✅ |
| Modern Standard | ❌ | ✅ |
| Immediate Execution | ✅ | ❌ |
| Dependency Management | ❌ | ✅ |

---

# 🎯 Interview Questions

---

## What is an IIFE?

```text
Function executed immediately after creation.
```

---

## Why use IIFE?

```text
Avoid Global Scope Pollution.
```

---

## Why parentheses?

```text
To convert function declaration
into function expression.
```

---

## Does IIFE create scope?

```text
✅ Yes
```

---

## Can IIFE be Arrow Function?

```text
✅ Yes
```

```javascript
(() => {})();
```

---

## Can IIFE be Async?

```text
✅ Yes
```

```javascript
(async () => {})();
```

---

## Why was IIFE popular before ES6?

```text
Used for modules and private variables.
```

---

# 📊 IIFE Variants

| Type | Syntax |
|--------|---------|
| Classic | `(function(){})();` |
| Arrow | `(() => {})();` |
| Named | `(function name(){})();` |
| Async | `(async () => {})();` |
| Unary | `!function(){}();` |

---

# 🚀 Quick Revision

```text
IIFE
↓

Immediately Executes

↓

Creates Private Scope

↓

Avoids Global Pollution

↓

Used Before ES Modules

↓

Good for Initialization Code
```

---

# 💡 Memory Trick

```text
PIE

Private Scope

Immediately Runs

Encapsulation
```

---

## Golden Rules

```text
(function(){})();

↓
Expression

↓

()

↓

Immediate Execution
```

```text
Always end IIFE with ;
```

```text
Use IIFE for one-time execution,
not reusable functions.
```

> 🎯 **Most Important Interview Topics:**  
> Scope Creation • Private Variables • Module Pattern • Why Parentheses Are Needed • IIFE vs ES Modules