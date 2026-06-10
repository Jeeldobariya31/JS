# Data Types Summary

## Overview
Quick reference for all JavaScript data types with key characteristics.

## Primitive Types

| Type | Example | Mutable | Typeof |
|------|---------|---------|--------|
| String | `"Hello"`, `'text'` | No | "string" |
| Number | `42`, `3.14`, `NaN` | No | "number" |
| Boolean | `true`, `false` | No | "boolean" |
| Undefined | `undefined` | No | "undefined" |
| Null | `null` | No | "object" |
| Symbol | `Symbol('id')` | No | "symbol" |
| BigInt | `123n`, `BigInt(123)` | No | "bigint" |

## Object Type

```javascript
// All are Objects
let obj = { name: "John" };           // Object literal
let arr = [1, 2, 3];                  // Array
let func = function() {};             // Function
let date = new Date();                // Date
let regex = /pattern/;                // Regular Expression
let map = new Map();                  // Map
let set = new Set();                  // Set
```

## Type Checking

### typeof Operator
```javascript
typeof "text"       // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (quirk!)
typeof Symbol()    // "symbol"
typeof 123n        // "bigint"
typeof {}          // "object"
typeof []          // "object"
typeof function(){}  // "function"
```

### instanceof Operator
```javascript
[] instanceof Array         // true
{} instanceof Object        // true
function(){} instanceof Function  // true
new Date() instanceof Date  // true
```

## Truthy vs Falsy

### Falsy Values
```javascript
false
0
0n         // BigInt
""         // Empty string
null
undefined
NaN
```

All other values are truthy.

## Type Coercion

### String Coercion
```javascript
String(42)          // "42"
String(true)        // "true"
String(null)        // "null"
42 + ""             // "42"
```

### Number Coercion
```javascript
Number("42")        // 42
Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
+"42"               // 42
```

### Boolean Coercion
```javascript
Boolean(1)          // true
Boolean(0)          // false
Boolean("text")     // true
Boolean("")         // false
!!0                 // false (double NOT operator)
```

## Special Values

### NaN (Not-a-Number)
```javascript
NaN === NaN         // false
isNaN(NaN)          // true
Number.isNaN(NaN)   // true (strict check)
```

### Infinity
```javascript
Infinity
-Infinity
1 / 0               // Infinity
Number.POSITIVE_INFINITY
Number.NEGATIVE_INFINITY
```

### Undefined vs Null
```javascript
let x;              // undefined (declared, not assigned)
let y = null;       // null (explicitly set)
x === y             // false
x == y              // true (loose equality)
x === undefined     // true
y === null          // true
```

## Immutability of Primitives

```javascript
let str = "Hello";
str[0] = "J";
console.log(str);   // "Hello" (unchanged, strings are immutable)

let arr = [1, 2, 3];
arr[0] = 99;
console.log(arr);   // [99, 2, 3] (changed, arrays are mutable)
```

## Reference vs Value

### Primitives (Pass by Value)
```javascript
let a = 10;
let b = a;
b = 20;
console.log(a);     // 10 (unchanged)
```

### Objects (Pass by Reference)
```javascript
let obj1 = { name: "John" };
let obj2 = obj1;
obj2.name = "Jane";
console.log(obj1.name);  // "Jane" (changed)
```

## Best Practices
- Understand the difference between primitives and objects
- Always use strict equality (`===`) unless you have a specific reason
- Be aware of truthy/falsy values in conditionals
- Use `typeof` for type checking primitives, `instanceof` for objects
- Remember that `typeof null` returns "object"
