# 📘 JavaScript Type Conversion & Operations

JavaScript automatically converts values from one data type to another when needed. This process is called **Type Conversion** or **Type Coercion**.

There are **two types** of conversions:

1. 🔄 **Implicit Type Conversion** (Automatic)
2. ✍️ **Explicit Type Conversion** (Manual)

---

# 🔄 1. Implicit Type Conversion (Type Coercion)

JavaScript automatically converts one data type into another during operations.

## Example: Number → String Conversion

```javascript
let implicitString = "The answer is " + 42;

console.log("Implicit Conversion (String):", implicitString);
```

### Output

```text
Implicit Conversion (String): The answer is 42
```

### Explanation

```javascript
"The answer is " + 42
```

Since one operand is a **string**, JavaScript converts `42` into `"42"`.

```text
"The answer is " + "42"
```

Result:

```text
The answer is 42
```

---

# ✍️ 2. Explicit Type Conversion

Explicit conversion means **manually converting** one data type into another.

---

## String → Number

```javascript
let explicitNumber = Number("42");

console.log(explicitNumber);
```

### Output

```text
42
```

### typeof Result

```javascript
console.log(typeof explicitNumber);
```

```text
number
```

---

## String × Number (Implicit Number Conversion)

```javascript
let implicitNumber = "5" * 2;

console.log(implicitNumber);
```

### Output

```text
10
```

### Explanation

JavaScript automatically converts `"5"` into `5`.

```text
"5" × 2
↓
5 × 2
↓
10
```

---

# 🔄 Common Explicit Conversion Methods

| Method | Purpose | Example |
|----------|----------|----------|
| `Number()` | Convert to Number | `Number("25")` |
| `String()` | Convert to String | `String(25)` |
| `Boolean()` | Convert to Boolean | `Boolean(1)` |
| `parseInt()` | Convert String to Integer | `parseInt("42")` |
| `parseFloat()` | Convert String to Decimal | `parseFloat("3.14")` |

---

## Examples

### Convert to Number

```javascript
console.log(Number("100"));
```

```text
100
```

---

### Convert to String

```javascript
console.log(String(100));
```

```text
"100"
```

---

### Convert to Boolean

```javascript
console.log(Boolean(1));
console.log(Boolean(0));
```

### Output

```text
true
false
```

---

# ⚙️ Operations on Different Data Types

---

# 📝 a. String Concatenation

Strings can be joined using the `+` operator.

### Example

```javascript
let str1 = "Hello, ";
let str2 = "World!";

let concatenatedString = str1 + str2;

console.log(concatenatedString);
```

### Output

```text
Hello, World!
```

---

## Another Example

```javascript
console.log("Age: " + 20);
```

### Output

```text
Age: 20
```

---

# ➕ b. Numeric Operations

Arithmetic operators work with numbers.

### Example

```javascript
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;

console.log(sum);
```

### Output

```text
30
```

---

## Other Arithmetic Operations

```javascript
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
```

### Output

```text
5
50
2
1
```

---

# 🔘 c. Boolean Operations

Boolean values use logical operators.

---

## AND (`&&`)

Returns `true` only if **both values are true**.

```javascript
let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2);
```

### Output

```text
false
```

---

## OR (`||`)

Returns `true` if **at least one value is true**.

```javascript
console.log(bool1 || bool2);
```

### Output

```text
true
```

---

## NOT (`!`)

Reverses the boolean value.

```javascript
console.log(!true);
console.log(!false);
```

### Output

```text
false
true
```

---

# 📚 d. Array Operations

Arrays can be combined using `concat()`.

### Example

```javascript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let combinedArray = array1.concat(array2);

console.log(combinedArray);
```

### Output

```text
[1, 2, 3, 4, 5, 6]
```

---

## Using Spread Operator

```javascript
let merged = [...array1, ...array2];

console.log(merged);
```

### Output

```text
[1, 2, 3, 4, 5, 6]
```

---

# 🏗️ e. Object Operations

Objects can be merged using the spread operator (`...`).

### Example

```javascript
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };

let mergedObject = {
    ...object1,
    ...object2
};

console.log(mergedObject);
```

### Output

```text
{ a: 1, b: 2, c: 3, d: 4 }
```

---

## Overwriting Properties

```javascript
let user1 = { name: "Jeel", age: 20 };
let user2 = { age: 25 };

let user = {
    ...user1,
    ...user2
};

console.log(user);
```

### Output

```text
{ name: "Jeel", age: 25 }
```

> ⚠️ The later property value overwrites the earlier one.

---

# ⚠️ Important Type Coercion Examples

---

## Example 1

```javascript
console.log("5" + 2);
```

### Output

```text
52
```

### Explanation

```text
String + Number
↓
String Concatenation
```

---

## Example 2

```javascript
console.log("5" - 2);
```

### Output

```text
3
```

### Explanation

```text
JavaScript converts "5" to 5.
```

---

## Example 3

```javascript
console.log("5" * 2);
```

### Output

```text
10
```

---

## Example 4

```javascript
console.log("5" / 2);
```

### Output

```text
2.5
```

---

## Example 5

```javascript
console.log(true + 1);
```

### Output

```text
2
```

### Explanation

```text
true → 1

1 + 1 = 2
```

---

## Example 6

```javascript
console.log(false + 1);
```

### Output

```text
1
```

### Explanation

```text
false → 0

0 + 1 = 1
```

---

# 📊 Truthy and Falsy Values

## Falsy Values

```javascript
false
0
-0
0n
""
null
undefined
NaN
```

These convert to:

```text
false
```

---

## Truthy Values

```javascript
"Hello"
42
[]
{}
"false"
true

```

These convert to:

```text
true
```

---

# 📋 Summary Table

| Expression | Result |
|------------|---------|
| `"5" + 2` | `"52"` |
| `"5" - 2` | `3` |
| `"5" * 2` | `10` |
| `"5" / 2` | `2.5` |
| `true + 1` | `2` |
| `false + 1` | `1` |
| `Boolean(0)` | `false` |
| `Boolean(1)` | `true` |
| `Number("42")` | `42` |
| `String(42)` | `"42"` |

---

# 🎯 Best Practices

✅ Prefer **explicit conversion** when possible.

```javascript
let age = Number(userInput);
```

✅ Use `===` instead of `==`.

```javascript
5 === "5";   // false
5 == "5";    // true
```

✅ Be careful with automatic type coercion.

```javascript
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

---

# 🚀 Quick Revision

```text
Implicit Conversion → Automatic conversion by JavaScript.

Explicit Conversion → Manual conversion using Number(),
String(), Boolean(), parseInt(), etc.

+  → Concatenates strings
-  → Converts operands to numbers
*  → Converts operands to numbers
/  → Converts operands to numbers

Use === to avoid unexpected coercion.
```

---

## 💡 Memory Trick

```text
"+" with strings → Join
Math operators → Convert to Number
Explicit methods → Safer and clearer
```