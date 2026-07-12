# 📘 JavaScript Strings

Strings are used to store and manipulate **textual data** in JavaScript.

```javascript
let message = "Hello World";
```

> 🔹 Strings are **immutable**, meaning once created, their characters cannot be changed directly.

---

# 🏗️ Creating Strings

JavaScript provides multiple ways to create strings.

---

# 1️⃣ Using Single Quotes (`' '`)

```javascript
let singleQuoteString = 'Hello, world!';

console.log(singleQuoteString);
```

### Output

```text
Hello, world!
```

---

# 2️⃣ Using Double Quotes (`" "`)

```javascript
let doubleQuoteString = "Hello, world!";

console.log(doubleQuoteString);
```

### Output

```text
Hello, world!
```

---

# 3️⃣ Using Template Literals (`` ` ` ``)

Template literals use **backticks**.

```javascript
let templateLiteralString = `Hello, world!`;

console.log(templateLiteralString);
```

### Output

```text
Hello, world!
```

---

## Advantages of Template Literals

✅ Variable interpolation

✅ Multiline strings

✅ Embedded expressions

---

## Example

```javascript
let name = "Jeel";

console.log(`Hello ${name}`);
```

### Output

```text
Hello Jeel
```

---

# 4️⃣ Using String Constructor

```javascript
let constructorString = new String("Hello, world!");

console.log(constructorString.toString());
```

### Output

```text
Hello, world!
```

---

⚠️ **Avoid using `new String()`**

Because:

```javascript
typeof "Hello";                 // string
typeof new String("Hello");     // object
```

---

# 🔗 String Concatenation

Combining strings together.

```javascript
let greeting = "Hello";
let name = "Alice";

let result = greeting + ", " + name + "!";

console.log(result);
```

### Output

```text
Hello, Alice!
```

---

# 🎯 String Interpolation

Using `${}` inside template literals.

```javascript
let age = 30;

let message =
    `My name is ${name} and I am ${age} years old.`;

console.log(message);
```

### Output

```text
My name is Alice and I am 30 years old.
```

---

# 🧪 String Methods

```javascript
let sampleString = "  JavaScript is awesome!  ";
```

---

# 1. `length`

Returns the total number of characters.

```javascript
console.log(sampleString.length);
```

### Output

```text
26
```

---

# 2. `toUpperCase()`

Converts all letters to uppercase.

```javascript
console.log(sampleString.toUpperCase());
```

### Output

```text
"  JAVASCRIPT IS AWESOME!  "
```

---

# 3. `toLowerCase()`

Converts all letters to lowercase.

```javascript
console.log(sampleString.toLowerCase());
```

### Output

```text
"  javascript is awesome!  "
```

---

# 4. `trim()`

Removes spaces from both ends.

```javascript
console.log(sampleString.trim());
```

### Output

```text
"JavaScript is awesome!"
```

---

# 5. `substring(start, end)`

Extracts part of a string.

```javascript
console.log(sampleString.substring(0, 10));
```

### Output

```text
"  JavaScri"
```

---

## Syntax

```javascript
string.substring(start, end)
```

---

# 6. `replace()`

Replaces a specified value.

```javascript
console.log(
    sampleString.replace("awesome", "great")
);
```

### Output

```text
"  JavaScript is great!  "
```

---

# 7. `includes()`

Checks if text exists.

```javascript
console.log(sampleString.includes("Script"));
```

### Output

```text
true
```

---

# 8. `startsWith()` and `endsWith()`

Checks beginning and ending characters.

---

## startsWith()

```javascript
console.log(sampleString.trim().startsWith("J"));
```

### Output

```text
true
```

---

## endsWith()

```javascript
console.log(sampleString.trim().endsWith("!"));
```

### Output

```text
true
```

---

# 9. `charAt()`

Returns a character at a given index.

```javascript
console.log(sampleString.charAt(5));
```

### Output

```text
"S"
```

---

# 10. `indexOf()`

Returns the first occurrence.

```javascript
console.log(sampleString.indexOf("is"));
```

