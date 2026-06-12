# 📘 JavaScript String Concatenation & Type Coercion

String concatenation means **combining two or more strings** to create a new string.

JavaScript provides multiple ways to concatenate strings.

---

# 🔗 1. Using the `+` Operator

The `+` operator joins strings together.

## Example

```javascript
let part1 = "JavaScript ";
let part2 = "is ";
let part3 = "fun!";

let message1 = part1 + part2 + part3;

console.log(message1);
```

### Output

```text
JavaScript is fun!
```

---

## How it works

```text
"JavaScript " + "is "
↓
"JavaScript is "

"JavaScript is " + "fun!"
↓
"JavaScript is fun!"
```

---

# 🎯 2. Using Template Literals

Template literals use **backticks** ( `` ` `` ) and `${}` placeholders.

## Syntax

```javascript
`Text ${variable}`
```

---

## Example

```javascript
let name = "Jeel";
let hobby = "Coding";

let message2 =
    `Hello, my name is ${name} and I love ${hobby}.`;

console.log(message2);
```

### Output

```text
Hello, my name is Jeel and I love Coding.
```

---

## Advantages

✅ Easy to read

✅ Supports multiline strings

✅ Allows embedding expressions

---

## Example with Expression

```javascript
let a = 10;
let b = 20;

console.log(`Sum = ${a + b}`);
```

### Output

```text
Sum = 30
```

---

# 🔗 3. Using `concat()` Method

The `concat()` method joins strings together.

## Example

```javascript
let greet1 = "Good ";
let greet2 = "Morning";

let message3 = greet1.concat(greet2, "!");

console.log(message3);
```

### Output

```text
Good Morning!
```

---

## Syntax

```javascript
string.concat(str1, str2, ...);
```

---

# 📊 Comparison of Concatenation Methods

| Method | Example |
|---------|----------|
| `+` Operator | `"Hello " + "World"` |
| Template Literal | `` `Hello ${name}` `` |
| `concat()` | `"Hello".concat(" World")` |

---

# ➕ Number Addition vs String Concatenation

---

## Example 1

```javascript
console.log(2 + 3);
```

### Output

```text
5
```

### Explanation

```text
Number + Number
↓
Arithmetic Addition
```

---

## Example 2

```javascript
console.log("2" + "3");
```

### Output

```text
23
```

### Explanation

```text
String + String
↓
Concatenation
```

---

## Example 3

```javascript
console.log(2 + "3");
```

### Output

```text
23
```

### Explanation

```text
Number + String
↓
Number converted to String
↓
"2" + "3"
↓
"23"
```

---

## Example 4

```javascript
console.log("2" + 3);
```

### Output

```text
23
```

### Explanation

```text
String + Number
↓
Number converted to String
↓
Concatenation
```

---

# 🧠 Order of Evaluation

JavaScript evaluates expressions **from left to right**.

---

## Example 1

```javascript
console.log(2 + 3 + "5");
```

### Output

```text
55
```

### Step-by-Step

```text
2 + 3
↓
5

5 + "5"
↓
"55"
```

---

## Example 2

```javascript
console.log("5" + 2 + 3);
```

### Output

```text
523
```

### Step-by-Step

```text
"5" + 2
↓
"52"

"52" + 3
↓
"523"
```

---

## Example 3

```javascript
console.log(2 + "5" + 3);
```

### Output

```text
253
```

### Step-by-Step

```text
2 + "5"
↓
"25"

"25" + 3
↓
"253"
```

---

## Example 4

```javascript
console.log("5" + (2 + 3));
```

### Output

```text
55
```

### Step-by-Step

```text
(2 + 3)
↓
5

"5" + 5
↓
"55"
```

---

## Example 5

```javascript
console.log(2 + (3 + "5"));
```

### Output

```text
235
```

### Step-by-Step

```text
3 + "5"
↓
"35"

2 + "35"
↓
"235"
```

---

## Example 6

```javascript
console.log("5" + (2 * 3));
```

### Output

```text
56
```

### Step-by-Step

```text
2 × 3
↓
6

"5" + 6
↓
"56"
```

---

# ⚡ Boolean with Numbers

When used in arithmetic operations:

```text
true  → 1
false → 0
```

---

## Example 1

```javascript
console.log(true + 2);
```

### Output

```text
3
```

### Explanation

```text
true
↓
1

1 + 2
↓
3
```

---

## Example 2

```javascript
console.log(false + 2);
```

### Output

```text
2
```

### Explanation

```text
false
↓
0

0 + 2
↓
2
```

---

## Example 3

```javascript
console.log(2 + 3 + true + 6);
```

### Output

```text
12
```

### Step-by-Step

```text
2 + 3
↓
5

5 + true
↓
5 + 1
↓
6

6 + 6
↓
12
```

---

# 📋 Type Coercion Summary

| Expression | Result |
|------------|---------|
| `2 + 3` | `5` |
| `"2" + "3"` | `"23"` |
| `2 + "3"` | `"23"` |
| `"2" + 3` | `"23"` |
| `2 + 3 + "5"` | `"55"` |
| `"5" + 2 + 3` | `"523"` |
| `2 + "5" + 3` | `"253"` |
| `"5" + (2 + 3)` | `"55"` |
| `2 + (3 + "5")` | `"235"` |
| `"5" + (2 * 3)` | `"56"` |
| `true + 2` | `3` |
| `false + 2` | `2` |
| `2 + 3 + true + 6` | `12` |

---

# ⚠️ Important Rules

### Rule 1

```text
If '+' involves a string,
JavaScript converts everything to strings.
```

---

### Rule 2

```text
Other arithmetic operators (-, *, /, %)
convert operands to numbers.
```

---

### Rule 3

```text
Expressions are evaluated
from LEFT to RIGHT.
```

---

### Rule 4

```text
Parentheses () are evaluated first.
```

---

# 🎯 Interview Questions

## What is the difference between `+` and `concat()`?

| `+` Operator | `concat()` |
|-------------|------------|
| More commonly used | Less commonly used |
| Works with numbers and strings | Only for strings |
| Easier to read | Longer syntax |

---

## Why is `"5" + 2 + 3` equal to `"523"`?

Because JavaScript evaluates from **left to right**:

```text
"5" + 2
↓
"52"

"52" + 3
↓
"523"
```

---

# 🚀 Quick Revision

```text
+ with strings       → Concatenation
+ with numbers       → Addition
true                 → 1
false                → 0
Evaluation order     → Left to Right
Parentheses          → Highest Priority
Template literals    → Modern string formatting
```

---

## 💡 Memory Trick

```text
If you see a STRING with '+',
everything after it becomes a STRING.
```

### Example

```javascript
2 + 3 + "4"      // "54"

"2" + 3 + 4      // "234"
```

> 🔥 **Golden Rule:** Always pay attention to **data types** and the **position of strings** in expressions.