# 📘 JavaScript Arrays

Arrays are used to store **multiple values (of any type, also mixed) in a single variable**.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```

---

# 🎯 Array Characteristics

✅ Ordered collection

✅ Zero-based indexing

✅ Dynamic size

✅ Can store different data types

✅ Mutable (can be modified)

---

# 🏗️ Creating Arrays
### Using Array Literals
Use square brackets `[]` to create an array.
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
```
### Using Array Constructor
Use `new Array()` to create an array.
```javascript
let numbers = new Array(1, 2, 3);
```
### mixed Data Types
```javascript
let mixed = [42, "Hello", true, null];
```
### Using Array.of()
Used to create an array from a list of arguments.
```javascript
let numbers = Array.of(1, 2, 3);
```
### Using Array.from()
Used to create an array from an iterable object (like a string or Set).
```javascript
let strArray = Array.from("Hello");
```
### Using Split()
Used to create an array from a string by splitting it at a specified separator.
```javascript
let str = "Jeel";
let strArray = str.split("");
//check type of strArray
document.write(typeof(strArray)); 
document.write(strArray);
```
#### Output
```text
object
"J", "e", "e", "l"
```
### Empty Array
```javascript
let empty = [];
```
we can also add ele after creating an empty array:
```javascript
let empty = [];
empty[0]=1;
empty[1]=2;
```

---


# 🔍 Accessing Elements

```javascript
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

## Output

```text
Apple
Banana
Cherry
```

---

# ✏️ Modifying Elements

```javascript
fruits[1] = "Blueberry";

console.log(fruits);
```

## Output

```text
["Apple", "Blueberry", "Cherry"]
```

---

# ➕ Adding Elements

## push()

Adds element at the end.

```javascript
fruits.push("Pineapple");
```

### Before

```text
["Apple", "Blueberry", "Cherry"]
```

### After

```text
["Apple", "Blueberry", "Cherry", "Pineapple"]
```

---

## unshift()

Adds element at the beginning.

```javascript
fruits.unshift("Mango");
```

---

# ➖ Removing Elements

## pop()

Removes last element.

```javascript
fruits.pop();
```

---

## shift()

Removes first element.

```javascript
fruits.shift();
```

---

# 📏 Array Length

```javascript
console.log(fruits.length);
```

## Output

```text
3
```

---

# 🔄 Iterating Arrays

## for Loop

```javascript
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

---

## for...of

```javascript
for (let fruit of fruits) {
    console.log(fruit);
}
```

---

## forEach()

```javascript
fruits.forEach(function(fruit) {
    console.log(fruit);
});
```

---

# 🌈 Mixed Arrays

```javascript
let mixedArray = [
    42,
    "Hello",
    true,
    null,
    { name: "John" },
    [1, 2, 3]
];
```

---

# 📚 Nested Arrays

```javascript
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

---

## Access Nested Elements

```javascript
console.log(matrix[1][2]);
```

### Output

```text
6
```

---

## Modify Nested Elements

```javascript
matrix[0][0] = 10;
```

---

# 🚀 Dynamic Nature of Arrays

```javascript
fruits.push("Orange");

