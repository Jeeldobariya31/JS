# Destructuring Objects and Arrays

## Overview
Destructuring syntax for extracting values from objects and arrays into variables.

## Array Destructuring

### Basic Destructuring
```javascript
let arr = [1, 2, 3];
let [a, b, c] = arr;
console.log(a, b, c);      // 1 2 3
```

### Skipping Elements
```javascript
let arr = [1, 2, 3, 4];
let [a, , c] = arr;
console.log(a, c);         // 1 3
```

### Rest Element
```javascript
let arr = [1, 2, 3, 4, 5];
let [a, b, ...rest] = arr;
console.log(a, b, rest);   // 1 2 [3, 4, 5]
```

### Default Values
```javascript
let arr = [1];
let [a, b = 2] = arr;
console.log(a, b);         // 1 2
```

### Swapping Variables
```javascript
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);         // 2 1
```

### Nested Arrays
```javascript
let arr = [1, [2, 3], 4];
let [a, [b, c], d] = arr;
console.log(a, b, c, d);   // 1 2 3 4
```

## Object Destructuring

### Basic Destructuring
```javascript
let user = { name: "John", age: 30 };
let { name, age } = user;
console.log(name, age);    // "John" 30
```

### Renaming Variables
```javascript
let user = { name: "John", age: 30 };
let { name: userName, age: userAge } = user;
console.log(userName, userAge); // "John" 30
```

### Default Values
```javascript
let user = { name: "John" };
let { name, age = 25 } = user;
console.log(name, age);    // "John" 25
```

### Extracting Some Properties
```javascript
let user = { name: "John", age: 30, email: "john@test.com" };
let { name, age } = user;
console.log(name, age);    // "John" 30
```

### Rest Properties (ES2018)
```javascript
let user = { name: "John", age: 30, email: "john@test.com" };
let { name, ...rest } = user;
console.log(name, rest);   // "John" { age: 30, email: "john@test.com" }
```

### Nested Objects
```javascript
let user = {
    name: "John",
    address: { city: "NYC", zip: "10001" }
};
let { name, address: { city, zip } } = user;
console.log(name, city, zip); // "John" "NYC" "10001"
```

### Renaming Nested Properties
```javascript
let user = {
    name: "John",
    address: { city: "NYC" }
};
let { address: { city: userCity } } = user;
console.log(userCity);     // "NYC"
```

## Function Parameters

### Array Destructuring in Functions
```javascript
function sum([a, b]) {
    return a + b;
}
sum([5, 3]);               // 8
```

### Object Destructuring in Functions
```javascript
function printUser({ name, age }) {
    console.log(`${name} is ${age} years old`);
}
printUser({ name: "John", age: 30 });
```

### Default Parameters
```javascript
function printUser({ name = "Unknown", age = 0 } = {}) {
    console.log(`${name} is ${age} years old`);
}
printUser({ name: "John" });  // "John is 0 years old"
printUser({});                // "Unknown is 0 years old"
```

### Mixed Destructuring
```javascript
function handleData({ id, data: [a, b] }) {
    console.log(id, a, b);
}
handleData({ id: 1, data: [10, 20] }); // 1 10 20
```

## Complex Examples

### Multiple Levels of Nesting
```javascript
let data = {
    user: {
        name: "John",
        contacts: {
            email: "john@test.com",
            phone: "123-456-7890"
        }
    }
};

let { user: { name, contacts: { email } } } = data;
console.log(name, email);  // "John" "john@test.com"
```

### Combining Array and Object Destructuring
```javascript
let data = {
    users: [
        { name: "John", age: 30 },
        { name: "Jane", age: 25 }
    ]
};

let { users: [{ name: firstName }, { name: secondName }] } = data;
console.log(firstName, secondName); // "John" "Jane"
```

### Dynamic Default Values
```javascript
let user = { name: "John" };
let { name, age = calculateAge() } = user;

function calculateAge() {
    return 25;
}
```

## Practical Use Cases

### Extract API Response
```javascript
let response = {
    status: 200,
    data: { id: 1, title: "Post" }
};

let { status, data: { id, title } } = response;
```

### Function Return Value
```javascript
function getUserData() {
    return { name: "John", age: 30 };
}

let { name, age } = getUserData();
```

### Configuration Objects
```javascript
function configure({ debug = false, timeout = 5000 } = {}) {
    console.log(`Debug: ${debug}, Timeout: ${timeout}`);
}

configure({ debug: true }); // Debug: true, Timeout: 5000
```

## Best Practices
- Use destructuring to make code more readable
- Use default values to provide sensible fallbacks
- Avoid deeply nested destructuring for clarity
- Use rest elements to collect remaining values
- Destructure function parameters to make dependencies clear
- Rename variables when property names are unclear
