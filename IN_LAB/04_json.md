# 📘 JavaScript JSON (JavaScript Object Notation)

JSON stands for:

```text
JavaScript Object Notation
```

JSON is a **lightweight text format** used for **storing** and **transferring data**.

It is commonly used in:

- 🌐 REST APIs
- ⚙️ Configuration files
- 🗄️ Databases
- 📡 Client–Server communication

---

# 🎯 Why JSON?

✅ Human-readable

✅ Lightweight

✅ Language-independent

✅ Easy to parse and generate

---

# 1️⃣ JavaScript Object vs JSON

## JavaScript Object

```javascript
const user = {
    name: "Jeel",
    age: 21
};

console.log(user);
```

### Output

```text
{ name: 'Jeel', age: 21 }
```

---

## JSON String

```json
{
    "name": "Jeel",
    "age": 21
}
```

> ⚠️ JSON is **text (string)**, not an object.

---

# 📋 JSON Rules

JSON keys:

```json
{
    "name": "Jeel"
}
```

✅ Double quotes required.

---

## Invalid JSON

```json
{
    name: "Jeel"
}
```

❌ Keys must be inside double quotes.

---

# 🎯 JSON Supported Data Types

| Type | Supported |
|--------|-----------|
| String | ✅ |
| Number | ✅ |
| Boolean | ✅ |
| Null | ✅ |
| Array | ✅ |
| Object | ✅ |
| Function | ❌ |
| Undefined | ❌ |
| Symbol | ❌ |
| Date Object | ❌ |

---

# 2️⃣ JSON Example

```javascript
const jsonString = `
{
    "name": "Jeel",
    "age": 21,
    "skills": ["JS", "HTML", "CSS"],
    "isStudent": true,
    "address": {
        "city": "Rajkot",
        "state": "Gujarat"
    }
}
`;

console.log(jsonString);
```

---

# 3️⃣ `JSON.stringify()`

Converts:

```text
JavaScript Object
↓
JSON String
```

---

## Syntax

```javascript
JSON.stringify(value);
```

---

## Example

```javascript
const user = {
    name: "Jeel",
    age: 21,
    active: true
};

const json = JSON.stringify(user);

console.log(json);
```

---

## Output

```text
{"name":"Jeel","age":21,"active":true}
```

---

# 🌟 Why Use `JSON.stringify()`?

Used when sending data to:

```text
APIs
Servers
Databases
Local Storage
```

---

# ⚠️ Functions Are Ignored

```javascript
const user = {
    name: "Jeel",

    greet() {
        return "Hello";
    }
};

console.log(
    JSON.stringify(user)
);
```

---

## Output

```text
{"name":"Jeel"}
```

---

# ⚠️ Undefined Is Ignored

```javascript
JSON.stringify({
    a: 1,
    b: undefined
});
```

---

## Output

```text
{"a":1}
```

---

# ⚠️ Symbol Is Ignored

```javascript
JSON.stringify({
    id: Symbol("x")
});
```

---

## Output

```text
{}
```

---

# Pretty Formatting

---

## Syntax

```javascript
JSON.stringify(
    value,
    replacer,
    space
);
```

---

## Example

```javascript
console.log(
    JSON.stringify(
        user,
        null,
        2
    )
);
```

---

## Output

```json
{
  "name": "Jeel",
  "age": 21,
  "active": true
}
```

---

# 4️⃣ `JSON.parse()`

Converts:

```text
JSON String
↓
JavaScript Object
```

---

## Syntax

```javascript
JSON.parse(text);
```

---

## Example

```javascript
const jsonData =
    '{"name":"Asha","age":22}';

const obj =
    JSON.parse(jsonData);

console.log(obj);
```

---

## Output

```text
{ name: 'Asha', age: 22 }
```

---

# Why Use `JSON.parse()`?

Used when receiving data from:

```text
APIs
Servers
Files
Databases
```

---

# 5️⃣ `JSON.stringify()` Replacer Array

Filter properties.

---

## Example

```javascript
const user = {
    name: "Jeel",
    age: 21,
    skills: ["JS"]
};

const json =
    JSON.stringify(
        user,
        ["name", "skills"]
    );

console.log(json);
```

