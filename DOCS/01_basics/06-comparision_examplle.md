# 📘 JavaScript Comparison Operators & Equality

Comparison operators compare two values and return a **Boolean** value:

```text
true
false
```

---

# 🔍 Comparison Operators

| Operator | Meaning | Example |
|-----------|----------|----------|
| `==` | Equal (with type coercion) | `5 == "5"` |
| `===` | Strict Equal (value + type) | `5 === "5"` |
| `!=` | Not Equal (with type coercion) | `5 != "3"` |
| `!==` | Strict Not Equal | `5 !== "5"` |
| `>` | Greater Than | `5 > 3` |
| `<` | Less Than | `5 < 3` |
| `>=` | Greater Than or Equal | `5 >= 5` |
| `<=` | Less Than or Equal | `5 <= 5` |

---

# 1️⃣ Comparing Numbers

```javascript
console.log(5 == 5);
console.log(5 === 5);
console.log(5 != 3);
console.log(5 !== 3);
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 3);
```

## Output

```text
true
true
true
true
true
false
true
false
```

---

# 📌 Equality vs Strict Equality

## Loose Equality (`==`)

Compares values **after type conversion**.

```javascript
console.log(5 == "5");
```

### Output

```text
true
```

Because:

```text
"5"
↓
5

5 == 5
↓
true
```

---

## Strict Equality (`===`)

Compares **value and data type**.

```javascript
console.log(5 === "5");
```

### Output

```text
false
```

Because:

```text
Number ≠ String
```

---

# ⚠️ Golden Rule

```text
Always prefer === and !==
```

because they avoid unexpected type coercion.

---

# 2️⃣ Comparing Strings

Strings are compared **lexicographically** (dictionary order).

---

## Examples

```javascript
console.log('apple' == 'apple');
console.log('apple' === 'Apple');
console.log('apple' != 'banana');
console.log('apple' > 'banana');
console.log('apple' < 'banana');
console.log('apple' >= 'apple');
console.log('apple' <= 'Apple');
```

---

## Output

```text
true
false
true
false
true
true
false
```

---

# 📖 Lexicographical Comparison

JavaScript compares strings using **Unicode values**.

---

## Example

```javascript
console.log("a" > "b");
```

### Output

```text
false
```

Because:

```text
Unicode('a') = 97
Unicode('b') = 98
```

---

## Uppercase vs Lowercase

```javascript
console.log("A" < "a");
```

### Output

```text
true
```

Because:

```text
Unicode('A') = 65
Unicode('a') = 97
```

---

# 3️⃣ Comparing Different Data Types

---

## Number and String

```javascript
console.log(5 == "5");
console.log(5 === "5");
```

### Output

```text
true
false
```

---

## Boolean and Number

```javascript
console.log(0 == false);
console.log(0 === false);
```

### Output

```text
true
false
```

Because:

```text
false → 0
```

---

## null and undefined

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

### Output

```text
true
false
```

---

## NaN Comparisons

```javascript
console.log(NaN == NaN);
console.log(NaN === NaN);
```

### Output

```text
false
false
```

---

# ⚠️ Special Case: NaN

```text
NaN is NEVER equal to anything,
including itself.
```

---

## Correct Way to Check NaN

```javascript
console.log(Number.isNaN(NaN));
```

### Output

```text
true
```

---

# 4️⃣ null Comparisons

---

## Examples

```javascript
console.log(null > 0);
console.log(null < 0);
console.log(null == 0);
console.log(null <= 0);
console.log(null >= 0);
console.log(null != 0);
console.log(null !== 0);
console.log(null === 0);
```

---

## Output

```text
false
false
false
true
true
true
true
false
```

---

# 🤔 Why?

Relational comparisons convert:

```text
null → 0
```

So:

```javascript
null >= 0
```

becomes

```javascript
0 >= 0
```

↓

```text
true
```

---

But:

```javascript
null == 0
```

does **NOT** convert `null` to `0`.

↓

