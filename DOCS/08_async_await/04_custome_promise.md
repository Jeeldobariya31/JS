# 📘 JavaScript Custom Promises (`new Promise()`) – Complete Guide

> **Custom Promises allow you to create your own asynchronous operations using `new Promise()`.**  


---

# 🤔 What is a Promise?

```text
A Promise is an object representing the eventual result
(success or failure) of an asynchronous operation.
```

---

# Promise States ⭐⭐⭐⭐

```text
PENDING

↓

FULFILLED (resolve)

OR

REJECTED (reject)
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

# Syntax

```javascript
const promise = new Promise(

    function (resolve, reject) {

        // asynchronous work

    }
);
```

---

# Executor Function

```javascript
new Promise(

    function (resolve, reject) {

    }
);
```

---

## Parameters

| Parameter | Purpose |
|-----------|----------|
| `resolve` | Marks success |
| `reject` | Marks failure |

---

# Important Rule ⭐⭐⭐

```text
You MUST call:

resolve(...)

OR

reject(...)

Otherwise:

Promise remains pending forever.
```

---

# Basic Custom Promise

```javascript
const promiseOne = new Promise(

    function (resolve, reject) {

        setTimeout(() => {

            const success = true;

            if (success) {

                resolve("Task completed");

            } else {

                reject("Task failed");
            }

        }, 1000);

    }
);
```

---

# Handling Success

```javascript
promiseOne.then(result => {

    console.log(result);

});
```

---

# Handling Errors

```javascript
promiseOne.catch(error => {

    console.log(error);

});
```

---

# Cleanup Logic

```javascript
promiseOne.finally(() => {

    console.log("Always runs");

});
```

---

# Execution Flow

```text
Promise Created

↓

Executor Runs Immediately

↓

Async Work Starts

↓

resolve()

↓

then()

↓

finally()
```

---

# Error Flow

```text
Promise Created

↓

Executor Runs

↓

Async Work Starts

↓

reject()

↓

catch()

↓

finally()
```

---

# Promise Factory Function ⭐⭐⭐⭐

```javascript
function getUser(id) {

    return new Promise((resolve, reject) => {

        // async work

    });
}
```

---

# Why Use Factory Functions?

```text
✔ Reusable

✔ Cleaner code

✔ Easy to test

✔ Common in APIs
```

---

# Example

```javascript
function getUserFromDb(userId) {

    return new Promise((resolve, reject) => {

        if (userId > 0) {

            resolve({

                id: userId,

                name: "Jeel"
            });

        } else {

            reject(

                new Error("Invalid ID")
            );
        }

    });
}
```

---

# Success Example

```javascript
getUserFromDb(1)

    .then(user => {

        console.log(user);

    });
```

---

### Output

```text
{
    id: 1,
    name: "Jeel"
}
```

---

# Error Example

```javascript
getUserFromDb(-1)

    .catch(error => {

        console.log(error.message);

    });
```

---

### Output

```text
Invalid ID
```

---

# Promise Chaining ⭐⭐⭐⭐

```javascript
getUserFromDb(1)

    .then(user => {

        return getUserFromDb(2);

    })

    .then(user2 => {

        console.log(user2);

    })

    .catch(error => {

        console.log(error);

    });
```

---

# Flow

```text
Promise 1

↓

then()

↓

Promise 2

↓

then()

↓

catch()
```

---

# Important Rule

```text
then() ALWAYS returns a NEW Promise.
```

---

# Promise Inside Classes ⭐⭐⭐

```javascript
class ApiClient {

    getUser(id) {

        return new Promise(...);
    }
}
```

---

# Why?

```text
Very common in:

✔ API clients

✔ Database services

✔ SDKs

✔ Libraries
```

---

# Example

```javascript
class ApiClient {

    getUser(id) {

        return new Promise(

            (resolve, reject) => {

                resolve({

                    id,

                    name: "User"
                });

            }
        );
    }
}
```

---

# Usage

```javascript
const api = new ApiClient();

api.getUser(1)

    .then(user => {

        console.log(user);

    });