fruits.pop();
```

Arrays automatically grow and shrink.

---

# 🛠️ Important Array Methods

---

# 1. forEach()

Executes a function for each element.

```javascript
fruits.forEach(fruit =>
    console.log(fruit)
);
```

---

# 2. map()

Creates a new transformed array.

```javascript
let upper = fruits.map(
    fruit => fruit.toUpperCase()
);
```

---

# 3. filter()

Returns matching elements.

```javascript
let result = fruits.filter(
    fruit => fruit.length > 5
);
```

---

# 4. reduce()

Reduces array to one value.

```javascript
let joined = fruits.reduce(
    (acc, fruit) => acc + ", " + fruit
);
```

---

# 5. includes()

Checks existence.

```javascript
fruits.includes("Cherry");
```

---

# 6. some()

Checks if ANY element satisfies condition.

```javascript
fruits.some(
    fruit => fruit.length > 6
);
```

---

# 7. every()

Checks if ALL elements satisfy condition.

```javascript
fruits.every(
    fruit => fruit.length > 3
);
```

---

# 8. reduceRight()

Works from right to left.

```javascript
fruits.reduceRight(
    (acc, fruit) => acc + ", " + fruit
);
```

---

# 9. find()

Returns first matching element.

```javascript
fruits.find(
    fruit => fruit.length > 5
);
```

---

# 10. findIndex()

Returns index of first match.

```javascript
fruits.findIndex(
    fruit => fruit.length > 5
);
```

---

# 11. flat()

Flattens nested arrays.

```javascript
[1, 2, [3, 4]].flat();
```

## Output

```text
[1, 2, 3, 4]
```

---

# 12. flatMap()

Map + Flat.

```javascript
numbers.flatMap(
    n => [n, n * n]
);
```

---

# 13. fill()

Fills array.

```javascript
new Array(5).fill("A");
```

---

# 14. slice()

Extracts portion.

```javascript
fruits.slice(0, 2);
```

---

# 15. splice()

Adds/removes elements.

```javascript
fruits.splice(
    1,
    1,
    "Strawberry"
);
```

---

# 16. indexOf()

First occurrence.

```javascript
fruits.indexOf("Cherry");
```

---

# 17. concat()

Combines arrays.

```javascript
fruits.concat(moreFruits);
```

---

# 18. join()

Converts array to string.

```javascript
fruits.join(" - ");
```

---

# 19. reverse()

Reverses array.

```javascript
fruits.reverse();
```

---

# 20. sort()

Sorts elements.

```javascript
fruits.sort();
```

---

⚠️ Numeric Sorting

```javascript
numbers.sort((a, b) => a - b);
```

---

# 21. toString()

Array → String

```javascript
fruits.toString();
```

---

# 22. Array.from()

Creates array from iterable.

```javascript
Array.from("Hello");
```

## Output

```text
["H","e","l","l","o"]
```

---

# 23. Array.isArray()

Checks if array.

```javascript
Array.isArray(fruits);
```

---

# 24. Array.of()

Creates array.

```javascript
Array.of(1, 2, 3);
```

---

# 25. copyWithin()

Copies elements within same array.

```javascript
arr.copyWithin(
    target,
    start,
    end
);
```

Example:

```javascript
["A","B","C","D","E"]
    .copyWithin(0,3,5);
```

Output:

```text
["D","E","C","D","E"]
```

---

# 26. lastIndexOf()

Finds last occurrence.

```javascript
letters.lastIndexOf("C");
```

---

# 27. keys()

Returns iterator of indexes.

```javascript
for(let key of fruits.keys()){
    console.log(key);
}
```

---

# 28. values()

Returns iterator of values.

```javascript
for(let value of fruits.values()){
    console.log(value);
}
```

---

# 29. entries()

Returns key-value pairs.

```javascript
for(let entry of fruits.entries()){
    console.log(entry);
}
```

Output:

```text
[0,"Apple"]
[1,"Cherry"]
```

---

# 📊 Mutating vs Non-Mutating Methods

| Mutates Original | Does Not Mutate |
|-----------------|-----------------|
| push() | map() |
| pop() | filter() |
| shift() | reduce() |
| unshift() | slice() |
| splice() | concat() |
| reverse() | join() |
| sort() | includes() |
| fill() | find() |
| copyWithin() | flat() |

---

# 🎯 Most Important for Interviews

```text
push()
pop()
shift()
unshift()

map()
filter()
reduce()

find()
findIndex()

slice()
splice()

sort()
includes()

Array.isArray()
```

---

# 🚀 Quick Revision

```text
push()      → Add End
pop()       → Remove End

unshift()   → Add Start
shift()     → Remove Start

map()       → Transform
filter()    → Select
reduce()    → Accumulate

find()      → First Match
findIndex() → Match Index

slice()     → Copy Portion
splice()    → Modify Original

sort()      → Arrange
reverse()   → Reverse
```

---

## 💡 Memory Trick

```text
PPSU

Push     → End Add
Pop      → End Remove
Shift    → Start Remove
Unshift  → Start Add
```

