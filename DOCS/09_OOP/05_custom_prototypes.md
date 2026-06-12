# 📘 06_custom_prototypes.md
## Custom Prototype Methods — Object, String, Number, Function

> ⚠️ **Important Warning**
>
> Modifying built-in prototypes (`Object.prototype`, `Array.prototype`, etc.) is generally **not recommended in production code** because it can:
>
> - Cause conflicts with third-party libraries.
> - Break future JavaScript features.
> - Affect `for...in` loops if methods are enumerable.
>
> ✅ Acceptable use cases:
>
> - Learning JavaScript internals.
> - Personal utility projects.
> - Interview demonstrations.

---

# 🛠 Helper Function

To safely add prototype methods, use `Object.defineProperty()`.

```javascript
function defineSafePrototypeMethod(targetProto, name, fn) {
    Object.defineProperty(targetProto, name, {
        value: fn,
        writable: true,
        configurable: true,
        enumerable: false
    });
}
```

### Why `enumerable: false`?

Prevents custom methods from appearing in:

```javascript
for (let key in obj) {
    console.log(key);
}
```

---

# 1️⃣ Object.prototype — Custom Methods

## Theory

`Object.prototype` sits at the top of almost every normal object's prototype chain.

If methods are added here, **all objects inherit them**.

---

## `isEmpty()`

Checks whether an object has any own properties.

```javascript
defineSafePrototypeMethod(Object.prototype, "isEmpty", function () {
    return Object.keys(this).length === 0;
});
```

### Example

```javascript
const obj1 = {};
const obj2 = { a: 1 };

console.log(obj1.isEmpty()); // true
console.log(obj2.isEmpty()); // false
```

---

## `keysCount()`

Returns the number of own properties.

```javascript
defineSafePrototypeMethod(Object.prototype, "keysCount", function () {
    return Object.keys(this).length;
});
```

### Example

```javascript
const user = {
    name: "Jeel",
    age: 21
};

console.log(user.keysCount()); // 2
```

---

## Proof of Non-Enumerability

```javascript
for (let key in user) {
    console.log(key);
}
```

### Output

```text
name
age
```

> `isEmpty()` and `keysCount()` do not appear.

---

# 2️⃣ String.prototype — Custom Methods

## Theory

Built-in methods such as:

```javascript
toUpperCase()
trim()
includes()
slice()
```

already exist on `String.prototype`.

---

## `toTitleCase()`

```javascript
defineSafePrototypeMethod(String.prototype, "toTitleCase", function () {
    return this.split(" ")
        .filter(Boolean)
        .map(word =>
            word[0]?.toUpperCase() +
            word.slice(1).toLowerCase()
        )
        .join(" ");
});
```

### Example

```javascript
"hello world from js".toTitleCase();
```

### Output

```text
Hello World From Js
```

---

## `reverse()`

```javascript
defineSafePrototypeMethod(String.prototype, "reverse", function () {
    return this.split("").reverse().join("");
});
```

### Example

```javascript
"JavaScript".reverse();
```

### Output

```text
tpircSavaJ
```

---

## `isPalindrome()`

```javascript
defineSafePrototypeMethod(String.prototype, "isPalindrome", function () {
    const cleaned = this
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    return cleaned === cleaned.split("").reverse().join("");
});
```

### Examples

```javascript
"Madam".isPalindrome();
```

```text
true
```

```javascript
"A man, a plan, a canal: Panama".isPalindrome();
```

```text
true
```

---

# 3️⃣ Number.prototype — Custom Methods

## Theory

Common number methods:

```javascript
toFixed()
toPrecision()
toLocaleString()
```

exist on `Number.prototype`.

---

## `isEven()`

```javascript
defineSafePrototypeMethod(Number.prototype, "isEven", function () {
    return this.valueOf() % 2 === 0;
});
```

### Example

```javascript
(42).isEven();
```

```text
true
```

---

## `isOdd()`

```javascript
defineSafePrototypeMethod(Number.prototype, "isOdd", function () {
    return this.valueOf() % 2 !== 0;
});
```

### Example

```javascript
(17).isOdd();
```

```text
true
```

---

## `toIndianCurrency()`

```javascript
defineSafePrototypeMethod(Number.prototype, "toIndianCurrency", function () {
    return (
        "₹ " +
        this.valueOf().toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    );
});
```

### Example

```javascript
(1234567).toIndianCurrency();
```

### Output

```text
₹ 12,34,567.00
```

