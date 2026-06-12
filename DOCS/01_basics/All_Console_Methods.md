# 📘 JavaScript Console Methods

The `console` object provides access to the browser's debugging console and offers several useful methods for logging information, debugging applications, measuring performance, and inspecting data structures.

---

# 📋 List of Console Methods

| Method | Purpose |
|---------|----------|
| `console.log()` | General output |
| `console.error()` | Display errors |
| `console.warn()` | Display warnings |
| `console.info()` | Display informational messages |
| `console.debug()` | Debug messages |
| `console.table()` | Display tabular data |
| `console.time()` | Start timer |
| `console.timeEnd()` | End timer |
| `console.timeLog()` | Log timer progress |
| `console.group()` | Create message groups |
| `console.groupEnd()` | End a group |
| `console.groupCollapsed()` | Create collapsed groups |
| `console.count()` | Count occurrences |
| `console.countReset()` | Reset counter |
| `console.assert()` | Log if condition is false |
| `console.trace()` | Display call stack |
| `console.dir()` | Display object properties |
| `console.dirxml()` | Display HTML/XML elements |
| `console.clear()` | Clear console |
| `console.timeStamp()` | Add performance timestamp |
| `console.profile()` | Start CPU profiling |
| `console.profileEnd()` | End CPU profiling |
| `console.memory` | View memory usage |

---

# 1️⃣ `console.log()`

Used for general output.

```javascript
console.log("Hello, World!");
```

### Output

```text
Hello, World!
```

---

## Multiple Arguments

```javascript
const name = "Alice";
const age = 30;

console.log("Name:", name, "Age:", age);
```

### Output

```text
Name: Alice Age: 30
```

---

## String Formatting

```javascript
console.log("Name: %s, Age: %d", name, age);
```

### Output

```text
Name: Alice, Age: 30
```

### Format Specifiers

| Specifier | Meaning |
|-----------|----------|
| `%s` | String |
| `%d` | Integer |
| `%f` | Floating point |
| `%o` | Object |
| `%c` | CSS Styling |

---

# 🎨 Browser CSS Styling

⚠️ Works only in browser consoles.

```javascript
console.log(
    "%cStyled Message",
    "color: blue; font-size:20px;"
);
```

---

# 2️⃣ `console.error()`

Displays error messages.

```javascript
console.error("This is an error!");
```

### Output

```text
❌ This is an error!
```

---

# 3️⃣ `console.warn()`

Displays warnings.

```javascript
console.warn("Warning!");
```

### Output

```text
⚠️ Warning!
```

---

# 4️⃣ `console.info()`

Displays informational messages.

```javascript
console.info("Information");
```

---

# 5️⃣ `console.debug()`

Used for debugging output.

```javascript
console.debug("Debugging...");
```

---

# 6️⃣ `console.table()`

Displays arrays and objects as tables.

```javascript
const data = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 }
];

console.table(data);
```

### Output

```text
┌─────────┬─────────┬─────┐
│ (index) │ name    │ age │
├─────────┼─────────┼─────┤
│    0    │ Alice   │ 30  │
│    1    │ Bob     │ 25  │
└─────────┴─────────┴─────┘
```

---

# 7️⃣ `console.time()` & `console.timeEnd()`

Measure execution time.

```javascript
console.time("Timer");

for(let i = 0; i < 1000000; i++) {}

console.timeEnd("Timer");
```

### Output

```text
Timer: 5ms
```

---

# 8️⃣ `console.group()`

Creates expandable groups.

```javascript
console.group("Users");

console.log("Alice");
console.log("Bob");

console.groupEnd();
```

---

### Output

```text
▼ Users
    Alice
    Bob
```

---

# 9️⃣ `console.count()`

Counts occurrences.

```javascript
console.count("Counter");
console.count("Counter");
console.count("Counter");
```

### Output

```text
Counter: 1
Counter: 2
Counter: 3
```

---

