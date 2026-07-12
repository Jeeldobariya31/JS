# 📘 JavaScript Operators

Operators are special symbols used to perform operations on values and variables.

```javascript
let result = 10 + 5;
```

Here, `+` is an **operator**, while `10` and `5` are **operands**.

---

# 📚 Types of Operators in JavaScript

| Category | Operators |
|-----------|------------|
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |
| Comparison | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` |
| Logical | `&&`, `||`, `!` |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| String | `+`, `+=` |
| Conditional | `? :` (Ternary Operator) |

---

# 1️⃣ Arithmetic Operators

Arithmetic operators perform mathematical calculations.

```javascript
let a = 10;
let b = 5;
```

| Operator | Description | Example |
|-----------|-------------|----------|
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Division | `a / b` |
| `%` | Remainder | `a % b` |
| `**` | Exponentiation | `a ** b` |

---

## Examples

```javascript
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponentiation:", a ** b);
```

### Output

```text
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2
Remainder: 0
Exponentiation: 100000
```

---

## Explanation of `%`

The modulus operator returns the **remainder**.

```javascript
console.log(10 % 3);
```

### Output

```text
1
```

```text
10 ÷ 3 = 3 remainder 1
```

---

## Explanation of `**`

Exponentiation means **power**.

```javascript
console.log(2 ** 3);
```

### Output

```text
8
```

```text
2 × 2 × 2 = 8
```

---

# 2️⃣ Comparison Operators

Comparison operators compare two values and return a **Boolean** value (`true` or `false`).

```javascript
let x = 10;
let y = 5;
```

---

## Equality Operators

### Loose Equality (`==`)

Checks only values after type coercion.

```javascript
console.log(5 == "5");
```

### Output

```text
true
```

---

### Strict Equality (`===`)

Checks both **value and data type**.

```javascript
console.log(5 === "5");
```

### Output

```text
false
```

---

## Inequality Operators

### Loose Not Equal (`!=`)

```javascript
console.log(5 != "5");
```

### Output

```text
false
```

---

### Strict Not Equal (`!==`)

```javascript
console.log(5 !== "5");
```

### Output

```text
true
```

---

## Relational Operators

```javascript
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
```

### Output

```text
true
false
true
false
```

---

## Complete Example

```javascript
console.log("Equal (==):", x == y);
console.log("Strict Equal (===):", x === y);
console.log("Not Equal (!=):", x != y);
console.log("Strict Not Equal (!==):", x !== y);
console.log("Greater Than (>):", x > y);
console.log("Less Than (<):", x < y);
console.log("Greater Than or Equal (>=):", x >= y);
console.log("Less Than or Equal (<=):", x <= y);
```

---

# 📊 Comparison Table

| Expression | Result |
|------------|---------|
| `10 == 5` | `false` |
| `10 === 5` | `false` |
| `10 != 5` | `true` |
| `10 !== 5` | `true` |
| `10 > 5` | `true` |
| `10 < 5` | `false` |
| `10 >= 5` | `true` |
| `10 <= 5` | `false` |

---

# 3️⃣ Logical Operators

Logical operators work with Boolean values.

```javascript
let p = true;
let q = false;
```

---

## Logical AND (`&&`)

Returns `true` only if **both conditions are true**.

```javascript
console.log(p && q);
```

### Output

```text
false
```

---

## Truth Table

| p | q | p && q |
|---|---|---------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

---

## Logical OR (`||`)

Returns `true` if **at least one condition is true**.

```javascript
console.log(p || q);
```

### Output

```text
true
```

---

## Truth Table

| p | q | p \|\| q |
|---|---|----------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

---

## Logical NOT (`!`)

Reverses the Boolean value.

```javascript
console.log(!p);
```

### Output

```text
false
```

---

# 4️⃣ Assignment Operators

Used to assign values to variables.

```javascript
let c = 20;
```

---

## Basic Assignment

```javascript
c = 20;
```

---

## Compound Assignment Operators

| Operator | Equivalent |
|-----------|-------------|
| `+=` | `c = c + value` |
| `-=` | `c = c - value` |
| `*=` | `c = c * value` |
| `/=` | `c = c / value` |
| `%=` | `c = c % value` |
| `**=` | `c = c ** value` |

---

## Example

```javascript
console.log("Initial:", c);

c += 5;
console.log("After += 5:", c);

c -= 3;
console.log("After -= 3:", c);

c *= 2;
console.log("After *= 2:", c);

c /= 4;
console.log("After /= 4:", c);

c %= 3;
console.log("After %= 3:", c);

c **= 2;
console.log("After **= 2:", c);
```

### Output

```text
Initial: 20
After += 5: 25
After -= 3: 22
After *= 2: 44
After /= 4: 11
After %= 3: 2
After **= 2: 4
```

---

# 5️⃣ String Concatenation

The `+` operator joins strings.

```javascript
let str1 = "Hello, ";
let str2 = "World!";

let greeting = str1 + str2;

console.log(greeting);
```

### Output

```text
Hello, World!
```

---

## Using `+=`

```javascript
let name = "Jeel";

name += " Patel";

console.log(name);
```

### Output

```text
Jeel Patel
```

---

# 6️⃣ Ternary Operator (`? :`)

A shorthand version of `if...else`.

---

## Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

---

## Example

```javascript
let age = 18;

let canVote = (age >= 18)
    ? "Yes, can vote."
    : "No, cannot vote.";

console.log(canVote);
```

### Output

```text
Yes, can vote.
```

---

## Equivalent `if...else`

```javascript
if (age >= 18) {
    console.log("Yes, can vote.");
} else {
    console.log("No, cannot vote.");
}
```

---

# 🎯 Interview Questions

## Q1. Difference between `==` and `===`?

| `==` | `===` |
|-------|--------|
| Checks value only | Checks value and type |
| Performs coercion | No coercion |
| Less recommended | Preferred |

---

### Example

```javascript
5 == "5";     // true
5 === "5";    // false
```

---

## Q2. What is the modulus operator?

Returns the remainder after division.

```javascript
10 % 4;     // 2
```

---

## Q3. What is the exponentiation operator?

Raises a number to a power.

```javascript
2 ** 4;     // 16
```

---

# 📋 Quick Summary

| Category | Operators |
|-----------|------------|
| Arithmetic | `+ - * / % **` |
| Comparison | `== === != !== > < >= <=` |
| Logical | `&& || !` |
| Assignment | `= += -= *= /= %= **=` |
| String | `+ +=` |
| Conditional | `? :` |

---

# 🚀 Revision Notes

```text
+      → Add / Concatenate
-      → Subtract
*      → Multiply
/      → Divide
%      → Remainder
**     → Power

==     → Value only
===    → Value + Type

&&     → Both true
||     → Any one true
!      → Opposite value

? :    → Short form of if...else
```

---

> 💡 **Best Practice:** Prefer `===` and `!==` over `==` and `!=` to avoid unexpected type coercion issues.