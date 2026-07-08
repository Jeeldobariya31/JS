# JavaScript Master Notes

# Callback Functions, var, let, const & for...of Loop

> Beginner to Advanced Notes

------------------------------------------------------------------------

# Table of Contents

1.  Introduction
2.  Callback Functions
3.  var Keyword
4.  let Keyword
5.  const Keyword
6.  var vs let vs const
7.  for...of Loop
8.  Common Mistakes
9.  Interview & Viva Questions
10. Practice Programs
11. Quick Revision

------------------------------------------------------------------------

# 1. Introduction

JavaScript is a scripting language used to make web pages interactive.

ES6 (ECMAScript 2015) introduced many new features such as: - let -
const - Arrow Functions - Callback improvements - for...of loop - Spread
& Rest - Destructuring

These features make JavaScript safer, shorter, and easier to maintain.

------------------------------------------------------------------------

# 2. Callback Functions

## What is a Function?

A function is a reusable block of code.

``` javascript
function greet(){
    console.log("Hello");
}

greet();
```

## What is a Callback Function?

A callback is **a function passed as an argument to another function**
and executed later.

### Real-Life Analogy

Imagine ordering food in a restaurant.

1.  You place the order.
2.  The chef prepares it.
3.  When ready, the waiter calls you.

The waiter calling you is like a callback.

------------------------------------------------------------------------

## Syntax

``` javascript
function first(callback){
    callback();
}
function second(){
    console.log("Second function executed");
}

first(second);
```

------------------------------------------------------------------------



Explanation

-   `greet()` is called.
-   `"Vishwa"` goes to `name`.
-   `bye` goes to `callback`.
-   First `console.log()` executes.
-   `callback()` runs `bye()`.
-   `"Good Bye!"` is printed.

Output

    Hello Vishwa
    Good Bye!

------------------------------------------------------------------------

## Anonymous Callback

``` javascript
setTimeout(function(){
    console.log("Executed");
},1000);
```

## Arrow Callback

``` javascript
setTimeout(()=>{
    console.log("Executed");
},1000);
```

## Why Use Callbacks?

-   Event handling
-   Timers
-   Asynchronous programming
-   Code reusability

## Common Mistake

Wrong

``` javascript
greet("Vishwa", bye());
```

Correct

``` javascript
greet("Vishwa", bye);
```

------------------------------------------------------------------------

# 3. var Keyword

## What is var?

`var` declares a variable.

Before ES6, only `var` existed.

## Features

-   Function scoped
-   Can be redeclared
-   Can be reassigned
-   Hoisted

Example

``` javascript
var x=10;
var x=20;
x=30;

console.log(x);
```

Output

    30

## Scope Example

``` javascript
var a=10;

if(true){
    var a=20;
}

console.log(a);
```

Output

    20

Reason: `var` ignores block scope.

------------------------------------------------------------------------

# 4. let Keyword

## What is let?

`let` creates block-scoped variables.

## Features

-   Block scoped
-   Cannot be redeclared
-   Can be reassigned
-   Hoisted but in Temporal Dead Zone

Example

``` javascript
let x=10;
x=20;
```

Block Example

``` javascript
let a=10;

if(true){
    let a=20;
    console.log(a);
}

console.log(a);
```

Output

    20
    10

------------------------------------------------------------------------

# 5. const Keyword

## What is const?

`const` declares a constant variable.

Its value cannot be reassigned.

Example

``` javascript
const PI=3.14;
```

Wrong

``` javascript
const PI=3.14;
PI=5;
```

Result

    TypeError

### Important Point

Objects and arrays declared with `const` can still have their contents
changed.

``` javascript
const arr=[1,2];

arr.push(3);

console.log(arr);
```

Output

    [1,2,3]

------------------------------------------------------------------------

# 6. var vs let vs const

  Feature     var        let         const
  ----------- ---------- ----------- -------------------
  Scope       Function   Block       Block
  Redeclare   Yes        No          No
  Reassign    Yes        Yes         No
  Hoisted     Yes        Yes (TDZ)   Yes (TDZ)
  Preferred   Rarely     Yes         Yes for constants

### When to Use

Use `const` by default.

Use `let` when the value changes.

Avoid `var` in modern JavaScript.

------------------------------------------------------------------------

# 7. for...of Loop

## What is for...of?

`for...of` iterates over values of iterable objects.

Syntax

``` javascript
for(let value of array){
    console.log(value);
}
```

Array Example

``` javascript
let fruits=["Apple","Banana","Mango"];

for(let fruit of fruits){
    console.log(fruit);
}
```

Output

    Apple
    Banana
    Mango

String Example

``` javascript
for(let ch of "Java"){
    console.log(ch);
}
```

Output

    J
    a
    v
    a

### Line-by-Line

``` javascript
for(let fruit of fruits)
```

-   JavaScript picks first value.
-   Stores in `fruit`.
-   Executes loop body.
-   Repeats until finished.

### Difference

  for          for...of
  ------------ ------------
  Uses index   Uses value
  More code    Cleaner

------------------------------------------------------------------------

# 8. Common Mistakes

Wrong

``` javascript
greet("A", bye());
```

Correct

``` javascript
greet("A", bye);
```

Wrong

``` javascript
const x=10;
x=20;
```

Wrong

``` javascript
console.log(y);
let y=10;
```

Produces ReferenceError.

------------------------------------------------------------------------

# 9. Interview & Viva Questions

1.  What is a callback?
2.  Why are callbacks useful?
3.  Difference between synchronous and asynchronous callbacks?
4.  Difference between var and let?
5.  Difference between let and const?
6.  What is block scope?
7.  What is hoisting?
8.  What is Temporal Dead Zone?
9.  Can const objects change?
10. Difference between for and for...of?

------------------------------------------------------------------------

# 10. Practice Programs

1.  Print greeting using callback.
2.  Create calculator using callback.
3.  Demonstrate var scope.
4.  Demonstrate let scope.
5.  Demonstrate const.
6.  Print array using for...of.
7.  Print string using for...of.
8.  Compare var, let and const.

------------------------------------------------------------------------

# 11. Quick Revision

-   Callback = Function passed to another function.
-   var = Function scope.
-   let = Block scope.
-   const = Cannot be reassigned.
-   for...of = Iterates over values.
-   Use const by default.
-   Use let when value changes.
-   Avoid var in modern JavaScript.
