# JSON in JavaScript

## Overview
Working with JSON (JavaScript Object Notation) - parsing and stringifying objects.

## JSON Basics

JSON is a text format for data exchange:
- Uses key-value pairs
- Keys must be strings
- Values can be: strings, numbers, booleans, null, arrays, objects
- No functions, undefined, or symbols

## JSON.stringify()

Converts JavaScript objects to JSON strings

### Basic Usage
```javascript
let obj = { name: "John", age: 30 };
JSON.stringify(obj);        // '{"name":"John","age":30}'

let arr = [1, 2, 3];
JSON.stringify(arr);        // '[1,2,3]'

JSON.stringify(true);       // 'true'
JSON.stringify("text");     // '"text"'
JSON.stringify(null);       // 'null'
```

### With Formatting (Pretty Print)

#### Replacer Function
```javascript
let obj = { name: "John", age: 30, email: "john@test.com" };

// Include only specific properties
let result = JSON.stringify(obj, ['name', 'age']);
// '{"name":"John","age":30}'

// Transform values with replacer function
let result = JSON.stringify(obj, (key, value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
});
// '{"name":"JOHN","age":30,"email":"JOHN@TEST.COM"}'
```

#### Space Parameter (Indentation)
```javascript
let obj = { name: "John", age: 30 };

// With 2 spaces
JSON.stringify(obj, null, 2);
/*
{
  "name": "John",
  "age": 30
}
*/

// With 4 spaces
JSON.stringify(obj, null, 4);
/*
{
    "name": "John",
    "age": 30
}
*/

// With custom string (tab)
JSON.stringify(obj, null, '\t');
/*
{
	"name": "John",
	"age": 30
}
*/
```

### Handling Special Values
```javascript
// undefined, functions, symbols are omitted
let obj = {
    name: "John",
    age: undefined,
    greet: function() {},
    sym: Symbol('id')
};
JSON.stringify(obj);        // '{"name":"John"}'

// NaN and Infinity become null
let obj = { a: NaN, b: Infinity };
JSON.stringify(obj);        // '{"a":null,"b":null}'
```

### toJSON() Method
Objects can define custom toJSON method:

```javascript
let user = {
    name: "John",
    age: 30,
    toJSON() {
        return { name: this.name };  // Only serialize name
    }
};
JSON.stringify(user);       // '{"name":"John"}'
```

## JSON.parse()

Converts JSON strings back to JavaScript objects

### Basic Usage
```javascript
let json = '{"name":"John","age":30}';
let obj = JSON.parse(json);
console.log(obj);           // { name: 'John', age: 30 }
console.log(obj.name);      // 'John'

let jsonArr = '[1,2,3]';
let arr = JSON.parse(jsonArr);
console.log(arr);           // [1, 2, 3]
```

### With Reviver Function
Transform parsed values:

```javascript
let json = '{"name":"John","joinDate":"2024-01-15"}';
let obj = JSON.parse(json, (key, value) => {
    if (key === 'joinDate') {
        return new Date(value);
    }
    return value;
});
console.log(obj.joinDate instanceof Date); // true
```

### Error Handling
```javascript
let json = '{invalid json}';
try {
    JSON.parse(json);
} catch(error) {
    console.error('Invalid JSON:', error.message);
}
```

## Practical Examples

### Serializing Objects
```javascript
let user = {
    id: 1,
    name: "John",
    email: "john@test.com",
    active: true
};

let json = JSON.stringify(user);
// Send via API, store in database, or local storage
localStorage.setItem('user', json);
```

### Deserializing Data
```javascript
// Retrieve from storage
let json = localStorage.getItem('user');
let user = JSON.parse(json);
console.log(user.name);     // 'John'
```

### Deep Cloning Objects
```javascript
let original = { name: "John", address: { city: "NYC" } };
let clone = JSON.parse(JSON.stringify(original));

clone.address.city = "LA";
console.log(original.address.city); // "NYC" (unchanged)
```

### Filtering Object Properties
```javascript
let user = {
    name: "John",
    age: 30,
    password: "secret123",
    email: "john@test.com"
};

let safe = JSON.parse(
    JSON.stringify(user, ['name', 'email'])
);
console.log(safe);          // { name: 'John', email: 'john@test.com' }
```

### API Response Handling
```javascript
fetch('/api/users')
    .then(response => response.json())  // Parses JSON response
    .then(users => console.log(users));
```

### Sending JSON to Server
```javascript
let user = { name: "John", age: 30 };

fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)  // Convert to JSON string
})
.then(response => response.json());
```

## Best Practices
- Always wrap JSON.parse() in try-catch for error handling
- Use JSON.stringify() with space parameter for debugging
- Remember that JSON cannot represent functions, undefined, or symbols
- Use toJSON() for custom serialization logic
- Use reviver function to reconstruct dates or custom objects
- Be careful with circular references (they will cause errors)
- Validate JSON before parsing untrusted data
