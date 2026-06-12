# 📘 JavaScript Array Higher-Order Functions (HOF)

Array Higher-Order Functions (HOFs) are methods that **accept callback functions** and operate on array elements.

```text
HOF = Function that takes another function as an argument
```

---

# 🎯 What is a Higher-Order Function?

A function is called a **Higher-Order Function** if it:

```text
✔ Accepts another function as an argument

OR

✔ Returns another function
```

---

# Array Higher-Order Functions

```text
1. forEach()

2. map()

3. filter()

4. reduce()
```

---

# Common Characteristics

```text
✔ Iterate through arrays

✔ Use callback functions

✔ Improve readability

✔ Reduce boilerplate code

✔ Mostly non-mutating
```

---

# 1️⃣ `forEach()`

Used for **looping** through array elements.

---

## Syntax

```javascript
array.forEach(

    (

        element,

        index,

        array
    ) => {

        // code
    }
);
```

---

# Parameters

| Parameter | Description |
|------------|-------------|
| element | Current element |
| index | Current index |
| array | Original array |

---

# Example

```javascript
const nums = [

    10,

    20,

    30
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
0 10

1 20

2 30
```

---

# Return Value

```javascript
const result = nums.forEach(() => {});

console.log(result);
```

---

### Output

```text
undefined
```

---

# Use Cases

```text
✔ Logging

✔ Updating DOM

✔ Side Effects
```

---

# Limitations

```text
❌ No return value

❌ Cannot use break

❌ Cannot use continue
```

---

# 2️⃣ `map()` ⭐⭐⭐

Transforms elements into a **new array**.

---

## Syntax

```javascript
array.map(

    (

        element,

        index,

        array
    ) => {

        return transformedValue;
    }
);
```

---

# Example

```javascript
const nums = [

    1,

    2,

    3,

    4
];

const doubled = nums.map(

    n => n * 2
);

console.log(doubled);
```

---

### Output

```text
[2, 4, 6, 8]
```

---

# Original Array

```javascript
console.log(nums);
```

---

### Output

```text
[1, 2, 3, 4]
```

---

# Returning Objects

```javascript
const users = [

    "Jeel",

    "Asha",

    "Ravi"
];

const objects = users.map(

    name => ({

        name
    })
);
```

---

### Output

```javascript
[
    { name: "Jeel" },

    { name: "Asha" },

    { name: "Ravi" }
]
```

---

# Use Cases

```text
✔ Data Transformation

✔ Formatting API Data

✔ Creating JSX Lists (React)
```

---

# 3️⃣ `filter()` ⭐⭐⭐

Keeps elements that satisfy a condition.

---

## Syntax

```javascript
array.filter(

    (

        element,

        index,

        array
    ) => {

        return condition;
    }
);
```

---

# Example

```javascript
const marks = [

    30,

    45,

    80,

    10,

    60
];

const passed = marks.filter(

    mark => mark >= 40
);

console.log(passed);
```

---

### Output

```text
[45, 80, 60]
```

---

# Original Array

```javascript
console.log(marks);
```

---

### Output

```text
[30, 45, 80, 10, 60]
```

---

# Use Cases

```text
✔ Search Results

✔ Validation

✔ Remove Unwanted Data
```

---

# 4️⃣ `reduce()` ⭐⭐⭐⭐⭐

Reduces an array into **one final value**.

---

## Syntax

```javascript
array.reduce(

    (

        accumulator,

        currentValue,

        index,

        array
    ) => {

        return newAccumulator;
    },

    initialValue
);
```

---

# Parameters

| Parameter | Description |
|------------|-------------|
| accumulator | Previous result |
| currentValue | Current element |
| index | Current index |
| initialValue | Starting value |

---

# Sum Example

```javascript
const nums = [

    10,

    20,

    30
];

const total = nums.reduce(

    (

        acc,

        value
    ) => {

        return acc + value;
    },

    0
);

console.log(total);
```

---

### Output

```text
60
```

---

# Reduce Flow

```text
Initial Value = 0

↓

0 + 10 = 10

↓

10 + 20 = 30

↓

30 + 30 = 60
```

---

# Finding Maximum

```javascript
const nums = [

    10,

    20,

    30
];

const max = nums.reduce(

    (

        biggest,

        value
    ) =>

        value > biggest

            ? value

            : biggest
);
```

---

### Output

```text
30
```

---

# Frequency Counter Example

