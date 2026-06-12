# 📘 JavaScript Built-in Promises – Complete Guide

> **Promises are built-in JavaScript objects used to handle asynchronous operations more cleanly than callbacks.**  


---

# 🤔 What is a Promise?

```text
A Promise is an object representing the eventual
success or failure of an asynchronous operation.
```

---

# Promise States ⭐⭐⭐⭐

```text
PENDING

↓

FULFILLED

OR

↓

REJECTED
```

---

# Promise Lifecycle

```text
new Promise()

↓

Pending

↓

resolve(value)

↓

Fulfilled

OR

↓

reject(error)

↓

Rejected
```

---

# Creating a Promise

```javascript
const promise = new Promise(

    (resolve, reject) => {

        // async work

        if (success) {

            resolve(value);

        } else {

            reject(error);
        }
    }
);
```

---

# Consuming a Promise

```javascript
promise

    .then(onSuccess)

    .catch(onError)

    .finally(onFinally);
```

---

# Promise Methods

| Method | Purpose |
|---------|----------|
| `.then()` | Handle success |
| `.catch()` | Handle errors |
| `.finally()` | Cleanup logic |

---

# then()

```javascript
promise.then(result => {

    console.log(result);

});
```

---

## Purpose

```text
Runs when Promise is fulfilled.
```

---

# catch()

```javascript
promise.catch(error => {

    console.log(error);

});
```

---

## Purpose

```text
Runs when Promise is rejected.
```

---

# finally()

```javascript
promise.finally(() => {

    cleanup();
});
```

---

## Purpose

```text
Runs regardless of success or failure.
```

---

# Promise Chaining ⭐⭐⭐⭐

```javascript
Promise.resolve(1)

    .then(value => value + 1)

    .then(value => value * 10)

    .then(console.log);
```

---

### Output

```text
20
```

---

# Flow

```text
Promise

↓

then()

↓

then()

↓

then()
```

---

# Important Rule ⭐⭐⭐

```text
then() ALWAYS returns a NEW Promise.
```

---

# Returning Another Promise

```javascript
Promise.resolve(10)

    .then(value => {

        return new Promise(resolve => {

            resolve(value + 5);

        });

    })

    .then(console.log);
```

---

### Output

```text
15
```

---

# Error Propagation ⭐⭐⭐⭐

```javascript
Promise.resolve()

    .then(() => {

        throw new Error("Boom");

    })

    .catch(error => {

        console.log(error.message);

    });
```

---

### Output

```text
Boom
```

---

# Flow

```text
then()

↓

throw Error

↓

catch()
```

---

# Recovering From Errors

```javascript
Promise.reject("Error")

    .catch(() => {

        return "Recovered";

    })

    .then(console.log);
```

---

### Output

```text
Recovered
```

---

# Promise.resolve()

```javascript
Promise.resolve(100)

    .then(console.log);
```

---

### Output

```text
100
```

---

# Purpose

```text
Creates an already fulfilled Promise.
```

---

# Promise.reject()

```javascript
Promise.reject(

    new Error("Failed")
)

.catch(console.log);
```

---

# Purpose

```text
Creates an already rejected Promise.
```

---

# Promise.all() ⭐⭐⭐⭐

```javascript
Promise.all([

    p1,

    p2,

    p3
]);
```

---

# Behavior

```text
Waits for ALL promises.

↓

If all succeed

↓

Resolve with array.

↓

If ANY fails

↓

Reject immediately.
```

---

# Example

```javascript
Promise.all([

    Promise.resolve(1),

    Promise.resolve(2)

])

.then(console.log);
```

---

### Output

```text
[1, 2]
```

---

# Promise.all Failure

```javascript
Promise.all([

    Promise.resolve(1),

    Promise.reject("Error")

])

.catch(console.log);
```

---

### Output

```text
Error
```

---

# Promise.allSettled() ⭐⭐⭐⭐

```javascript
Promise.allSettled([

    p1,

    p2,

    p3
]);
```

---

# Behavior

```text
Waits for ALL promises.

↓

Never rejects.

↓

Returns status for each Promise.
```

---

# Example Output

```javascript
[
    {
        status: "fulfilled",
        value: 10
    },

    {
        status: "rejected",
        reason: Error(...)
    }
]
```

---

# Promise.race() ⭐⭐⭐

```javascript
Promise.race([

    p1,

    p2,

    p3
]);
```

---

# Behavior

```text
First settled Promise wins.

↓

Resolve OR Reject.
```

---

# Example

