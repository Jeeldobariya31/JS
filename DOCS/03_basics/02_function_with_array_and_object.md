# Functions with Arrays and Objects

## Overview
Working with functions that manipulate arrays and objects, including higher-order functions.

## Functions with Arrays

### Passing Arrays to Functions
```javascript
function printArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printArray([1, 2, 3]);      // Prints 1, 2, 3
```

### Returning Arrays
```javascript
function createArray(size) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
        arr.push(i);
    }
    return arr;
}

let result = createArray(5);  // [1, 2, 3, 4, 5]
```

### Array Processing Functions

#### Sum Array
```javascript
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

sumArray([1, 2, 3, 4, 5]);   // 15

// Using reduce
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
```

#### Find Maximum
```javascript
function findMax(arr) {
    if (arr.length === 0) return null;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

findMax([3, 1, 4, 1, 5, 9]); // 9

// Using Math.max
function findMax(arr) {
    return Math.max(...arr);
}
```

#### Filter Array
```javascript
function filterEven(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

filterEven([1, 2, 3, 4, 5, 6]); // [2, 4, 6]

// Using filter method
function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}
```

#### Transform Array
```javascript
function doubleArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

doubleArray([1, 2, 3, 4]); // [2, 4, 6, 8]

// Using map
function doubleArray(arr) {
    return arr.map(num => num * 2);
}
```

#### Check Conditions
```javascript
function hasEvenNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return true;
        }
    }
    return false;
}

hasEvenNumber([1, 3, 5, 6]); // true

// Using some
function hasEvenNumber(arr) {
    return arr.some(num => num % 2 === 0);
}
```

## Functions with Objects

### Passing Objects to Functions
```javascript
function printUser(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
}

printUser({ name: "John", age: 30 });
```

### Returning Objects
```javascript
function createUser(name, age) {
    return {
        name: name,
        age: age,
        email: name.toLowerCase() + "@example.com"
    };
}

let user = createUser("John", 30);
// { name: 'John', age: 30, email: 'john@example.com' }
```

### Object Manipulation Functions

#### Update Object Property
```javascript
function increaseAge(user, years) {
    user.age += years;  // Modifies original object
    return user;
}

let user = { name: "John", age: 30 };
increaseAge(user, 5);
console.log(user.age);      // 35
```

#### Create Modified Copy
```javascript
function increaseAge(user, years) {
    return {
        ...user,
        age: user.age + years
    };
}

let user = { name: "John", age: 30 };
let updated = increaseAge(user, 5);
console.log(user.age);      // 30 (original unchanged)
console.log(updated.age);   // 35
```

#### Merge Objects
```javascript
function mergeUsers(user1, user2) {
    return {
        ...user1,
        ...user2
    };
}

let user1 = { name: "John", age: 30 };
let user2 = { age: 35, email: "john@example.com" };
let merged = mergeUsers(user1, user2);
// { name: 'John', age: 35, email: 'john@example.com' }
```

#### Filter Object Properties
```javascript
function filterObject(obj, keys) {
    let result = {};
    for (let key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    return result;
}

let user = { name: "John", age: 30, email: "john@test.com" };
let filtered = filterObject(user, ["name", "email"]);
// { name: 'John', email: 'john@test.com' }
```

#### Transform Object Values
```javascript
function transformValues(obj, transformer) {
    let result = {};
    for (let key in obj) {
        result[key] = transformer(obj[key]);
    }
    return result;
}

let numbers = { a: 1, b: 2, c: 3 };
let doubled = transformValues(numbers, (val) => val * 2);
// { a: 2, b: 4, c: 6 }
```

## Combining Arrays and Objects

### Array of Objects
```javascript
function findUserByName(users, name) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            return users[i];
        }
    }
    return null;
}

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

findUserByName(users, "Jane"); // { id: 2, name: 'Jane' }

// Using find
function findUserByName(users, name) {
    return users.find(user => user.name === name);
}
```

### Extract Properties from Objects in Array
```javascript
function getNames(users) {
    let names = [];
    for (let i = 0; i < users.length; i++) {
        names.push(users[i].name);
    }
    return names;
}

let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];

getNames(users);            // ["John", "Jane"]

// Using map
function getNames(users) {
    return users.map(user => user.name);
}
```

### Group Objects by Property
```javascript
function groupByAge(users) {
    let groups = {};
    for (let user of users) {
        let age = user.age;
        if (!groups[age]) {
            groups[age] = [];
        }
        groups[age].push(user);
    }
    return groups;
}

let users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 30 }
];

let grouped = groupByAge(users);
/* 
{
    '25': [{ name: 'Jane', age: 25 }],
    '30': [{ name: 'John', age: 30 }, { name: 'Bob', age: 30 }]
}
*/
```

### Count Objects by Property
```javascript
function countByStatus(items) {
    let counts = {};
    for (let item of items) {
        let status = item.status;
        counts[status] = (counts[status] || 0) + 1;
    }
    return counts;
}

let tasks = [
    { task: "Task 1", status: "completed" },
    { task: "Task 2", status: "pending" },
    { task: "Task 3", status: "completed" }
];

countByStatus(tasks);       // { completed: 2, pending: 1 }
```

## Best Practices
- Pass immutable copies when you don't want to modify originals
- Use destructuring for cleaner function parameters
- Return new objects instead of modifying originals
- Use array methods like map, filter, reduce for transformations
- Name functions clearly based on what they do
- Validate input before processing
- Consider performance with large arrays/objects
