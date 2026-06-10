# Numbers and Math in JavaScript

## Overview
Comprehensive guide to working with numbers and the Math object in JavaScript.

## Number Basics

### Creating Numbers
```javascript
let integerNum = 100;
let floatNum = 99.99;
let constructorNum = new Number(123.45);  // Number object
```

### Basic Arithmetic Operations
```javascript
let a = 10;
let b = 3;

a + b       // 13 (addition)
a - b       // 7 (subtraction)
a * b       // 30 (multiplication)
a / b       // 3.333... (division)
a % b       // 1 (modulus/remainder)
a ** b      // 1000 (exponentiation)
```

### Increment and Decrement
```javascript
let num = 5;
num++;      // Post-increment: returns 5, then increments
++num;      // Pre-increment: increments, then returns 6
num--;      // Post-decrement
--num;      // Pre-decrement
```

## Number Methods

### Formatting Methods

#### toFixed(digits)
Formats number with fixed decimal places

```javascript
let num = 45.6789;
num.toFixed(2)      // "45.68"
num.toFixed(0)      // "46"
```

#### toPrecision(length)
Formats number to specified length

```javascript
let num = 45.6789;
num.toPrecision(4)  // "45.68"
num.toPrecision(6)  // "45.6789"
```

#### toExponential(digits)
Returns exponential notation

```javascript
let num = 45.6789;
num.toExponential(2)    // "4.57e+1"
```

### String Conversion

#### toString()
Converts number to string

```javascript
let num = 45.6789;
num.toString()      // "45.6789"
num.toString(2)     // Binary representation
num.toString(8)     // Octal representation
num.toString(16)    // Hexadecimal representation
```

#### toLocaleString()
Locale-specific number representation

```javascript
let num = 45.6789;
num.toLocaleString()                // "45.6789" (depends on locale)
num.toLocaleString('en-US')         // "45.6789"
num.toLocaleString('de-DE')         // "45,6789"
num.toLocaleString('ja-JP')         // "45.6789"
```

### Currency Formatting
```javascript
let num = 45.6789;

// US Dollar
num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })  // "$45.68"

// Euro
num.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })  // "45,68 €"

// British Pound
num.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })  // "£45.68"

// Indian Rupee
num.toLocaleString('hi-IN', { style: 'currency', currency: 'INR' })  // "₹45.68"
```

## Number Properties

### Constants
```javascript
Number.MAX_VALUE                // 1.7976931348623157e+308 (largest number)
Number.MIN_VALUE                // 5e-324 (smallest positive number)
Number.MAX_SAFE_INTEGER         // 9007199254740991 (largest safe integer)
Number.MIN_SAFE_INTEGER         // -9007199254740991 (smallest safe integer)
Number.POSITIVE_INFINITY        // Infinity
Number.NEGATIVE_INFINITY        // -Infinity
Number.NaN                      // Not-a-Number
Number.EPSILON                  // 2.220446049250313e-16 (smallest difference)
```

## Number Static Methods

### Parsing

#### parseInt(string, radix)
Parses string as integer

```javascript
parseInt("123abc")      // 123
parseInt("0xFF")        // 255 (hexadecimal)
parseInt("101", 2)      // 5 (binary)
```

#### parseFloat(string)
Parses string as floating-point number

```javascript
parseFloat("123.45abc")     // 123.45
parseFloat("123.45xyz")     // 123.45
```

### Validation

#### isNaN(value)
Checks if value is NaN

```javascript
isNaN('hello')          // true
isNaN(123)              // false
```

