# 📘 JavaScript Math Object – Complete Handbook

---

# What is the Math Object?

The **Math object** is a built-in object in JavaScript that provides **mathematical constants** and **mathematical functions**. It helps perform calculations such as rounding numbers, finding powers, generating random numbers, calculating square roots, trigonometric operations, logarithms, and much more.

> **Important:** The `Math` object is **not a constructor**, so you **cannot create it using `new Math()`**.

```javascript
// ❌ Wrong
let m = new Math();

// ✅ Correct
console.log(Math.PI);
```

---

# Why Do We Use the Math Object?

The Math object is used to:

- Perform mathematical calculations
- Generate random numbers
- Round decimal numbers
- Find maximum and minimum values
- Calculate powers and roots
- Perform trigonometric calculations
- Calculate logarithms and exponential values
- Work with mathematical constants

---

# Syntax

```javascript
Math.methodName(value);
```

Example:

```javascript
console.log(Math.sqrt(25));
```

**Output**

```text
5
```

---

# Mathematical Constants

| Constant       | Description        | Value              |
| -------------- | ------------------ | ------------------ |
| `Math.PI`      | Value of π (Pi)    | 3.141592653589793  |
| `Math.E`       | Euler's Number     | 2.718281828459045  |
| `Math.LN2`     | Natural log of 2   | 0.6931471805599453 |
| `Math.LN10`    | Natural log of 10  | 2.302585092994046  |
| `Math.LOG2E`   | Base-2 log of e    | 1.4426950408889634 |
| `Math.LOG10E`  | Base-10 log of e   | 0.4342944819032518 |
| `Math.SQRT2`   | Square root of 2   | 1.4142135623730951 |
| `Math.SQRT1_2` | Square root of 1/2 | 0.7071067811865476 |

Example

```javascript
console.log(Math.PI);
console.log(Math.E);
```

**Output**

```text
3.141592653589793
2.718281828459045
```

---

# Math Methods

## 1. Math.max()

Returns the **largest value** among the given numbers.

### Syntax

```javascript
Math.max(value1, value2, ...);
```

### Example

```javascript
console.log(Math.max(10, 25, 7, 80));
```

**Output**

```text
80
```

---

## 2. Math.min()

Returns the **smallest value**.

```javascript
console.log(Math.min(10, 25, 7, 80));
```

**Output**

```text
7
```

---

## 3. Math.abs()

Returns the **absolute (positive)** value.

```javascript
console.log(Math.abs(-50));
console.log(Math.abs(50));
```

**Output**

```text
50
50
```

---

## 4. Math.floor()

Rounds **down** to the nearest integer.

```javascript
console.log(Math.floor(7.9));
console.log(Math.floor(7.1));
```

**Output**

```text
7
7
```

---

## 5. Math.ceil()

Rounds **up** to the nearest integer.

```javascript
console.log(Math.ceil(7.1));
console.log(Math.ceil(7.9));
```

**Output**

```text
8
8
```

---

## 6. Math.round()

Rounds to the **nearest integer**.

### Rule

- Decimal < 0.5 → Round Down
- Decimal ≥ 0.5 → Round Up

```javascript
console.log(Math.round(7.4));
console.log(Math.round(7.5));
```

**Output**

```text
7
8
```

---

## 7. Math.trunc()

Removes the decimal part without rounding.

```javascript
console.log(Math.trunc(7.9));
console.log(Math.trunc(-7.9));
```

**Output**

```text
7
-7
```

---

## 8. Math.random()

Returns a random number between **0 (inclusive)** and **1 (exclusive)**.

```javascript
console.log(Math.random());
```

**Output**

```text
0.483729182...
```

### Random Number Between 1 and 10

```javascript
let num = Math.floor(Math.random() * 10) + 1;

console.log(num);
```

---

## 9. Math.pow()

Returns the power of a number.

```javascript
console.log(Math.pow(2, 3));
```

**Output**

```text
8
```

### Modern Alternative

```javascript
console.log(2 ** 3);
```

---

## 10. Math.sqrt()

Returns the square root.

```javascript
console.log(Math.sqrt(81));
```

**Output**

```text
9
```

---

## 11. Math.cbrt()

Returns the cube root.

```javascript
console.log(Math.cbrt(64));
```

**Output**

```text
4
```

---

## 12. Math.sign()

Returns the sign of a number.

| Input    | Output |
| -------- | ------ |
| Positive | `1`    |
| Negative | `-1`   |
| Zero     | `0`    |

```javascript
console.log(Math.sign(20));
console.log(Math.sign(-20));
console.log(Math.sign(0));
```

**Output**

```text
1
-1
0
```

---

## 13. Math.sin()

Returns the sine value (radians).

```javascript
console.log(Math.sin(Math.PI / 2));
```

**Output**

```text
1
```

---

## 14. Math.cos()

Returns the cosine value.

```javascript
console.log(Math.cos(0));
```

**Output**

```text
1
```

---

## 15. Math.tan()

Returns the tangent value.

```javascript
console.log(Math.tan(0));
```

**Output**

```text
0
```

---

## 16. Math.asin()

Returns the inverse sine.

```javascript
console.log(Math.asin(1));
```

**Output**

```text
1.5707963267948966
```

---

## 17. Math.acos()

Returns the inverse cosine.

```javascript
console.log(Math.acos(1));
```

**Output**

