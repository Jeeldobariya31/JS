# Data Types in JavaScript

## Overview
JavaScript has 8 primitive data types and objects. This file covers all data types with examples.

## Primitive Data Types

### 1. String
Text data enclosed in quotes (single, double, or backticks for templates)

```javascript
let str = "Hello";
let str2 = 'World';
let template = `Hello ${name}`;
```

### 2. Number
Represents both integers and floating-point numbers

```javascript
let integer = 42;
let float = 3.14;
let infinity = Infinity;
let notANumber = NaN;
```

### 3. Boolean
Represents true or false values

```javascript
let isActive = true;
let isDisabled = false;
```

### 4. Undefined
Variable declared but not initialized

```javascript
let x;
console.log(x); // undefined
```

### 5. Null
Explicitly set to represent "no value"

```javascript
let empty = null;
```

### 6. Symbol
Unique and immutable identifier (ES6+)

```javascript
let sym = Symbol('description');
```

### 7. BigInt
Represents integers larger than Number.MAX_SAFE_INTEGER (ES2020+)

```javascript
let big = 123456789012345678901234567890n;
```

## Object Data Type

Collections of key-value pairs

```javascript
let obj = { name: "John", age: 30 };
let arr = [1, 2, 3];
let func = function() {};
```

## Type Checking
```javascript
typeof "string"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (special case)
typeof Symbol()     // "symbol"
typeof 123n         // "bigint"
typeof {}           // "object"
```

## Best Practices
- Use `typeof` operator for type checking
- Be aware that `typeof null` returns "object"
- Use template literals for string interpolation
