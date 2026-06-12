# 📘 07_getter_setter.md
## Complete Guide to Getters & Setters in JavaScript


---

# 🎯 Learning Objectives

After completing this chapter, you should understand:

- ✅ What getters are
- ✅ What setters are
- ✅ Why they are useful
- ✅ Getters & setters in object literals
- ✅ Getters & setters in ES6 classes
- ✅ Property descriptors
- ✅ `Object.defineProperty()`
- ✅ Common pitfalls
- ✅ Interview questions and MCQs

---

# 1️⃣ What are Getters & Setters?

## Getter

A **getter** is a function that behaves like a property read.

### Syntax

```javascript
get propertyName() {
    return value;
}
```

### Usage

```javascript
obj.propertyName;
```

> No parentheses are used.

---

## Setter

A **setter** is a function that behaves like a property assignment.

### Syntax

```javascript
set propertyName(value) {
    // logic
}
```

### Usage

```javascript
obj.propertyName = newValue;
```

---

# Why Use Getters & Setters?

They provide:

- ✅ Encapsulation
- ✅ Validation
- ✅ Computed properties
- ✅ Backward compatibility

---

# Important Rules

### Getter

- Must return a value.

```javascript
get age() {
    return this._age;
}
```

---

### Setter

- Must accept exactly **one parameter**.

```javascript
set age(value) {
    this._age = value;
}
```

---

# 2️⃣ Getters & Setters in Object Literals

## Example

```javascript
const user = {
    firstName: "Jeel",
    lastName: "Dobariya",

    get fullName() {
        return this.firstName + " " + this.lastName;
    },

    set fullName(value) {
        const parts = value.split(" ");

        this.firstName = parts[0] || "";
        this.lastName = parts[1] || "";
    }
};
```

---

## Access Getter

```javascript
console.log(user.fullName);
```

### Output

```text
Jeel Dobariya
```

---

## Call Setter

```javascript
user.fullName = "Arya Stark";
```

---

### Result

```javascript
console.log(user.firstName);
console.log(user.lastName);
```

### Output

```text
Arya
Stark
```

---

# 3️⃣ Validation Using Getters & Setters

```javascript
const account = {
    owner: "Ravi",

    _balance: 0,

    get balance() {
        return this._balance;
    },

    set balance(amount) {

        if (typeof amount !== "number") {
            throw new Error("Balance must be a number");
        }

        if (amount < 0) {
            throw new Error("Balance cannot be negative");
        }

        this._balance = amount;
    }
};
```

---

## Usage

```javascript
account.balance = 1000;

console.log(account.balance);
```

### Output

```text
1000
```

---

# 4️⃣ Getters & Setters in Classes

## Example

```javascript
class Product {

    constructor(name, price) {

        this.name = name;
        this._price = price;
    }

    get price() {
        return this._price;
    }

    set price(value) {

        if (value <= 0) {
            throw new Error("Price must be positive");
        }

        this._price = value;
    }

    show() {
        console.log(this.name, this._price);
    }
}
```

---

## Usage

```javascript
const p1 = new Product("Laptop", 50000);

console.log(p1.price);

p1.price = 55000;

console.log(p1.price);
```

---

### Output

```text
50000
55000
```

---

# 5️⃣ Accessor Property Descriptors

JavaScript properties are of two types.

---

## Data Property

Contains:

```javascript
{
    value,
    writable,
    enumerable,
    configurable
}
```

---

## Accessor Property

Contains:

```javascript
{
    get,
    set,
    enumerable,
    configurable
}
```

---

## Example

```javascript
const person = {

    _age: 21,

    get age() {
        return this._age;
    },

    set age(value) {

        if (value < 0) {
            throw new Error("Invalid age");
        }

        this._age = value;
    }
};
```

---

## Descriptor

```javascript
Object.getOwnPropertyDescriptor(
    person,
    "age"
);
```

---

### Output

```javascript
{
    get: [Function],
    set: [Function],
    enumerable: true,
    configurable: true
}
```

---

# 6️⃣ Object.defineProperty()

Used to dynamically create getters and setters.

---

## Example

```javascript
const obj = {};

let internalValue = 0;

Object.defineProperty(obj, "value", {

    get() {
        return internalValue;
    },

    set(v) {

        if (typeof v !== "number") {
            throw new Error("Value must be number");
        }

        internalValue = v;
    },

    enumerable: true,

    configurable: true
});
```