```

---

# Promise States Example

```javascript
const p = new Promise(() => {});
```

---

### State

```text
Pending Forever
```

---

# Why?

```text
Neither resolve()

nor reject()

was called.
```

---

# resolve()

```javascript
resolve("Success");
```

---

## Purpose

```text
Changes state:

Pending

↓

Fulfilled
```

---

# reject()

```javascript
reject(

    new Error("Failed")
);
```

---

## Purpose

```text
Changes state:

Pending

↓

Rejected
```

---

# then()

```javascript
promise.then(

    onSuccess
);
```

---

## Purpose

```text
Handles fulfilled promises.
```

---

# catch()

```javascript
promise.catch(

    onError
);
```

---

## Equivalent To

```javascript
promise.then(

    undefined,

    onError
);
```

---

# finally()

```javascript
promise.finally(() => {

    cleanup();

});
```

---

## Runs When

```text
✔ Success

✔ Failure
```

---

## Used For

```text
✔ Hide loaders

✔ Close connections

✔ Release resources
```

---

# Execution Timeline

```text
new Promise()

↓

Executor Runs Immediately

↓

Async Task Starts

↓

resolve()/reject()

↓

then()/catch()

↓

finally()
```

---

# Promise vs Callback

| Feature | Callback | Promise |
|----------|-----------|----------|
| Chaining | ❌ | ✅ |
| Error Handling | Hard | Easy |
| Readability | Lower | Higher |
| finally() | ❌ | ✅ |
| Nested Problems | Callback Hell | Reduced |

---

# Real-World Uses

```text
✔ Database Queries

✔ HTTP Requests

✔ File Reading

✔ Authentication

✔ Delayed Operations

✔ Payment Gateways
```

---

# Interview Questions ⭐⭐⭐⭐

---

## What is a Promise?

```text
An object representing the future result

of an asynchronous operation.
```

---

## What are Promise states?

```text
Pending

Fulfilled

Rejected
```

---

## What happens if resolve/reject is never called?

```text
Promise stays pending forever.
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

## When should `finally()` be used?

```text
Cleanup operations.
```

---

## Can functions return Promises?

```text
YES.

This is the recommended approach.
```

---

## Why return Promises from functions?

```text
✔ Reusable

✔ Testable

✔ Chainable
```

---

## Can class methods return Promises?

```text
YES.

Very common practice.
```

---

## Which method always executes?

```text
finally()
```

---

# MCQ Revision ⭐⭐⭐

---

## Executor function inside `new Promise()` is called:

```text
A) resolver

B) rejector

C) executor ✅

D) handler
```

---

## If resolve/reject is never called:

```text
A) Auto resolves

B) Auto rejects

C) Remains pending ✅

D) Throws error
```

---

## `then()` returns:

```text
A) Same Promise

B) New Promise ✅

C) Boolean

D) Undefined
```

---

## Cleanup logic belongs in:

```text
A) then()

B) catch()

C) finally() ✅

D) executor
```

---

## Reusable Promise pattern:

```javascript
function task() {

    return new Promise(...);
}
```

---

# Quick Revision

```text
new Promise()

↓

Executor Runs Immediately

↓

Async Work

↓

resolve()

↓

then()

↓

finally()
```

---

```text
new Promise()

↓

Executor Runs Immediately

↓

Async Work

↓

reject()

↓

catch()

↓

finally()
```

---

# 💡 Memory Trick

```text
PRTCF

Promise

Resolve

Then

Catch

Finally
```

---

# 🏆 Most Important Topics

⭐⭐⭐⭐ `new Promise()`

⭐⭐⭐⭐ `resolve()`

⭐⭐⭐⭐ `reject()`

⭐⭐⭐⭐ `then()`

⭐⭐⭐⭐ `catch()`

⭐⭐⭐ `finally()`

⭐⭐⭐⭐ Promise Chaining

⭐⭐⭐ Promise Factory Functions

⭐⭐⭐ Promise-returning Class Methods

> 🎯 **Golden Rule:**  
> A Promise **starts immediately**, stays **pending** until `resolve()` or `reject()` is called, and should usually be **returned from functions** to make asynchronous code reusable and chainable.