```text
0
```

---

## 18. Math.atan()

Returns the inverse tangent.

```javascript
console.log(Math.atan(1));
```

**Output**

```text
0.7853981633974483
```

---

## 19. Math.atan2()

Returns the angle between the positive x-axis and the point `(x, y)`.

```javascript
console.log(Math.atan2(5, 5));
```

**Output**

```text
0.7853981633974483
```

---

## 20. Math.log()

Returns the natural logarithm (base e).

```javascript
console.log(Math.log(Math.E));
```

**Output**

```text
1
```

---

## 21. Math.log10()

Returns the base-10 logarithm.

```javascript
console.log(Math.log10(1000));
```

**Output**

```text
3
```

---

## 22. Math.log2()

Returns the base-2 logarithm.

```javascript
console.log(Math.log2(16));
```

**Output**

```text
4
```

---

## 23. Math.exp()

Returns **e** raised to the given power.

```javascript
console.log(Math.exp(2));
```

**Output**

```text
7.38905609893065
```

---

## 24. Math.expm1()

Returns **eˣ − 1**.

```javascript
console.log(Math.expm1(1));
```

**Output**

```text
1.718281828459045
```

---

## 25. Math.hypot()

Returns the square root of the sum of squares.

```javascript
console.log(Math.hypot(3, 4));
```

**Output**

```text
5
```

---

## 26. Math.fround()

Returns the nearest 32-bit floating-point number.

```javascript
console.log(Math.fround(5.123456789));
```

**Output**

```text
5.123456954956055
```

---

## 27. Math.imul()

Returns 32-bit integer multiplication.

```javascript
console.log(Math.imul(5, 4));
```

**Output**

```text
20
```

---

## 28. Math.clz32()

Returns the number of leading zero bits in a 32-bit integer.

```javascript
console.log(Math.clz32(1));
```

**Output**

```text
31
```

---

# Practical Programs

## Generate OTP

```javascript
let otp = Math.floor(Math.random() * 9000) + 1000;

console.log(otp);
```

---

## Dice Program

```javascript
let dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);
```

---

## Coin Toss

```javascript
let toss = Math.random() < 0.5 ? "Head" : "Tail";

console.log(toss);
```

---

## Random RGB Color

```javascript
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

console.log(`rgb(${r}, ${g}, ${b})`);
```

---

## Area of Circle

```javascript
let radius = 5;

let area = Math.PI * radius * radius;

console.log(area);
```

---

## Distance Between Two Points

```javascript
let distance = Math.hypot(6, 8);

console.log(distance);
```

---

# Difference Between Rounding Methods

| Method            | Example | Output | Description     |
| ----------------- | ------- | ------ | --------------- |
| `Math.floor(7.9)` | `7.9`   | `7`    | Round Down      |
| `Math.ceil(7.1)`  | `7.1`   | `8`    | Round Up        |
| `Math.round(7.5)` | `7.5`   | `8`    | Nearest Integer |
| `Math.trunc(7.9)` | `7.9`   | `7`    | Remove Decimal  |
| `Math.abs(-8)`    | `-8`    | `8`    | Absolute Value  |

---

# Commonly Used Methods

| Method          | Purpose          |
| --------------- | ---------------- |
| `Math.max()`    | Largest Number   |
| `Math.min()`    | Smallest Number  |
| `Math.abs()`    | Absolute Value   |
| `Math.floor()`  | Round Down       |
| `Math.ceil()`   | Round Up         |
| `Math.round()`  | Nearest Integer  |
| `Math.trunc()`  | Remove Decimal   |
| `Math.random()` | Random Number    |
| `Math.pow()`    | Power            |
| `Math.sqrt()`   | Square Root      |
| `Math.cbrt()`   | Cube Root        |
| `Math.sign()`   | Sign             |
| `Math.PI`       | Pi Constant      |
| `Math.E`        | Euler Constant   |
| `Math.sin()`    | Sine             |
| `Math.cos()`    | Cosine           |
| `Math.tan()`    | Tangent          |
| `Math.log()`    | Natural Log      |
| `Math.log10()`  | Base-10 Log      |
| `Math.log2()`   | Base-2 Log       |
| `Math.exp()`    | Exponential      |
| `Math.hypot()`  | Distance Formula |

---

# Memory Tips

| Keyword    | Remember            |
| ---------- | ------------------- |
| **max**    | Biggest Number      |
| **min**    | Smallest Number     |
| **abs**    | Positive Value      |
| **floor**  | Down ⬇              |
| **ceil**   | Up ⬆                |
| **round**  | Nearest             |
| **trunc**  | Remove Decimal      |
| **random** | Random Number 🎲    |
| **pow**    | Power (xⁿ)          |
| **sqrt**   | Square Root √       |
| **cbrt**   | Cube Root ∛         |
| **sign**   | Positive / Negative |
| **PI**     | Circle Calculations |
| **hypot**  | Distance Formula    |
| **log**    | Logarithm           |
| **exp**    | Exponential         |

---

# Summary

The **JavaScript Math Object** is a built-in static object that provides mathematical constants and functions. It is commonly used for arithmetic calculations, random number generation, rounding values, geometry, scientific calculations, trigonometry, logarithms, and exponentials. Since `Math` is a static object, you call its methods directly (for example, `Math.sqrt()` or `Math.random()`) without creating an object using `new`.
