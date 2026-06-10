# Functions in JavaScript

## Overview
Comprehensive guide to function declaration, invocation, and concepts in JavaScript.

## Function Declaration

### Function Statement
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

greet("John");              // "Hello, John!"
greet("Jane");              // "Hello, Jane!"
```

### Function Expression
```javascript
let greet = function(name) {
    return `Hello, ${name}!`;
};

greet("John");              // "Hello, John!"
```

### Arrow Functions (ES6)
```javascript
let greet = (name) => {
    return `Hello, ${name}!`;
};

// Single parameter, no parentheses
let greet = name => `Hello, ${name}!`;

// No parameters
let greet = () => "Hello!";

// Multiple parameters
let add = (a, b) => a + b;
add(5, 3);                  // 8
```

## Function Parameters

### Basic Parameters
```javascript
function add(a, b) {
    return a + b;
}

add(5, 3);                  // 8
add(5);                     // NaN (b is undefined)
```

### Default Parameters
```javascript
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

greet("John");              // "Hello, John!"
greet();                    // "Hello, Guest!"
```

### Rest Parameters (...)
Collect remaining arguments into array:

```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4, 5);         // 15

function printInfo(name, ...tags) {
    console.log(name);      // "John"
    console.log(tags);      // ["developer", "JavaScript"]
}

printInfo("John", "developer", "JavaScript");
```

### Arguments Object
All functions have access to arguments object (not recommended with arrow functions):

```javascript
function showArgs() {
    console.log(arguments);  // Arguments object
    console.log(arguments.length);
    console.log(arguments[0]);
}

showArgs(1, 2, 3);
```

## Return Statement

```javascript
function calculateAge(birthYear) {
    return 2024 - birthYear;
}

let age = calculateAge(1994); // 30

// Function without return returns undefined
function noReturn() {
    console.log("test");
}

let result = noReturn();    // undefined
```

## Function Scope

### Local Scope
```javascript
function outer() {
    let localVar = "I'm local";
    console.log(localVar);  // Accessible
}

console.log(localVar);      // ReferenceError: not accessible
```

### Function Scope
```javascript
function test() {
    if (true) {
        let blockVar = "block";
        var functionVar = "function";
    }
    console.log(functionVar); // "function" (var is function-scoped)
    console.log(blockVar);    // ReferenceError (let is block-scoped)
}
```

### Closure
```javascript
function outer(x) {
    return function inner(y) {
        return x + y;  // inner function has access to x
    };
}

let add5 = outer(5);
add5(3);                    // 8
add5(10);                   // 15
```

## this Keyword

### Regular Functions
```javascript
let user = {
    name: "John",
    greet: function() {
        console.log(this.name);  // "John"
    }
};

user.greet();               // "John"

let greetFunc = user.greet;
greetFunc();                // undefined (this refers to global object)
```

### Arrow Functions
Arrow functions don't have their own this, they inherit from parent scope:

```javascript
let user = {
    name: "John",
    greet: () => {
        console.log(this.name);  // undefined (global context)
    }
};

user.greet();
```

### call(), apply(), bind()

#### call() - Call with specific this
```javascript
function introduce(greeting) {
    return `${greeting}, I'm ${this.name}`;
}

let person = { name: "John" };
introduce.call(person, "Hi");   // "Hi, I'm John"
```

#### apply() - Like call, but with array of arguments
```javascript
function sum(a, b, c) {
    return a + b + c;
}

sum.apply(null, [1, 2, 3]);     // 6
```

#### bind() - Create new function with bound this
```javascript
function introduce(greeting) {
    return `${greeting}, I'm ${this.name}`;
}

let person = { name: "John" };
let johnIntroduce = introduce.bind(person);

johnIntroduce("Hi");            // "Hi, I'm John"
johnIntroduce("Hello");         // "Hello, I'm John"
```

## Function Methods

### Function.prototype.length
Returns number of parameters:

```javascript
function add(a, b, c) {
    return a + b + c;
}

add.length;                 // 3
```

### Function.prototype.name
Returns function name:

```javascript
function greet() {}
greet.name;                 // "greet"

let anonymous = function() {};
anonymous.name;             // "anonymous"
```

## Recursion

```javascript
function factorial(n) {
    if (n <= 1) return 1;   // Base case
    return n * factorial(n - 1);  // Recursive case
}

factorial(5);               // 120
```

## Higher-Order Functions

Functions that take or return other functions:

```javascript
// Function takes another function as parameter
function execute(fn, value) {
    return fn(value);
}

execute((x) => x * 2, 5);   // 10

// Function returns another function
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = makeMultiplier(2);
double(5);                  // 10
```

## Immediately Invoked Function Expression (IIFE)

```javascript
(function() {
    console.log("This runs immediately");
})();

(function(name) {
    console.log(`Hello, ${name}`);
})("John");
```

## Best Practices
- Use const for function expressions
- Use arrow functions for callbacks and short functions
- Avoid using arguments object, use rest parameters instead
- Use default parameters for optional arguments
- Be aware of this binding in methods
- Use pure functions when possible
- Avoid deeply nested function calls
- Name your functions clearly
