# 📘 JavaScript Objects – Complete Summary

Objects are one of the **most important data structures** in JavaScript.

They store data in **key–value pairs**.

```javascript
let person = {
    name: "Jeel",
    age: 21
};
```

> Objects are used to represent **real-world entities** like users, products, cars, etc. :contentReference[oaicite:0]{index=0}

---

# 🎯 What is an Object?

```text
Object = Collection of Key–Value Pairs
```

```javascript
let person = {
    name: "Jeel",
    age: 21
};
```

### Output

```text
{
    name: "Jeel",
    age: 21
}
```

---

# 🏗️ Ways to Create Objects

---

# 1. Object Literal ⭐ (Most Common)

```javascript
let obj = {
    a: 10,
    b: 20
};
```

---

# 2. Using `new Object()`

```javascript
let obj = new Object();

obj.title = "JavaScript";
```

---

# 3. Constructor Function

```javascript
function Car(model, year) {
    this.model = model;
    this.year = year;
}

let car = new Car("BMW", 2020);
```

---

# 4. Class (ES6)

```javascript
class Student {
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
    }
}

let s = new Student("Jeel", 1);
```

---

# 5. `Object.create()`

Creates object with prototype.

```javascript
let base = {
    role: "Human"
};

let user = Object.create(base);

user.name = "Jeel";
```

---

# 6. Factory Function

```javascript
function createUser(name, email) {
    return {
        name,
        email
    };
}
```

---

# 🔍 Accessing Properties

---

## Dot Notation

```javascript
person.name
```

---

## Bracket Notation

```javascript
person["name"]
```

---

# ✏️ Add Properties

```javascript
person.city = "Rajkot";
```

---

# 🔄 Update Properties

```javascript
person.age = 22;
```

---

# ❌ Delete Properties

```javascript
delete person.city;
```

---

# 🔎 Checking Properties

---

## `in` Operator

```javascript
"name" in person;
```

### Output

```text
true
```

---

## `hasOwnProperty()`

```javascript
person.hasOwnProperty("name");
```

---

# 📋 Object Methods

---

## `Object.keys()`

Returns keys.

```javascript
Object.keys(person);
```

### Output

```text
["name", "age"]
```

---

## `Object.values()`

Returns values.

```javascript
Object.values(person);
```

---

## `Object.entries()`

Returns key-value pairs.

```javascript
Object.entries(person);
```

---

# 🔄 Loop Through Objects

---

## `for...in`

```javascript
for(let key in person){
    console.log(
        key,
        person[key]
    );
}
```

---

# 📦 Spread Operator

Clone or merge objects.

```javascript
let copy = {
    ...person
};
```

---

## Merge

```javascript
let merged = {
    ...obj1,
    ...obj2
};
```

---

# 🎯 Destructuring

Extract values.

```javascript
let {
    name,
    age
} = person;
```

---

# 🏢 Nested Objects

```javascript
let company = {
    address: {
        city: "Ahmedabad"
    }
};

console.log(
    company.address.city
);
```

---

# 🛡️ Optional Chaining (`?.`)

Prevents errors.

```javascript
company.contact?.phone;
```

### Output

```text
undefined
```

instead of:

```text
TypeError
```

---

# 🔄 JSON Methods

---

## Object → JSON

```javascript
JSON.stringify(person);
```

---

## JSON → Object

```javascript
JSON.parse(jsonString);
```

---

# 🔒 `Object.freeze()`

Prevents all changes.

```javascript
Object.freeze(person);
```

Cannot:

```text
❌ Add
❌ Update
❌ Delete
```

---

# 🔐 `Object.seal()`

Allows update only.

```javascript
Object.seal(person);
```

Can:

```text
✅ Update
```

Cannot:

```text
❌ Add
❌ Delete
```

---

# 🔗 `Object.assign()`

Merge objects.

```javascript
Object.assign(
    {},
    obj1,
    obj2
);
```

---

# 🔄 `Object.fromEntries()`

Array → Object

