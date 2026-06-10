# IIFE - Immediately Invoked Function Expression

## Overview
Functions that execute immediately upon declaration, useful for encapsulation and avoiding global scope pollution.

## Basic IIFE

### Function Declaration IIFE
```javascript
(function() {
    console.log("This runs immediately");
})();
```

### Function Expression IIFE
```javascript
(function() {
    console.log("Running immediately");
})();
```

### Alternative Syntax
```javascript
!function() {
    console.log("Also runs immediately");
}();

~function() {
    console.log("Alternative IIFE");
}();
```

## IIFE with Parameters

### Passing Arguments
```javascript
(function(name) {
    console.log("Hello, " + name);
})("John");                      // "Hello, John"
```

### Multiple Parameters
```javascript
(function(a, b, c) {
    console.log(a + b + c);      // 6
})(1, 2, 3);
```

### Passing Global Objects
```javascript
(function(window, document) {
    console.log(window);         // window object
    console.log(document);       // document object
})(window, document);
```

## IIFE Patterns

### Module Pattern
Creates private and public variables:

```javascript
let calculator = (function() {
    // Private variables
    let total = 0;
    
    // Private function
    function logOperation(operation, value) {
        console.log(`${operation}: ${value}`);
    }
    
    // Public API
    return {
        add: function(x) {
            total += x;
            logOperation("Add", x);
            return this;
        },
        subtract: function(x) {
            total -= x;
            logOperation("Subtract", x);
            return this;
        },
        getTotal: function() {
            return total;
        }
    };
})();

calculator.add(5).subtract(2);   // Add: 5, Subtract: 2
console.log(calculator.getTotal()); // 3
console.log(calculator.total);   // undefined (private)
```

### Singleton Pattern
```javascript
let singleton = (function() {
    let instance;
    
    function createInstance() {
        return {
            name: "Instance",
            getValue: function() {
                return "Singleton value";
            }
        };
    }
    
    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

let obj1 = singleton.getInstance();
let obj2 = singleton.getInstance();
console.log(obj1 === obj2);      // true (same instance)
```

### Namespace Pattern
```javascript
let myApp = (function() {
    // Private
    let appVersion = "1.0";
    
    function init() {
        console.log("App initialized");
    }
    
    // Public API
    return {
        init: init,
        getVersion: function() {
            return appVersion;
        }
    };
})();

myApp.init();                    // App initialized
console.log(myApp.getVersion()); // "1.0"
```

## IIFE with Arrow Functions (ES6+)

```javascript
(() => {
    console.log("Arrow function IIFE");
})();
```

## IIFE Use Cases

### Avoiding Global Scope Pollution
```javascript
// Without IIFE - pollutes global
var x = 10;
var y = 20;

// With IIFE - keeps scope clean
(function() {
    var x = 10;
    var y = 20;
    console.log(x + y);         // 30
})();

console.log(typeof x);          // undefined (x not global)
```

### Creating Private Variables
```javascript
let counter = (function() {
    let count = 0;              // Private variable
    
    return function() {
        count++;
        return count;
    };
})();

console.log(counter());         // 1
console.log(counter());         // 2
console.log(typeof count);      // undefined (private)
```

### Data Encapsulation
```javascript
let userManager = (function() {
    let users = [];             // Private array
    
    return {
        addUser: function(name) {
            users.push({ name, id: users.length + 1 });
        },
        getUsers: function() {
            return users.slice(); // Return copy
        },
        removeUser: function(id) {
            users = users.filter(u => u.id !== id);
        }
    };
})();

userManager.addUser("John");
userManager.addUser("Jane");
console.log(userManager.getUsers()); // [{ name: 'John', id: 1 }, ...]
console.log(userManager.users);     // undefined (private)
```

### Plugin/Library Pattern
```javascript
let myLibrary = (function() {
    // Private utilities
    function trim(str) {
        return str.trim();
    }
    
    function validateEmail(email) {
        return email.includes("@");
    }
    
    // Public API
    return {
        process: function(data) {
            let cleaned = trim(data);
            return cleaned;
        },
        validate: function(email) {
            return validateEmail(email);
        }
    };
})();

console.log(myLibrary.process("  hello  ")); // "hello"
console.log(myLibrary.validate("test@example.com")); // true
```

### Initialization Code
```javascript
(function() {
    // Setup code runs once
    let config = { apiUrl: "https://api.example.com" };
    let initialized = false;
    
    function init() {
        console.log("Initializing with config:", config);
        initialized = true;
    }
    
    init();
})();
```

## IIFE vs Modern Alternatives

### Compared to ES6 Modules
```javascript
// Old: IIFE
let module = (function() {
    let private = "private";
    return { public: "public" };
})();

// Modern: ES6 Module
// private.js
let private = "private";
export { private };

// main.js
import { private } from './private.js';
```

### Compared to Block Scope (ES6+)
```javascript
// Old: IIFE for scope
(function() {
    let x = 10;
})();

// Modern: Block scope with let/const
{
    let x = 10;
}
```

## Best Practices
- Use IIFE to avoid polluting global scope
- Use for module pattern and data encapsulation
- Modern alternatives (ES6 modules, block scope) are often preferred
- Use for initialization code that should run once
- Parameter passing makes dependencies explicit
- Can be useful for plugin/library code
- In modern JavaScript, consider ES6 modules for better maintainability
