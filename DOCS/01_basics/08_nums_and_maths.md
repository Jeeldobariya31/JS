# 📘 JavaScript Numbers & Math Object

JavaScript has only **one number type**:

```text
IEEE 754 Double-Precision Floating Point
(64-bit)
```

It represents:

- ✅ Integers
- ✅ Floating-point numbers
- ✅ Scientific notation

> **Note:** JavaScript does NOT have separate `int`, `float`, or `double` types.

---

# 🔢 Creating Numbers

## 1. Using Number Literals

```javascript
let integerNum = 100;
let floatNum = 99.99;

console.log(integerNum);
console.log(floatNum);
```

### Output

```text
100
99.99
```

---

## 2. Using Number Constructor

```javascript
let constructorNum = new Number(123.45);

console.log(constructorNum.valueOf());
```

### Output

```text
123.45
```

⚠️ Avoid:

```javascript
new Number(100)
```

Because it creates an **object**.

Preferred:

```javascript
let num = 100;
```

---

# ➕ Number Operations

```javascript
let a = 10;
let b = 3;
```

| Operation | Example | Output |
|-----------|----------|---------|
| Addition | `a + b` | `13` |
| Subtraction | `a - b` | `7` |
| Multiplication | `a * b` | `30` |
| Division | `a / b` | `3.3333...` |
| Modulus | `a % b` | `1` |
| Exponentiation | `a ** b` | `1000` |

---

# 🔼 Increment & Decrement

## Increment (`++`)

```javascript
let num = 5;

num++;

console.log(num);
```

### Output

```text
6
```

---

## Decrement (`--`)

```javascript
let num = 5;

num--;

console.log(num);
```

### Output

```text
4
```

---

# 🔧 Number Methods

```javascript
let sampleNum = 45.6789;
```

---

## 1. `toFixed()`

Rounds to fixed decimal places.

```javascript
console.log(sampleNum.toFixed(2));
```

### Output

```text
45.68
```

---

## 2. `toPrecision()`

Specifies total digits.

```javascript
console.log(sampleNum.toPrecision(4));
```

### Output

```text
45.68
```

---

## 3. `toString()`

Converts number into string.

```javascript
console.log(sampleNum.toString());
```

### Output

```text
"45.6789"
```

---

### Different Bases

```javascript
console.log((10).toString(2));
console.log((10).toString(8));
console.log((10).toString(16));
```

### Output

```text
1010
12
a
```

---

## 4. `toExponential()`

Scientific notation.

```javascript
console.log(sampleNum.toExponential(2));
```

### Output

```text
4.57e+1
```

---

## 5. `toLocaleString()`

Locale-sensitive formatting.

```javascript
console.log(sampleNum.toLocaleString("en-US"));
```

### Output

```text
45.679
```

---

# 💰 Currency Formatting

---

## Indian Rupee

```javascript
console.log(
    sampleNum.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR"
    })
);
```

### Output

```text
₹45.68
```

---

## US Dollar

```javascript
console.log(
    sampleNum.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
);
```

### Output

```text
$45.68
```

---

## Japanese Yen

```javascript
console.log(
    sampleNum.toLocaleString("ja-JP", {
        style: "currency",
        currency: "JPY"
    })
);
```

### Output

```text
¥46
```

---

# 📌 Number Properties

---

## Maximum Value

```javascript
console.log(Number.MAX_VALUE);
```

### Output

```text
1.7976931348623157e+308
```

---

## Minimum Positive Value

```javascript
console.log(Number.MIN_VALUE);
```

### Output

```text
5e-324
```

---

## NaN

```javascript
console.log(Number.NaN);
```

### Output

```text
NaN
```

---

## Infinity

```javascript
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
```

### Output

```text
Infinity
-Infinity
```

---

## EPSILON

Smallest precision difference.

```javascript
console.log(Number.EPSILON);
```

### Output

```text
2.220446049250313e-16
```

---

## Safe Integers

```javascript
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
```

### Output

```text
9007199254740991
-9007199254740991
```

---

# 🌍 Global Number Functions

---

## `parseInt()`

```javascript
console.log(parseInt("123abc"));
```

### Output

```text
123
```

---

## `parseFloat()`

```javascript
console.log(parseFloat("123.45abc"));
```

### Output

```text
123.45
```

---

## `isNaN()`

```javascript
console.log(isNaN("hello"));
console.log(isNaN(123));
```

### Output

```text
true
false
```

---

