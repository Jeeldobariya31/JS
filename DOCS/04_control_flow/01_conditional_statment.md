# 📘 JavaScript Conditional Statements

Conditional statements allow JavaScript to **make decisions** and **control program flow**.

```text
Condition → true → execute code

Condition → false → skip code
```

---

# 🎯 Why Use Conditional Statements?

✅ Make decisions

✅ Control application flow

✅ Validate input

✅ Handle different scenarios

---

# 📚 Types of Conditional Statements

```text
1. if

2. if...else

3. if...else if...else

4. Nested if

5. switch

6. Ternary Operator (?:)

7. Logical Operators

8. Nullish Coalescing (??)

9. Nullish Assignment (??=)

10. Optional Chaining (?.)
```

---

# 1️⃣ Comparison Operators

Used inside conditions.

| Operator | Meaning |
|-----------|----------|
| `>` | Greater than |
| `>=` | Greater than or equal |
| `<` | Less than |
| `<=` | Less than or equal |
| `==` | Loose equality |
| `===` | Strict equality |
| `!=` | Loose inequality |
| `!==` | Strict inequality |

---

## Example

```javascript
console.log(5 > 3);

console.log(5 == "5");

console.log(5 === "5");

console.log(5 !== "5");
```

---

### Output

```text
true

true

false

true
```

---

# ⚠️ `==` vs `===`

---

## Loose Equality

```javascript
5 == "5";
```

---

### Output

```text
true
```

---

## Strict Equality

```javascript
5 === "5";
```

---

### Output

```text
false
```

---

# Recommendation

```text
✔ Use ===

❌ Avoid ==
```

---

# 2️⃣ Truthy and Falsy ⭐⭐⭐

JavaScript automatically converts values into `true` or `false`.

---

# Falsy Values (ONLY 8)

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

---

## Example

```javascript
if ("") {

    console.log("Truthy");

} else {

    console.log("Falsy");
}
```

---

### Output

```text
Falsy
```

---

# Everything Else is Truthy

```javascript
"0"

"false"

" "

[]

{}

function(){}

42

Infinity
```

---

# Examples

```javascript
console.log(Boolean([]));

console.log(Boolean({}));

console.log(Boolean("0"));
```

---

### Output

```text
true

true

true
```

---

# 3️⃣ `if` Statement

Execute code when condition is true.

```javascript
let marks = 75;

if (marks >= 40) {

    console.log("Passed");
}
```

---

### Output

```text
Passed
```

---

# Syntax

```javascript
if (condition) {

    // code
}
```

---

# 4️⃣ `if...else`

Choose between two paths.

```javascript
let age = 17;

if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");
}
```

---

### Output

```text
Minor
```

---

# Syntax

```javascript
if (condition) {

} else {

}
```

---

# 5️⃣ `if...else if...else`

Multiple conditions.

```javascript
let score = 68;

if (score >= 90) {

    console.log("A+");

} else if (score >= 75) {

    console.log("A");

} else if (score >= 60) {

    console.log("B");

} else {

    console.log("C");
}
```

---

### Output

```text
B
```

---

# Flow

```text
Condition 1

↓

Condition 2

↓

Condition 3

↓

else
```

---

# 6️⃣ Nested `if`

An `if` inside another `if`.

```javascript
let isLoggedIn = true;

let isAdmin = false;

if (isLoggedIn) {

    if (isAdmin) {

        console.log("Admin");

    } else {

        console.log("User");
    }

} else {

    console.log("Login First");
}
```

---

### Output

```text
User
```

---

# ⚠️ Avoid Deep Nesting

Bad:

```text
if

↓

if

↓

if

↓

if
```

---

Use:

```text
Early Returns

switch

Functions
```

---

# 7️⃣ Ternary Operator `?:`

Short form of `if...else`.

---

## Syntax

```javascript
condition

?

valueIfTrue

:

valueIfFalse
```

---

## Example

```javascript
let age = 20;

let result = age >= 18

    ? "Adult"

    : "Minor";

console.log(result);
```

---

### Output

```text
Adult
```

---

# Nested Ternary

```javascript
let grade =

    score >= 90

        ? "A+"

        : score >= 75

            ? "A"

            : "B";
```

---

⚠️ Avoid excessive nesting.

---

# 8️⃣ `switch`

Useful when comparing **one variable against many fixed values**.

---

## Example

