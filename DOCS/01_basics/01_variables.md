# Variables in JavaScript

## Overview
This file covers the fundamentals of declaring and using variables in JavaScript, including `var`, `let`, and `const` keywords.

## Key Concepts

### Variable Declaration Keywords

#### 1. `var` - Function Scoped
- Oldest way to declare variables
- Function-scoped (not block-scoped)
- Can be redeclared and updated
- Hoisted to the top of their scope

```javascript
var name = "John";
var name = "Jane"; // Can be redeclared
```

#### 2. `let` - Block Scoped
- Introduced in ES6
- Block-scoped (confined to `{}`)
- Can be updated but not redeclared in the same scope
- Preferred for modern JavaScript

```javascript
let age = 25;
age = 26; // Can be updated
// let age = 27; // Error: Cannot redeclare
```

#### 3. `const` - Block Scoped & Constant
- Introduced in ES6
- Block-scoped
- Cannot be reassigned or redeclared
- Must be initialized at declaration
- Best practice for variables that shouldn't change

```javascript
const PI = 3.14159;
// PI = 3.14; // Error: Assignment to constant variable
```

## Best Practices
- Use `const` by default
- Use `let` when you need to reassign
- Avoid `var` in modern code

## Use Cases
- Variable naming and storage
- Understanding scope differences
- Memory management in JavaScript