```javascript
const letters = [

    "a",

    "b",

    "a",

    "c",

    "b",

    "a"
];

const frequency = letters.reduce(

    (

        acc,

        ch
    ) => {

        acc[ch] = (

            acc[ch] || 0
        ) + 1;

        return acc;
    },

    {}
);
```

---

### Output

```javascript
{
    a: 3,

    b: 2,

    c: 1
}
```

---

# Execution Flow

---

# `forEach()`

```text
Element

↓

Callback Executes

↓

No Return Used
```

---

# `map()`

```text
Element

↓

Transform

↓

Collect Result

↓

New Array
```

---

# `filter()`

```text
Element

↓

Condition Check

↓

true  → Keep

false → Remove
```

---

# `reduce()`

```text
Accumulator

↓

Current Value

↓

Return New Accumulator

↓

Repeat

↓

Final Value
```

---

# Comparison Table ⭐⭐⭐

| Feature | forEach | map | filter | reduce |
|----------|----------|-----|---------|---------|
| Returns New Array | ❌ | ✅ | ✅ | ❌ |
| Returns Single Value | ❌ | ❌ | ❌ | ✅ |
| Used for Transformation | ❌ | ✅ | ❌ | ⚠️ |
| Used for Filtering | ❌ | ❌ | ✅ | ⚠️ |
| Used for Side Effects | ✅ | ❌ | ❌ | ❌ |
| Can Replace Others | ❌ | ❌ | ❌ | ✅ |

---

# Real-World Examples

---

# Add GST

```javascript
const prices = [

    100,

    200,

    300
];

const withGST = prices.map(

    price => price * 1.18
);
```

---

### Output

```text
[118, 236, 354]
```

---

# Filter Odd Numbers

```javascript
const odds = [

    1,

    2,

    3,

    4,

    5
].filter(

    n => n % 2 !== 0
);
```

---

### Output

```text
[1, 3, 5]
```

---

# Recreating `map()`

```javascript
function myMap(

    arr,

    callback
) {

    const result = [];

    for (

        let i = 0;

        i < arr.length;

        i++
    ) {

        result.push(

            callback(

                arr[i],

                i
            )
        );
    }

    return result;
}
```

---

# Recreating `filter()`

```javascript
function myFilter(

    arr,

    callback
) {

    const result = [];

    for (

        let i = 0;

        i < arr.length;

        i++
    ) {

        if (

            callback(

                arr[i],

                i
            )
        ) {

            result.push(

                arr[i]
            );
        }
    }

    return result;
}
```

---

# Recreating `reduce()`

```javascript
function myReduce(

    arr,

    callback,

    initialValue
) {

    let acc = initialValue;

    for (

        let i = 0;

        i < arr.length;

        i++
    ) {

        acc = callback(

            acc,

            arr[i],

            i
        );
    }

    return acc;
}
```

---

# 🎯 Interview Questions

---

## Difference between `map()` and `forEach()`?

```text
map()

↓

Returns New Array

forEach()

↓

Returns undefined
```

---

## Difference between `filter()` and `find()`?

```text
filter()

↓

Returns ALL matches

find()

↓

Returns FIRST match
```

---

## Can `map()` modify original array?

```text
❌ No

Unless callback manually mutates objects.
```

---

## Does `reduce()` always return a number?

```text
❌ No

Can return:

✔ Object

✔ Array

✔ String

✔ Boolean

✔ Number
```

---

## What is an accumulator?

```text
Value carried forward between reduce iterations.
```

---

## Why can't `forEach()` use break?

```text
Because it is an iterator method,

not a loop statement.
```

---

## What happens if `map()` callback doesn't return?

```javascript
[undefined, undefined, undefined]
```

---

## Which HOF is most powerful?

```text
reduce()
```

---

# 🚀 Quick Revision

```text
forEach

↓

Loop Only

map

↓

Transform

filter

↓

Select

reduce

↓

Combine
```

---

# 💡 Memory Trick

```text
LTSC

Loop

Transform

Select

Combine
```

---

# 🏆 Most Important Topics

⭐⭐⭐ `map()`

⭐⭐⭐ `filter()`

⭐⭐⭐⭐ `reduce()`

⭐⭐⭐ `forEach()`

⭐⭐⭐ Callback Functions

> 🎯 **Golden Rule:**  
> Use **`forEach()` to perform actions**, **`map()` to transform**, **`filter()` to select**, and **`reduce()` to combine data into a single result**.