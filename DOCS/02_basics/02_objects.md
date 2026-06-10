# Objects in JavaScript

## Overview
Comprehensive guide to JavaScript objects, properties, and methods.

## Creating Objects

### Object Literal
```javascript
let obj = {};                           // Empty object
let person = { name: "John", age: 30 }; // Object with properties
let user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
```

### Object Constructor
```javascript
let obj = new Object();
obj.name = "John";
obj.age = 30;
```

### Constructor Function
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let john = new Person("John", 30);
```

## Accessing Properties

### Dot Notation
```javascript
let user = { name: "John", age: 30 };
user.name;                  // "John"
user.age;                   // 30
```

### Bracket Notation
```javascript
let user = { name: "John", age: 30 };
user["name"];               // "John"
user["age"];                // 30
let prop = "name";
user[prop];                 // "John" (dynamic property access)
```

## Modifying Properties

### Adding Properties
```javascript
let user = {};
user.name = "John";         // Add new property
user["age"] = 30;           // Add with bracket notation
```

### Updating Properties
```javascript
let user = { name: "John" };
user.name = "Jane";         // Update existing property
```

### Deleting Properties
```javascript
let user = { name: "John", age: 30 };
delete user.age;            // Remove age property
```

## Object Methods

### Object.keys()
Returns array of object's own properties

```javascript
let user = { name: "John", age: 30, email: "john@test.com" };
Object.keys(user);          // ["name", "age", "email"]
```

### Object.values()
Returns array of object's own values

```javascript
let user = { name: "John", age: 30, email: "john@test.com" };
Object.values(user);        // ["John", 30, "john@test.com"]
```

### Object.entries()
Returns array of [key, value] pairs

```javascript
let user = { name: "John", age: 30 };
Object.entries(user);       // [["name", "John"], ["age", 30]]
```

### Object.assign()
Copies properties to target object

```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
Object.assign(obj1, obj2);  // { a: 1, b: 3, c: 4 }

let copy = Object.assign({}, obj1);  // Copy object
```

### Object.create()
Creates new object with specified prototype

```javascript
let proto = { greet: function() { return "Hi"; } };
let obj = Object.create(proto);
obj.greet();                // "Hi"
```

### Object.defineProperty()
Defines new or modifies existing property

```javascript
let obj = {};
Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: true,
    enumerable: true,
    configurable: true
});
```

### Object.defineProperties()
Defines multiple properties

```javascript
let obj = {};
Object.defineProperties(obj, {
    name: { value: 'John', writable: true },
    age: { value: 30, writable: true }
});
```

### Object.freeze()
Prevents modifications

```javascript
let obj = { name: "John" };
Object.freeze(obj);
obj.name = "Jane";          // No effect in strict mode
obj.age = 30;               // No effect
```

### Object.seal()
Prevents adding/removing properties, allows modification

```javascript
let obj = { name: "John" };
Object.seal(obj);
obj.name = "Jane";          // Allowed
obj.age = 30;               // Not allowed
```

### Object.is()
Strict equality comparison

```javascript
Object.is(NaN, NaN);        // true
Object.is(0, -0);           // false
Object.is(5, 5);            // true
```

## Checking Properties

### in Operator
```javascript
let user = { name: "John", age: 30 };
"name" in user;             // true
"email" in user;            // false
```

### hasOwnProperty()
Checks for own property (not inherited)

```javascript
let user = { name: "John" };
user.hasOwnProperty("name");     // true
user.hasOwnProperty("toString"); // false (inherited)
```

### propertyIsEnumerable()
Checks if property is enumerable

```javascript
let obj = { name: "John" };
obj.propertyIsEnumerable("name"); // true
```

## Iterating Over Objects

### for...in Loop
```javascript
let user = { name: "John", age: 30 };
for (let key in user) {
    console.log(key + ": " + user[key]);
}
```

### Object.keys() with forEach()
```javascript
let user = { name: "John", age: 30 };
Object.keys(user).forEach(key => {
    console.log(key + ": " + user[key]);
});
```

### Object.entries() with forEach()
```javascript
let user = { name: "John", age: 30 };
Object.entries(user).forEach(([key, value]) => {
    console.log(key + ": " + value);
});
```

## Getters and Setters

```javascript
let user = {
    _name: "John",
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    }
};

console.log(user.name);     // "John"
user.name = "Jane";         // Calls setter
console.log(user.name);     // "Jane"
```

## Methods

### Defining Methods
```javascript
let user = {
    name: "John",
    greet() {
        return `Hello, I'm ${this.name}`;
    }
};

user.greet();               // "Hello, I'm John"
```

### this Keyword
```javascript
let user = {
    name: "John",
    greet() {
        return this.name;   // 'this' refers to user
    }
};
```

## Spread Operator

### Copying Objects
```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };     // Shallow copy
```

### Merging Objects
```javascript
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };  // { a: 1, b: 2, c: 3, d: 4 }
```

## Destructuring

```javascript
let user = { name: "John", age: 30, email: "john@test.com" };
let { name, age } = user;
name;                       // "John"
age;                        // 30
```

## Best Practices
- Use object literals for creating objects
- Use dot notation when property name is known
- Use bracket notation when property name is dynamic
- Use `Object.keys()` to iterate over properties
- Use `const` for objects unless reassignment is needed
- Use getters/setters for property validation
- Remember objects are passed by reference
- Use `Object.freeze()` to prevent modifications of critical objects
