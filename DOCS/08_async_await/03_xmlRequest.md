# 📘 XMLHttpRequest (XHR) Console Simulator Guide

> **Purpose:**  
> This file simulates the behavior of **XMLHttpRequest (XHR)** inside **Node.js**, allowing you to understand the complete XHR lifecycle through console output.

---

# 🤔 Why This Simulator?

```text
XMLHttpRequest works only in browsers.

Node.js does NOT provide XMLHttpRequest by default.
```

This simulator helps you learn:

```text
✔ xhr.open()

✔ xhr.send()

✔ readyState changes

✔ status codes

✔ responseText

✔ onreadystatechange

✔ onload

✔ onerror

✔ onabort

✔ abort()
```

---

# 🌐 API Used

```javascript
const BASE_URL =
    "https://jsonplaceholder.typicode.com/posts/1";
```

---

# 🔄 XHR Lifecycle

```text
UNSENT

↓

OPENED

↓

HEADERS_RECEIVED

↓

LOADING

↓

DONE
```

---

# readyState Values ⭐⭐⭐

| Value | State | Meaning |
|---------|--------|----------|
| `0` | UNSENT | Object created |
| `1` | OPENED | `open()` called |
| `2` | HEADERS_RECEIVED | Response headers received |
| `3` | LOADING | Response body downloading |
| `4` | DONE | Request completed |

---

# 📦 Constructor

```javascript
constructor() {

    this.readyState = 0;

    this.status = 0;

    this.responseText = "";

    this.aborted = false;
}
```

---

# Initial State

```text
readyState = 0

↓

UNSENT
```

---

# open()

Configures the request.

---

## Syntax

```javascript
xhr.open(

    method,

    url,

    async
);
```

---

# Example

```javascript
xhr.open(

    "GET",

    BASE_URL,

    true
);
```

---

# Parameters

| Parameter | Meaning |
|------------|----------|
| `method` | GET, POST, PUT, DELETE |
| `url` | API endpoint |
| `async` | true or false |

---

# After open()

```text
readyState = 1

↓

OPENED
```

---

# send()

Sends the request.

---

## Syntax

```javascript
xhr.send();
```

---

# POST Example

```javascript
xhr.send(

    JSON.stringify({

        name: "Jeel"
    })
);
```

---

# Simulated Flow

```text
send()

↓

readyState = 2

↓

readyState = 3

↓

Fetch Request

↓

readyState = 4
```

---

# readyState = 2

```text
HEADERS_RECEIVED
```

Meaning:

```text
Response headers have arrived.
```

---

# readyState = 3

```text
LOADING
```

Meaning:

```text
Response body is downloading.
```

---

# readyState = 4

```text
DONE
```

Meaning:

```text
Request completed successfully

OR

An error occurred.
```

---

# onreadystatechange

Triggered whenever `readyState` changes.

---

## Example

```javascript
xhr.onreadystatechange = function () {

    console.log(

        xhr.readyState
    );

};
```

---

# Flow Example

```text
1

↓

2

↓

3

↓

4
```

---

# onload()

Runs when request completes successfully.

---

## Example

```javascript
xhr.onload = function () {

    console.log(

        xhr.responseText
    );

};
```

---

# onerror()

Runs when a network error occurs.

---

## Example

```javascript
xhr.onerror = function () {

    console.log(

        "Network Error"
    );

};
```

---

# onabort()

Runs when request is cancelled.

---

## Example

```javascript
xhr.onabort = function () {

    console.log(

        "Request Aborted"
    );

};
```

---

# abort()

Stops the request.

---

## Syntax

```javascript
xhr.abort();
```

---

# Flow

```text
abort()

↓

aborted = true

↓

onabort()

↓

readyState = 4
```

---

# status

HTTP response status code.

---

## Example

```javascript
console.log(

    xhr.status
);
```

---

# Common Status Codes

| Code | Meaning |
|--------|----------|
| `200` | OK |
| `201` | Created |
| `204` | No Content |
| `400` | Bad Request |
| `401` | Unauthorized |
| `403` | Forbidden |
| `404` | Not Found |
| `500` | Internal Server Error |

---

# responseText

Contains server response as a string.

---

## Example

```javascript
console.log(

    xhr.responseText
);
```

---

# JSON Response Example

```json
{
    "userId": 1,
    "id": 1,
    "title": "...",
    "body": "..."
}
```

---

# Parsing JSON

```javascript
const data = JSON.parse(

    xhr.responseText
);

console.log(data.title);
```

---

# Complete Request Flow

```text
Create XHR Object

↓

readyState = 0

↓

open()

↓

readyState = 1

↓

send()

↓

readyState = 2

↓

readyState = 3

↓

Server Responds

↓

readyState = 4

↓

onload()
```

---

# Error Flow

```text
send()

↓

Network Failure

↓

readyState = 4

↓

onerror()
```

---

# Abort Flow

```text
send()

↓

abort()

↓

onabort()

↓

readyState = 4
```

---

# Browser XHR Example

```javascript
const xhr = new XMLHttpRequest();

xhr.open(

    "GET",

    url
);

xhr.send();
```

---

# Equivalent Simulator Example

```javascript
const xhr = new XHRConsole();

xhr.open(

    "GET",

    url
);

await xhr.send();
```

---

# Interview Questions ⭐⭐⭐

---

## What is XMLHttpRequest?

```text
An API used to send HTTP requests from JavaScript.
```

---

## Why use XHR?

```text
To communicate with servers asynchronously.
```

---

## What are the readyState values?

```text
0 → UNSENT

1 → OPENED

2 → HEADERS_RECEIVED

3 → LOADING

4 → DONE
```

---

## What does open() do?

```text
Configures the request.
```

---

## What does send() do?

```text
Actually sends the request.
```

---

## Difference between status and readyState?

```text
readyState

↓

Request lifecycle stage

status

↓

HTTP response code
```

---

## What triggers onreadystatechange?

```text
Every readyState change.
```

---

## When does onload fire?

```text
After successful completion.
```

---

## When does onerror fire?

```text
When a network error occurs.
```

---

## What does abort() do?

```text
Cancels an ongoing request.
```

---

## How to parse JSON response?

```javascript
JSON.parse(

    xhr.responseText
);
```

---

# XHR vs Fetch

| Feature | XHR | Fetch |
|----------|-----|--------|
| Promise Based | ❌ | ✅ |
| readyState | ✅ | ❌ |
| Simpler Syntax | ❌ | ✅ |
| Progress Events | ✅ | ⚠️ |
| Modern API | ❌ | ✅ |

---

# 🚀 Quick Revision

```text
Create XHR

↓

open()

↓

send()

↓

readyState 1

↓

readyState 2

↓

readyState 3

↓

readyState 4

↓

onload()

↓

responseText
```

---

# 💡 Memory Trick

```text
OSRL

Open

Send

ReadyState

Load
```

---

# 🏆 Most Important Topics

⭐⭐⭐⭐ readyState

⭐⭐⭐⭐ open()

⭐⭐⭐⭐ send()

⭐⭐⭐ onreadystatechange

⭐⭐⭐ onload()

⭐⭐⭐ abort()

⭐⭐⭐ responseText

> 🎯 **Golden Rule:**  
> XHR teaches the foundations of asynchronous HTTP requests.  
> Even though **Fetch API** is preferred today, understanding XHR helps you understand how browser networking evolved.