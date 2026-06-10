# String Methods and Properties

## Overview
Comprehensive guide to working with strings in JavaScript, including methods and properties.

## String Properties

### length
Returns the number of characters in a string

```javascript
let str = "Hello";
str.length          // 5
"".length           // 0
```

## String Methods

### Character Access

#### charAt(index)
Returns the character at a specific index

```javascript
let str = "Hello";
str.charAt(0)       // "H"
str.charAt(4)       // "o"
str.charAt(10)      // "" (empty string if out of range)
```

#### charCodeAt(index)
Returns the Unicode value of the character at an index

```javascript
let str = "Hello";
str.charCodeAt(0)   // 72 (Unicode for 'H')
```

### Case Conversion

#### toUpperCase()
Converts string to uppercase

```javascript
"hello".toUpperCase()   // "HELLO"
```

#### toLowerCase()
Converts string to lowercase

```javascript
"HELLO".toLowerCase()   // "hello"
```

### Searching and Extracting

#### indexOf(searchValue)
Returns the index of first occurrence, or -1 if not found

```javascript
let str = "Hello World";
str.indexOf("o")        // 4
str.indexOf("World")    // 6
str.indexOf("xyz")      // -1
```

#### lastIndexOf(searchValue)
Returns the index of last occurrence

```javascript
let str = "Hello World";
str.lastIndexOf("o")    // 7
```

#### includes(searchValue)
Checks if string contains a value

```javascript
"Hello World".includes("World")    // true
"Hello World".includes("xyz")      // false
```

#### startsWith(searchValue)
Checks if string starts with a value

```javascript
"Hello World".startsWith("Hello")  // true
"Hello World".startsWith("World")  // false
```

#### endsWith(searchValue)
Checks if string ends with a value

```javascript
"Hello World".endsWith("World")    // true
"Hello World".endsWith("Hello")    // false
```

### Extraction Methods

#### slice(start, end)
Extracts a substring; end is exclusive

```javascript
let str = "Hello World";
str.slice(0, 5)     // "Hello"
str.slice(6)        // "World"
str.slice(-5)       // "World" (negative index from end)
```

#### substring(start, end)
Similar to slice, but doesn't accept negative indices

```javascript
let str = "Hello World";
str.substring(0, 5) // "Hello"
str.substring(6)    // "World"
```

#### substr(start, length)
Extracts characters for a specified length (deprecated, avoid)

```javascript
let str = "Hello World";
str.substr(0, 5)    // "Hello"
```

### Trimming

#### trim()
Removes whitespace from both ends

```javascript
"  Hello  ".trim()      // "Hello"
```

#### trimStart()
Removes whitespace from start

```javascript
"  Hello  ".trimStart()  // "Hello  "
```

#### trimEnd()
Removes whitespace from end

```javascript
"  Hello  ".trimEnd()    // "  Hello"
```

### Replacing

#### replace(searchValue, replaceValue)
Replaces first occurrence

```javascript
"Hello World".replace("World", "JS")    // "Hello JS"
```

#### replaceAll(searchValue, replaceValue)
Replaces all occurrences (ES2021)

```javascript
"aaa".replaceAll("a", "b")              // "bbb"
```

### Splitting and Joining

#### split(separator)
Splits string into array

```javascript
"a,b,c".split(",")      // ["a", "b", "c"]
"Hello".split("")       // ["H", "e", "l", "l", "o"]
"Hello World".split()   // ["Hello World"]
```

### Padding (ES2017)

#### padStart(targetLength, padString)
Pads string from start

```javascript
"5".padStart(3, "0")    // "005"
```

#### padEnd(targetLength, padString)
Pads string from end

```javascript
"5".padEnd(3, "0")      // "500"
```

### Repetition (ES2015)

#### repeat(count)
Repeats string count times

```javascript
"ab".repeat(3)          // "ababab"
"x".repeat(5)           // "xxxxx"
```

### Template Strings
Use backticks for dynamic string creation

```javascript
let name = "John";
let age = 30;
let message = `Name: ${name}, Age: ${age}`;
// "Name: John, Age: 30"
```

## Best Practices
- Use `includes()` instead of `indexOf()` for existence checks
- Use `trim()` to clean user input
- Use template literals for string interpolation
- Remember that strings are immutable; methods return new strings
- Use `split()` and `join()` to manipulate string arrays
