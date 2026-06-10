# Scopes in JavaScript

## Overview
Understanding variable scope, scope chain, and block scope in JavaScript.

## Global Scope

Variables declared outside any function or block:

```javascript
let globalVar = "I'm global";
var globalVar2 = "Also global";

function testGlobal() {
    console.log(globalVar);  // Accessible
}

testGlobal();
console.log(globalVar);      // Accessible anywhere
```

### Global Object
In browsers, global variables become properties of window object:

```javascript
var x = 10;
console.log(window.x);       // 10 (in browser)

globalVar = "test";          // Creates global variable
console.log(window.globalVar); // "test"
```

## Function Scope

Variables declared inside a function are local to that function:

```javascript
function outer() {
    let localVar = "I'm local to outer";
    
    function inner() {
        console.log(localVar);  // Can access outer's localVar
    }
    
    inner();
}

console.log(localVar);       // ReferenceError: not accessible
```

### Function Scope with var
var is function-scoped, not block-scoped:

```javascript
function test() {
    if (true) {
        var x = 10;
    }
    console.log(x);          // 10 (accessible outside if block)
}

test();
```

## Block Scope

let and const are block-scoped:

```javascript
function test() {
    if (true) {
        let blockVar = "only in this block";
        const constVar = "also only in this block";
    }
    console.log(blockVar);   // ReferenceError
    console.log(constVar);   // ReferenceError
}

test();
```

### Block Scope Examples

#### if Statement
```javascript
if (true) {
    let x = 10;
    const y = 20;
}
console.log(x);              // ReferenceError
console.log(y);              // ReferenceError
```

#### for Loop
```javascript
for (let i = 0; i < 3; i++) {
    let loopVar = i;
}
console.log(i);              // ReferenceError (with let)

for (var j = 0; j < 3; j++) {
    var loopVar2 = j;
}
console.log(j);              // 3 (with var, function-scoped)
```

#### while Loop
```javascript
while (false) {
    let x = 10;
}
// x is not accessible here
```

## Scope Chain

JavaScript looks for variables in this order:
1. Local scope
2. Parent function scope
3. Global scope

```javascript
let globalVar = "global";

function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        
        console.log(innerVar);    // Found in inner scope
        console.log(outerVar);    // Found in outer scope
        console.log(globalVar);   // Found in global scope
    }
    
    inner();
}

outer();
```

### Variable Shadowing
Inner scope can override outer scope variables:

```javascript
let x = "global";

function test() {
    let x = "function";  // Shadows global x
    
    if (true) {
        let x = "block";  // Shadows function x
        console.log(x);   // "block"
    }
    
    console.log(x);       // "function"
}

test();
console.log(x);           // "global"
```

## Closure

Inner function has access to outer function's variables even after outer function returns:

```javascript
function outer(x) {
    return function inner() {
        return x;  // Remembers x even after outer() finishes
    };
}

let fn = outer(10);
fn();                        // 10
```

### Closure with Loop
Classic closure problem:

```javascript
// Problem: All functions share same i
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);    // 3, 3, 3
    }, 1000);
}

// Solution 1: Use let (block scope)
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);    // 0, 1, 2
    }, 1000);
}

// Solution 2: Use IIFE (Immediately Invoked Function Expression)
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);  // 0, 1, 2
        }, 1000);
    })(i);
}
```

### Practical Closures

#### Counter
```javascript
function createCounter() {
    let count = 0;  // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        get: function() {
            return count;
        }
    };
}

let counter = createCounter();
counter.increment();         // 1
counter.increment();         // 2
counter.decrement();         // 1
counter.get();               // 1
```

#### Private Variables
```javascript
function createUser(name) {
    let password = "secret";  // Private
    
    return {
        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        },
        checkPassword: function(pwd) {
            return pwd === password;
        }
    };
}

let user = createUser("John");
console.log(user.getName());       // "John"
console.log(user.password);        // undefined (private)
console.log(user.checkPassword("secret")); // true
```

#### Factory Function
```javascript
function createGreeter(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}

let sayHi = createGreeter("Hi");
let sayHello = createGreeter("Hello");

sayHi("John");              // "Hi, John!"
sayHello("Jane");           // "Hello, Jane!"
```

## Hoisting

### var Hoisting
var declarations are hoisted to top but not initialized:

```javascript
console.log(x);             // undefined (hoisted but not initialized)
var x = 10;
console.log(x);             // 10
```

Equivalent to:
```javascript
var x;
console.log(x);             // undefined
x = 10;
console.log(x);             // 10
```

### let and const Hoisting
Not hoisted (Temporal Dead Zone):

```javascript
console.log(x);             // ReferenceError (Temporal Dead Zone)
let x = 10;
```

### Function Hoisting
Function declarations are fully hoisted:

```javascript
test();                     // "Hello" (works!)

function test() {
    console.log("Hello");
}
```

Function expressions are not hoisted:

```javascript
test();                     // TypeError: test is not a function

let test = function() {
    console.log("Hello");
};
```

## Temporal Dead Zone (TDZ)

Area where variables are hoisted but cannot be accessed:

```javascript
console.log(typeof x);      // ReferenceError (in TDZ)
let x = 10;
```

With var, no TDZ:
```javascript
console.log(typeof y);      // "undefined" (no TDZ)
var y = 10;
```

## Best Practices
- Prefer let and const over var
- Use const by default, let when needed to reassign
- Avoid global variables
- Use closures for encapsulation and private variables
- Be aware of scope chain and shadowing
- Understand the difference between function scope (var) and block scope (let/const)
- Remember Temporal Dead Zone with let/const
