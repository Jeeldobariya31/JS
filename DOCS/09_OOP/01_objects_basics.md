# Objects Basics in OOP

## Overview
Understanding JavaScript objects and object-oriented programming fundamentals.

## Creating Objects

### Object Literal
```javascript
let user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user.name);            // "John"
console.log(user["email"]);        // "john@example.com"
```

### With Methods
```javascript
let calculator = {
    value: 0,
    add: function(n) {
        this.value += n;
        return this;
    },
    subtract: function(n) {
        this.value -= n;
        return this;
    },
    getResult: function() {
        return this.value;
    }
};

console.log(calculator.add(5).subtract(2).getResult());  // 3
```

### Constructor Function
```javascript
function User(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
}

let user = new User("John", 30, "john@example.com");
console.log(user.name);            // "John"
```

### Constructor with Methods
```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.greet = function() {
        return `Hello, I'm ${this.name}`;
    };
    
    this.haveBirthday = function() {
        this.age++;
    };
}

let person = new Person("Jane", 25);
console.log(person.greet());       // "Hello, I'm Jane"
person.haveBirthday();
console.log(person.age);           // 26
```

## Object Properties

### Adding Properties
```javascript
let user = { name: "John" };

user.age = 30;                     // Add age property
user["email"] = "john@example.com"; // Add email with bracket notation

console.log(user);
// { name: 'John', age: 30, email: 'john@example.com' }
```

### Deleting Properties
```javascript
let user = { name: "John", age: 30, email: "john@example.com" };

delete user.email;
console.log(user);                 // { name: 'John', age: 30 }
```

### Property Descriptors
```javascript
let obj = {};

Object.defineProperty(obj, 'name', {
    value: 'John',
    writable: true,     // Can be changed
    enumerable: true,   // Shows in for...in
    configurable: true  // Can be deleted
});

obj.name = "Jane";     // Works (writable: true)
console.log(obj.name); // "Jane"
```

### Read-Only Property
```javascript
let obj = {};

Object.defineProperty(obj, 'id', {
    value: 123,
    writable: false,    // Cannot be changed
    enumerable: true,
    configurable: true
});

obj.id = 999;          // Fails silently (or error in strict mode)
console.log(obj.id);   // 123
```

## Object Methods

### Object.keys()
Returns array of property names:

```javascript
let user = { name: "John", age: 30, email: "john@example.com" };

let keys = Object.keys(user);
console.log(keys);                 // ["name", "age", "email"]
```

### Object.values()
Returns array of property values:

```javascript
let user = { name: "John", age: 30, email: "john@example.com" };

let values = Object.values(user);
console.log(values);               // ["John", 30, "john@example.com"]
```

### Object.entries()
Returns array of [key, value] pairs:

```javascript
let user = { name: "John", age: 30 };

let entries = Object.entries(user);
console.log(entries);
// [["name", "John"], ["age", 30]]

// Iterate over entries
entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

### Object.assign()
Copies properties from source to target:

```javascript
let target = { a: 1, b: 2 };
let source = { b: 3, c: 4 };

Object.assign(target, source);
console.log(target);               // { a: 1, b: 3, c: 4 }

// Create copy
let copy = Object.assign({}, target);
```

### Object.freeze()
Prevents any modifications:

```javascript
let user = { name: "John", age: 30 };
Object.freeze(user);

user.name = "Jane";    // Fails silently
user.age = 35;         // Fails silently
delete user.name;      // Fails silently

console.log(user);     // { name: 'John', age: 30 }
```

### Object.seal()
Prevents adding/removing properties, allows modification:

```javascript
let user = { name: "John", age: 30 };
Object.seal(user);

user.name = "Jane";    // Works
user.age = 35;         // Works
user.email = "j@test.com"; // Fails (cannot add)
delete user.age;       // Fails (cannot delete)

console.log(user);     // { name: 'Jane', age: 35 }
```

## Getters and Setters

### Using Getters and Setters
```javascript
let user = {
    _name: "John",     // Convention: _ means private
    
    get name() {
        console.log("Getting name");
        return this._name;
    },
    
    set name(value) {
        console.log("Setting name to " + value);
        this._name = value;
    }
};

console.log(user.name);     // Gets name, logs "Getting name"
user.name = "Jane";         // Sets name, logs "Setting name to Jane"
console.log(user.name);     // "Jane"
```

### Validation with Setters
```javascript
let person = {
    _age: 0,
    
    get age() {
        return this._age;
    },
    
    set age(value) {
        if (value < 0 || value > 150) {
            console.log("Invalid age");
            return;
        }
        this._age = value;
    }
};

person.age = 25;           // Sets to 25
console.log(person.age);   // 25

person.age = 200;          // Rejected: Invalid age
console.log(person.age);   // 25
```

## Prototype

### Understanding Prototype
```javascript
function Animal(name) {
    this.name = name;
}

// Add method to prototype
Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.speak());  // "Dog makes a sound"
```

### Prototype Chain
```javascript
let user = { name: "John" };

console.log(user.hasOwnProperty("name"));     // true
console.log(user.hasOwnProperty("toString")); // false
console.log("toString" in user);              // true (from prototype)
console.log(user.toString());                 // [object Object]
```

## this Keyword

### this in Methods
```javascript
let user = {
    name: "John",
    age: 30,
    getInfo: function() {
        return `${this.name} is ${this.age} years old`;
    }
};

console.log(user.getInfo());       // "John is 30 years old"
```

### this in Constructor
```javascript
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
    this.describe = function() {
        return `${this.brand} ${this.model}`;
    };
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar.describe());     // "Toyota Camry"
```

## Object.create() for Inheritance

```javascript
let animal = {
    speak: function() {
        return "Some sound";
    }
};

let dog = Object.create(animal);
dog.name = "Rex";
dog.bark = function() {
    return "Woof!";
};

console.log(dog.name);             // "Rex"
console.log(dog.bark());           // "Woof!"
console.log(dog.speak());          // "Some sound" (inherited)
```

## Best Practices
- Use object literals for simple objects
- Use constructor functions or classes for complex objects
- Use this carefully in methods
- Use getters/setters for validation
- Use Object.freeze() for constants
- Use Object.assign() for copying objects
- Understand prototype chain
- Avoid modifying built-in prototypes
