# 📘 JavaScript Data Types

JavaScript is a **dynamically typed language**, which means a variable can hold different types of values during runtime.

```javascript
let value = "Hello";
value = 100;
value = true;
```

---

# 🔢 JavaScript Data Types

JavaScript has **8 built-in data types**.

| Category | Data Type | Example |
|-----------|------------|----------|
| Primitive | `String` | `"Hello"` |
| Primitive | `Number` | `42`, `3.14` |
| Primitive | `Boolean` | `true`, `false` |
| Primitive | `Undefined` | `undefined` |
| Primitive | `Null` | `null` |
| Primitive | `Symbol` | `Symbol("id")` |
| Primitive | `BigInt` | `123456789n` |
| Non-Primitive | `Object` | `{ name: "Jeel" }` |

> 📌 Arrays and Functions are special types of **Objects**.

---

# 1️⃣ String

Strings represent textual data.

### Example

```javascript
let stringType = "Hello, World!";

console.log("String:", stringType);
```

### Output

```text
String: Hello, World!
```

### typeof Result

```javascript
console.log(typeof stringType);
```

```text
string
```

---

# 2️⃣ Number

Numbers represent both integers and floating-point values.

### Example

```javascript
let numberType = 42;

console.log("Number:", numberType);
```

### Output

```text
Number: 42
```

### typeof Result

```javascript
console.log(typeof numberType);
```

```text
number
```

---

# 3️⃣ Boolean

Booleans represent logical values.

### Example

```javascript
let booleanType = true;

console.log("Boolean:", booleanType);
```

### Output

```text
Boolean: true
```

### typeof Result

```javascript
console.log(typeof booleanType);
```

```text
boolean
```

---

# 4️⃣ Undefined

A variable declared without a value is `undefined`.

### Example

```javascript
let undefinedType;

console.log("Undefined:", undefinedType);
```

### Output

```text
Undefined: undefined
```

### typeof Result

```javascript
console.log(typeof undefinedType);
```

```text
undefined
```

---

# 5️⃣ Null

Represents the intentional absence of a value.

### Example

```javascript
let nullType = null;

console.log("Null:", nullType);
```

### Output

```text
Null: null
```

### typeof Result

```javascript
console.log(typeof nullType);
```

```text
object
```

> ⚠️ **Important:** `typeof null` returns `"object"` due to a historical bug in JavaScript.

### Correct Null Check

```javascript
console.log(nullType === null);
```

### Output

```text
true
```

---

# 6️⃣ Object

Objects store data as **key-value pairs**.

### Example

```javascript
let objectType = {
    name: "Jeel",
    age: 25
};

console.log("Object:", objectType);
```

### Output

```text
Object: { name: 'Jeel', age: 25 }
```

### typeof Result

```javascript
console.log(typeof objectType);
```

```text
object
```

---

# 7️⃣ Array

Arrays store multiple values in a single variable.

### Example

```javascript
let arrayType = [1, 2, 3, 4, 5];

console.log("Array:", arrayType);
```

### Output

```text
Array: [1, 2, 3, 4, 5]
```

### typeof Result

```javascript
console.log(typeof arrayType);
```

```text
object
```

> ⚠️ Arrays are technically objects.

### Proper Array Check

```javascript
console.log(Array.isArray(arrayType));
```

### Output

```text
true
```

---

# 8️⃣ Symbol

Symbols create unique identifiers.

### Example

```javascript
let symbolType = Symbol("uniqueIdentifier");

console.log("Symbol:", symbolType);
```

### Output

```text
Symbol(uniqueIdentifier)
```

### typeof Result

```javascript
console.log(typeof symbolType);
```

```text
symbol
```

### Symbol Uniqueness

```javascript
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

### Output

```text
false
```

---

# 9️⃣ BigInt

BigInt is used for integers larger than JavaScript's safe integer limit.

### Example

```javascript
let bigIntType = BigInt(9007199254740991);

console.log("BigInt:", bigIntType);
```

### Output

```text
9007199254740991n
```

### typeof Result

```javascript
console.log(typeof bigIntType);
```

```text
bigint
```

### Another Example

```javascript
let hugeNumber = 1234567890123456789012345678901234567890n;

console.log(hugeNumber);
```

---

# 🔄 Dynamic Typing

JavaScript allows variables to change their type during execution.

### Example

```javascript
let dynamicType = "I am a string";

console.log(dynamicType);

dynamicType = 100;

console.log(dynamicType);

dynamicType = true;

console.log(dynamicType);
```

### Output

```text
I am a string
100
true
```

---

# 🔍 Using `typeof`

The `typeof` operator tells you the data type of a value.

### Example

```javascript
console.log(typeof "Hello");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof Symbol());
console.log(typeof 123n);
```

### Output

```text
string
number
boolean
undefined
object
object
object
symbol
bigint
```

---

# 📊 Summary Table

| Data Type | Example | `typeof` Result |
|------------|-----------|----------------|
| String | `"Hello"` | `"string"` |
| Number | `42` | `"number"` |
| Boolean | `true` | `"boolean"` |
| Undefined | `undefined` | `"undefined"` |
| Null | `null` | `"object"` ⚠️ |
| Object | `{}` | `"object"` |
| Array | `[]` | `"object"` |
| Symbol | `Symbol()` | `"symbol"` |
| BigInt | `123n` | `"bigint"` |

---

# 🎯 Important Interview Points

✅ JavaScript has **7 primitive types**:

```text
String
Number
Boolean
Undefined
Null
Symbol
BigInt
```

✅ Everything else is an **Object**.

✅ `typeof null` returns `"object"` because of a historical bug.

✅ Use `Array.isArray()` to identify arrays.

```javascript
Array.isArray([1, 2, 3]);   // true
```

✅ JavaScript is **dynamically typed**.

```javascript
let value = "Hello";
value = 123;
value = false;
```

---

# 🚀 Quick Revision

```text
String     → Text data
Number     → Integers and decimals
Boolean    → true / false
Undefined  → Variable declared but not assigned
Null       → Intentional empty value
Object     → Key-value pairs
Array      → Ordered collection of values
Symbol     → Unique identifier
BigInt     → Very large integers
```

---

## 💡 Memory Trick

```text
S N B U N O S B

String
Number
Boolean
Undefined
Null
Object
Symbol
BigInt
```

> "Smart Ninjas Build Useful New Objects, Symbols & BigInts." 😄