```javascript
Object.fromEntries([
    ["name","Jeel"],
    ["age",21]
]);
```

---

# 📌 `Object.getOwnPropertyNames()`

Returns all property names.

```javascript
Object.getOwnPropertyNames(
    person
);
```

---

# ⚙️ Property Descriptors

Control properties.

```javascript
Object.defineProperty(
    obj,
    "name",
    {
        value: "Jeel",
        writable: false,
        enumerable: true,
        configurable: false
    }
);
```

---

# 📋 Descriptor Properties

| Property | Meaning |
|-----------|----------|
| writable | Can modify |
| enumerable | Appears in loops |
| configurable | Can delete |

---

# 🎯 Getters and Setters

---

## Getter

```javascript
get name() {
    return this._name;
}
```

---

## Setter

```javascript
set name(value) {
    this._name =
        value.toUpperCase();
}
```

---

## Example

```javascript
user.name = "jeel";

console.log(user.name);
```

### Output

```text
JEEL
```

---

# 🔑 Symbol Keys

Unique properties.

```javascript
const id = Symbol("id");

let obj = {
    [id]: 101
};
```

---

## Access

```javascript
obj[id];
```

---

# 🧬 Prototypes

Objects inherit properties.

```javascript
let proto = {
    greet(){
        return "Hello";
    }
};

let child =
    Object.create(proto);
```

---

## Usage

```javascript
child.greet();
```

---

# 🏛️ Class Inheritance

```javascript
class Parent {
    hi(){
        return "Hi";
    }
}

class Child
extends Parent {

    hello(){
        return "Hello";
    }
}
```

---

# 🔄 Singleton Pattern

Ensures only one instance.

```javascript
const Singleton =
(function(){

    let instance;

    return {
        getInstance(){

            if(!instance){
                instance = {};
            }

            return instance;
        }
    };

})();
```

---

# 🪞 Shallow Clone

Copies top level only.

```javascript
let clone = {
    ...original
};
```

---

# 🌊 Deep Clone

Copies everything.

```javascript
JSON.parse(
    JSON.stringify(
        original
    )
);
```

---

# 🗺️ Map vs Object

| Feature | Object | Map |
|----------|---------|------|
| Key Types | String/Symbol | Any Type |
| Order | Not guaranteed | Preserved |
| Size | Manual | `.size` |
| Iteration | Harder | Easier |

---

# Example

```javascript
let map = new Map();

map.set("name", "Jeel");

map.get("name");
```

---

# 📊 Freeze vs Seal

| Feature | Freeze | Seal |
|----------|---------|-------|
| Update | ❌ | ✅ |
| Add | ❌ | ❌ |
| Delete | ❌ | ❌ |

---

# 🎯 Interview Questions

---

## How many ways to create objects?

```text
6 Common Ways
```

```text
Object Literal
new Object()
Constructor Function
Class
Object.create()
Factory Function
```

---

## Difference between Dot and Bracket Notation?

```javascript
obj.name
```

```javascript
obj["name"]
```

Bracket notation supports:

```javascript
obj[key]
```

---

## Difference between Freeze and Seal?

```text
Freeze → No Changes

Seal → Only Updates Allowed
```

---

## What is Optional Chaining?

Safe property access.

```javascript
user.address?.city
```

---

## Difference between Shallow and Deep Clone?

```text
Shallow
↓
Copies top level only

Deep
↓
Copies nested objects too
```

---

# 🚀 Quick Revision

```text
Object Literal      → {}

Access              → . []

Check               → in
                      hasOwnProperty()

Loop                → for...in

Clone               → ...

JSON                → stringify()
                      parse()

Protection          → freeze()
                      seal()

Inheritance         → Object.create()
                      extends

Clone               → Shallow / Deep

Advanced            → Getter
                      Setter
                      Symbol
                      Descriptor
```

---

## 💡 Memory Trick

```text
CAAD

Create
Access
Add
Delete
```

```text
FSJ

Freeze
Seal
JSON
```