## `isFinite()`

```javascript
console.log(isFinite(100));
console.log(isFinite(Infinity));
```

### Output

```text
true
false
```

---

## `Number.isInteger()`

```javascript
console.log(Number.isInteger(42));
console.log(Number.isInteger(42.5));
```

### Output

```text
true
false
```

---

## `Number.isSafeInteger()`

```javascript
console.log(Number.isSafeInteger(9007199254740991));
```

### Output

```text
true
```

---

# 🧮 Math Object

The `Math` object provides mathematical constants and functions.

---

# 📌 Math Constants

| Constant | Value |
|-----------|--------|
| `Math.PI` | 3.14159 |
| `Math.E` | 2.71828 |
| `Math.LN2` | ln(2) |
| `Math.LN10` | ln(10) |
| `Math.LOG2E` | log₂(e) |
| `Math.LOG10E` | log₁₀(e) |
| `Math.SQRT2` | √2 |
| `Math.SQRT1_2` | √½ |

---

# 🔧 Important Math Methods

---

## Square Root

```javascript
Math.sqrt(16);
```

### Output

```text
4
```

---

## Power

```javascript
Math.pow(2, 3);
```

### Output

```text
8
```

---

## Absolute Value

```javascript
Math.abs(-10);
```

### Output

```text
10
```

---

## Rounding Methods

| Method | Example | Output |
|---------|----------|---------|
| `Math.ceil()` | `4.3` | `5` |
| `Math.floor()` | `4.7` | `4` |
| `Math.round()` | `4.5` | `5` |
| `Math.trunc()` | `4.9` | `4` |

---

# Maximum & Minimum

```javascript
Math.max(1, 5, 3);
Math.min(1, 5, 3);
```

### Output

```text
5
1
```

---

# 🎲 Random Numbers

```javascript
Math.random();
```

### Output

```text
0 ≤ number < 1
```

---

## Random Integer

```javascript
Math.floor(Math.random() * 10);
```

### Output

```text
0 to 9
```

---

# 📐 Trigonometry

```javascript
Math.sin(Math.PI / 2);
Math.cos(0);
Math.tan(Math.PI / 4);
```

### Output

```text
1
1
1
```

---

# 📊 Logarithms

```javascript
Math.log(10);
Math.log2(8);
Math.log10(100);
```

### Output

```text
2.302585...
3
2
```

---

# 🔺 Other Useful Methods

| Method | Purpose |
|---------|----------|
| `Math.cbrt()` | Cube Root |
| `Math.hypot()` | Distance Formula |
| `Math.sign()` | Sign of Number |
| `Math.imul()` | 32-bit Multiplication |
| `Math.fround()` | 32-bit Float |
| `Math.exp()` | eˣ |
| `Math.expm1()` | eˣ − 1 |

---

# 🎯 User Defined Methods

---

## Round to Decimal Places

```javascript
Math.roundTo = function(num, places) {
    let factor = Math.pow(10, places);

    return Math.round(num * factor) / factor;
};
```

### Example

```javascript
Math.roundTo(4.56789, 2);
```

### Output

```text
4.57
```

---

## Random Integer Generator

```javascript
Math.randomInt = function(min, max) {
    return Math.floor(
        Math.random() * (max - min)
    ) + min;
};
```

### Example

```javascript
Math.randomInt(1, 10);
```

### Output

```text
1 to 9
```

---

# 📊 Quick Summary

| Topic | Important Methods |
|---------|-------------------|
| Number Formatting | `toFixed()`, `toPrecision()` |
| Conversion | `toString()` |
| Parsing | `parseInt()`, `parseFloat()` |
| Validation | `isNaN()`, `isFinite()` |
| Integer Checks | `Number.isInteger()` |
| Rounding | `ceil()`, `floor()`, `round()` |
| Random | `Math.random()` |
| Power | `pow()`, `sqrt()` |
| Trigonometry | `sin()`, `cos()`, `tan()` |

---

# 📝 Exam Important Points

✅ JavaScript uses **IEEE 754 double precision** numbers.

✅ `NaN !== NaN`

```javascript
Number.isNaN(value);
```

✅ Safe integer range:

```text
-9007199254740991
to
9007199254740991
```

✅ `Math.random()` generates:

```text
0 ≤ x < 1
```

---

## 🚀 Memory Trick

```text
C F R T

Ceil   → Up
Floor  → Down
Round  → Nearest
Trunc  → Remove Decimal
```

 