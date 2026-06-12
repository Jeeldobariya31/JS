# 📘 JavaScript Arrow Functions & `this`

> 🎯 **Golden Rule:**  
> Understand **Arrow Functions first**, then learn **`this`**.  
> Most interview questions combine both topics.

---

# PART A — Arrow Functions (ES6)

Arrow functions provide a **shorter syntax** for writing functions.

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

# 🎯 Features of Arrow Functions

✅ Shorter syntax

✅ Lexical `this`

✅ Great for callbacks

❌ No own `this`

❌ No `arguments`

❌ Cannot be constructors

❌ No `prototype`

---

# 1️⃣ Basic Syntax

---

## Traditional Function

```javascript
function add(a, b) {
    return a + b;
}
```

---

## Arrow Function

```javascript
const add = (a, b) => a + b;
```

---

### Output

```javascript
console.log(add(2, 3));
```

```text
5
```

---

# 2️⃣ Block Body

Use `{}` when multiple statements exist.

```javascript
const sumAndLog = (a, b) => {

    const sum = a + b;

    console.log(sum);

    return sum;
};

sumAndLog(4, 5);
```

---

### Output

```text
9
```

---

# 3️⃣ No Parameters

```javascript
const hello = () => "Hello";
```

---

### Output

```javascript
console.log(hello());
```

```text
Hello
```

---

# 4️⃣ Single Parameter

Parentheses optional.

```javascript
const square = n => n * n;
```

---

### Output

```javascript
console.log(square(5));
```

```text
25
```

---

# 5️⃣ Returning Objects ⭐

Wrap object in parentheses.

---

## Correct

```javascript
const createUser = name => (

    {
        name: name
    }
);
```

---

## Wrong

```javascript
const createUser = name => {

    name: name;
};
```

Returns:

```text
undefined
```

---

### Output

```javascript
console.log(createUser("Jeel"));
```

```javascript
{
    name: "Jeel"
}
```

---

# 6️⃣ Rest Parameters

Arrow functions don't have `arguments`.

Use:

```javascript
const join = (...args) => {

    return args.join("-");
};

console.log(join("a", "b", "c"));
```

---

### Output

```text
a-b-c
```

---

# 7️⃣ Arrow Functions and `this`

Arrow functions **inherit `this` from the parent scope**.

---

## Example

```javascript
const person = {

    name: "Nina",

    greet() {

        const arrow = () => {

            console.log(this.name);
        };

        arrow();
    }
};

person.greet();
```

---

### Output

```text
Nina
```

---

# 8️⃣ Arrow as Object Method ❌

Avoid this.

```javascript
const person = {

    name: "Asha",

    greet: () => {

        console.log(this);
    }
};

person.greet();
```

---

### Output

```text
window (browser)

OR

{} / undefined (Node)
```

---

## Why?

```text
Arrow functions do NOT have their own `this`.
```

---

# 9️⃣ Arrow in Callbacks ⭐

Best use case.

```javascript
setTimeout(() => {

    console.log("Hello");

}, 1000);
```

---

# 🔟 Array Methods

```javascript
const nums = [

    1,

    2,

    3
];

const doubled = nums.map(

    n => n * 2
);

console.log(doubled);
```

---

### Output

```text
[2, 4, 6]
```

---

# 1️⃣1️⃣ Arrow Cannot Be Constructor

```javascript
const Person = () => {};
```

---

```javascript
new Person();
```

---

### Output

```text
TypeError
```

---

# 1️⃣2️⃣ No `arguments`

---

## Traditional

```javascript
function demo() {

    console.log(arguments);
}
```

---

## Arrow

```javascript
const demo = () => {

    console.log(arguments);
};
```

---

### Output

```text
ReferenceError
```

---

# Arrow Summary

| Feature | Arrow |
|----------|--------|
| Own `this` | ❌ |
| Constructor | ❌ |
| `arguments` | ❌ |
| Prototype | ❌ |
| Lexical `this` | ✅ |
| Short Syntax | ✅ |

---

# PART B — `this`

---

# What is `this`?

```text
`this` refers to the object
that is executing the current function.
```

---

# ⚠️ Important

Normal functions:

```text
Dynamic `this`
```

Arrow functions:

```text
Lexical `this`
```

---

