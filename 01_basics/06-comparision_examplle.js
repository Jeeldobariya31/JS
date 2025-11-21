// 06- Comparison Examples

// Comparing numbers
console.log("5 == 5:", 5 == 5); // Output: true
console.log("5 === 5:", 5 === 5); // Output: true
console.log("5 != 3:", 5 != 3); // Output: true
console.log("5 !== 3:", 5 !== 3); // Output: true
console.log("5 > 3:", 5 > 3); // Output: true           
console.log("5 < 3:", 5 < 3); // Output: false
console.log("5 >= 5:", 5 >= 5); // Output: true

console.log("--------------------------------------------------")
// Comparing strings
console.log("'apple' == 'apple':", 'apple' == 'apple');
console.log("'apple' === 'Apple':", 'apple' === 'Apple');
console.log("'apple' != 'banana':", 'apple' != 'banana');
console.log("'apple' > 'banana':", 'apple' > 'banana'); // Lexicographical comparison
console.log("'apple' < 'banana':", 'apple' < 'banana');
console.log("'apple' >= 'apple':", 'apple' >= 'apple');
console.log("'apple' <= 'Apple':", 'apple' <= 'Apple');

console.log("--------------------------------------------------");
// Comparing different data types
console.log("5 == '5':", 5 == '5'); // Output: true (type coercion)
console.log("5 === '5':", 5 === '5'); // Output: false (no type coercion)
console.log("0 == false:", 0 == false); // Output: true
console.log("0 === false:", 0 === false); // Output: false
console.log("null == undefined:", null == undefined); // Output: true
console.log("null === undefined:", null === undefined); // Output: false
console.log("NaN == NaN:", NaN == NaN); // Output: false
console.log("NaN === NaN:", NaN === NaN); // Output: false

console.log("--------------------------------------------------");
console.log(null > 0); // Output: false
console.log(null < 0); // Output: false
console.log(null == 0); // Output: false
console.log(null <= 0); // Output: true
console.log(null >= 0); // Output: true
console.log(null != 0); // Output: true
console.log(null !== 0); // Output: true
console.log(null === 0); // Output: false
console.log(undefined > 0); // Output: false
console.log(undefined < 0); // Output: false
console.log(undefined == 0); // Output: false
console.log(undefined >= 0); // Output: false
console.log(undefined <= 0); // Output: false
console.log(undefined != 0); // Output: true
console.log(undefined !== 0); // Output: true
console.log(undefined === 0); // Output: false
console.log("--------------------------------------------------");
// Comparing booleans
console.log("true == 1:", true == 1); // Output: true
console.log("true === 1:", true === 1); // Output: false
console.log("false == 0:", false == 0); // Output: true
console.log("false === 0:", false === 0); // Output: false              
console.log("true > false:", true > false); // Output: true
console.log("true < false:", true < false); // Output: false
console.log("true >= true:", true >= true); // Output: true
console.log("false <= false:", false <= false); // Output: true
console.log("--------------------------------------------------");

// Comparing objects
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };
let obj3 = obj1;
console.log("obj1 == obj2:", obj1 == obj2); // Output: false (different references)
console.log("obj1 === obj2:", obj1 === obj2); // Output: false (different references)
console.log("obj1 == obj3:", obj1 == obj3); // Output: true (same reference)
console.log("obj1 === obj3:", obj1 === obj3); // Output: true (same reference)

console.log("--------------------------------------------------");

// Comparing arrays
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
let arr3 = arr1;
console.log("arr1 == arr2:", arr1 == arr2); // Output: false (different references)
console.log("arr1 === arr2:", arr1 === arr2); // Output: false (different references)   
console.log("arr1 == arr3:", arr1 == arr3); // Output: true (same reference)
console.log("arr1 === arr3:", arr1 === arr3); // Output: true (same reference)  
console.log("--------------------------------------------------");
// Comparing functions
let func1 = function() { return 1; };
let func2 = function() { return 1; };
let func3 = func1;
console.log("func1 == func2:", func1 == func2); // Output: false (different references)
console.log("func1 === func2:", func1 === func2); // Output: false (different references)
console.log("func1 == func3:", func1 == func3); // Output: true (same reference)
console.log("func1 === func3:", func1 === func3); // Output: true (same reference)
console.log("--------------------------------------------------");
