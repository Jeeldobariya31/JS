# Conditional Statements

## Overview
Control program flow based on conditions using if, else, switch, and ternary operators.

## if Statement

### Basic if
```javascript
if (condition) {
    // Code executes if condition is true
}

let age = 18;
if (age >= 18) {
    console.log("You are an adult");  // Executes
}
```

### if with Comparison
```javascript
let x = 10;
if (x > 5) {
    console.log("x is greater than 5");  // Executes
}

if (x === 10) {
    console.log("x equals 10");         // Executes
}

if (x < 5) {
    console.log("x is less than 5");    // Doesn't execute
}
```

### Falsy and Truthy Values
```javascript
if (0) {
    console.log("Doesn't execute");     // 0 is falsy
}

if (1) {
    console.log("Executes");            // 1 is truthy
}

if ("") {
    console.log("Doesn't execute");     // Empty string is falsy
}

if ("text") {
    console.log("Executes");            // Non-empty string is truthy
}

if (null) {
    console.log("Doesn't execute");     // null is falsy
}

if (undefined) {
    console.log("Doesn't execute");     // undefined is falsy
}
```

## if...else Statement

```javascript
let score = 45;

if (score >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");               // Executes
}
```

## if...else if...else Statement

### Multiple Conditions
```javascript
let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");            // Executes
} else if (score >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}
```

### Age Categories
```javascript
let age = 25;

if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else if (age < 65) {
    console.log("Adult");              // Executes
} else {
    console.log("Senior");
}
```

## Logical Operators in Conditions

### AND Operator (&&)
Both conditions must be true:

```javascript
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("Can drive");          // Executes
}

if (age >= 18 && !hasLicense) {
    console.log("Cannot drive");
}
```

### OR Operator (||)
At least one condition must be true:

```javascript
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
    console.log("No work today");      // Executes
}
```

### NOT Operator (!)
Reverses boolean value:

```javascript
let isRaining = false;

if (!isRaining) {
    console.log("Go outside");         // Executes
}
```

### Complex Conditions
```javascript
let age = 25;
let hasLicense = true;
let hasInsurance = true;

if ((age >= 18 && hasLicense) && hasInsurance) {
    console.log("Can drive");          // Executes
}

if (age >= 18 && (hasLicense || hasInsurance)) {
    console.log("Eligible");
}
```

## Ternary Operator

### Basic Syntax
```javascript
condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);                   // "Adult"
```

### Examples
```javascript
let score = 75;
let result = score >= 60 ? "Pass" : "Fail";
console.log(result);                   // "Pass"

let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back" : "Please login";
console.log(message);                  // "Welcome back"
```

### Nested Ternary
```javascript
let age = 20;
let category = age < 13 ? "Child" 
               : age < 18 ? "Teenager"
               : age < 65 ? "Adult"
               : "Senior";
console.log(category);                 // "Adult"
```

Better as if...else:
```javascript
let age = 20;
let category;

if (age < 13) {
    category = "Child";
} else if (age < 18) {
    category = "Teenager";
} else if (age < 65) {
    category = "Adult";
} else {
    category = "Senior";
}
```

## switch Statement

### Basic switch
```javascript
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");     // Executes
        break;
    case 4:
        console.log("Thursday");
        break;
    default:
        console.log("Invalid day");
}
```

### switch with Strings
```javascript
let fruit = "apple";

switch(fruit) {
    case "apple":
        console.log("Red fruit");     // Executes
        break;
    case "banana":
        console.log("Yellow fruit");
        break;
    case "orange":
        console.log("Orange fruit");
        break;
    default:
        console.log("Unknown fruit");
}
```

### switch Fall-through
```javascript
let grade = "B";

switch(grade) {
    case "A":
    case "B":
    case "C":
        console.log("Passing grade");  // Executes (multiple cases)
        break;
    case "D":
    case "F":
        console.log("Failing grade");
        break;
    default:
        console.log("Invalid grade");
}
```

### Missing break
```javascript
let x = 1;

switch(x) {
    case 1:
        console.log("One");
        // No break - falls through
    case 2:
        console.log("Two");           // Also executes
        break;
    default:
        console.log("Other");
}
// Output: One, Two
```

## Type Checking in Conditions

### typeof
```javascript
let value = "text";

if (typeof value === "string") {
    console.log("It's a string");     // Executes
}
```

### instanceof
```javascript
let arr = [1, 2, 3];

if (arr instanceof Array) {
    console.log("It's an array");     // Executes
}
```

## Comparison Operators

### Loose Equality (==)
```javascript
if (5 == "5") {
    console.log("Equal");             // Executes (type coerced)
}
```

### Strict Equality (===)
```javascript
if (5 === "5") {
    console.log("Equal");
} else {
    console.log("Not equal");         // Executes (strict comparison)
}
```

### Comparison with Objects
```javascript
let obj1 = { name: "John" };
let obj2 = { name: "John" };
let obj3 = obj1;

if (obj1 === obj2) {
    console.log("Same");
} else {
    console.log("Different");         // Executes (different references)
}

if (obj1 === obj3) {
    console.log("Same");              // Executes (same reference)
}
```

## Null and Undefined Checks

```javascript
let value = null;

if (value === null) {
    console.log("Is null");           // Executes
}

if (value === undefined) {
    console.log("Is undefined");
}

if (value == null) {
    console.log("Is null or undefined"); // Executes (loose equality)
}
```

## Best Practices
- Always use strict equality (===) instead of loose (==)
- Use if...else if...else for multiple conditions
- Use switch for many similar conditions
- Use ternary operator for simple conditions only
- Avoid deeply nested conditions, use functions or refactor
- Check for null/undefined before accessing properties
- Use meaningful variable names in conditions
- Keep conditions simple and readable
