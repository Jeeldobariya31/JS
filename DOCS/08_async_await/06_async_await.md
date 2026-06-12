# 📘 JavaScript Async / Await – Complete Guide

> **`async/await` is syntactic sugar built on top of Promises that makes asynchronous code look synchronous and easier to read.**  
It allows you to write asynchronous code without the need for chaining `.then()` and `.catch()`, making it more intuitive and maintainable.

---

# 🌟 Async Programming Evolution

```text
Callbacks

↓

Promises

↓

Async / Await
```

---

# 🤔 What is `async`?

```javascript
async function greet() {

    return "Hello";
}
```

---

## Important Rule ⭐⭐⭐⭐

```text
Every async function ALWAYS returns a Promise.
```

---

## Equivalent Code

```javascript
async function greet() {

    return "Hello";
}
```

```javascript
function greet() {

    return Promise.resolve("Hello");
}
```

---

# Example

```javascript
async function demo() {

    return 42;
}

demo().then(console.log);
```

---

### Output

```text
42
```

---

# 🤔 What is `await`?

```javascript
const value = await promise;
```

---

## Purpose

```text
Pauses the async function

until the Promise settles.
```

---

# Rules of `await`

```text
✔ Used inside async functions

✔ Waits for Promise completion

✔ Returns resolved value

✔ Throws error if Promise rejects
```

---

# Basic Example

```javascript
function delay() {

    return Promise.resolve("Done");
}

async function run() {

    const result = await delay();

    console.log(result);
}

run();
```

---

### Output

```text
Done
```

---

# Promise vs Async/Await

## Promise Style

```javascript
fetchData()

    .then(result => {

        console.log(result);

    })

    .catch(error => {

        console.error(error);

    });
```

---

## Async/Await Style

```javascript
async function run() {

    try {

        const result = await fetchData();

        console.log(result);

    } catch (error) {

        console.error(error);

    }
}
```

---

# Flow

```text
Promise

↓

then()

↓

catch()
```

---

```text
Async Function

↓

await

↓

try / catch
```

---

# Error Handling ⭐⭐⭐⭐

```javascript
async function demo() {

    try {

        const result = await Promise.reject(

            new Error("Something went wrong")
        );

    } catch (error) {

        console.log(error.message);

    }
}

demo();
```

---

### Output

```text
Something went wrong
```

---

# Why try/catch?

```text
Rejected Promise

↓

await

↓

Throws Error

↓

try / catch handles it
```

---

# Sequential Execution ⭐⭐⭐

```javascript
async function run() {

    await taskA();

    await taskB();

    await taskC();
}
```

---

# Flow

```text
Task A

↓

Task B

↓

Task C
```

---

# Total Time

```text
A + B + C
```

---

# Example

```javascript
await delayTask("A", 1000);

await delayTask("B", 1000);

await delayTask("C", 1000);
```

---

### Approximate Time

```text
3000 ms
```

---

# Parallel Execution ⭐⭐⭐⭐

```javascript
const results = await Promise.all([

    taskA(),

    taskB(),

    taskC()
]);
```

---

# Flow

```text
Task A ─┐
         │
Task B ──┼──→ Results
         │
Task C ─┘
```

---

# Total Time

```text
Longest Task Only
```

---

# Example

```javascript
const [a, b, c] = await Promise.all([

    delayTask("A", 1000),

    delayTask("B", 1000),

    delayTask("C", 1000)
]);
```

---

### Approximate Time

```text
1000 ms
```

---

# Promise.all() ⭐⭐⭐⭐

```javascript
await Promise.all([

    p1,

    p2,

    p3
]);
```

---

## Behavior

```text
Waits for ALL Promises.

↓

Rejects immediately if ANY fail.
```

---

# Promise.allSettled()

```javascript
await Promise.allSettled([

    p1,

    p2,

    p3
]);
```

---

## Behavior

```text
Waits for ALL Promises.

↓

Never rejects.

↓

Returns status of each Promise.
```

---

# Example Output

```javascript
[
    {
        status: "fulfilled",
        value: "OK"
    },

    {
        status: "rejected",
        reason: Error(...)
    }
]
```

---

# Promise.race()

```javascript
await Promise.race([

    p1,

    p2
]);
```

---

## Behavior

```text
First settled Promise wins.

↓

Resolve OR Reject.
```

---

# Promise.any()

