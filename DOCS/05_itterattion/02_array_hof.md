# Array Higher-Order Functions

## Overview
Advanced array methods that take functions as parameters for array transformation and manipulation.

## forEach() Method

Executes function for each array element:

```javascript
let arr = [1, 2, 3];
arr.forEach(function(item) {
    console.log(item);             // 1, 2, 3
});

// With arrow function
arr.forEach(item => console.log(item));
```

### forEach with Index and Array
```javascript
let arr = ["a", "b", "c"];

arr.forEach(function(item, index, array) {
    console.log(index + ": " + item);
    // 0: a
    // 1: b
    // 2: c
});
```

### forEach Return Value
```javascript
let result = [1, 2, 3].forEach(x => x * 2);
console.log(result);               // undefined (forEach returns nothing)
```

## map() Method

Transforms each element and returns new array:

```javascript
let arr = [1, 2, 3, 4];
let doubled = arr.map(x => x * 2);
console.log(doubled);              // [2, 4, 6, 8]
```

### Complex Transformations
```javascript
let numbers = [1, 2, 3];
let transformed = numbers.map(x => ({
    original: x,
    doubled: x * 2,
    squared: x * x
}));
console.log(transformed);
// [
//   { original: 1, doubled: 2, squared: 1 },
//   { original: 2, doubled: 4, squared: 4 },
//   { original: 3, doubled: 6, squared: 9 }
// ]
```

### Extract Properties
```javascript
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

let names = users.map(user => user.name);
console.log(names);                // ["John", "Jane", "Bob"]
```

### Convert Types
```javascript
let strings = ["1", "2", "3"];
let numbers = strings.map(str => parseInt(str));
console.log(numbers);              // [1, 2, 3]
```

## filter() Method

Creates array with elements that pass test:

```javascript
let arr = [1, 2, 3, 4, 5, 6];
let evens = arr.filter(x => x % 2 === 0);
console.log(evens);                // [2, 4, 6]
```

### Filter Objects
```javascript
let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 }
];

let adults = users.filter(user => user.age >= 25);
console.log(adults);
// [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 }
// ]
```

### Multiple Filters
```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let filtered = numbers
    .filter(x => x > 3)            // [4, 5, 6, 7, 8, 9, 10]
    .filter(x => x % 2 === 0);     // [4, 6, 8, 10]

console.log(filtered);
```

### Remove Falsy Values
```javascript
let arr = [0, 1, false, 2, "", 3, null, 4, undefined];
let clean = arr.filter(Boolean);
console.log(clean);                // [1, 2, 3, 4]
```

## find() Method

Returns first element that passes test:

```javascript
let arr = [1, 2, 3, 4, 5];
let first = arr.find(x => x > 3);
console.log(first);                // 4
```

### Find Object
```javascript
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

let user = users.find(u => u.name === "Jane");
console.log(user);                 // { id: 2, name: 'Jane' }
```

### Find with Not Found
```javascript
let arr = [1, 2, 3];
let result = arr.find(x => x > 10);
console.log(result);               // undefined
```

## findIndex() Method

Returns index of first element that passes test:

```javascript
let arr = [10, 20, 30, 40];
let index = arr.findIndex(x => x > 25);
console.log(index);                // 2
```

### Find Index of Object
```javascript
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" }
];

let index = users.findIndex(u => u.id === 2);
console.log(index);                // 1
```

## some() Method

Returns true if ANY element passes test:

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.some(x => x > 3));    // true
console.log(arr.some(x => x > 10));   // false
```

### Validate Data
```javascript
let users = [
    { name: "John", active: false },
    { name: "Jane", active: true },
    { name: "Bob", active: false }
];

let hasActive = users.some(u => u.active);
console.log(hasActive);            // true
```

## every() Method

Returns true if ALL elements pass test:

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.every(x => x > 0));    // true
console.log(arr.every(x => x > 3));    // false
```

### Validate All Objects
```javascript
let users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 20 }
];

let allAdults = users.every(u => u.age >= 18);
console.log(allAdults);            // true
```

## reduce() Method

Accumulates value from array:

```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);
console.log(sum);                  // 10
```

### Reduce with Initial Value
```javascript
let arr = [1, 2, 3];

// With initial value 10
let sum = arr.reduce((acc, x) => acc + x, 10);
console.log(sum);                  // 16

// Without initial value
let sum2 = arr.reduce((acc, x) => acc + x);
console.log(sum2);                 // 6
```

### Reduce to Object
```javascript
let arr = [
    { name: "John", score: 90 },
    { name: "Jane", score: 85 },
    { name: "Bob", score: 90 }
];

let scoreMap = arr.reduce((acc, person) => {
    acc[person.name] = person.score;
    return acc;
}, {});

console.log(scoreMap);
// { John: 90, Jane: 85, Bob: 90 }
```

### Count Occurrences
```javascript
let arr = ["a", "b", "a", "c", "a", "b"];

let counts = arr.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});

console.log(counts);               // { a: 3, b: 2, c: 1 }
```

### Flatten Array
```javascript
let arr = [[1, 2], [3, 4], [5, 6]];

let flat = arr.reduce((acc, subArr) => {
    return acc.concat(subArr);
}, []);

console.log(flat);                 // [1, 2, 3, 4, 5, 6]
```

## reduceRight() Method

Like reduce but processes from right to left:

```javascript
let arr = [1, 2, 3, 4];
let result = arr.reduceRight((acc, x) => {
    return acc + "-" + x;
}, "");

console.log(result);               // "-4-3-2-1"
```

## Chaining Array Methods

Combining multiple operations:

```javascript
let numbers = [1, 2, 3, 4, 5, 6];

let result = numbers
    .filter(x => x > 2)            // [3, 4, 5, 6]
    .map(x => x * 2)               // [6, 8, 10, 12]
    .reduce((a, b) => a + b, 0);   // 36

console.log(result);
```

### Complex Example
```javascript
let users = [
    { name: "John", age: 25, active: true },
    { name: "Jane", age: 30, active: false },
    { name: "Bob", age: 35, active: true },
    { name: "Alice", age: 22, active: true }
];

let activeAdults = users
    .filter(u => u.active)         // Only active users
    .filter(u => u.age >= 25)      // Only adults
    .map(u => u.name)              // Get names
    .sort();                        // Sort alphabetically

console.log(activeAdults);         // ["Bob", "John"]
```

## Practical Examples

### Sum All Numbers
```javascript
[1, 2, 3, 4, 5].reduce((a, b) => a + b, 0);  // 15
```

### Find Maximum
```javascript
[3, 10, 5, 2, 9].reduce((max, x) => x > max ? x : max);  // 10
```

### Group by Property
```javascript
let data = [
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 15 }
];

let grouped = data.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.value);
    return acc;
}, {});

console.log(grouped);
// { A: [10, 15], B: [20] }
```

### Unique Values
```javascript
let arr = [1, 2, 2, 3, 3, 3, 4];
let unique = arr.reduce((acc, x) => {
    if (!acc.includes(x)) acc.push(x);
    return acc;
}, []);

console.log(unique);               // [1, 2, 3, 4]
```

## Best Practices
- Use map() for transformations
- Use filter() for filtering conditions
- Use reduce() for accumulating values
- Chain methods for readable transformations
- Use find() instead of filter() when you need one element
- Use some()/every() for boolean checks
- Avoid modifying original array unless necessary
- Keep functions in methods simple and readable
- Consider performance with large arrays
