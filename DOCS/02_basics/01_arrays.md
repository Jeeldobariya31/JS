# Arrays in JavaScript

## Overview
Comprehensive guide to JavaScript arrays, methods, and operations.

## Creating Arrays

### Array Literal
```javascript
let arr = [];                   // Empty array
let arr = [1, 2, 3];           // Array with values
let arr = [1, "text", true];   // Mixed types
let arr = [1, [2, 3], 4];      // Nested arrays
```

### Array Constructor
```javascript
let arr = new Array();         // Empty array
let arr = new Array(5);        // Array with 5 empty slots
let arr = new Array(1, 2, 3);  // Array with values
```

## Accessing Elements

```javascript
let arr = ['a', 'b', 'c', 'd'];
arr[0]          // 'a'
arr[3]          // 'd'
arr[-1]         // undefined (negative indices not supported)
arr.length      // 4
```

## Array Properties

### length
```javascript
let arr = [1, 2, 3];
arr.length      // 3
arr.length = 2; // Truncates array to [1, 2]
arr.length = 5; // Extends array [1, 2, empty, empty, empty]
```

## Mutating Arrays

### Adding Elements

#### push() - Add to end
```javascript
let arr = [1, 2];
arr.push(3);              // Returns 3 (new length)
arr.push(4, 5);           // Add multiple: [1, 2, 3, 4, 5]
```

#### unshift() - Add to start
```javascript
let arr = [2, 3];
arr.unshift(1);           // Returns 3 (new length)
arr.unshift(0, 1);        // Add multiple: [0, 1, 2, 3]
```

### Removing Elements

#### pop() - Remove from end
```javascript
let arr = [1, 2, 3];
arr.pop();                // Returns 3
console.log(arr);         // [1, 2]
```

#### shift() - Remove from start
```javascript
let arr = [1, 2, 3];
arr.shift();              // Returns 1
console.log(arr);         // [2, 3]
```

#### splice(start, deleteCount, ...items)
```javascript
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);         // Remove 2 elements at index 2: [1, 2, 5]
arr.splice(1, 0, 'a');    // Insert at index 1: [1, 'a', 2, 5]
arr.splice(1, 1, 'x', 'y'); // Replace 1 element: [1, 'x', 'y', 2, 5]
```

## Non-Mutating Array Methods

### slice(start, end)
Returns shallow copy without modifying original

```javascript
let arr = [1, 2, 3, 4, 5];
arr.slice(2);             // [3, 4, 5]
arr.slice(1, 4);          // [2, 3, 4]
arr.slice(-2);            // [4, 5]
arr.slice();              // Copy entire array
```

### concat(...arrays)
Combines arrays

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
arr1.concat(arr2);        // [1, 2, 3, 4]
arr1.concat(arr2, [5]);   // [1, 2, 3, 4, 5]
arr1.concat(10, 20);      // [1, 2, 10, 20]
```

### join(separator)
Converts array to string

```javascript
let arr = ['a', 'b', 'c'];
arr.join();               // "a,b,c"
arr.join('-');            // "a-b-c"
arr.join('');             // "abc"
```

## Iteration Methods

### forEach()
Executes function for each element

```javascript
let arr = [1, 2, 3];
arr.forEach((item, index, array) => {
    console.log(item, index);
});
```

### map()
Transforms each element

```javascript
let arr = [1, 2, 3];
let squared = arr.map(x => x * x);  // [1, 4, 9]
```

### filter()
Creates array with elements that pass test

```javascript
let arr = [1, 2, 3, 4, 5];
let evens = arr.filter(x => x % 2 === 0);  // [2, 4]
```

### reduce()
Accumulates value from array

```javascript
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, x) => acc + x, 0);  // 10
```

### find()
Returns first element that passes test

```javascript
let arr = [1, 2, 3, 4];
arr.find(x => x > 2);     // 3
```

### findIndex()
Returns index of first element that passes test

```javascript
let arr = [1, 2, 3, 4];
arr.findIndex(x => x > 2); // 2
```

### some()
Returns true if any element passes test

```javascript
let arr = [1, 2, 3];
arr.some(x => x > 2);     // true
```

### every()
Returns true if all elements pass test

```javascript
let arr = [1, 2, 3];
arr.every(x => x > 0);    // true
```

## Searching

### indexOf()
Returns index of element

```javascript
let arr = ['a', 'b', 'c'];
arr.indexOf('b');         // 1
arr.indexOf('d');         // -1
```

### lastIndexOf()
Returns index of last occurrence

```javascript
let arr = ['a', 'b', 'a'];
arr.lastIndexOf('a');     // 2
```

### includes()
Checks if array contains element

```javascript
let arr = [1, 2, 3];
arr.includes(2);          // true
arr.includes(4);          // false
```

## Sorting and Reversing

### sort()
Sorts array in place (default: alphabetical)

```javascript
let arr = [3, 1, 4, 1, 5];
arr.sort();               // [1, 1, 3, 4, 5] (alphabetical by default)
arr.sort((a, b) => a - b); // [1, 1, 3, 4, 5] (numeric)
arr.sort((a, b) => b - a); // [5, 4, 3, 1, 1] (descending)
```

### reverse()
Reverses array in place

```javascript
let arr = [1, 2, 3];
arr.reverse();            // [3, 2, 1]
```

## Filling and Creating

### fill()
Fills array with value

```javascript
let arr = [1, 2, 3, 4, 5];
arr.fill(0);              // [0, 0, 0, 0, 0]
arr.fill(0, 2);           // [1, 2, 0, 0, 0]
arr.fill(0, 1, 3);        // [1, 0, 0, 4, 5]
```

### Array.from()
Creates array from iterable

```javascript
Array.from('hello');      // ['h', 'e', 'l', 'l', 'o']
Array.from([1, 2, 3], x => x * 2);  // [2, 4, 6]
```

### Array.of()
Creates array from arguments

```javascript
Array.of(1, 2, 3);        // [1, 2, 3]
```

## Flat and FlatMap

### flat()
Flattens nested arrays

```javascript
let arr = [1, [2, [3, 4]]];
arr.flat();               // [1, 2, [3, 4]]
arr.flat(2);              // [1, 2, 3, 4]
```

### flatMap()
Maps then flattens

```javascript
let arr = [1, 2, 3];
arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
```

## Spread Operator

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4]
let copy = [...arr1];              // [1, 2] (shallow copy)
```

## Best Practices
- Use `const` for arrays unless reassignment is needed
- Use `map()`, `filter()`, `reduce()` instead of loops for transformations
- Remember that `sort()` sorts by string by default
- Use `includes()` instead of `indexOf()` for existence checks
- Use spread operator for copying arrays
- Remember arrays are objects and have reference behavior
