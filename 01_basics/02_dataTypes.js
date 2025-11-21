// 02_dataTypes.js
// Demonstrating different data types in JavaScript

// 1. String
let stringType = "Hello, World!";
console.log("String:", stringType); // Output: Hello, World!

// 2. Number
let numberType = 42;
console.log("Number:", numberType); // Output: 42

// 3. Boolean
let booleanType = true;
console.log("Boolean:", booleanType); // Output: true

// 4. Undefined
let undefinedType;
console.log("Undefined:", undefinedType); // Output: undefined

// 5. Null
let nullType = null;
console.log("Null:", nullType); // Output: null

// 6. Object
let objectType = { name: "Jeel", age: 25 };
console.log("Object:", objectType); // Output: { name: 'Jeel', age: 25 }

// 7. Array
let arrayType = [1, 2, 3, 4, 5];
console.log("Array:", arrayType); // Output: [ 1, 2, 3, 4, 5 ]

// 8. Symbol
let symbolType = Symbol("uniqueIdentifier");
console.log("Symbol:", symbolType); // Output: Symbol(uniqueIdentifier)

// 9. BigInt
let bigIntType = BigInt(9007199254740991);
console.log("BigInt:", bigIntType); // Output: 9007199254740991n

// Note: JavaScript is dynamically typed, so variables can hold any data type and can be changed at runtime.

// Example of dynamic typing
let dynamicType = "I am a string";
console.log("Dynamic Type (String):", dynamicType); // Output: I am a string
dynamicType = 100;
console.log("Dynamic Type (Number):", dynamicType); // Output: 100

// some properties of data types
console.log("Type of stringType:", typeof stringType); // Output: string
console.log("Type of numberType:", typeof numberType); // Output: number
console.log("Type of booleanType:", typeof booleanType); // Output: boolean
console.log("Type of undefinedType:", typeof undefinedType); // Output: undefined       
console.log("Type of nullType:", typeof nullType); // Output: object
console.log("Type of objectType:", typeof objectType); // Output: object                
console.log("Type of arrayType:", typeof arrayType); // Output: object                
console.log("Type of symbolType:", typeof symbolType); // Output: symbol        
console.log("Type of bigIntType:", typeof bigIntType); // Output: bigint

// Note: typeof null returns 'object' due to a historical bug in JavaScript.

// To accurately check for null, use a strict equality check
console.log("Is nullType null?", nullType === null); // Output: true
// To check if a variable is an array, use Array.isArray()
console.log("Is arrayType an array?", Array.isArray(arrayType)); // Output: true