---

# 4️⃣ Function.prototype — Custom Methods

## Theory

Common function methods:

```javascript
call()
apply()
bind()
```

exist on `Function.prototype`.

---

## `once()`

Ensures a function executes only once.

```javascript
defineSafePrototypeMethod(Function.prototype, "once", function () {
    const originalFn = this;

    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = originalFn.apply(this, args);
        }

        return result;
    };
});
```

### Example

```javascript
function greet(name) {
    console.log("Hello", name);
}

const greetOnce = greet.once();

greetOnce("Jeel");
greetOnce("Aarya");
```

### Output

```text
Hello Jeel
```

---

## `delay(ms)`

Returns a delayed version of a function.

```javascript
defineSafePrototypeMethod(Function.prototype, "delay", function (ms) {
    const originalFn = this;

    return function (...args) {
        setTimeout(() => {
            originalFn.apply(this, args);
        }, ms);
    };
});
```

### Example

```javascript
function show(msg) {
    console.log(msg);
}

const delayed = show.delay(1000);

delayed("Hello");
```

### Output

```text
(appears after 1 second)

Hello
```

---

## `myBind()`

Simplified implementation of `bind()`.

```javascript
defineSafePrototypeMethod(
    Function.prototype,
    "myBind",
    function (thisArg, ...bindArgs) {

        const originalFn = this;

        return function (...callArgs) {
            return originalFn.apply(
                thisArg,
                [...bindArgs, ...callArgs]
            );
        };
    }
);
```

### Example

```javascript
function intro(city, country) {
    console.log(
        `${this.name} from ${city}, ${country}`
    );
}

const user = {
    name: "Jeel"
};

const bound = intro.myBind(user, "Rajkot");

bound("India");
```

### Output

```text
Jeel from Rajkot, India
```

---

# 📊 Where Are These Methods Stored?

| Method | Stored On |
|----------|-----------|
| `isEmpty()` | `Object.prototype` |
| `keysCount()` | `Object.prototype` |
| `toTitleCase()` | `String.prototype` |
| `reverse()` | `String.prototype` |
| `isPalindrome()` | `String.prototype` |
| `isEven()` | `Number.prototype` |
| `isOdd()` | `Number.prototype` |
| `toIndianCurrency()` | `Number.prototype` |
| `once()` | `Function.prototype` |
| `delay()` | `Function.prototype` |
| `myBind()` | `Function.prototype` |

---

# 🔥 Prototype Chain Examples

## String

```text
"hello"
    ↓
String.prototype
    ↓
Object.prototype
    ↓
null
```

---

## Number

```text
42
 ↓
Number.prototype
 ↓
Object.prototype
 ↓
null
```

---

## Function

```text
myFunction
    ↓
Function.prototype
    ↓
Object.prototype
    ↓
null
```

---

# 🎯 Interview Questions

### Q1. Why use `Object.defineProperty()`?

**Answer:**

To make prototype methods **non-enumerable**.

---

### Q2. Is extending built-in prototypes recommended?

**Answer:**

| Situation | Recommendation |
|------------|----------------|
| Learning | ✅ Yes |
| Personal Projects | ⚠️ Sometimes |
| Production Libraries | ❌ No |

---

### Q3. Where are custom string methods stored?

**Answer:**

```javascript
String.prototype
```

---

### Q4. Why does `this.valueOf()` appear in number methods?

**Answer:**

Because `this` becomes a **Number wrapper object**, and `valueOf()` extracts the primitive value.

---

### Q5. Alternative to prototype modification?

**Answer:**

Utility functions.

```javascript
function isEven(num) {
    return num % 2 === 0;
}

function toTitleCase(str) {
    // ...
}
```

---

# 📝 Final Revision

```text
Object.prototype  → affects ALL objects

String.prototype → shared by all strings

Number.prototype → shared by all numbers

Function.prototype → shared by all functions

Object.defineProperty(..., enumerable:false)
→ prevents prototype pollution in loops

Safe for learning ✅
Avoid in production ❌
```

---

# 🎉 Chapter Complete

You now understand:

- ✅ Safe prototype extension
- ✅ Custom Object methods
- ✅ Custom String methods
- ✅ Custom Number methods
- ✅ Custom Function methods
- ✅ Non-enumerable properties
- ✅ Interview concepts related to prototype modification

> **"With great power comes great responsibility."**
>
> Extending prototypes teaches how JavaScript works internally—but use that power wisely. 🚀