```javascript
let day = 2;

switch (day) {

    case 1:

        console.log("Monday");

        break;

    case 2:

        console.log("Tuesday");

        break;

    default:

        console.log("Invalid");
}
```

---

### Output

```text
Tuesday
```

---

# Why `break`?

Without it:

```text
Fall-through occurs.
```

---

# Example

```javascript
case 1:

    console.log("A");

case 2:

    console.log("B");
```

---

### Output

```text
A

B
```

---

# 9️⃣ Logical Operators

---

# AND `&&`

Returns true if both are true.

```javascript
true && false
```

---

### Output

```text
false
```

---

# OR `||`

Returns true if at least one is true.

```javascript
false || true
```

---

### Output

```text
true
```

---

# NOT `!`

Reverses boolean value.

```javascript
!true
```

---

### Output

```text
false
```

---

# 📊 Logical Table

| A | B | A && B | A \|\| B |
|---|---|---------|-----------|
| T | T | T | T |
| T | F | F | T |
| F | T | F | T |
| F | F | F | F |

---

# 🔟 Nullish Coalescing `??`

Returns right value **only if left is null or undefined**.

---

## Example

```javascript
let username = null;

console.log(

    username ?? "Guest"
);
```

---

### Output

```text
Guest
```

---

# Difference: `||` vs `??`

---

## OR

```javascript
0 || 100
```

---

### Output

```text
100
```

---

## Nullish

```javascript
0 ?? 100
```

---

### Output

```text
0
```

---

# Summary

| Value | `||` | `??` |
|--------|------|-------|
| `0` | Right | Left |
| `""` | Right | Left |
| `null` | Right | Right |
| `undefined` | Right | Right |

---

# 1️⃣1️⃣ Nullish Assignment `??=`

Assign only if variable is `null` or `undefined`.

---

## Syntax

```javascript
x ??= value;
```

---

## Equivalent

```javascript
if (

    x === null ||

    x === undefined
) {

    x = value;
}
```

---

## Example

```javascript
let a;

a ??= 50;

console.log(a);
```

---

### Output

```text
50
```

---

# 1️⃣2️⃣ Optional Chaining `?.`

Safely access nested properties.

---

## Without Optional Chaining

```javascript
user.address.city
```

---

If address doesn't exist:

```text
TypeError
```

---

## With Optional Chaining

```javascript
user?.address?.city
```

---

### Output

```text
undefined
```

---

# Example

```javascript
const user = {

    name: "Jeel"
};

console.log(

    user?.job?.title
);
```

---

### Output

```text
undefined
```

---

# Method Calls

```javascript
obj?.method?.();
```

---

# 📊 Conditionals Summary

| Statement | Use Case |
|------------|-----------|
| if | Single condition |
| if...else | Two choices |
| else if | Multiple choices |
| Nested if | Dependent checks |
| switch | Fixed value comparisons |
| Ternary | Short conditions |

---

# 🎯 Interview Questions

---

## Difference between `==` and `===`?

```text
==

↓

Type Coercion

===

↓

Type + Value Check
```

---

## List all falsy values.

```text
false

0

-0

0n

""

null

undefined

NaN
```

---

## Is `[]` truthy?

```text
✅ Yes
```

---

## Is `{}` truthy?

```text
✅ Yes
```

---

## Difference between `||` and `??`?

```text
||

↓

Checks all falsy values

??

↓

Checks only null/undefined
```

---

## What is Optional Chaining?

```text
Safe property access operator.
```

---

## When to use switch?

```text
One variable

↓

Many fixed values
```

---

# 🚀 Quick Revision

```text
if

↓

One Decision

else

↓

Two Decisions

else if

↓

Multiple Decisions

switch

↓

Fixed Cases

ternary

↓

Short Decision

??

↓

null / undefined

?. 

↓

Safe Access
```

---

# 💡 Memory Trick

```text
ITS TON

If

Ternary

Switch

Truthy/Falsy

Optional Chaining

Nullish
```

---

# 🏆 Most Important Topics

⭐⭐⭐ Truthy vs Falsy

⭐⭐⭐ `==` vs `===`

⭐⭐⭐ `||` vs `??`

⭐⭐⭐ Optional Chaining

⭐⭐⭐ Ternary Operator

> 🎯 **Golden Rule:**  
> Always prefer **`===`**, use **`??`** when `0` and `""` are valid values, and use **`?.`** to safely access nested properties.