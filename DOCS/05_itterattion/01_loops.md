# 📘 JavaScript Loops

Loops are used to **execute a block of code repeatedly** until a condition becomes false.

```text
Loop = Repeat Code Efficiently
```

---

# 🎯 Why Use Loops?

✅ Reduce code duplication

✅ Process arrays and objects

✅ Generate patterns

✅ Perform repetitive tasks

---

# 📚 Types of Loops

```text
1. for

2. while

3. do...while

4. for...of

5. for...in

Extra:
✔ break
✔ continue
✔ forEach
```

---

# 1️⃣ `for` Loop

Most commonly used loop.

---

## Syntax

```javascript
for (

    initialization;

    condition;

    update
) {

    // code
}
```

---

# Flow

```text
Initialization
      ↓

Condition Check
      ↓

Execute Code
      ↓

Update
      ↓

Repeat
```

---

# Example

```javascript
for (

    let i = 1;

    i <= 5;

    i++
) {

    console.log(i);
}
```

---

### Output

```text
1
2
3
4
5
```

---

# Reverse Counting

```javascript
for (

    let i = 5;

    i >= 1;

    i--
) {

    console.log(i);
}
```

---

### Output

```text
5
4
3
2
1
```

---

# 2️⃣ `while` Loop

Runs **while the condition remains true**.

---

## Syntax

```javascript
while (condition) {

    // code

    update;
}
```

---

## Example

```javascript
let count = 1;

while (count <= 3) {

    console.log(count);

    count++;
}
```

---

### Output

```text
1
2
3
```

---

# Flow

```text
Condition
    ↓

Code
    ↓

Update
    ↓

Repeat
```

---

# ⚠️ Infinite Loop Risk

```javascript
while (true) {

    console.log("Never Ends");
}
```

---

# Avoid By

```text
✔ Updating Variables

✔ Proper Conditions

✔ Using break
```

---

# 3️⃣ `do...while` Loop

Runs **at least once**.

---

## Syntax

```javascript
do {

    // code

} while (condition);
```

---

## Example

```javascript
let num = 1;

do {

    console.log(num);

    num++;

} while (num <= 3);
```

---

### Output

```text
1
2
3
```

---

# Condition False Initially

```javascript
let x = 10;

do {

    console.log(x);

} while (x < 5);
```

---

### Output

```text
10
```

---

# Difference

| Loop | Minimum Executions |
|-------|--------------------|
| while | 0 |
| do...while | 1 |

---

# 4️⃣ `break`

Stops loop immediately.

---

## Example

```javascript
for (

    let i = 1;

    i <= 10;

    i++
) {

    if (i === 5) {

        break;
    }

    console.log(i);
}
```

---

### Output

```text
1
2
3
4
```

---

# Use Cases

```text
✔ Searching

✔ Validation

✔ Early Exit
```

---

# 5️⃣ `continue`

Skips current iteration.

---

## Example

```javascript
for (

    let i = 1;

    i <= 5;

    i++
) {

    if (i === 3) {

        continue;
    }

    console.log(i);
}
```

---

### Output

```text
1
2
4
5
```

---

# Difference

| Keyword | Action |
|----------|---------|
| break | Exit Loop |
| continue | Skip Iteration |

---

# 6️⃣ Nested Loops

Loop inside another loop.

---

## Example

```javascript
for (

    let row = 1;

    row <= 3;

    row++
) {

    for (

        let col = 1;

        col <= 3;

        col++
    ) {

        console.log(

            row,

            col
        );
    }
}
```

---

### Output

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

---

# Use Cases

```text
✔ Matrices

✔ Pattern Programs

✔ Tables
```

---

# 7️⃣ `for...of` ⭐⭐⭐

Used for **iterables**.

---

# Works With

```text
✔ Arrays

✔ Strings

✔ Maps

✔ Sets
```

---

## Syntax

```javascript
for (

    const value

    of iterable
) {

}
```

---

## Array Example

```javascript
const nums = [

    10,

    20,

    30
];

for (

    const value

    of nums
) {

    console.log(value);
}
```

---

### Output

