# JavaScript ES6 Master Notes

# Spread Operator, Rest Operator & Destructuring

> Beginner to Advanced Notes (Single File)

------------------------------------------------------------------------

# Table of Contents

1.  Introduction
2.  Spread Operator
3.  Rest Operator
4.  Spread vs Rest
5.  Destructuring
    -   Array Destructuring
    -   Object Destructuring
6.  Comparison Tables
7.  Common Mistakes
8.  Interview & Viva Questions
9.  Practice Programs
10. Quick Revision

------------------------------------------------------------------------

# 1. Introduction

JavaScript ES6 (ECMAScript 2015) introduced many new features to make
JavaScript easier to read, write, and maintain. Three of the most
important features are:

-   Spread Operator (`...`)
-   Rest Operator (`...`)
-   Destructuring

Although Spread and Rest use the same three dots (`...`), they perform
completely different tasks.

------------------------------------------------------------------------

# 2. Spread Operator

## What is the Spread Operator?

The Spread Operator (`...`) **expands** an array, string, or object into
individual values.

------------------------------------------------------------------------

## Why was it introduced?

Before ES6, copying or merging arrays required loops or special methods.

Old JavaScript

``` javascript
let a=[1,2,3];
let b=[];

for(let i=0;i<a.length;i++){
    b.push(a[i]);
}
```

ES6

``` javascript
let b=[...a];
```

Much shorter, cleaner, and easier.

------------------------------------------------------------------------

## Syntax

``` javascript
...array
...object
...string
```

------------------------------------------------------------------------

## Line-by-Line Example

``` javascript
let numbers=[10,20,30];
```

Explanation

-   Create an array.
-   Store three values.

``` javascript
let copy=[...numbers];
```

Explanation

-   JavaScript reads every value individually.
-   Equivalent to:

``` javascript
let copy=[10,20,30];
```

------------------------------------------------------------------------

## Uses of Spread

<!-- ### Copy an Array

``` javascript
let a=[1,2,3];
let b=[...a];
```

### Merge Arrays

``` javascript
let a=[1,2];
let b=[3,4];

let c=[...a,...b];
```

Output

    [1,2,3,4]

### Add Elements

``` javascript
let arr=[...a,5,6];
```

### Copy Objects

``` javascript
let student={
 name:"Vishwa",
 age:19
};

let copy={
 ...student
};
```

### Merge Objects

``` javascript
let address={city:"Rajkot"};

let result={
 ...student,
 ...address
};
```

### Spread with Strings

``` javascript
let chars=[..."Java"];
```

Output

    ["J","a","v","a"]

------------------------------------------------------------------------ -->

## Advantages

-   Easy copying
-   Easy merging
-   Cleaner code
-   Less looping

------------------------------------------------------------------------

## Disadvantages

-   Only shallow copy
-   Nested objects are still shared

------------------------------------------------------------------------

# 3. Rest Operator

## What is Rest Operator?

The Rest Operator **collects** multiple values into one array.

### Analogy

Teacher asks one student to collect all remaining notebooks.

Everything left goes into one bag.

------------------------------------------------------------------------

## Syntax

``` javascript
function demo(...values){}
```

or

``` javascript
let [first,...others]=array;
```

------------------------------------------------------------------------

## Line-by-Line Example

``` javascript
let arr=[10,20,30,40];
```

Creates an array.

``` javascript
let [first,...others]=arr;
```

JavaScript stores

    first = 10
    others = [20,30,40]

------------------------------------------------------------------------

## Rest in Functions

``` javascript
function add(...numbers){
 let sum=0;

 for(let num of numbers){
   sum+=num;
 }

 return sum;
}

console.log(add(10,20,30));
```

Output

    60

------------------------------------------------------------------------

## Rules

-   Rest must be last parameter.
-   Only one Rest parameter.

Correct

``` javascript
function demo(a,b,...rest){}
```

Wrong

``` javascript
function demo(...rest,a){}
```