# 🔟 `console.clear()`

Clears the console.

```javascript
console.clear();
```

⚠️ Use carefully.

---

# 1️⃣1️⃣ `console.assert()`

Logs message if condition is false.

```javascript
console.assert(
    1 === 2,
    "Assertion Failed"
);
```

### Output

```text
Assertion failed: Assertion Failed
```

---

# 1️⃣2️⃣ `console.trace()`

Shows function call stack.

```javascript
function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.trace();
}

a();
```

### Output

```text
Trace
    at c
    at b
    at a
```

---

# 1️⃣3️⃣ `console.dir()`

Displays object properties.

```javascript
const obj = {
    name: "Alice",
    age: 30
};

console.dir(obj);
```

---

# 1️⃣4️⃣ `console.dirxml()`

Displays HTML/XML elements.

⚠️ Browser only.

```javascript
console.dirxml(document.body);
```

---

# 1️⃣5️⃣ `console.groupCollapsed()`

Creates collapsed groups.

```javascript
console.groupCollapsed("Details");

console.log("Message 1");
console.log("Message 2");

console.groupEnd();
```

---

# 1️⃣6️⃣ `console.timeStamp()`

Adds a timestamp to Performance tools.

```javascript
console.timeStamp("Data Loaded");
```

⚠️ Browser DevTools only.

---

# 1️⃣7️⃣ `console.profile()`

Starts CPU profiling.

```javascript
console.profile("Profile");

for(let i = 0; i < 1000000; i++) {}

console.profileEnd("Profile");
```

⚠️ Browser DevTools only.

---

# 1️⃣8️⃣ `console.memory`

Displays memory information.

```javascript
console.log(console.memory);
```

### Example Output

```javascript
{
    usedJSHeapSize: ...,
    totalJSHeapSize: ...,
    jsHeapSizeLimit: ...
}
```

⚠️ Chrome-specific.

---

# 1️⃣9️⃣ `console.countReset()`

Resets counter.

```javascript
console.count("Counter");
console.count("Counter");

console.countReset("Counter");

console.count("Counter");
```

### Output

```text
Counter: 1
Counter: 2

Counter: 1
```

---

# 2️⃣0️⃣ `console.timeLog()`

Logs timer progress.

```javascript
console.time("Timer");

setTimeout(() => {
    console.timeLog("Timer");

    console.timeEnd("Timer");
}, 1000);
```

### Example Output

```text
Timer: 1001ms
Timer: 1002ms
```

---

# 🎯 Browser vs Node.js Support

| Method | Browser | Node.js |
|----------|----------|----------|
| log | ✅ | ✅ |
| error | ✅ | ✅ |
| warn | ✅ | ✅ |
| info | ✅ | ✅ |
| debug | ✅ | ✅ |
| table | ✅ | ✅ |
| time | ✅ | ✅ |
| group | ✅ | ✅ |
| count | ✅ | ✅ |
| assert | ✅ | ✅ |
| trace | ✅ | ✅ |
| dir | ✅ | ✅ |
| clear | ✅ | ✅ |
| dirxml | ✅ | ❌ |
| profile | ✅ | ❌ |
| memory | ⚠️ Partial | ❌ |
| timeStamp | ⚠️ Partial | ❌ |

---

# 📚 Most Important for Exams

```text
console.log()
console.error()
console.warn()
console.table()
console.time()
console.timeEnd()
console.count()
console.assert()
console.trace()
console.dir()
```

---

# 🚀 Quick Revision

```text
log()          → Print output
error()        → Errors
warn()         → Warnings
table()        → Tables
time()         → Start timer
timeEnd()      → End timer
count()        → Count calls
assert()       → Check conditions
trace()        → Stack trace
dir()          → Object details
clear()        → Clear console
```

---

## 💡 Memory Trick

```text
LEWITC ATD

Log
Error
Warn
Info
Table
Count

Assert
Trace
Dir
```

