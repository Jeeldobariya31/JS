// 05 Different String Concatenation Examples

// Using the + operator
let part1 = "JavaScript ";
let part2 = "is ";
let part3 = "fun!";
let message1 = part1 + part2 + part3;
console.log("Using + operator:", message1); // Output: JavaScript is fun!

// Using template literals
let name = "Alice";
let hobby = "painting";
let message2 = `Hello, my name is ${name} and I love ${hobby}.`;
console.log("Using template literals:", message2); // Output: Hello, my name is Alice and I love painting.

// Using concat() method
let greet1 = "Good ";
let greet2 = "Morning";
let message3 = greet1.concat(greet2, "!");
console.log("Using concat() method:", message3); // Output: Good Morning!

console.log("--------------------------------------------------");

console.log(2 + 3); // Output: 5 (number addition)
console.log("2" + "3"); // Output: 23 (string concatenation)
console.log(2 + "3"); // Output: 23 (number converted to string and concatenated)
console.log("2" + 3); // Output: 23 (number converted to string and concatenated)

console.log("--------------------------------------------------");

console.log(2 + 3 + "5"); // Output: 55 (5 is concatenated as string)
// Explanation: 2 + 3 = 5 (number), then 5 + "5" = "55" (string)
console.log("5" + 2 + 3); // Output: 523 (2 and 3 are concatenated as strings)
// Explanation: "5" + 2 = "52" (string), then "52" + 3 = "523" (string)
console.log(2 + "5" + 3); // Output: 253 (3 is concatenated as string)
// Explanation: 2 + "5" = "25" (string), then "25" + 3 = "253" (string)
console.log("5" + (2 + 3)); // Output: 55 (2 and 3 are added first)
// Explanation: 2 + 3 = 5 (number), then "5" + 5 = "55" (string)
console.log(2 + (3 + "5")); // Output: 235 (3 and "5" are concatenated first)
// Explanation: 3 + "5" = "35" (string), then 2 + "35" = "235" (string)
console.log("5" + (2 * 3)); // Output: 56 (2 and 3 are multiplied first)
// Explanation: 2 * 3 = 6 (number), then "5" + 6 = "56" (string)

console.log("--------------------------------------------------");
console.log(true + 2); // Output: 3 (true is converted to 1)
console.log(false + 2); // Output: 2 (false is converted to 0)
console.log(2+ 3 + true + 6); // Output: 12 (true is converted to 1)