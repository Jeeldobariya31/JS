# Loops in JavaScript

## Overview
Iterating through code blocks using different loop types and control statements.

## for Loop

### Basic for Loop
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);                // 0, 1, 2, 3, 4
}
```

### Loop Parts
```javascript
for (
    let i = 0;      // Initialization
    i < 5;          // Condition
    i++             // Increment
) {
    console.log(i);
}
```

### Array Iteration
```javascript
let arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);           // a, b, c
}
```

### Backward Iteration
```javascript
for (let i = 5; i > 0; i--) {
    console.log(i);                // 5, 4, 3, 2, 1
}

let arr = [10, 20, 30, 40];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);           // 40, 30, 20, 10
}
```

### Skipping Iterations
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;         // Skip iteration
    console.log(i);                // 0, 1, 2, 4, 5, 6, 7, 8, 9
}
```

### Breaking from Loop
```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;            // Exit loop
    console.log(i);                // 0, 1, 2, 3, 4
}
```

### Nested Loops
```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i},${j}`);  // 1,1 1,2 1,3 2,1 2,2...
    }
}
```

### Multiplication Table
```javascript
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
```

## while Loop

### Basic while Loop
```javascript
let i = 0;
while (i < 5) {
    console.log(i);                // 0, 1, 2, 3, 4
    i++;
}
```

### Condition-based Loop
```javascript
let count = 0;
while (count < 3) {
    console.log("Count: " + count);
    count++;
}
```

### User Input Loop (simulated)
```javascript
let guess = 0;
while (guess !== 5) {
    // In real code, get user input
    guess = Math.random() * 10;
}
console.log("Correct!");
```

### Infinite Loop (Careful!)
```javascript
// let i = 0;
// while (true) {
//     console.log(i);
//     i++;
//     // Never ends without break
// }

// With break
let i = 0;
while (true) {
    if (i >= 5) break;
    console.log(i);
    i++;
}
```

## do...while Loop

Executes at least once before checking condition:

```javascript
let i = 0;
do {
    console.log(i);                // 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```

### Runs At Least Once
```javascript
let i = 10;
do {
    console.log(i);                // 10 (prints even though i > 5)
    i++;
} while (i < 5);
```

### Menu Loop
```javascript
let choice = "";
do {
    // Get user choice
    choice = "exit";
    console.log("Menu shown");
} while (choice !== "exit");
console.log("Exited");
```

## for...in Loop

Iterates over object properties or array indices:

```javascript
let user = { name: "John", age: 30, email: "john@test.com" };

for (let key in user) {
    console.log(key + ": " + user[key]);
    // name: John
    // age: 30
    // email: john@test.com
}
```

### Array with for...in
```javascript
let arr = ["a", "b", "c"];

for (let index in arr) {
    console.log(index + ": " + arr[index]);
    // 0: a
    // 1: b
    // 2: c
}
```

### Caution: Inherited Properties
```javascript
let arr = [1, 2, 3];
arr.custom = "custom";

for (let i in arr) {
    console.log(i);                // 0, 1, 2, "custom" (includes added property)
}
```

## for...of Loop (ES6+)

Iterates over values instead of keys/indices:

```javascript
let arr = ["a", "b", "c"];

for (let value of arr) {
    console.log(value);            // a, b, c
}
```

### String Iteration
```javascript
let str = "hello";

for (let char of str) {
    console.log(char);             // h, e, l, l, o
}
```

### Map Iteration
```javascript
let map = new Map([
    ["name", "John"],
    ["age", 30]
]);

for (let [key, value] of map) {
    console.log(key + ": " + value);
    // name: John
    // age: 30
}
```

### Set Iteration
```javascript
let set = new Set([1, 2, 3, 2]);

for (let value of set) {
    console.log(value);            // 1, 2, 3 (duplicates removed)
}
```

### Difference: for...in vs for...of
```javascript
let arr = [10, 20, 30];
arr.custom = "value";

// for...in iterates over indices and properties
for (let i in arr) {
    console.log(i);                // 0, 1, 2, "custom"
}

// for...of iterates over values only
for (let value of arr) {
    console.log(value);            // 10, 20, 30
}
```

## Controlling Loops

### continue Statement
Skips to next iteration:

```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);                // 0, 1, 3, 4
}
```

### break Statement
Exits loop immediately:

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);                // 0, 1, 2, 3, 4
}
```

### Labeled Statements
```javascript
outerLoop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;       // Break outer loop
        }
        console.log(`${i},${j}`);
    }
}
```

## Loop Examples

### Print Numbers
```javascript
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
```

### Sum Array
```javascript
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);                  // 15
```

### Find Largest Number
```javascript
let arr = [3, 10, 5, 2, 9];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log(max);                  // 10
```

### Factorial
```javascript
let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(factorial);            // 120
```

### Print Pattern
```javascript
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
    // *
    // **
    // ***
    // ****
    // *****
}
```

## Best Practices
- Use for loop for known number of iterations
- Use while loop for condition-based iteration
- Use for...of loop for iterating over values (ES6+)
- Avoid for...in with arrays (use array methods instead)
- Use meaningful loop variables
- Avoid infinite loops unless intentional
- Use break and continue sparingly
- Consider array methods (map, filter, reduce) instead of loops
- Keep loops simple and readable
