# 📘 JavaScript Destructuring

Destructuring is an **ES6 feature** that allows you to extract values from **arrays** or **properties from objects** into separate variables.

```text
Destructuring = Unpacking Values
```

---

# 🎯 Why Use Destructuring?

✅ Less code

✅ More readable

✅ Common in React and modern JavaScript

✅ Useful with function parameters

---

# 1️⃣ Array Destructuring

Extract values based on **position**.

```javascript
const arr = [10, 20, 30, 40];

const [a, b] = arr;

console.log(a, b);
```

### Output

```text
10 20
```

---

# ⏭️ Skip Elements

```javascript
const [, second, , fourth] = arr;

console.log(second, fourth);
```

### Output

```text
20 40
```

---

# 🎁 Default Values

```javascript
const arr2 = [1];

const [x = 100, y = 200] = arr2;

console.log(x, y);
```

### Output

```text
1 200
```

---

# 📦 Rest Operator

Collect remaining elements.

```javascript
const [first, ...rest] = arr;

console.log(first);
console.log(rest);
```

### Output

```text
10
[20, 30, 40]
```

---

# 🔄 Swap Variables

```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b);
```

### Output

```text
2 1
```

---

# 🏗️ Nested Arrays

```javascript
const nested = [1, [2, 3], 4];

const [n1, [n2, n3], n4] = nested;

console.log(n1, n2, n3, n4);
```

### Output

```text
1 2 3 4
```

---

# ⚙️ Function Parameters (Array)

```javascript
function sum([a, b, c = 0]) {
    return a + b + c;
}

console.log(sum([5, 6]));
```

### Output

```text
11
```

---

# 2️⃣ Object Destructuring

Extract properties using **property names**.

```javascript
const person = {
    fname: "Jeel",
    age: 26
};

const { fname, age } = person;

console.log(fname, age);
```

### Output

```text
Jeel 26
```

---

# ✏️ Rename Variables

```javascript
const {
    fname: firstName
} = person;

console.log(firstName);
```

### Output

```text
Jeel
```

---

# 🎁 Default Values

```javascript
const {
    country = "India"
} = person;

console.log(country);
```

### Output

```text
India
```

---

# 🏗️ Nested Object Destructuring

```javascript
const person = {
    address: {
        city: "Rajkot",
        pin: 360001
    }
};

const {
    address: { city, pin }
} = person;

console.log(city, pin);
```

### Output

```text
Rajkot 360001
```

---

# 📦 Rest Operator with Objects

```javascript
const {
    fname,
    ...other
} = person;
```

---

# Example

```javascript
console.log(fname);
console.log(other);
```

### Output

```text
Jeel

{
    age: 26,
    address: {...}
}
```

---

# 🔑 Dynamic Keys

```javascript
const key = "fname";

const {
    [key]: name
} = person;

console.log(name);
```

### Output

```text
Jeel
```

---

# 🔀 Order Doesn't Matter

```javascript
const {
    age,
    fname
} = person;
```

Same as:

```javascript
const {
    fname,
    age
} = person;
```

---

# ⚙️ Function Parameters (Object)

```javascript
function printUser({
    fname,
    age
}) {
    console.log(fname, age);
}
```

---

# Usage

```javascript
printUser(person);
```

---

# 3️⃣ Combined Destructuring

Arrays inside objects.

```javascript
const data = {
    items: [
        { value: 10 },
        { value: 20 }
    ]
};

const {
    items: [
        { value: firstValue }
    ]
} = data;

console.log(firstValue);
```

### Output

```text
10
```

---

# Array of Objects

```javascript
const users = [
    { id: 1 },
    { id: 2 }
];

const [
    { id: firstId },
    { id: secondId }
] = users;
```

---

### Output

```text
1 2
```

---

# 4️⃣ Existing Variables

---

## Arrays

```javascript
let a, b;

[a, b] = [5, 6];
```

---

## Objects

Needs parentheses.

```javascript
({ a, b } = {
    a: 7,
    b: 8
});
```

---

# ⚠️ Null / Undefined Safety

This throws error:

```javascript
const obj = null;

const { name } = obj;
```

---

# ✅ Safe Approach

```javascript
const {
    name
} = obj ?? {};
```

---

# String Destructuring

Strings are iterable.

```javascript
const str = "Hi";

const [a, b] = str;

console.log(a, b);
```

### Output

```text
H i
```

---

# 5️⃣ Nested Defaults

```javascript
const config = {
    host: "localhost",
    db: {
        name: "test"
    }
};

const {
    host = "127.0.0.1",

    port = 3306,

    db: {
        name = "defaultDB",

        user = "root"
    } = {}
} = config;
```

---

### Output

```text
localhost
3306
test
root
```

---

# 6️⃣ Map Destructuring

```javascript
const map = new Map([
    ["a", 1],
    ["b", 2]
]);

for (const [key, value] of map) {
    console.log(key, value);
}
```

---

### Output

```text
a 1
b 2
```

---

# Set Destructuring

```javascript
const set = new Set([
    100,
    200,
    300
]);

const [a, b] = set;
```

---

### Output

```text
100 200
```

---

# 7️⃣ Interview Pattern

Error-first pattern.

```javascript
function fetchData() {

    return [
        null,
        { name: "Jeel" }
    ];
}

const [
    err,
    data
] = fetchData();
```

---

### Output

```text
null

{
    name: "Jeel"
}
```

---

# Meta + Items

```javascript
const result = {
    meta: { total: 2 },
    items: [1, 2]
};

const {
    meta,
    items
} = result;
```

---

# 📊 Array vs Object Destructuring

| Feature | Array | Object |
|----------|--------|---------|
| Based On | Position | Property Name |
| Order Important | ✅ Yes | ❌ No |
| Rename Support | ❌ No | ✅ Yes |
| Default Values | ✅ Yes | ✅ Yes |
| Rest Operator | ✅ Yes | ✅ Yes |

---

# 🎯 Interview Questions

---

## Difference between Array and Object Destructuring?

```text
Array → Position Based

Object → Name Based
```

---

## How to Rename Variables?

```javascript
const {
    fname: firstName
} = person;
```

---

## How to Provide Defaults?

```javascript
const [a = 1] = arr;

const {
    x = 10
} = obj;
```

---

## How to Get Remaining Properties?

```javascript
const {
    a,
    ...rest
} = obj;
```

---

## How to Destructure Nested Objects?

```javascript
const {
    address: {
        city
    }
} = person;
```

---

# 🚀 Quick Revision

```text
Array

[a, b]

[a = 1]

[a, ...rest]

[a, [b, c]]

────────────────

Object

{x, y}

{x: newName}

{x = 10}

{x, ...rest}

{a: {b}}

{[key]: value}
```

---

## 💡 Memory Trick

```text
RDDR

Read
Default
Destructure
Rest
```

### Arrays

```text
Position Matters
```

### Objects

```text
Property Names Matter
```

> 🎯 **Golden Rule:**  
> Use destructuring whenever you need to **extract values cleanly** from arrays or objects. It's one of the most commonly used ES6 features in interviews and modern frameworks like React.