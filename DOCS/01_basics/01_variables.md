# 📘 JavaScript Variables (`let`, `var`, `const`)

JavaScript provides three ways to declare variables:

| Keyword | Scope | Reassignment | Redeclaration |
|----------|--------|---------------|----------------|
| `let`    | Block Scope `{}` | ✅ Allowed | ❌ Not Allowed |
| `const`  | Block Scope `{}` | ❌ Not Allowed | ❌ Not Allowed |
| `var`    | Function Scope | ✅ Allowed | ✅ Allowed |

> **Recommended Preference:** `let` ➜ `const` ➜ `var`

---

# 1️⃣ `let` – Block Scoped Variable

The `let` keyword creates variables that exist **only inside the block** (`{}`) where they are declared.

### Example

```javascript
let blockScoped = "I am block scoped";

if (true) {
    let blockScoped = "I am a different (inside the if) block scoped variable";
    console.log(blockScoped);
}

console.log(blockScoped);
```

### Output

```text
I am a different (inside the if) block scoped variable
I am block scoped
```

### Explanation

✅ Variables declared with `let` are **block scoped**.

```javascript
{
    let x = 10;
    console.log(x);   // 10
}

console.log(x);       // ❌ ReferenceError
```

---

# 2️⃣ `var` – Function Scoped Variable

The `var` keyword creates variables that are accessible throughout the **entire function** in which they are declared.

### Example

```javascript
var functionScoped = "I am function scoped";

function testVar() {
    var functionScoped =
        "I am a different (inside the function) function scoped variable";

    console.log(functionScoped);
}

testVar();

console.log(functionScoped);
```

### Output

```text
I am a different (inside the function) function scoped variable
I am function scoped
```

### Explanation

✅ Variables declared with `var` are **function scoped**.

```javascript
function demo() {
    var age = 20;
    console.log(age);     // 20
}

console.log(age);         // ❌ ReferenceError
```

⚠️ `var` ignores block scope.

```javascript
if (true) {
    var city = "Ahmedabad";
}

console.log(city);        // Ahmedabad
```

---

# 3️⃣ `const` – Constant Variable

The `const` keyword creates variables whose **reference cannot be reassigned**.

### Example

```javascript
const constantValue = "I cannot be changed";

console.log(constantValue);
```

### Output

```text
I cannot be changed
```

---

## Attempting Reassignment

```javascript
const constantValue = "I cannot be changed";

constantValue = "Trying to change";
```

### Output

```text
TypeError: Assignment to constant variable.
```

---

## Objects with `const`

Although the variable itself cannot be reassigned, **object properties can still be modified**.

```javascript
const student = {
    name: "Jeel",
    age: 20
};

student.age = 21;

console.log(student);
```

### Output

```text
{ name: 'Jeel', age: 21 }
```

---

## Invalid Reassignment

```javascript
const student = {
    name: "Jeel"
};

student = {};
```

### Output

```text
TypeError: Assignment to constant variable.
```

---

# 📊 Comparison Table

| Feature | `let` | `const` | `var` |
|----------|--------|----------|--------|
| Scope | Block | Block | Function |
| Reassignment | ✅ Yes | ❌ No | ✅ Yes |
| Redeclaration | ❌ No | ❌ No | ✅ Yes |
| Hoisted | ✅ Yes* | ✅ Yes* | ✅ Yes |
| Preferred in Modern JS | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ |

> `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until their declaration is reached.

---

# 🎯 Best Practices

✅ Use **`const`** by default.

```javascript
const PI = 3.14159;
```

✅ Use **`let`** when the value needs to change.

```javascript
let score = 0;
score++;
```

❌ Avoid using **`var`** in modern JavaScript.

```javascript
// Old style
var name = "John";
```

---

# 🚀 Summary

```text
const → Use when value should not be reassigned.
let   → Use when value may change.
var   → Avoid in modern JavaScript.
```

### Modern JavaScript Preference

```text
const > let > var
```

---

**Remember:**  
🔹 `let` → Block Scoped  
🔹 `const` → Block Scoped + No Reassignment  
🔹 `var` → Function Scoped