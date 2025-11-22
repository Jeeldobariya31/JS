// 07_string.js
// Demonstrating string operations in JavaScript

// Creating strings using single and double quotes
let singleQuoteString = "Hello, world!";
let doubleQuoteString = "Hello, world!";
console.log("Single Quote String:", singleQuoteString); // Output: Hello, world!
console.log("Double Quote String:", doubleQuoteString); // Output: Hello, world!

//creating strings using template literals
let templateLiteralString = `Hello, world!`;
console.log("Template Literal String:", templateLiteralString); // Output: Hello, world!

//creating string using String constructor
let constructorString = new String("Hello, world!");
console.log("Constructor String:", constructorString.toString()); // Output: Hello, world!

// String concatenation
let greeting = "Hello";
let name = "Alice";
let concatenatedString = greeting + ", " + name + "!";
console.log("Concatenated String:", concatenatedString); // Output: Hello, Alice!

// String interpolation using template literals
let age = 30;
let interpolatedString = `My name is ${name} and I am ${age} years old.`; // here ${ } is used for interpolation of variables
console.log("Interpolated String:", interpolatedString); // Output: My name is Alice and I am 30 years old.

// String methods
let sampleString = "  JavaScript is awesome!  ";        
//1. length property
console.log("Original String:", sampleString); // Output: "  JavaScript is awesome!  "  
console.log("Length:", sampleString.length); // Output: 26
//2.uppercase - changes all characters to uppercase
console.log("Uppercase:", sampleString.toUpperCase()); // Output: "  JAVASCRIPT IS AWESOME!  "
//3.lowercase - changes all characters to lowercase
console.log("Lowercase:", sampleString.toLowerCase()); // Output: "  javascript is awesome!  "
//4. trim - removes whitespace from both ends of a string
console.log("Trimmed:", sampleString.trim()); // Output: "JavaScript is awesome!"
//5. substring - extracts characters from a string between two specified indices
console.log("Substring (0, 10):", sampleString.substring(0, 10));       // Output: "  JavaScri"
//6. replace - replaces a specified value with another value in a string
console.log("Replace 'awesome' with 'great':", sampleString.replace("awesome", "great")); // Output: "  JavaScript is great!  "
//7.includes - checks if a string contains a specified value
console.log("Includes 'Script':", sampleString.includes("Script")); // Output: true
//8. startsWith and endsWith - checks if a string starts or ends with a specified value
console.log("Starts with 'J':", sampleString.startsWith("J")); // Output: true
console.log("Ends with '!':", sampleString.endsWith("!")); // Output: true
//9.charAt- returns the character at a specified index
console.log("Char at index 5:", sampleString.charAt(5)); // Output: S
//10.indexOf - returns the index of the first occurrence of a specified value
console.log("Index of 'is':", sampleString.indexOf("is")); // Output: 13
//11.lastIndexOf - returns the index of the last occurrence of a specified value
console.log("Last Index of 'a':", sampleString.lastIndexOf("a")); // Output: 10
//12.split - splits a string into an array of substrings based on a specified separator
console.log("Split by space:", sampleString.split(" ")); // Output: [ '', '', 'JavaScript', 'is', 'awesome!', '', '' ]
//13.charCodeAt - returns the Unicode of the character at a specified index
console.log("Char code at index 5:", sampleString.charCodeAt(5)); // Output: 83
//14. repeat - repeats a string a specified number of times
console.log("Repeat 3 times:", sampleString.trim().repeat(3)); // Output: "JavaScript is awesome!JavaScript is awesome!JavaScript is awesome!"
//15. slice - extracts a section of a string and returns it as a new string
console.log("Slice (2, 12):", sampleString.slice(2, 12)); // Output: "JavaScript"
//using negative indices with slice
console.log("slice with negative indices (-10, -1):", sampleString.slice(-10, -1)); // Output: "some!  "
//16. padStart and padEnd - pads a string with another string until it reaches a specified length
console.log("Pad Start to length 30:", sampleString.trim().padStart(30, "-")); // Output: "--------JavaScript is awesome!" //here - is used to pad the string to make its total length 30
console.log("Pad End to length 30:", sampleString.trim().padEnd(30, "-")); // Output: "JavaScript is awesome!--------" //here - is used to pad the string to make its total length 30

// splitting strings
console.log("Split by space:", sampleString.trim().split(" ")); // Output: ["JavaScript", "is", "awesome!"]

// Note: Strings are immutable in JavaScript. Methods return new strings and do not modify the original string.