------------------------------------------------------------------------

# 4. Spread vs Rest

  Feature    Spread              Rest
  ---------- ------------------- ---------------------------------------
  Purpose    Expands values      Collects values
  Output     Individual values   Array
  Used For   Copy, Merge         Function parameters, Remaining values
  Symbol     `...`               `...`

Easy Trick

    Spread  = Open
    Rest    = Collect

------------------------------------------------------------------------

# 5. Destructuring

## What is Destructuring?

Destructuring extracts values from arrays or objects into separate
variables.

Before ES6

``` javascript
let arr=[10,20];

let a=arr[0];
let b=arr[1];
```

After ES6

``` javascript
let [a,b]=arr;
```

------------------------------------------------------------------------

# Array Destructuring

## Syntax

``` javascript
let [a,b]=array;
```

### Line-by-Line

``` javascript
let colors=["Red","Green","Blue"];
```

Creates an array.

``` javascript
let [c1,c2,c3]=colors;
```

Assignments

    c1 = Red
    c2 = Green
    c3 = Blue

------------------------------------------------------------------------

## Skip Values

``` javascript
let [a,,c]=[10,20,30];
```

Result

    a = 10
    c = 30

------------------------------------------------------------------------

## Default Values

``` javascript
let [a,b=100]=[10];
```

Result

    a = 10
    b = 100

------------------------------------------------------------------------

## Swapping Variables

``` javascript
let x=10;
let y=20;

[x,y]=[y,x];
```

------------------------------------------------------------------------

# Object Destructuring

## Syntax

``` javascript
let {name,age}=student;
```

Example

``` javascript
let student={
 name:"Vishwa",
 age:19,
 city:"Rajkot"
};

let {name,age}=student;
```

Assignments

    name = Vishwa
    age = 19

------------------------------------------------------------------------

## Rename Variables

``` javascript
let {name:studentName}=student;
```

------------------------------------------------------------------------

## Default Values

``` javascript
let {country="India"}=student;
```

------------------------------------------------------------------------

## Nested Destructuring

``` javascript
let obj={
 user:{
   name:"Vishwa"
 }
};

let {user:{name}}=obj;
```

------------------------------------------------------------------------

# 6. Comparison Tables

## Array vs Object Destructuring

  Feature          Array      Object
  ---------------- ---------- ---------------
  Based On         Position   Property Name
  Brackets         \[\]       {}
  Order Matters    Yes        No
  Default Values   Yes        Yes

------------------------------------------------------------------------

# 7. Common Mistakes

❌ `let copy=a;`

✅ `let copy=[...a];`

------------------------------------------------------------------------

❌ `function demo(...rest,a){}`

✅ `function demo(a,...rest){}`

------------------------------------------------------------------------

❌ `let {a,b}=[1,2];`

✅ `let [a,b]=[1,2];`

------------------------------------------------------------------------

# 8. Interview & Viva Questions

1.  What is the Spread Operator?
2.  What is the Rest Operator?
3.  Difference between Spread and Rest?
4.  What is Destructuring?
5.  Difference between Array and Object Destructuring?
6.  What is shallow copy?
7.  Can Spread create a deep copy?
8.  Why was Destructuring introduced?
9.  Can Rest be used anywhere?
10. Can Spread work with strings?

------------------------------------------------------------------------

# 9. Practice Programs

1.  Copy an array.
2.  Merge three arrays.
3.  Copy an object.
4.  Merge two objects.
5.  Create a function using Rest parameters.
6.  Swap two variables.
7.  Skip values in destructuring.
8.  Rename object properties.
9.  Use default values.
10. Extract nested object values.

------------------------------------------------------------------------

# 10. Quick Revision

-   Spread = Expands values.
-   Rest = Collects values.
-   Destructuring = Extracts values.
-   Array Destructuring = Based on position.
-   Object Destructuring = Based on property name.
-   Spread creates a shallow copy.
-   Rest parameter must be the last parameter.

End of Notes.