---

## Output

```text
{"name":"Jeel","skills":["JS"]}
```

---

# 6️⃣ `JSON.stringify()` Replacer Function

Customize serialization.

---

## Example

```javascript
const result =
    JSON.stringify(
        user,

        (key, value) => {

            if (key === "age") {
                return undefined;
            }

            return value;
        }
    );

console.log(result);
```

---

## Output

```text
{"name":"Jeel","skills":["JS"]}
```

---

# 7️⃣ `JSON.parse()` Reviver Function

Modify values while parsing.

---

## Example

```javascript
const marks =
    '{"math":"90"}';

const obj =
    JSON.parse(

        marks,

        (key, value) => {

            if (!isNaN(value)) {
                return Number(value);
            }

            return value;
        }
    );

console.log(obj);
```

---

## Output

```text
{
    math: 90
}
```

---

# 🌟 Date Reviver Example

```javascript
const json =
'{"date":"2026-06-11T10:00:00Z"}';

const obj =
    JSON.parse(

        json,

        (key, value) => {

            if (
                typeof value === "string" &&
                value.includes("T")
            ) {
                return new Date(value);
            }

            return value;
        }
    );
```

---

# 8️⃣ JSON vs JavaScript Object

| Feature | JSON | JS Object |
|----------|-------|------------|
| Format | Text | In-memory object |
| Keys | Double quotes required | Quotes optional |
| Functions | ❌ | ✅ |
| Undefined | ❌ | ✅ |
| Symbol | ❌ | ✅ |
| Comments | ❌ | ✅ |
| Purpose | Data exchange | Programming |

---

# Example

---

## JSON

```json
{
    "name": "Jeel"
}
```

---

## JavaScript Object

```javascript
{
    name: "Jeel",

    greet() {
        console.log("Hi");
    }
}
```

---

# 9️⃣ Formatting JSON

---

## 2 Spaces

```javascript
JSON.stringify(
    obj,
    null,
    2
);
```

---

## 4 Spaces

```javascript
JSON.stringify(
    obj,
    null,
    4
);
```

---

# 🔟 JSON Interview Questions

---

## What is JSON?

```text
A lightweight text format used for data exchange.
```

---

## Difference between JSON and Object?

```text
JSON
↓
String Format

Object
↓
Actual JavaScript Data
```

---

## What does `JSON.stringify()` do?

```text
Object
↓
JSON String
```

---

## What does `JSON.parse()` do?

```text
JSON String
↓
Object
```

---

## Can JSON contain functions?

```text
❌ No
```

---

## Can JSON contain comments?

```text
❌ No
```

---

## Why do APIs use JSON?

```text
✔ Lightweight

✔ Human-readable

✔ Language-independent

✔ Easy to parse
```

---

# ⚠️ Common Errors

---

## Invalid JSON

```javascript
JSON.parse(
    "{name:'Jeel'}"
);
```

---

## Error

```text
SyntaxError
```

---

## Correct JSON

```javascript
JSON.parse(
    '{"name":"Jeel"}'
);
```

---

# 🧪 Local Storage Example

Save:

```javascript
localStorage.setItem(

    "user",

    JSON.stringify(user)
);
```

---

Retrieve:

```javascript
const user =
    JSON.parse(

        localStorage.getItem("user")
    );
```

---

# 📊 Quick Summary

| Method | Purpose |
|----------|----------|
| `JSON.stringify()` | Object → JSON |
| `JSON.parse()` | JSON → Object |
| Replacer | Filter during stringify |
| Reviver | Modify during parse |

---

# 🚀 Quick Revision

```text
JSON
↓
Data Exchange Format

stringify()
↓
Object → JSON

parse()
↓
JSON → Object

Replacer
↓
Filter JSON Output

Reviver
↓
Transform Parsed Values
```

---

## 💡 Memory Trick

```text
SPRR

Stringify
Parse
Replacer
Reviver
```

### Remember

```text
JSON = String

JavaScript Object = Actual Data
```

> 🎯 **Golden Rule:** Whenever data moves **between systems**, JSON is usually involved.