```text
false
```

---

# 📌 Important Rule

```text
null == undefined → true

null == anything else → false
```

---

# 5️⃣ undefined Comparisons

---

## Examples

```javascript
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined != 0);
console.log(undefined !== 0);
console.log(undefined === 0);
```

---

## Output

```text
false
false
false
false
false
true
true
false
```

---

# 📌 Why?

```text
undefined → NaN
```

And:

```text
Any comparison involving NaN is false.
```

---

# 6️⃣ Boolean Comparisons

---

## Examples

```javascript
console.log(true == 1);
console.log(true === 1);

console.log(false == 0);
console.log(false === 0);
```

---

## Output

```text
true
false

true
false
```

---

# Boolean Conversion

```text
true  → 1
false → 0
```

---

## Relational Examples

```javascript
console.log(true > false);
console.log(true < false);
console.log(true >= true);
console.log(false <= false);
```

---

## Output

```text
true
false
true
true
```

---

# 7️⃣ Comparing Objects

Objects are compared by **reference**, NOT by content.

---

## Example

```javascript
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };

console.log(obj1 == obj2);
console.log(obj1 === obj2);
```

---

## Output

```text
false
false
```

---

## Why?

```text
Different memory locations.
```

---

### Memory Representation

```text
obj1 → Address A

obj2 → Address B
```

---

## Same Reference

```javascript
let obj3 = obj1;

console.log(obj1 == obj3);
console.log(obj1 === obj3);
```

---

## Output

```text
true
true
```

---

# 8️⃣ Comparing Arrays

Arrays are also objects.

---

## Example

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 == arr2);
console.log(arr1 === arr2);
```

---

## Output

```text
false
false
```

---

Because:

```text
Different references.
```

---

## Same Reference

```javascript
let arr3 = arr1;

console.log(arr1 == arr3);
console.log(arr1 === arr3);
```

---

## Output

```text
true
true
```

---

# 9️⃣ Comparing Functions

Functions are objects too.

---

## Example

```javascript
let func1 = function() {
    return 1;
};

let func2 = function() {
    return 1;
};

console.log(func1 == func2);
console.log(func1 === func2);
```

---

## Output

```text
false
false
```

---

Because:

```text
Different references.
```

---

## Same Reference

```javascript
let func3 = func1;

console.log(func1 == func3);
console.log(func1 === func3);
```

---

## Output

```text
true
true
```

---

# 📊 Summary Table

| Expression | Result |
|------------|---------|
| `5 == "5"` | `true` |
| `5 === "5"` | `false` |
| `0 == false` | `true` |
| `0 === false` | `false` |
| `null == undefined` | `true` |
| `null === undefined` | `false` |
| `NaN == NaN` | `false` |
| `NaN === NaN` | `false` |
| `null >= 0` | `true` |
| `null == 0` | `false` |
| `undefined >= 0` | `false` |
| `true == 1` | `true` |
| `false == 0` | `true` |
| `{} == {}` | `false` |
| `[] == []` | `false` |
| `function(){} == function(){}` | `false` |

---

# 🎯 Interview Questions

### Why is `NaN === NaN` false?

Because:

```text
NaN is not equal to anything,
including itself.
```

Use:

```javascript
Number.isNaN(value);
```

---

### Why are two identical objects not equal?

Because objects are compared using:

```text
Reference Equality
```

not:

```text
Value Equality
```

---

### Which should we use: `==` or `===`?

✅ Use:

```javascript
===
!==
```

Avoid:

```javascript
==
!=
```

---

# 🚀 Quick Revision

```text
==    → Value only (coercion)

===   → Value + Type

Objects/Arrays/Functions
       → Compared by Reference

null == undefined
       → true

NaN === NaN
       → false

Always prefer ===
```

---

## 💡 Memory Trick

```text
Primitives → Compare Values

Objects    → Compare References
```

> 🔥 **Golden Rule:**  
> If you're unsure, use **`===`** instead of **`==`**.