```javascript
await Promise.any([

    p1,

    p2,

    p3
]);
```

---

## Behavior

```text
First fulfilled Promise wins.

↓

Rejects only if ALL reject.
```

---

# AggregateError

```text
Thrown by Promise.any()

when all Promises fail.
```

---

# Callback Style

```javascript
function api(value, callback) {

    callback(error, result);
}
```

---

# Problem

```text
Nested callbacks

↓

Callback Hell

↓

Hard to maintain
```

---

# Promisifying Callbacks ⭐⭐⭐

```javascript
function apiPromise(value) {

    return new Promise(

        (resolve, reject) => {

            api(value,

                (err, result) => {

                    if (err) {

                        reject(err);

                    } else {

                        resolve(result);
                    }
                }
            );
        }
    );
}
```

---

# Using Async/Await

```javascript
async function run() {

    try {

        const result = await apiPromise();

        console.log(result);

    } catch (error) {

        console.error(error);

    }
}
```

---

# Event Loop & Async/Await ⭐⭐⭐⭐

```javascript
console.log("A");

Promise.resolve()

    .then(() => console.log("B"));

console.log("C");
```

---

### Output

```text
A

C

B
```

---

# Why?

```text
Promise callbacks

↓

Microtask Queue

↓

Executed before Macrotasks
```

---

# Queues in JavaScript

```text
Call Stack

↓

Microtask Queue
(Promise, await)

↓

Macrotask Queue
(setTimeout, setInterval)
```

---

# Async Function Flow

```text
async function starts

↓

await Promise

↓

Function pauses

↓

Promise resolves

↓

Function resumes
```

---

# Real World Uses

```text
✔ API Calls

✔ Database Queries

✔ Authentication

✔ File Uploads

✔ Delayed Operations

✔ Background Processing
```

---

# Async/Await vs Promise Chains

| Feature | Promise | Async/Await |
|----------|----------|--------------|
| Readability | Moderate | Excellent |
| Error Handling | catch() | try/catch |
| Sequential Code | Harder | Easier |
| Parallel Execution | Promise.all | Promise.all |
| Underlying Mechanism | Promise | Promise |

---

# Interview Questions ⭐⭐⭐⭐

---

## Does async always return a Promise?

```text
YES.

Even return 5 becomes:

Promise.resolve(5)
```

---

## Can await be used outside async?

```text
NO.

Except top-level await in ES Modules.
```

---

## What happens if awaited Promise rejects?

```text
await throws an error.

↓

Handle using try/catch.
```

---

## Difference between async/await and Promises?

```text
Async/Await

↓

Cleaner syntax built on Promises.
```

---

## Difference between Promise.all and Promise.allSettled?

```text
all()

↓

Fails fast.

allSettled()

↓

Always returns all results.
```

---

## Difference between race and any?

```text
race()

↓

First settled wins.

any()

↓

First fulfilled wins.
```

---

## What queue does await use?

```text
Microtask Queue.
```

---

## Why is async/await preferred?

```text
✔ Easier to read

✔ Easier error handling

✔ Looks synchronous

✔ Avoids callback hell
```

---

# Quick Revision 🚀

```text
async

↓

Returns Promise
```

---

```text
await

↓

Wait for Promise
```

---

```text
try

↓

catch

↓

finally
```

---

```text
Parallel Work

↓

Promise.all()
```

---

```text
Need All Results?

↓

Promise.allSettled()
```

---

```text
Need Fastest Result?

↓

Promise.race()
```

---

```text
Need First Success?

↓

Promise.any()
```

---

# 🧠 Memory Trick

```text
AATCF

Async

Await

Try

Catch

Finally
```

---

# Most Important Topics ⭐⭐⭐⭐

```text
⭐⭐⭐⭐ async keyword

⭐⭐⭐⭐ await keyword

⭐⭐⭐⭐ try/catch with await

⭐⭐⭐⭐ Promise.all()

⭐⭐⭐⭐ Promise.allSettled()

⭐⭐⭐ Promise.race()

⭐⭐⭐ Promise.any()

⭐⭐⭐⭐ Sequential vs Parallel

⭐⭐⭐⭐ Microtask Queue

⭐⭐⭐ Promisification
```

> 🎯 **Golden Rule:**  
> `async/await` doesn't replace Promises—it **makes Promises easier to write, read, and maintain.**