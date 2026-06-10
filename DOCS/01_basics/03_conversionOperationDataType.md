# Type Conversion and Operations

## Overview
This file covers how JavaScript handles type conversion and operations between different data types.

## Type Conversion Methods

### String Conversion
```javascript
String(123)           // "123"
String(true)          // "true"
String(null)          // "null"
String(undefined)     // "undefined"
(123).toString()      // "123"
```

### Number Conversion
```javascript
Number("123")         // 123
Number("123.45")      // 123.45
Number(true)          // 1
Number(false)         // 0
Number(null)          // 0
Number(undefined)     // NaN
parseInt("123")       // 123
parseFloat("123.45")  // 123.45
```

### Boolean Conversion
```javascript
Boolean(1)            // true
Boolean(0)            // false
Boolean("")           // false
Boolean("text")       // true
Boolean(null)         // false
Boolean(undefined)    // false
Boolean([])           // true (arrays are truthy)
Boolean({})           // true (objects are truthy)
```

## Implicit Type Coercion

### String Concatenation
```javascript
"5" + 3               // "53" (number converted to string)
"5" + true            // "5true"
```

### Arithmetic Operations
```javascript
"10" - 5              // 5 (string converted to number)
"10" * 2              // 20
"10" / 2              // 5
```

### Comparison Operations
```javascript
"10" == 10            // true (loose equality, type coerced)
"10" === 10           // false (strict equality, no coercion)
null == undefined     // true
null === undefined    // false
```

## Truthy and Falsy Values

### Falsy Values
```javascript
false, 0, "", null, undefined, NaN
```

### Truthy Values
```javascript
true, 1, "text", [], {}, function() {}
```

## Best Practices
- Use strict equality (`===`) to avoid unexpected type coercion
- Explicitly convert types when needed for clarity
- Be aware of falsy/truthy values in conditional statements
