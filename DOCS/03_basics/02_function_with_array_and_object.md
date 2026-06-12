# 📘 JavaScript Functions with Arrays & Objects

Functions can **accept arrays and objects as parameters**, **return arrays and objects**, and even **modify or transform them**.

---

# 🎯 Why is this Important?

✅ Very common in real-world JavaScript

✅ Used heavily in React, Node.js, APIs

✅ Frequently asked in interviews

---

# 1️⃣ Function Taking an Array

```javascript
function printArray(arr) {

    console.log(arr);
}

printArray([10, 20, 30]);
```

### Output

```text
[10, 20, 30]
```

---

# 2️⃣ Function Returning an Array

```javascript
function makeArray(a, b, c) {

    return [a, b, c];
}

console.log(
    makeArray(1, 2, 3)
);
```

### Output

```text
[1, 2, 3]
```

---

# 3️⃣ Function Taking an Object

```javascript
function printUser(user) {

    console.log(
        user.name,
        user.age
    );
}

printUser({

    name: "Jeel",

    age: 21
});
```

### Output

```text
Jeel 21
```

---

# 4️⃣ Function Returning an Object

```javascript
function createUser(name, age) {

    return {

        name,

        age,

        isActive: true
    };
}

console.log(

    createUser(
        "Asha",
        22
    )
);
```

### Output

```javascript
{
    name: "Asha",
    age: 22,
    isActive: true
}
```

---

# 5️⃣ Modifying Arrays

Arrays are **reference types**.

```javascript
function addSkill(

    skills,

    skill
) {

    skills.push(skill);

    return skills;
}

let skills = [

    "JS",

    "HTML"
];

console.log(

    addSkill(
        skills,
        "CSS"
    )
);
```

---

### Output

```text
["JS", "HTML", "CSS"]
```

---

## Original Array Changes

```javascript
console.log(skills);
```

### Output

```text
["JS", "HTML", "CSS"]
```

---

# 6️⃣ Modifying Objects

Objects are also **reference types**.

```javascript
function updateUser(

    user,

    key,

    value
) {

    user[key] = value;

    return user;
}

let user = {

    name: "Jeel",

    age: 21
};

console.log(

    updateUser(

        user,

        "city",

        "Rajkot"
    )
);
```

---

### Output

```javascript
{
    name: "Jeel",
    age: 21,
    city: "Rajkot"
}
```

---

# 7️⃣ Array Destructuring in Functions

```javascript
function sumArray([a, b, c]) {

    return a + b + c;
}

console.log(

    sumArray([

        5,

        10,

        15
    ])
);
```

### Output

```text
30
```

---

# 8️⃣ Object Destructuring in Functions

```javascript
function printDetails({

    fname,

    age,

    city
}) {

    console.log(

        fname,

        age,

        city
    );
}

printDetails({

    fname: "Nina",

    age: 22,

    city: "Ahmedabad"
});
```

---

### Output

```text
Nina 22 Ahmedabad
```

---

# 9️⃣ Returning Arrays and Objects Together

```javascript
function getData() {

    return {

        list: [

            1,

            2,

            3
        ],

        user: {

            name: "Ravi",

            age: 25
        }
    };
}

console.log(getData());
```

---

### Output

```javascript
{
    list: [1, 2, 3],

    user: {
        name: "Ravi",
        age: 25
    }
}
```

---

# 🔟 Rest Parameters

```javascript
function total(...nums) {

    return nums.reduce(

        (sum, n) => sum + n,

        0
    );
}

console.log(

    total(

        10,

        20,

        30,

        40
    )
);
```

---

### Output

```text
100
```

---

# 1️⃣1️⃣ Default Object Parameters

```javascript
function login(

    user = {

        name: "Guest"
    }
) {

    console.log(

        user.name
    );
}

login({

    name: "Jeel"
});

login();
```

---

### Output

```text
Jeel
Guest
```

---

