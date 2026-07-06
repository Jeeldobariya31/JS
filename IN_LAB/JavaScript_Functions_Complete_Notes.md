# JavaScript Functions - Complete Beginner Notes

# Table of Contents

1.  What is a Function?
2.  Why Do We Use Functions?
3.  Advantages
4.  Function Syntax
5.  Function Declaration
6.  Function Expression
7.  Anonymous Function
8.  Named Function Expression
9.  Arrow Functions
10. Parameters vs Arguments
11. Default Parameters
12. Rest Parameters
13. Return Statement
14. Function Scope
15. Hoisting
16. Callback Functions
17. Higher-Order Functions
18. Recursive Functions
19. IIFE
20. Generator Functions
21. Async Functions
22. Constructor Functions
23. `this` in Functions
24. Closures (Introduction)
25. Common Mistakes
26. Interview Questions

------------------------------------------------------------------------

# 1. What is a Function?

A **function** is a reusable block of code that performs a specific
task.

Instead of writing the same code many times, write it once inside a
function and call it whenever needed.

Example:

``` javascript
function greet(){
    console.log("Hello");
}

greet();
```

Output

    Hello

------------------------------------------------------------------------

# 2. Why Do We Use Functions?

-   Reuse code
-   Reduce repetition
-   Improve readability
-   Easier debugging
-   Better organization
-   Divide a large program into smaller parts

Real-life example:

Think of a washing machine.

You press **Start**.

Internally it performs many steps.

Similarly, calling a function performs many instructions.

------------------------------------------------------------------------

# 3. General Syntax

``` javascript
function functionName(parameters){
    // code
    return value;
}
```

------------------------------------------------------------------------

# 4. Function Declaration

Definition:

A function created using the `function` keyword.

Syntax

``` javascript
function add(a,b){
    return a+b;
}
```

Call

``` javascript
console.log(add(10,20));
```

Output

    30

Advantages

-   Readable
-   Hoisted
-   Easy to reuse

------------------------------------------------------------------------

# 5. Function Expression

Definition

Store a function inside a variable.

``` javascript
const add=function(a,b){
    return a+b;
};

console.log(add(5,6));
```

Difference

Function declarations are hoisted.

Function expressions are not.

------------------------------------------------------------------------

# 6. Anonymous Function

A function without a name.

``` javascript
const message=function(){
    console.log("Hello");
};
```

Usually used with events and callbacks.

------------------------------------------------------------------------

# 7. Named Function Expression

``` javascript
const demo=function printName(){
    console.log("Vishwa");
};

demo();
```

------------------------------------------------------------------------

# 8. Arrow Functions

Introduced in ES6.

Short syntax.

Example

``` javascript
const add=(a,b)=>{
    return a+b;
};
```

Implicit return

``` javascript
const add=(a,b)=>a+b;
```

Single parameter

``` javascript
const square=x=>x*x;
```

No parameter

``` javascript
const hello=()=>{
    console.log("Hello");
};
```

Returning object

``` javascript
const student=()=>({
    name:"Vishwa",
    age:19
});
```

Advantages

-   Short syntax
-   Good for callbacks

Disadvantages

-   No own `this`
-   Cannot be constructor
-   No `arguments` object

------------------------------------------------------------------------

# 9. Parameters vs Arguments

Parameters

Variables written while creating the function.

``` javascript
function add(a,b)
```

Arguments

Values passed while calling.

``` javascript
add(5,10);
```

------------------------------------------------------------------------

# 10. Default Parameters

``` javascript
function greet(name="Guest"){
    console.log(name);
}

greet();
greet("Vishwa");
```

------------------------------------------------------------------------

# 11. Rest Parameters

Collect multiple values.

``` javascript
function total(...nums){
    console.log(nums);
}

total(10,20,30);
```

Output

    [10,20,30]

------------------------------------------------------------------------

# 12. Return Statement

Returns a value.

