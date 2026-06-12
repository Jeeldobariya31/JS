# 📘 JavaScript `setInterval()` Complete Guide

> **`setInterval()` repeatedly executes a function after a specified delay until it is stopped using `clearInterval()`.**

---

# 🤔 What is `setInterval()`?

```text
Runs a function repeatedly

↓

After every specified delay

↓

Until clearInterval() is called
```

---

# Syntax

```javascript
const intervalId = setInterval(

    callbackFunction,

    delayInMilliseconds,

    arg1,

    arg2,

    ...
);
```

---

# Parameters

| Parameter | Description |
|------------|-------------|
| `callbackFunction` | Function to execute repeatedly |
| `delayInMilliseconds` | Time gap between executions |
| `arg1, arg2...` | Optional arguments passed to callback |

---

# Return Value

```javascript
const id = setInterval(...);
```

Returns:

```text
Interval ID
```

Used with:

```javascript
clearInterval(id);
```

---

# Execution Flow

```text
setInterval()

↓

Wait for delay

↓

Execute callback

↓

Wait for delay

↓

Execute callback

↓

Repeat forever

↓

clearInterval()
```

---

# Basic Example

```javascript
const id = setInterval(() => {

    console.log("Hello");

}, 1000);
```

---

### Output

```text
Hello

Hello

Hello

...
```

Every:

```text
1000 ms = 1 second
```

---

# Stopping an Interval

```javascript
const id = setInterval(() => {

    console.log("Running");

}, 1000);

clearInterval(id);
```

---

# Counter Example ⭐⭐⭐

```javascript
let count = 0;

const id = setInterval(() => {

    count++;

    console.log(count);

}, 1000);
```

---

### Output

```text
1

2

3

4

...
```

---

# Stop Counter After 5 Seconds

```javascript
const id = setInterval(() => {

    console.log("Tick");

}, 1000);

setTimeout(() => {

    clearInterval(id);

}, 5000);
```

---

### Output

```text
Tick

Tick

Tick

Tick

Tick
```

Then stops.

---

# Counter Demo Explanation

```javascript
let count = 0;

let intervalId = null;
```

---

# Start Button

```javascript
intervalId = setInterval(() => {

    count++;

    counterSpan.textContent = count;

}, 1000);
```

---

# Stop Button

```javascript
clearInterval(intervalId);

intervalId = null;
```

---

# Why Check `intervalId !== null`?

```javascript
if (intervalId !== null) {

    return;
}
```

Prevents:

```text
Multiple intervals running simultaneously.
```

---

# Digital Clock Example ⭐⭐⭐

```javascript
function updateClock() {

    const now = new Date();

    const hh = String(

        now.getHours()
    ).padStart(2, "0");

    const mm = String(

        now.getMinutes()
    ).padStart(2, "0");

    const ss = String(

        now.getSeconds()
    ).padStart(2, "0");

    clock.textContent =

        `${hh}:${mm}:${ss}`;
}
```

---

# Start Clock

```javascript
updateClock();

setInterval(

    updateClock,

    1000
);
```

---

# Example Output

```text
09:15:42

09:15:43

09:15:44

09:15:45
```

---

# Why Call `updateClock()` First?

Without this:

```javascript
setInterval(

    updateClock,

    1000
);
```

User sees:

```text
--:--:--
```

for 1 second.

---

With this:

```javascript
updateClock();

setInterval(...);
```

Clock appears immediately.

---

# Passing Arguments

```javascript
function greet(name) {

    console.log(name);

}

setInterval(

    greet,

    1000,

    "Jeel"
);
```

---

### Output

```text
Jeel

Jeel

Jeel
```

---

# Using Arrow Functions

```javascript
setInterval(() => {

    console.log("Running");

}, 1000);
```

---

# Using Named Functions

```javascript
function tick() {

    console.log("Tick");
}

setInterval(

    tick,

    1000
);
```

---

# Common Mistake ❌

```javascript
setInterval(

    greet(),

    1000
);
```

---

Problem:

```text
Function executes immediately.
```

---

Correct:

```javascript
setInterval(

    greet,

    1000
);
```

---

# Timing Drift ⭐⭐⭐

If callback execution time exceeds delay:

```javascript
setInterval(() => {

    heavyTask();

}, 100);
```

---

Possible Result:

```text
Intervals drift.

Timing becomes inaccurate.
```

---

# Why?

```text
JavaScript is single-threaded.

↓

Long tasks block the Event Loop.
```

---

# Better Alternative

```javascript
function run() {

    heavyTask();

    setTimeout(

        run,

        100
    );
}

run();
```

---

# setInterval vs setTimeout ⭐⭐⭐⭐

| Feature | setTimeout | setInterval |
|----------|-------------|-------------|
| Runs Once | ✅ | ❌ |
| Runs Repeatedly | ❌ | ✅ |
| Needs clearInterval | ❌ | ✅ |
| Precise Scheduling | ⭐⭐⭐ | ⭐⭐ |
| Simpler Repetition | ❌ | ✅ |

---

# Event Loop View

```text
setInterval()

↓

Timer Registered

↓

Delay Expires

↓

Callback Queue

↓

Call Stack Empty?

↓

YES

↓

Execute Callback

↓

Repeat
```

---

# Real-World Uses

```text
✔ Digital Clocks

✔ Countdown Timers

✔ Auto Refresh

✔ Polling APIs

✔ Slideshows

✔ Game Loops

✔ Notifications
```

---

# Countdown Example

```javascript
let seconds = 10;

const id = setInterval(() => {

    console.log(seconds);

    seconds--;

    if (seconds < 0) {

        clearInterval(id);
    }

}, 1000);
```

---

### Output

```text
10

9

8

...

0
```

---

# Interview Questions ⭐⭐⭐

---

## What is `setInterval()`?

```text
Executes a function repeatedly after a specified delay.
```

---

## How do you stop it?

```javascript
clearInterval(intervalId);
```

---

## What does `setInterval()` return?

```text
An interval ID.
```

---

## Difference between `setTimeout()` and `setInterval()`?

```text
setTimeout

↓

Runs once

setInterval

↓

Runs repeatedly
```

---

## Can intervals overlap?

```text
Not simultaneously.

But callbacks can queue,

causing timing drift.
```

---

## Why use recursive `setTimeout()` instead?

```text
Provides better control

over execution timing.
```

---

## Does `setInterval()` block JavaScript?

```text
No.

It uses the Event Loop.
```

---

## Can multiple intervals run together?

```text
Yes.

If not cleared properly.
```

---

# Execution Timeline

```text
Start Interval

↓

Wait 1000 ms

↓

Run Callback

↓

Wait 1000 ms

↓

Run Callback

↓

...

↓

clearInterval()

↓

Stop
```

---

# Quick Revision

```text
setInterval()

↓

Returns Interval ID

↓

Runs Repeatedly

↓

clearInterval()

↓

Stops Execution
```

---

# 💡 Memory Trick

```text
SRCS

Start

Repeat

Clear

Stop
```

---

# 🏆 Most Important Topics

⭐⭐⭐⭐ `setInterval()`

⭐⭐⭐⭐ `clearInterval()`

⭐⭐⭐ Interval ID

⭐⭐⭐ Digital Clock

⭐⭐⭐ Timing Drift

⭐⭐⭐⭐ `setTimeout()` vs `setInterval()`

> 🎯 **Golden Rule:**  
> Use **`setInterval()` for repeated tasks**, but if precise control is important, prefer **recursive `setTimeout()`**.