### Output

```text
13
```

---

# 11. `lastIndexOf()`

Returns the last occurrence.

```javascript
console.log(sampleString.lastIndexOf("a"));
```

### Output

```text
17
```

---

# 12. `split()`

Splits a string into an array.

```javascript
console.log(sampleString.trim().split(" "));
```

### Output

```text
["JavaScript", "is", "awesome!"]
```

---

## Split by Characters

```javascript
console.log("Hello".split(""));
```

### Output

```text
["H", "e", "l", "l", "o"]
```

---

# 13. `charCodeAt()`

Returns Unicode value.

```javascript
console.log(sampleString.charCodeAt(5));
```

### Output

```text
83
```

---

## Example

```javascript
console.log("A".charCodeAt(0));
```

### Output

```text
65
```

---

# 14. `repeat()`

Repeats a string.

```javascript
console.log(
    sampleString.trim().repeat(3)
);
```

### Output

```text
JavaScript is awesome!
JavaScript is awesome!
JavaScript is awesome!
```

---

# 15. `slice()`

Extracts a section of a string.

```javascript
console.log(sampleString.slice(2, 12));
```

### Output

```text
JavaScript
```

---

## Negative Indices

```javascript
console.log(sampleString.slice(-10, -1));
```

### Output

```text
awesome!
```

---

# `substring()` vs `slice()`

| Feature | `substring()` | `slice()` |
|----------|---------------|------------|
| Negative Index | ❌ No | ✅ Yes |
| Swaps Arguments | ✅ Yes | ❌ No |

---

# 16. `padStart()` and `padEnd()`

Pads a string to a specified length.

---

## padStart()

```javascript
console.log(
    sampleString.trim().padStart(30, "-")
);
```

### Output

```text
--------JavaScript is awesome!
```

---

## padEnd()

```javascript
console.log(
    sampleString.trim().padEnd(30, "-")
);
```

### Output

```text
JavaScript is awesome!--------
```

---

# 📊 Common String Methods

| Method | Purpose |
|---------|----------|
| `length` | Total characters |
| `toUpperCase()` | Uppercase |
| `toLowerCase()` | Lowercase |
| `trim()` | Remove spaces |
| `substring()` | Extract text |
| `slice()` | Extract text |
| `replace()` | Replace text |
| `includes()` | Search text |
| `startsWith()` | Check beginning |
| `endsWith()` | Check ending |
| `charAt()` | Get character |
| `indexOf()` | First occurrence |
| `lastIndexOf()` | Last occurrence |
| `split()` | Convert to array |
| `charCodeAt()` | Unicode value |
| `repeat()` | Repeat text |
| `padStart()` | Pad at beginning |
| `padEnd()` | Pad at end |

---

# ⚠️ String Immutability

Strings cannot be modified directly.

---

## Example

```javascript
let str = "Hello";

str[0] = "Y";

console.log(str);
```

### Output

```text
Hello
```

---

## Correct Way

```javascript
str = "Y" + str.slice(1);

console.log(str);
```

### Output

```text
Yello
```

---

# 🎯 Interview Questions

### Are strings mutable?

❌ No.

They are **immutable**.

---

### Difference between `slice()` and `substring()`?

| `slice()` | `substring()` |
|------------|---------------|
| Supports negative indexes | Does not |
| Does not swap arguments | Swaps arguments |

---

### Why avoid `new String()`?

Because it creates an **object**, not a primitive string.

```javascript
typeof "Hello";               // string
typeof new String("Hello");   // object
```

---

# 🚀 Quick Revision

```text
' '      → Single quotes
" "      → Double quotes
` `      → Template literals

length   → Total characters
trim()   → Remove spaces
split()  → Convert to array
replace()→ Replace text
slice()  → Extract text
repeat() → Repeat text

Strings are IMMUTABLE.
```

---

## 💡 Memory Trick

```text
L T U L R S

Length
Trim
Uppercase
Lowercase
Replace
Split
```

> 🔥 **Golden Rule:** Most string methods return a **new string** and leave the original string unchanged.