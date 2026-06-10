# Console Methods in JavaScript

## Overview
Comprehensive guide to console methods for debugging and logging in JavaScript.

## Basic Output

### console.log()
Outputs a message or variables to the console

```javascript
console.log('Hello World');
console.log(123, 'text', true);
let name = 'John';
console.log(`Name: ${name}`);
```

### console.info()
Similar to `log()`, typically with an info icon

```javascript
console.info('Information message');
```

### console.warn()
Outputs warning message (usually in yellow)

```javascript
console.warn('This is a warning');
```

### console.error()
Outputs error message (usually in red)

```javascript
console.error('This is an error');
```

### console.debug()
Outputs debug message

```javascript
console.debug('Debug information');
```

## Formatting Output

### String Substitution
```javascript
console.log('%s is %d years old', 'John', 30);
console.log('%cStyled text', 'color: red; font-size: 16px;');
console.log('%o', { name: 'John' });  // Object
console.log('%O', { name: 'John' });  // Object (alternate)
```

## Grouping

### console.group() / console.groupEnd()
Groups related messages

```javascript
console.group('User Details');
console.log('Name: John');
console.log('Age: 30');
console.groupEnd();
```

### console.groupCollapsed()
Creates a collapsed group

```javascript
console.groupCollapsed('Details');
console.log('Hidden initially');
console.groupEnd();
```

## Counting and Timing

### console.count()
Counts how many times it's called with a label

```javascript
console.count('click');
console.count('click');
console.count('click');  // "click: 3"
```

### console.countReset()
Resets the count for a label

```javascript
console.countReset('click');
```

### console.time() / console.timeEnd()
Measures execution time

```javascript
console.time('loop');
for (let i = 0; i < 1000000; i++) {
    // some code
}
console.timeEnd('loop');  // Output: "loop: 0.123ms"
```

### console.timeLog()
Logs elapsed time without stopping

```javascript
console.time('process');
// ... some code
console.timeLog('process');  // Logs time without ending
// ... more code
console.timeEnd('process');
```

## Assertions

### console.assert()
Logs message if assertion is false

```javascript
console.assert(2 > 1, 'This is true');
console.assert(1 > 2, 'This should print');  // Shows message
```

## Table Output

### console.table()
Displays data as a table

```javascript
let users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];
console.table(users);
```

## Tracing

### console.trace()
Outputs stack trace showing where the call happened

```javascript
function level3() {
    console.trace('Trace point');
}

function level2() {
    level3();
}

function level1() {
    level2();
}

level1();
```

## Clearing

### console.clear()
Clears the console

```javascript
console.clear();
```

## Styling

### CSS Styling with %c
```javascript
console.log('%cHello World', 'color: red; font-size: 20px; font-weight: bold;');
console.log('%cWarning', 'color: orange; background: yellow;');
console.log('%cSuccess', 'color: green; font-weight: bold;');
```

## Advanced Examples

### Nested Grouping
```javascript
console.group('Outer');
console.log('Item 1');
console.group('Inner');
console.log('Item 1.1');
console.log('Item 1.2');
console.groupEnd();
console.log('Item 2');
console.groupEnd();
```

### Performance Monitoring
```javascript
console.time('fetch');
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        console.timeEnd('fetch');
        console.table(data);
    });
```

## Browser vs Node.js
- Most methods work in both browsers and Node.js
- Some styling features (like %c) may not work in Node.js
- Node.js has additional console methods

## Best Practices
- Use `console.log()` for general debugging
- Use `console.warn()` and `console.error()` for important messages
- Use `console.time()` for performance analysis
- Use `console.table()` for viewing structured data
- Remove or comment out console statements before production
- Use meaningful labels with `console.group()` for organization
