# JavaScript Execution Context (JSEC)

## Overview
Understanding how JavaScript executes code, including execution contexts and call stacks.

## Execution Context

Every function call creates an execution context with three phases:

### 1. Creation Phase
- Memory space allocated for variables and functions
- this binding determined
- scope chain created

### 2. Execution Phase
- Code executed line by line
- Variables assigned values
- Functions called

### 3. Destruction Phase
- Execution context destroyed
- Memory cleaned up

## Global Execution Context

Created when script starts:

```javascript
// Creation Phase
var x;
var y;
function add(a, b) { }

// Execution Phase
x = 10;
y = 20;
console.log(x + y);         // 30
```

## Function Execution Context

Created for each function call:

```javascript
function outer() {
    let a = 1;              // Creation: memory allocated
    
    function inner() {      // Creation: function defined
        let b = 2;          // Creation: memory allocated
        return a + b;       // Execution: calculate and return
    }
    
    return inner();         // Execution: call inner
}

outer();                    // Creates execution context for outer()
```

## Call Stack

Tracks function executions:

```javascript
function first() {
    second();
}

function second() {
    third();
}

function third() {
    console.log("In third");
}

first();

// Call Stack:
// 1. Global context pushed
// 2. first() pushed
// 3. second() pushed  
// 4. third() pushed
// 5. third() executes and pops
// 6. second() pops
// 7. first() pops
// 8. Global context pops
```

### Stack Overflow
Exceeding call stack limit:

```javascript
function recursiveInfinite() {
    recursiveInfinite();  // Infinite recursion
}

recursiveInfinite();      // RangeError: Maximum call stack exceeded
```

Correct recursion:
```javascript
function factorial(n) {
    if (n <= 1) return 1;  // Base case (prevents infinite recursion)
    return n * factorial(n - 1);
}

factorial(5);             // Works correctly
```

## Variable Environment

Each execution context has its own variable environment:

```javascript
var globalVar = "global";

function test() {
    var functionVar = "function";
    
    if (true) {
        let blockVar = "block";
        console.log(globalVar);    // Accessible
        console.log(functionVar);  // Accessible
        console.log(blockVar);     // Accessible
    }
    
    console.log(blockVar);         // ReferenceError
}

test();
```

## this Binding

Determined during creation phase:

### Global Context
```javascript
console.log(this);         // window (browser) or global (Node.js)
```

### Function Context
```javascript
function test() {
    console.log(this);     // window or global (if not in strict mode)
}

test();
```

### Method Context
```javascript
let obj = {
    method: function() {
        console.log(this);  // obj
    }
};

obj.method();
```

### Constructor Context
```javascript
function Person(name) {
    this.name = name;      // this refers to new object
}

let john = new Person("John");
console.log(john.name);    // "John"
```

## Scope Chain

Hierarchy for variable lookup:

```javascript
let global = "global";

function outer() {
    let outerVar = "outer";
    
    function inner() {
        let innerVar = "inner";
        
        // Scope chain: inner -> outer -> global
        console.log(innerVar);     // Found in inner scope
        console.log(outerVar);     // Found in outer scope
        console.log(global);       // Found in global scope
    }
    
    inner();
}

outer();
```

### Scope Chain Lookup
```javascript
let x = "global";

function test() {
    let x = "function";
    
    if (true) {
        let x = "block";
        console.log(x);    // "block" (found in block scope first)
    }
    
    console.log(x);        // "function" (found in function scope)
}

console.log(x);            // "global"
test();
```

## Hoisting Mechanism

### var Hoisting
All var declarations hoisted to top of execution context:

```javascript
console.log(x);            // undefined (hoisted but not initialized)
var x = 10;
console.log(x);            // 10

// Internally JavaScript sees:
var x;
console.log(x);
x = 10;
console.log(x);
```

### Function Hoisting
Function declarations fully hoisted:

```javascript
test();                    // "Hello" (works before declaration)

function test() {
    console.log("Hello");
}
```

### let/const Hoisting (Temporal Dead Zone)
Hoisted but not initialized (TDZ):

```javascript
console.log(x);            // ReferenceError (TDZ)
let x = 10;
```

## Execution Context in Loops

### var in Loop
```javascript
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);            // 3 (var is function-scoped)
```

### let in Loop
```javascript
for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);            // ReferenceError (let is block-scoped)
```

## Execution Context with Closures

Closure retains reference to outer execution context:

```javascript
function makeCounter() {
    let count = 0;
    
    return function() {
        count++;           // Accesses makeCounter's execution context
        return count;
    };
}

let counter = makeCounter();
console.log(counter());    // 1
console.log(counter());    // 2 (counter execution context still accessible)
```

## Lexical Environment

Each execution context has lexical environment:

```javascript
function outer() {
    let a = 1;
    
    function middle() {
        let b = 2;
        
        function inner() {
            let c = 3;
            console.log(a, b, c);  // All accessible via lexical environment
        }
        
        inner();
    }
    
    middle();
}

outer();                   // 1 2 3
```

## Event Loop and Execution Context

Asynchronous code doesn't block execution context:

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");  // Executes later, in new execution context
}, 0);

console.log("End");

// Output:
// Start
// End
// Timeout
```

## Best Practices
- Understand execution context for proper variable scoping
- Be aware of hoisting behavior with var vs let/const
- Use let/const to avoid hoisting confusion
- Understand call stack to debug errors
- Know how this is determined in different contexts
- Use closures intentionally for data encapsulation
- Avoid infinite recursion (RangeError)
