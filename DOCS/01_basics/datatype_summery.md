# 📘 JavaScript Data Types Summary

JavaScript data types are divided into **two categories**:

```text
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
```

---

# 📊 JavaScript Data Types

```text
JavaScript Data Types
│
├── Primitive Types
│   ├── Number
│   ├── String
│   ├── Boolean
│   ├── Undefined
│   ├── Null
│   ├── Symbol
│   └── BigInt
│
└── Non-Primitive (Reference) Types
    ├── Object
    ├── Array
    └── Function
```

---

# 1️⃣ Primitive Data Types

Primitive data types store **single values** and are generally **immutable**.

> 📌 Variables store the **actual value**.

---

## 1. Number

Used to represent integers and floating-point numbers.

```javascript
let num = 42;

console.log(num);
console.log(typeof num);
```

### Output

```text
42
number
```

---

## 2. String

Used to represent textual data.

```javascript
let str = "Hello, World!";

console.log(str);
console.log(typeof str);
```

### Output

```text
Hello, World!
string
```

---

## 3. Boolean

Represents logical values.

```javascript
let bool = true;

console.log(bool);
console.log(typeof bool);
```

### Output

```text
true
boolean
```

---

## 4. Undefined

A variable declared but not assigned a value.

```javascript
let undef;

console.log(undef);
console.log(typeof undef);
```

### Output

```text
undefined
undefined
```

---

## 5. Null

Represents the intentional absence of a value.

```javascript
let nul = null;

console.log(nul);
console.log(typeof nul);
```

### Output

```text
null
object
```

> ⚠️ **Important:** `typeof null` returns `"object"` due to a historical bug in JavaScript.

---

## 6. Symbol

Creates unique identifiers.

```javascript
let sym = Symbol("id");

console.log(sym);
console.log(typeof sym);
```

### Output

```text
Symbol(id)
symbol
```

---

## 7. BigInt

Used to store integers larger than `Number.MAX_SAFE_INTEGER`.

```javascript
let bigInt = BigInt(9007199254740991);

console.log(bigInt);
console.log(typeof bigInt);
```

### Output

```text
9007199254740991n
bigint
```

---

# 🧠 Primitive Data Types Summary

| Data Type | Example | `typeof` |
|------------|----------|-----------|
| Number | `42` | `"number"` |
| String | `"Hello"` | `"string"` |
| Boolean | `true` | `"boolean"` |
| Undefined | `undefined` | `"undefined"` |
| Null | `null` | `"object"` ⚠️ |
| Symbol | `Symbol("id")` | `"symbol"` |
| BigInt | `123n` | `"bigint"` |

---

# 2️⃣ Non-Primitive (Reference) Data Types

Reference types store **references (memory addresses)** to objects.

> 📌 Variables store the **address/reference**, not the actual object.

---

## 1. Object

Stores data as key-value pairs.

```javascript
let obj = {
    name: "Alice",
    age: 30
};

console.log(obj);
console.log(typeof obj);
```

### Output

```text
{ name: "Alice", age: 30 }
object
```

---

## 2. Array

Stores multiple values in an ordered collection.

```javascript
let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(typeof arr);
```

### Output

```text
[1, 2, 3, 4, 5]
object
```

---

### Proper Array Check

```javascript
console.log(Array.isArray(arr));
```

### Output

```text
true
```

---

## 3. Function

Functions are callable objects.

```javascript
function greet() {
    console.log("Hello!");
}

greet();

console.log(typeof greet);
```

### Output

```text
Hello!
function
```

---

# 🔍 Primitive vs Reference Types

| Feature | Primitive | Reference |
|----------|------------|------------|
| Stores | Actual Value | Memory Reference |
| Mutable | ❌ No | ✅ Yes |
| Compared By | Value | Reference |
| Examples | Number, String | Object, Array |
| Memory | Stack | Heap |

---

# 📌 Comparison Examples

---

## Primitive Comparison

```javascript
let a = 10;
let b = 10;

console.log(a === b);
```

### Output

```text
true
```

Because:

```text
Values are compared.
```

---

## Object Comparison

```javascript
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };

console.log(obj1 === obj2);
```

### Output

```text
false
```

Because:

```text
Different memory references.
```

---

## Same Reference

```javascript
let obj3 = obj1;

console.log(obj1 === obj3);
```

### Output

```text
true
```

---

# 📦 Memory Representation

## Primitive Types

```text
Stack Memory

num
 ↓
42
```

---

## Reference Types

```text
Stack Memory          Heap Memory

obj ───────────────► { name: "Alice" }
```

---

# 🎯 Important Interview Questions

---

## How many primitive data types are there?

```text
7 Primitive Types
```

```text
Number
String
Boolean
Undefined
Null
Symbol
BigInt
```

---

## Are arrays primitive?

```text
❌ No
```

Arrays are **objects**.

```javascript
typeof [];
```

```text
"object"
```

---

## Is a function an object?

```text
✅ Yes
```

```javascript
typeof function() {};
```

```text
"function"
```

---

## Why does `typeof null` return `"object"`?

Because of a **historical bug** in JavaScript.

---

# 🚀 Quick Revision

```text
Primitive Types
────────────────
Number
String
Boolean
Undefined
Null
Symbol
BigInt

Reference Types
────────────────
Object
Array
Function
```

---

# 💡 Memory Trick

```text
N S B U N S B

Number
String
Boolean
Undefined
Null
Symbol
BigInt
```

### Reference Types

```text
O A F

Object
Array
Function
```

---

## ⚠️ Note About Your Code

You have an extra character in your file:

```javascript
c
```

Remove it:

```javascript
// ❌ Wrong
c

// ✅ Correct
// (Delete this line)
```

Otherwise, JavaScript will throw:

```text
ReferenceError: c is not defined
```

---

## 📝 Final Summary

```text
Primitive Types
→ Store actual values
→ Immutable
→ Compared by value

Reference Types
→ Store references
→ Mutable
→ Compared by reference
```

> 🎯 **Golden Rule:** If it is not one of the **7 primitive types**, it is generally treated as an **object/reference type** in JavaScript.