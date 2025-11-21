// 03_conversionOperationDataType.js

// Demonstrating type conversion and operations on different data types in JavaScript

// 1. Implicit Type Conversion
let implicitString = "The answer is " + 42; // Number 42 is converted to string
console.log("Implicit Conversion (String):", implicitString); // Output: The answer is 42

// 2. Explicit Type Conversion
let explicitNumber = Number("42"); // String "42" is converted to number
let implicitNumber = "5" * 2; // String "5" is converted to number
console.log("Implicit Conversion (Number):", implicitNumber); // Output: 10
console.log("Explicit Conversion (Number):", explicitNumber); // Output: 42

// 3. Operations on Different Data Types

// a. String Concatenation      
let str1 = "Hello, ";
let str2 = "World!";
let concatenatedString = str1 + str2;
console.log("String Concatenation:", concatenatedString); // Output: Hello, World!

// b. Numeric Operations
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
console.log("Numeric Operations (Sum):", sum); // Output: 30
// c. Boolean Operations
let bool1 = true;
let bool2 = false;      
let andOperation = bool1 && bool2;
let orOperation = bool1 || bool2;
console.log("Boolean Operations (AND):", andOperation);
console.log("Boolean Operations (OR):", orOperation); // Output: false, true

// d. Array Operations
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log("Array Operations (Combined):", combinedArray); // Output: [1, 2, 3, 4, 5, 6]      
// e. Object Operations
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };
let mergedObject = { ...object1, ...object2 };
console.log("Object Operations (Merged):", mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Note: JavaScript performs type coercion in certain operations, which can lead to unexpected results. Always be cautious and use explicit conversions when necessary.