# 1️⃣ Global `this`

---

## Browser

```javascript
console.log(this);
```

---

### Output

```text
window
```

---

## Node.js Module

```text
{}
```

---

# 2️⃣ Object Methods

```javascript
const user = {

    name: "Jeel",

    greet() {

        console.log(this);

        console.log(this.name);
    }
};

user.greet();
```

---

### Output

```javascript
user object

Jeel
```

---

# 3️⃣ Standalone Function

```javascript
function show() {

    console.log(this);
}

show();
```

---

## Browser (non-strict)

```text
window
```

---

## Strict Mode

```text
undefined
```

---

# 4️⃣ Losing `this`

```javascript
const obj = {

    value: 100,

    show() {

        console.log(this.value);
    }
};

const fn = obj.show;

fn();
```

---

### Output

```text
undefined
```

---

# Why?

```text
Object context is lost.
```

---

# 5️⃣ call()

Invoke immediately.

```javascript
function intro(city) {

    console.log(

        this.name,

        city
    );
}

const person = {

    name: "Ravi"
};

intro.call(

    person,

    "Rajkot"
);
```

---

### Output

```text
Ravi Rajkot
```

---

# 6️⃣ apply()

Arguments passed as array.

```javascript
intro.apply(

    person,

    ["Surat"]
);
```

---

---

# 7️⃣ bind()

Returns new function.

```javascript
const bound = intro.bind(

    person,

    "Ahmedabad"
);

bound();
```

---

### Output

```text
Ravi Ahmedabad
```

---

# call vs apply vs bind

| Method | Executes Immediately | Arguments |
|----------|----------------------|------------|
| call | ✅ | Individual |
| apply | ✅ | Array |
| bind | ❌ | Returns Function |

---

# 8️⃣ Constructor Functions

```javascript
function Person(name) {

    this.name = name;
}

const p = new Person("Kiran");

console.log(p);
```

---

### Output

```javascript
Person {

    name: "Kiran"
}
```

---

# Constructor `this`

```text
`this`
↓

Newly Created Object
```

---

# 9️⃣ Arrow Preserving `this`

```javascript
const box = {

    id: "BOX1",

    show() {

        setTimeout(() => {

            console.log(this.id);

        }, 100);
    }
};

box.show();
```

---

### Output

```text
BOX1
```

---

# Why?

```text
Arrow captures parent's `this`.
```

---

# 🔟 Event Listeners

---

## Normal Function

```javascript
button.addEventListener(

    "click",

    function() {

        console.log(this);
    }
);
```

---

### Output

```text
Clicked Element
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
Parent Scope `this`
```

---

# Best Practices

---

## Use Arrow For

```text
✔ Array Methods

✔ Callbacks

✔ Preserving `this`

✔ Short Functions
```

---

## Use Normal Functions For

```text
✔ Object Methods

✔ Constructors

✔ Prototypes

✔ Event Handlers
```

---

# 🎯 Interview Questions

---

## Arrow vs Normal Function?

```text
Normal

↓

Own `this`

Arrow

↓

Lexical `this`
```

---

## Can Arrow Functions Be Constructors?

```text
❌ No
```

---

## Why Use Arrow in setTimeout?

```text
Preserves Parent `this`
```

---

## How to Change `this`?

```text
call()

apply()

bind()
```

---

# 📊 Quick Revision

```text
Arrow

↓

Short Syntax

↓

Lexical `this`

↓

No arguments

↓

Cannot use new

────────────────

`this`

↓

Depends on Call Site

↓

Object Method → Object

↓

Standalone → Global / undefined

↓

Constructor → New Object

↓

call/apply/bind → Manual Control
```

---

# 💡 Memory Trick

```text
ABC

Arrow
↓

Binds Parent `this`

Callbacks
↓

Best Use Case
```

```text
CAB

Call

Apply

Bind
```

---

# 🏆 Most Important Topics

⭐⭐⭐ Lexical `this`

⭐⭐⭐ Arrow vs Normal Functions

⭐⭐⭐ call / apply / bind

⭐⭐⭐ Losing `this`

⭐⭐⭐ Arrow in Callbacks

> 🎯 **Golden Rule:**  
> **Normal functions get `this` when called.**  
> **Arrow functions inherit `this` from where they are created.**