// 01_variables.js
// Demonstrating the use of let, var, and const in JavaScript
//preference: let > const > var

//1. Using 'let' to declare a block-scoped variable
let blockScoped = "I am block scoped";
if (true) {
    let blockScoped = "I am a different (inside the if) block scoped variable";
    console.log(blockScoped); // Output: I am a different (inside the if) block scoped variable
}
console.log(blockScoped); // Output: I am block scoped

//2. Using 'var' to declare a function-scoped variable
var functionScoped = "I am function scoped";
function testVar() {
    var functionScoped = "I am a different (inside the function) function scoped variable";
    console.log(functionScoped); // Output: I am a different (inside the function) function scoped variable
}
testVar();
console.log(functionScoped); // Output: I am function scoped

// 3. Using 'const' to declare a constant variable
const constantValue = "I cannot be changed";
console.log(constantValue); // Output: I cannot be changed
// Uncommenting the next line will cause an error because constantValue cannot be reassigned

// Error: Assignment to constant variable.
// constantValue = "Trying to change";  //👉 Remove coment to run this line
