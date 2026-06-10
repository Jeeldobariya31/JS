# Operators and Operations

## Overview
This file demonstrates arithmetic, assignment, comparison, and logical operators in JavaScript.

## Arithmetic Operators

### Basic Operations
```javascript
+         // Addition
-         // Subtraction
*         // Multiplication
/         // Division
%         // Modulus (remainder)
**        // Exponentiation
```

### Examples
```javascript
10 + 5    // 15
10 - 5    // 5
10 * 5    // 50
10 / 5    // 2
10 % 3    // 1
2 ** 3    // 8
```

## Unary Operators
```javascript
++        // Increment (pre and post)
--        // Decrement (pre and post)
+x        // Unary plus (converts to number)
-x        // Unary minus (converts to number and negates)
!         // Logical NOT
```

## Assignment Operators
```javascript
=         // Assign
+=        // Add and assign
-=        // Subtract and assign
*=        // Multiply and assign
/=        // Divide and assign
%=        // Modulus and assign
**=       // Exponentiation and assign
```

### Examples
```javascript
x = 10;
x += 5;   // x = 15
x -= 3;   // x = 12
x *= 2;   // x = 24
x /= 3;   // x = 8
x %= 3;   // x = 2
```

## Comparison Operators
```javascript
==        // Loose equality (type coerced)
===       // Strict equality (no type coercion)
!=        // Loose inequality
!==       // Strict inequality
>         // Greater than
<         // Less than
>=        // Greater than or equal
<=        // Less than or equal
```

## Logical Operators
```javascript
&&        // Logical AND (returns first falsy or last truthy)
||        // Logical OR (returns first truthy or last falsy)
!         // Logical NOT
```

### Examples
```javascript
true && false         // false
true || false         // true
!true                 // false
5 > 3 && 10 < 20      // true
```

## Ternary Operator
```javascript
condition ? valueIfTrue : valueIfFalse
```

### Example
```javascript
age >= 18 ? "Adult" : "Minor"
```

## Bitwise Operators
```javascript
&         // AND
|         // OR
^         // XOR
~         // NOT
<<        // Left shift
>>        // Right shift
>>>       // Unsigned right shift
```

## Operator Precedence
Higher precedence operators are evaluated first. Order (highest to lowest):
1. Exponentiation (`**`)
2. Unary (`++`, `--`, `!`, `~`, `+`, `-`)
3. Multiplication, Division, Modulus (`*`, `/`, `%`)
4. Addition, Subtraction (`+`, `-`)
5. Bitwise shifts (`<<`, `>>`, `>>>`)
6. Comparison (`<`, `<=`, `>`, `>=`)
7. Equality (`==`, `!=`, `===`, `!==`)
8. Bitwise AND (`&`)
9. Bitwise XOR (`^`)
10. Bitwise OR (`|`)
11. Logical AND (`&&`)
12. Logical OR (`||`)
13. Ternary (`?:`)
14. Assignment (`=`, `+=`, `-=`, etc.)