```text
10
20
30
```

---

# String Example

```javascript
for (

    const ch

    of "Jeel"
) {

    console.log(ch);
}
```

---

### Output

```text
J
e
e
l
```

---

# 8️⃣ `for...in`

Used for **object keys**.

---

## Syntax

```javascript
for (

    const key

    in object
) {

}
```

---

## Example

```javascript
const student = {

    name: "Jeel",

    age: 21
};

for (

    const key

    in student
) {

    console.log(

        key,

        student[key]
    );
}
```

---

### Output

```text
name Jeel

age 21
```

---

# Arrays with `for...in`

```javascript
const arr = [

    "a",

    "b",

    "c"
];

for (

    const index

    in arr
) {

    console.log(index);
}
```

---

### Output

```text
0
1
2
```

---

⚠️ Avoid for arrays.

Use:

```text
for...of
```

instead.

---

# `for...of` vs `for...in`

| Feature | for...of | for...in |
|----------|-----------|-----------|
| Returns | Values | Keys |
| Arrays | ✅ | ⚠️ |
| Objects | ❌ | ✅ |
| Strings | ✅ | ❌ |
| Maps | ✅ | ❌ |
| Sets | ✅ | ❌ |

---

# 9️⃣ `forEach()`

Array method.

---

## Syntax

```javascript
array.forEach(

    (

        value,

        index
    ) => {

    }
);
```

---

## Example

```javascript
const nums = [

    5,

    10,

    15
];

nums.forEach(

    (

        value,

        index
    ) => {

        console.log(

            index,

            value
        );
    }
);
```

---

### Output

```text
0 5
1 10
2 15
```

---

# ⚠️ Limitation

Cannot use:

```text
break

continue
```

---

# 🔟 Sum of Array

```javascript
const nums = [

    1,

    2,

    3,

    4,

    5
];

let total = 0;

for (

    const n

    of nums
) {

    total += n;
}

console.log(total);
```

---

### Output

```text
15
```

---

# 1️⃣1️⃣ Find First Even Number

```javascript
const nums = [

    1,

    3,

    7,

    8,

    10
];

let even = null;

for (

    const n

    of nums
) {

    if (n % 2 === 0) {

        even = n;

        break;
    }
}

console.log(even);
```

---

### Output

```text
8
```

---

# 📊 Which Loop to Use?

| Situation | Best Choice |
|------------|-------------|
| Known Count | `for` |
| Unknown Count | `while` |
| Must Run Once | `do...while` |
| Array Values | `for...of` |
| Object Keys | `for...in` |
| Array Method Style | `forEach` |

---

# 🎯 Interview Questions

---

## Difference between `for` and `while`?

```text
for

↓

Known Iterations

while

↓

Unknown Iterations
```

---

## Difference between `while` and `do...while`?

```text
while

↓

May run 0 times

do...while

↓

Runs at least once
```

---

## Difference between `for...of` and `for...in`?

```text
for...of

↓

Values

for...in

↓

Keys
```

---

## What is an Infinite Loop?

```text
Loop that never terminates.
```

---

## How to stop a loop?

```text
break
```

---

## How to skip an iteration?

```text
continue
```

---

## Is `forEach()` a loop?

```text
No.

It is an Array Method that internally iterates.
```

---

## Can `break` be used in `forEach()`?

```text
❌ No
```

---

# 🚀 Quick Revision

```text
for

↓

Known Count

while

↓

Condition-Based

do...while

↓

Runs Once Minimum

for...of

↓

Values

for...in

↓

Keys

break

↓

Exit Loop

continue

↓

Skip Iteration
```

---

# 💡 Memory Trick

```text
FWD FBC

For

While

Do-while

For-of

Break

Continue
```

---

# 🏆 Most Important Topics

⭐⭐⭐ `for` Loop

⭐⭐⭐ `for...of`

⭐⭐⭐ `for...in`

⭐⭐⭐ `break`

⭐⭐⭐ `continue`

> 🎯 **Golden Rule:**  
> Use **`for...of` for values**, **`for...in` for object keys**, and choose the simplest loop that clearly expresses your intent.

