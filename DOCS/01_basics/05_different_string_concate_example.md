# String Concatenation Examples

## Overview
Various methods to concatenate and combine strings in JavaScript.

## Method 1: Plus Operator
```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
// Result: "John Doe"
```

## Method 2: Compound Assignment (+=)
```javascript
let message = "Hello";
message += " ";
message += "World";
// Result: "Hello World"
```

## Method 3: Template Literals (Backticks)
Most modern and readable approach for string interpolation

```javascript
let firstName = "John";
let lastName = "Doe";
let age = 30;
let message = `My name is ${firstName} ${lastName} and I'm ${age} years old`;
// Result: "My name is John Doe and I'm 30 years old"
```

### Multiline Strings with Template Literals
```javascript
let multiline = `This is line 1
This is line 2
This is line 3`;
```

## Method 4: String concat() Method
```javascript
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
// Result: "Hello World"
```

### Chaining concat()
```javascript
let result = "Hello".concat(" ", "World", "!");
// Result: "Hello World!"
```

## Method 5: join() with Arrays
```javascript
let words = ["Hello", "World"];
let sentence = words.join(" ");
// Result: "Hello World"
```

## Method 6: Spread Operator with Array Methods
```javascript
let text = ["H", "e", "l", "l", "o"].join("");
// Result: "Hello"
```

## Performance Considerations
- Template literals: Most readable and performant in modern JS
- Plus operator: Simple and works well for few concatenations
- concat(): Useful when chaining multiple strings
- join(): Efficient for arrays with many elements

## Best Practices
1. Use template literals for interpolation and readability
2. Use `+` for simple, one-time concatenations
3. Use `join()` for arrays of strings
4. Avoid excessive concatenation in loops; use arrays and join() instead