```javascript
Promise.race([

    fastPromise,

    slowPromise
]);
```

---

### Output

```text
Result from fastPromise
```

---

# Promise.any() ⭐⭐⭐⭐

```javascript
Promise.any([

    p1,

    p2,

    p3
]);
```

---

# Behavior

```text
First fulfilled Promise wins.

↓

Ignores rejections.

↓

Rejects only if ALL fail.
```

---

# Example

```javascript
Promise.any([

    Promise.reject(),

    Promise.resolve("OK")
])

.then(console.log);
```

---

### Output

```text
OK
```

---

# If All Reject

```text
AggregateError
```

---

# Promise Helper Comparison

| Method | Success Condition |
|----------|-------------------|
| `all()` | All fulfilled |
| `allSettled()` | All settled |
| `race()` | First settled |
| `any()` | First fulfilled |

---

# Promise vs setTimeout ⭐⭐⭐⭐

```javascript
Promise.resolve()

    .then(() => console.log("Promise"));

setTimeout(() => {

    console.log("Timeout");

}, 0);
```

---

### Output

```text
Promise

Timeout
```

---

# Why?

```text
Promise callbacks

↓

Microtask Queue

↓

Higher priority

↓

setTimeout

↓

Macrotask Queue
```

---

# Event Loop Flow

```text
Synchronous Code

↓

Microtasks

(Promise.then)

↓

Macrotasks

(setTimeout)
```

---

# Callback Style

```javascript
function api(callback) {

    callback(error, result);
}
```

---

# Problem

```text
Callback Hell

↓

Nested Code

↓

Hard Error Handling
```

---

# Promisifying Callbacks ⭐⭐⭐

```javascript
function promisified() {

    return new Promise(

        (resolve, reject) => {

            callbackAPI((err, result) => {

                if (err) {

                    reject(err);

                } else {

                    resolve(result);
                }
            });

        }
    );
}
```

---

# Usage

```javascript
promisified()

    .then(console.log)

    .catch(console.error);
```

---

# Promise Execution Order

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
Promise callbacks are asynchronous.

↓

Microtask Queue.
```

---

# Real-World Uses

```text
✔ API Requests

✔ Database Queries

✔ File Operations

✔ Authentication

✔ Delayed Tasks

✔ Background Processing
```

---

# Promise States Summary

```text
Pending

↓

Fulfilled

(resolve)

OR

↓

Rejected

(reject)
```

---

# Interview Questions ⭐⭐⭐⭐

---

## What is a Promise?

```text
An object representing the eventual result

of an asynchronous operation.
```

---

## Promise States?

```text
Pending

Fulfilled

Rejected
```

---

## What does `then()` return?

```text
A NEW Promise.
```

---

## Difference between `then()` and `catch()`?

```text
then()

↓

Handles success.

catch()

↓

Handles errors.
```

---

## Difference between `all()` and `allSettled()`?

```text
all()

↓

Fails fast.

allSettled()

↓

Waits for everything.
```

---

## Difference between `race()` and `any()`?

```text
race()

↓

First settled wins.

any()

↓

First fulfilled wins.
```

---

## Where do Promise callbacks execute?

```text
Microtask Queue.
```

---

## Why do Promises avoid callback hell?

```text
Because they support chaining

and centralized error handling.
```

---

## How to convert callbacks into Promises?

```text
Wrap callback logic

inside new Promise().
```

---

# Quick Revision

```text
Promise

↓

then()

↓

then()

↓

catch()

↓

finally()
```

---

```text
Promise Helpers

↓

all()

↓

allSettled()

↓

race()

↓

any()
```

---

# 💡 Memory Trick

```text
PTCF

Promise

Then

Catch

Finally
```

---

# 🏆 Most Important Topics

⭐⭐⭐⭐ Promise States

⭐⭐⭐⭐ `then()`

⭐⭐⭐⭐ `catch()`

⭐⭐⭐ `finally()`

⭐⭐⭐⭐ Promise Chaining

⭐⭐⭐⭐ Error Propagation

⭐⭐⭐⭐ `Promise.all()`

⭐⭐⭐⭐ `Promise.allSettled()`

⭐⭐⭐ `Promise.race()`

⭐⭐⭐⭐ `Promise.any()`

⭐⭐⭐⭐ Microtask Queue

⭐⭐⭐ Promisification

> 🎯 **Golden Rule:**  
> Promises make asynchronous code **readable, chainable, and easier to manage**, with powerful built-in helpers for handling multiple async operations.