``` javascript
function multiply(a,b){
    return a*b;
}

let ans=multiply(5,6);
console.log(ans);
```

------------------------------------------------------------------------

# 13. Function Scope

Variables inside a function cannot be accessed outside.

``` javascript
function demo(){
    let x=10;
}

console.log(x); // Error
```

------------------------------------------------------------------------

# 14. Hoisting

Function declarations are hoisted.

``` javascript
hello();

function hello(){
    console.log("Hello");
}
```

Function expressions are not hoisted.

``` javascript
demo();

const demo=function(){};
```

This gives an error.

------------------------------------------------------------------------

# 15. Callback Function

A function passed as an argument.

``` javascript
function greet(name){
    console.log("Hello "+name);
}

function process(callback){
    callback("Vishwa");
}

process(greet);
```

Uses

-   Events
-   Timers
-   Fetch API

------------------------------------------------------------------------

# 16. Higher-Order Function

A function that accepts another function or returns one.

``` javascript
function operation(a,b,callback){
    return callback(a,b);
}

function add(x,y){
    return x+y;
}

console.log(operation(5,6,add));
```

------------------------------------------------------------------------

# 17. Recursive Function

A function calling itself.

``` javascript
function factorial(n){
    if(n==1)
        return 1;

    return n*factorial(n-1);
}

console.log(factorial(5));
```

Output

    120

------------------------------------------------------------------------

# 18. IIFE

Immediately Invoked Function Expression.

``` javascript
(function(){
    console.log("Runs Immediately");
})();
```

Used to avoid global variables.

------------------------------------------------------------------------

# 19. Generator Function

Uses `function*`.

``` javascript
function* numbers(){
    yield 1;
    yield 2;
    yield 3;
}

const obj=numbers();

console.log(obj.next());
```

------------------------------------------------------------------------

# 20. Async Function

``` javascript
async function getData(){
    return "Hello";
}

getData().then(console.log);
```

Used with Promises and await.

------------------------------------------------------------------------

# 21. Constructor Function

``` javascript
function Student(name){
    this.name=name;
}

const s1=new Student("Vishwa");
```

------------------------------------------------------------------------

# 22. this Keyword

Normal function

``` javascript
const obj={
    name:"Vishwa",
    show:function(){
        console.log(this.name);
    }
};
```

Arrow function

`this` comes from the surrounding scope.

------------------------------------------------------------------------

# 23. Closures (Introduction)

A closure remembers variables from its outer function.

``` javascript
function outer(){

    let count=0;

    return function(){

        count++;

        console.log(count);

    };

}

const demo=outer();

demo();
demo();
```

Output

    1
    2

------------------------------------------------------------------------

# 24. Common Mistakes

-   Forgetting `return`
-   Calling function before function expression
-   Using arrow function where `this` is required
-   Confusing parameters and arguments
-   Forgetting parentheses while calling

------------------------------------------------------------------------

# 25. Function Comparison

  Type          Hoisted   Own this   Constructor   Short Syntax
  ------------- --------- ---------- ------------- --------------
  Declaration   Yes       Yes        Yes           No
  Expression    No        Yes        Yes           No
  Arrow         No        No         No            Yes

------------------------------------------------------------------------

# 26. Interview Questions

1.  What is a function?
2.  Difference between declaration and expression?
3.  What is an arrow function?
4.  Difference between parameters and arguments?
5.  What is hoisting?
6.  What is a callback?
7.  What is recursion?
8.  What is an IIFE?
9.  What are higher-order functions?
10. Difference between normal and arrow functions?
11. What is a closure?
12. What is `this`?

------------------------------------------------------------------------

# Summary

-   Functions make code reusable.
-   JavaScript supports many kinds of functions.
-   Arrow functions provide concise syntax.
-   Callbacks and higher-order functions are widely used in asynchronous
    programming.
-   Closures and `this` are common interview topics.
