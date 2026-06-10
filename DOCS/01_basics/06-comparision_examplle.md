# Comparison Examples

## Overview
Comprehensive examples of comparison operations in JavaScript.

## Equality Comparisons

### Loose Equality (==)
Compares values with type coercion

```javascript
5 == 5              // true
5 == "5"            // true (string converted to number)
0 == false          // true
null == undefined   // true
0 == ""             // true
```

### Strict Equality (===)
Compares values without type coercion

```javascript
5 === 5             // true
5 === "5"           // false (different types)
0 === false         // false
null === undefined  // false
0 === ""            // false
```

## Inequality Comparisons

### Loose Inequality (!=)
```javascript
5 != 5              // false
5 != "5"            // false (type coerced)
5 != 3              // true
```

### Strict Inequality (!==)
```javascript
5 !== 5             // false
5 !== "5"           // true (different types)
5 !== 3             // true
```

## Relational Comparisons

### Greater Than (>)
```javascript
10 > 5              // true
5 > 10              // false
5 > 5               // false
"b" > "a"           // true (string comparison)
```

### Greater Than or Equal (>=)
```javascript
10 >= 10            // true
10 >= 5             // true
5 >= 10             // false
```

### Less Than (<)
```javascript
5 < 10              // true
10 < 5              // false
5 < 5               // false
```

### Less Than or Equal (<=)
```javascript
5 <= 5              // true
5 <= 10             // true
10 <= 5             // false
```

## String Comparison
Strings are compared lexicographically (by character codes)

```javascript
"apple" < "banana"  // true
"abc" < "abd"       // true
"10" < "2"          // true (string comparison, not numeric)
```

## NaN Comparisons
NaN is not equal to anything, including itself

```javascript
NaN == NaN          // false
NaN === NaN         // false
isNaN(NaN)          // true
Number.isNaN(NaN)   // true
```

## Comparison with Objects
Objects are compared by reference, not value

```javascript
{} == {}            // false (different objects)
let obj = {};
obj == obj          // true (same reference)
[1, 2] == [1, 2]    // false (different arrays)
```

## Best Practices
- Always use `===` and `!==` (strict comparison)
- Avoid loose equality (`==` and `!=`) except when specifically needed
- Be aware of type coercion with loose equality
- Use explicit type conversion for clarity