#### Number.isNaN(value)
Strict NaN check (doesn't coerce)

```javascript
Number.isNaN(NaN)       // true
Number.isNaN('hello')   // false
```

#### isFinite(value)
Checks if value is finite number

```javascript
isFinite(1000)          // true
isFinite(Infinity)      // false
isFinite(NaN)           // false
```

#### Number.isFinite(value)
Strict finite check (doesn't coerce)

```javascript
Number.isFinite(1000)   // true
Number.isFinite('1000') // false
```

#### Number.isInteger(value)
Checks if value is integer

```javascript
Number.isInteger(42)        // true
Number.isInteger(42.5)      // false
Number.isInteger(NaN)       // false
```

#### Number.isSafeInteger(value)
Checks if value is safe integer

```javascript
Number.isSafeInteger(9007199254740991)      // true
Number.isSafeInteger(9007199254740992)      // false
```

## Math Object

### Math Properties (Constants)
```javascript
Math.PI             // 3.141592653589793
Math.E              // 2.718281828459045 (Euler's number)
Math.LN2            // 0.6931471805599453 (natural log of 2)
Math.LN10           // 2.302585092994046 (natural log of 10)
Math.LOG2E          // 1.4426950408889634
Math.LOG10E         // 0.4342944819032518
Math.SQRT2          // 1.4142135623730951
Math.SQRT1_2        // 0.7071067811865476
```

### Basic Math Methods

#### Math.abs(x)
Absolute value

```javascript
Math.abs(-10)       // 10
Math.abs(5)         // 5
```

#### Math.round(x)
Rounds to nearest integer

```javascript
Math.round(4.5)     // 5
Math.round(4.4)     // 4
Math.round(4.6)     // 5
```

#### Math.ceil(x)
Rounds up

```javascript
Math.ceil(4.3)      // 5
Math.ceil(4.1)      // 5
```

#### Math.floor(x)
Rounds down

```javascript
Math.floor(4.7)     // 4
Math.floor(4.9)     // 4
```

#### Math.trunc(x)
Removes decimal part

```javascript
Math.trunc(4.7)     // 4
Math.trunc(-4.7)    // -4
```

### Min and Max

#### Math.min(...)
Returns smallest number

```javascript
Math.min(1, 5, 3, -2)   // -2
```

#### Math.max(...)
Returns largest number

```javascript
Math.max(1, 5, 3, -2)   // 5
```

### Power and Root

#### Math.pow(base, exponent)
Raises base to exponent

```javascript
Math.pow(2, 3)      // 8
Math.pow(10, 2)     // 100
```

#### Math.sqrt(x)
Square root

```javascript
Math.sqrt(16)       // 4
Math.sqrt(2)        // 1.414...
```

#### Math.cbrt(x)
Cube root (ES6)

```javascript
Math.cbrt(8)        // 2
Math.cbrt(27)       // 3
```

### Exponential and Logarithm

#### Math.exp(x)
Returns e raised to power of x

```javascript
Math.exp(1)         // 2.718... (equals Math.E)
Math.exp(2)         // 7.389...
```

#### Math.expm1(x)
Returns e^x - 1

```javascript
Math.expm1(1)       // 1.718... (e - 1)
```

#### Math.log(x)
Natural logarithm (base e)

```javascript
Math.log(Math.E)    // 1
Math.log(10)        // 2.302...
```

#### Math.log2(x)
Base 2 logarithm

```javascript
Math.log2(8)        // 3
Math.log2(1)        // 0
```

#### Math.log10(x)
Base 10 logarithm

```javascript
Math.log10(100)     // 2
Math.log10(1000)    // 3
```

#### Math.log1p(x)
Returns natural log of 1 + x

```javascript
Math.log1p(1)       // 0.693... (ln(2))
```

### Trigonometric Functions

#### Math.sin(x), Math.cos(x), Math.tan(x)
Sine, cosine, tangent (angle in radians)

```javascript
Math.sin(Math.PI / 2)   // 1
Math.cos(0)             // 1
Math.tan(Math.PI / 4)   // 1
```

#### Math.asin(x), Math.acos(x), Math.atan(x)
Inverse trigonometric functions

```javascript
Math.asin(1)        // 1.5707... (π/2)
Math.acos(1)        // 0
Math.atan(1)        // 0.7853... (π/4)
```

#### Math.atan2(y, x)
Arc tangent of y/x

```javascript
Math.atan2(1, 1)    // 0.7853... (π/4)
```

### Hyperbolic Functions

```javascript
Math.sinh(1)        // 1.1752...
Math.cosh(1)        // 1.5430...
Math.tanh(1)        // 0.7615...
Math.asinh(1)       // 0.8813...
Math.acosh(2)       // 1.3169...
Math.atanh(0.5)     // 0.5493...
```

### Random Number

#### Math.random()
Returns random number between 0 (inclusive) and 1 (exclusive)

```javascript
Math.random()                           // 0.123... (varies)
Math.floor(Math.random() * 10)          // Random 0-9
Math.floor(Math.random() * (max - min)) + min  // Random between min and max
```

### Other Methods

#### Math.sign(x)
Returns sign of number (-1, 0, or 1)

```javascript
Math.sign(-5)       // -1
Math.sign(0)        // 0
Math.sign(5)        // 1
```

#### Math.hypot(...values)
Square root of sum of squares

```javascript
Math.hypot(3, 4)    // 5 (√(9+16) = √25)
```

## Best Practices
- Use `Number.isNaN()` instead of `isNaN()` for strict checking
- Use `Math.floor()` with `Math.random()` for random integers
- Be aware of floating-point precision issues
- Use `toFixed()` for displaying currency
- Use `Number.MAX_SAFE_INTEGER` check for large numbers
- Prefer `toLocaleString()` for user-facing number display