# 1️⃣2️⃣ Higher-Order Function with Arrays

```javascript
function doubleArray(

    arr,

    fn
) {

    return arr.map(fn);
}

console.log(

    doubleArray(

        [1, 2, 3],

        n => n * 2
    )
);
```

---

### Output

```text
[2, 4, 6]
```

---

# 1️⃣3️⃣ Filtering Object Arrays

```javascript
const users = [

    {
        name: "Jeel",
        age: 21
    },

    {
        name: "Asha",
        age: 17
    },

    {
        name: "Ravi",
        age: 23
    }
];

function filterAdults(arr) {

    return arr.filter(

        user => user.age >= 18
    );
}

console.log(

    filterAdults(users)
);
```

---

### Output

```javascript
[
    { name: "Jeel", age: 21 },

    { name: "Ravi", age: 23 }
]
```

---

# 1️⃣4️⃣ Function Returning Function

```javascript
function createMultiplier(n) {

    return function(arr) {

        return arr.map(

            value => value * n
        );
    };
}

const triple =

    createMultiplier(3);

console.log(

    triple([

        1,

        2,

        3
    ])
);
```

---

### Output

```text
[3, 6, 9]
```

---

# 1️⃣5️⃣ Immutable Array Updates

Return new array without changing original.

```javascript
function addItemImmutable(

    arr,

    item
) {

    return [

        ...arr,

        item
    ];
}

let nums = [

    1,

    2,

    3
];

console.log(

    addItemImmutable(

        nums,

        4
    )
);

console.log(nums);
```

---

### Output

```text
[1, 2, 3, 4]

[1, 2, 3]
```

---

# 1️⃣6️⃣ Object + Array Example

```javascript
function addProduct(

    cart,

    name,

    price
) {

    cart.items.push({

        name,

        price
    });

    cart.total += price;

    return cart;
}

let cart = {

    items: [],

    total: 0
};

console.log(

    addProduct(

        cart,

        "Pen",

        20
    )
);

console.log(

    addProduct(

        cart,

        "Book",

        50
    )
);
```

---

### Output

```javascript
{
    items: [
        { name: "Pen", price: 20 }
    ],

    total: 20
}
```

```javascript
{
    items: [
        { name: "Pen", price: 20 },

        { name: "Book", price: 50 }
    ],

    total: 70
}
```

---

# 📊 Pass by Value vs Reference

| Type | Passed As |
|--------|------------|
| Number | Value |
| String | Value |
| Boolean | Value |
| Object | Reference |
| Array | Reference |
| Function | Reference |

---

# 🎯 Interview Questions

---

## Can functions return arrays?

```text
✅ Yes
```

---

## Can functions return objects?

```text
✅ Yes
```

---

## Can arrays be modified inside functions?

```text
✅ Yes

Because arrays are reference types.
```

---

## Can objects be modified inside functions?

```text
✅ Yes

Because objects are reference types.
```

---

## How to avoid modifying originals?

Arrays:

```javascript
return [...arr];
```

Objects:

```javascript
return {

    ...obj
};
```

---

## Why use destructuring in parameters?

```text
✔ Cleaner Code

✔ Easier Access

✔ Avoids repetitive syntax
```

---

# 🚀 Quick Revision

```text
Function + Array
↓
Parameter

Return Array
↓
[a, b, c]

Function + Object
↓
Parameter

Return Object
↓
{ key: value }

Destructure
↓
Cleaner Parameters

Rest
↓
Unlimited Values

Spread
↓
Immutability
```

---

## 💡 Memory Trick

```text
TPRDI

Take
Process
Return
Destructure
Immutable
```

### Golden Rule

```text
Arrays and Objects are passed by reference.

Use spread (...) when you don't want to mutate originals.
```

> 🎯 **Interview Focus Areas:**  
> Destructuring • Rest Parameters • Spread Operator • Immutability • Higher-Order Functions with Arrays