---

## Usage

```javascript
obj.value = 10;

console.log(obj.value);
```

---

### Output

```text
10
```

---

# Descriptor Check

```javascript
Object.getOwnPropertyDescriptor(
    obj,
    "value"
);
```

---

# 7️⃣ Common Pitfall — Infinite Recursion

---

## Wrong

```javascript
const badExample = {

    set value(v) {

        this.value = v;
    }
};
```

---

### Problem

```text
Setter calls itself forever.

↓

Maximum call stack exceeded.
```

---

# Correct

```javascript
const goodExample = {

    _value: 0,

    set value(v) {
        this._value = v;
    },

    get value() {
        return this._value;
    }
};
```

---

# 8️⃣ Encapsulation Example

```javascript
class UserAccount {

    constructor(username, password) {

        this.username = username;
        this._password = password;
    }

    get maskedPassword() {

        return "*".repeat(
            this._password.length
        );
    }

    set password(newPass) {

        if (
            typeof newPass !== "string" ||
            newPass.length < 6
        ) {

            throw new Error(
                "Password too short"
            );
        }

        this._password = newPass;
    }

    checkPassword(input) {

        return this._password === input;
    }
}
```

---

## Usage

```javascript
const ua =
    new UserAccount(
        "jeel01",
        "secret1"
    );
```

---

### Masked Password

```javascript
console.log(
    ua.maskedPassword
);
```

### Output

```text
*******
```

---

### Verify Password

```javascript
ua.checkPassword("secret1");
```

### Output

```text
true
```

---

### Change Password

```javascript
ua.password = "newsecret";
```

---

# 9️⃣ Interview Questions

---

## Q1. Difference between data property and accessor property?

### Data Property

```javascript
{
    value,
    writable,
    enumerable,
    configurable
}
```

---

### Accessor Property

```javascript
{
    get,
    set,
    enumerable,
    configurable
}
```

---

## Q2. How to declare getter?

### Object Literal

```javascript
const obj = {

    get prop() {

    }
};
```

---

### Class

```javascript
class A {

    get prop() {

    }
}
```

---

## Q3. Can getter and setter have different names?

### Answer

```text
Yes.

But usually they use the same property name.
```

---

## Q4. Why use `_price` or `_age`?

### Answer

```text
To avoid recursive setter calls.
```

---

## Q5. Why use Object.defineProperty()?

### Answer

```text
To define getters/setters dynamically
with descriptor control.
```

---

## Q6. Are getters/setters inherited?

### Answer

```text
Yes.

They participate in the prototype chain.
```

---

# 🔟 MCQs

---

## MCQ 1

Which syntax correctly defines a getter?

```javascript
A) get: fullName()

B) get fullName()   ✅

C) fullName get()

D) getter fullName()
```

---

## MCQ 2

```javascript
const obj = {

    _x: 10,

    get x() {
        return this._x;
    }
};
```

What does `obj.x` return?

```text
A) Function

B) 10   ✅

C) Error

D) undefined
```

---

## MCQ 3

How many parameters can a setter accept?

```text
A) 0

B) 1   ✅

C) 2

D) Unlimited
```

---

## MCQ 4

Accessor descriptors contain:

```text
A) value, writable

B) get, set, enumerable, configurable   ✅

C) get, value, writable

D) only get and set
```

---

## MCQ 5

Common bug with setters?

```text
A) Forgetting this

B) Returning value

C) Calling same setter recursively   ✅

D) Using arrow functions
```

---

# 📝 Final Revision Notes

```text
Getter
↓
Read property like variable

Setter
↓
Write property like variable

Getter → returns value

Setter → accepts one argument

Use cases:
✔ Validation
✔ Encapsulation
✔ Computed properties
✔ Cleaner APIs

Avoid:
❌ this.prop = value inside same setter
```

---

# 🎉 Chapter Complete

You now understand:

- ✅ Getters
- ✅ Setters
- ✅ Object literal accessors
- ✅ Class accessors
- ✅ Property descriptors
- ✅ Object.defineProperty()
- ✅ Validation patterns
- ✅ Encapsulation techniques
- ✅ Interview questions and MCQs

> **Getters and setters allow properties to behave like methods while keeping a simple property syntax.**