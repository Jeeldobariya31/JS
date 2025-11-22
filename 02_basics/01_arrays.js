//01_arrays.js

// Arrays are used to store multiple values in a single variable.
// They are ordered collections, meaning the order of elements is preserved.
// Arrays are versatile and widely used in JavaScript for various applications.

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Accessing elements
console.log(fruits[0]); // Output: 'Apple'
console.log(fruits[1]); // Output: 'Banana'
console.log(fruits[2]); // Output: 'Cherry'

// Modifying elements
fruits[1] = 'Blueberry';
console.log(" => After modification of elements in array fruits (fruits[1] = 'Blueberry'):");
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// Adding elements at the end
fruits.push('Pinapple');
console.log("=> after adding elements at the end in array fruits (fruits.push('Pinapple')):");
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Pinapple']

// Removing elements at the end
let removedFruit = fruits.pop();
console.log("=> removedFruit:"+ removedFruit); // Output: 'Pinapple'
console.log("=> after removing elements at the end in array fruits (fruits.pop()):");
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

//adding elements at the beginning
fruits.unshift('Mango');
console.log("=> after adding elements at the beginning in array fruits (fruits.unshift('Mango')):");
console.log(fruits); // Output: ['Mango', 'Apple', 'Blueberry', 'Cherry']

// Removing elements at the beginning
let removedFirstFruit = fruits.shift();
console.log("=>removedFirstFruit:"+ removedFirstFruit); // Output: 'Mango'
console.log("=> after removing elements at the beginning in array fruits (fruits.shift()):");
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']

// Array length
console.log("=> Length of fruits array:" + fruits.length); // Output: 3
// Iterating through an array
console.log("=>Iterating through fruits array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// 'Apple'
// 'Blueberry'
// 'Cherry'
// You can also use for...of loop
console.log("=> Iterating through fruits array using for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// 'Apple'
// 'Blueberry'
// 'Cherry'

// Arrays can hold different data types
let mixedArray = [42, 'Hello', true, null, { name: 'John' }, [1, 2, 3]];
console.log("=> mixedArray:");
console.log(mixedArray);
// Output: [42, 'Hello', true, null, { name: 'John' }, [1, 2, 3]]

// Nested arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("=> matrix:");
console.log(matrix);
// Output:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Accessing elements in nested arrays
console.log("=> Element at matrix[1][2]:" + matrix[1][2]); // Output: 6
console.log("=> Element at matrix[2][0]:" + matrix[2][0]); // Output: 7

// modifying elements in nested arrays
matrix[0][0] = 10;
console.log("=> after modification of elements in nested array matrix (matrix[0][0] = 10):");
console.log(matrix);
// Output:
// [
//   [10, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// Arrays are dynamic in size
console.log("-----------------Demonstrating dynamic nature of arrays-----------------");
console.log ("=> Initial fruits array:");
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
fruits.push('Orange');
console.log("=> after adding elements at the end in array fruits (fruits.push('Orange')):");
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Orange']
fruits.pop();
console.log("=> after removing elements at the end in array fruits (fruits.pop()):");
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
// This demonstrates the dynamic nature of arrays in JavaScript.

// Arrays come with many built-in methods for manipulation and traversal.
// Some commonly used methods include: map, filter, reduce, forEach, slice, splice, indexOf, and many more.
// Exploring these methods will help you leverage the full power of arrays in JavaScript.

//Arays Methods
console.log("-----------------Demonstrating various array methods-----------------");
console.log("------------------Part-1: ES6 Array Methods---------------------");
//1. forEach
console.log("=> Demonstrating forEach method(for printing all elements in array fruits):");
fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// 'Apple'
// 'Blueberry'
// 'Cherry'

//2. map
console.log("=> Demonstrating map method(for uppercase all elements in array fruits):");
let uppercasedFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log(uppercasedFruits); // Output: ['APPLE', 'BLUEBERRY', 'CHERRY']

//3. filter 
console.log("=> Demonstrating filter method(for filtering fruits with more than 5 characters):");
let longNamedFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});
console.log(longNamedFruits); // Output: ['Blueberry', 'Cherry']

//4. reduce
console.log("=> Demonstrating reduce method(for concatenating all fruit names):");
let concatenatedFruits = fruits.reduce(function(accumulator, fruit) {
  return accumulator + ', ' + fruit;
});
console.log(concatenatedFruits); // Output: 'Apple, Blueberry, Cherry'
//5. includes
console.log("=> Demonstrating includes method(for checking if 'Cherry' is in the fruits array):");
let hasCherry = fruits.includes('Cherry');
console.log(hasCherry); // Output: true
//6. some
console.log("=> Demonstrating some method(for checking if any fruit has more than 6 characters):");
let hasLongFruit = fruits.some(function(fruit) {
  return fruit.length > 6;
});
console.log(hasLongFruit); // Output: false
//7. every
console.log("=> Demonstrating every method(for checking if all fruits have more than 3 characters):");
let allLongFruits = fruits.every(function(fruit) {
  return fruit.length > 3;
});
console.log(allLongFruits); // Output: true
//8. reduceRight
console.log("=> Demonstrating reduceRight method(for concatenating all fruit names in reverse order):");
let reversedConcatenatedFruits = fruits.reduceRight(function(accumulator, fruit) {
  return accumulator + ', ' + fruit;
});
console.log(reversedConcatenatedFruits); // Output: 'Cherry, Blueberry, Apple'
//9. find
console.log("=> Demonstrating find method(for finding the first fruit with more than 5 characters):");
let firstLongFruit = fruits.find(function(fruit) {
  return fruit.length > 5;
});
console.log(firstLongFruit); // Output: 'Blueberry'
//10. findIndex
console.log("=> Demonstrating findIndex method(for finding the index of the first fruit with more than 5 characters):");
let firstLongFruitIndex = fruits.findIndex(function(fruit) {
  return fruit.length > 5;
});
console.log(firstLongFruitIndex); // Output: 1
console.log("----------------------------------Part-2: Other Array Methods-----------------------------------");

//11. flat
console.log("=> Demonstrating flat method(for flattening a nested array):");

let nestedArray = [1, 2, [3, 4], [5, 6]];
console.log("=> Nested array:", nestedArray); // Output: [1, 2, [3, 4], [5, 6]]
let flattenedArray = nestedArray.flat(); //flate(depth)
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
//12. flatMap
console.log("=> Demonstrating flatMap method(for mapping and flattening an array):");
let numbers = [1, 2, 3];
console.log("=> Original numbers array:", numbers); // Output: [1, 2, 3]
let squaredNumbers = numbers.flatMap(function(num) {
  return [num * num, num * num * num];
});
console.log(squaredNumbers); // Output: [1, 1, 4, 8, 9, 27]
//13. fill
console.log("=> Demonstrating fill method(for filling an array with a static value):");
console.log("=> Creating an array of length 5 filled with 'A' By using fill method (new Array(5).fill('A')):");
let fillArray = new Array(5).fill('A');
console.log(fillArray); // Output: ['A', 'A', 'A', 'A', 'A']

//14. slice
console.log("=> Demonstrating slice method(for getting a portion of the fruits array):");
let someFruits = fruits.slice(0, 2);
console.log(someFruits); // Output: ['Apple', 'Blueberry']

//15. splice
console.log("=> Demonstrating splice method(for removing 1 element at index 1 and adding 'Strawberry'):");
fruits.splice(1, 1, 'Strawberry'); //splice(start,length , replace)
console.log(fruits); // Output: ['Apple', 'Strawberry', 'Cherry']

//16. indexOf
console.log("=> Demonstrating indexOf method(for finding the index of 'Cherry'):");
let index = fruits.indexOf('Cherry');
console.log(index); // Output: 2

//17. concat
console.log("=> Demonstrating concat method(for combining two arrays):");
let moreFruits = ['Mango', 'Pineapple'];
console.log("=> More fruits array:", moreFruits); // Output: ['Mango', 'Pineapple']
let allFruits = fruits.concat(moreFruits);
console.log("=> All fruits array(fruits.concat(moreFruits)):", allFruits); // Output: ['Apple', 'Strawberry', 'Cherry', 'Mango', 'Pineapple']

//18. join
console.log("=> Demonstrating join method(for joining all elements into a string):");
let fruitString = fruits.join(' - ');
console.log("=> Joined fruit string(fruits.join(' - ')):", fruitString); // Output: 'Apple - Strawberry - Cherry'

//19. reverse
console.log("=> Demonstrating reverse method(for reversing the order of elements):");
fruits.reverse();
console.log("=> Reversed fruits array(fruits.reverse()):", fruits); // Output: ['Cherry', 'Strawberry', 'Apple']

//20. sort
console.log("=> Demonstrating sort method(for sorting the elements in alphabetical order):");
fruits.sort();
console.log("=> Sorted fruits array(fruits.sort()):", fruits); // Output: ['Apple', 'Cherry', 'Strawberry']

//21. toString
console.log("=> Demonstrating toString method(for converting the array to a string):");
let fruitsToString = fruits.toString();
console.log("=> Fruits to string(fruits.toString()):", fruitsToString); // Output: 'Apple,Cherry,Strawberry'

//22. Array.from
console.log("=> Demonstrating Array.from method(for creating an array from a string):");
let charArray = Array.from('Hello');
console.log("=> Character array(Array.from('Hello')):", charArray); // Output: ['H', 'e', 'l', 'l', 'o']

//23. Array.isArray
console.log("=> Demonstrating Array.isArray method(for checking if a variable is an array):");
let isArray = Array.isArray(fruits);
console.log("=> Is fruits an array?(Array.isArray(fruits)):", isArray); // Output: true

//24. Array.of
console.log("=> Demonstrating Array.of method(for creating an array from a list of arguments):");
let numArray = Array.of(1, 2, 3, 4, 5);
console.log("=> Number array(Array.of(1, 2, 3, 4, 5)):", numArray); // Output: [1, 2, 3, 4, 5]

//25. copyWithin
console.log("=> Demonstrating copyWithin method(for copying part of the array to another location within the same array):");
let sampleArray = ['A', 'B', 'C', 'D', 'E'];
console.log("=> Original sample array:", sampleArray); // Output: ['A', 'B', 'C', 'D', 'E']
//copyWithin(target, start, end) 
sampleArray.copyWithin(0, 3, 5); // Copies elements at index 3 and 4 to the start of the array
console.log("=> Sample array after copyWithin(sampleArray.copyWithin(0, 3, 5)):", sampleArray); // Output: ['D', 'E', 'C', 'D', 'E']

//26. lastIndexOf
console.log("=> Demonstrating lastIndexOf method(for finding the last occurrence of 'C' in an array):");
let lettersArray = ['A', 'B', 'C', 'D', 'C', 'E'];
console.log("=> Letters array:", lettersArray); // Output: ['A', 'B', 'C', 'D', 'C', 'E']
let lastIndex = lettersArray.lastIndexOf('C');
console.log("=> Last index of 'C'(lettersArray.lastIndexOf('C')):", lastIndex); // Output: 4

//27. keys
console.log("=> Demonstrating keys method(for getting an iterator of the array's keys):");
let keysIterator = fruits.keys();
console.log("=> Keys of fruits array:");
for (let key of keysIterator) {
  console.log(key);
}
// Output:
// 0
// 1
// 2

//28. values
console.log("=> Demonstrating values method(for getting an iterator of the array's values):");
let valuesIterator = fruits.values();
console.log("=> Values of fruits array:");
for (let value of valuesIterator) {
  console.log(value);
}
// Output:
// Apple
// Strawberry
// Cherry

//29. entries
console.log("=> Demonstrating entries method(for getting an iterator of the array's key/value pairs):");
let entriesIterator = fruits.entries();
console.log("=> Entries of fruits array:");
for (let entry of entriesIterator) {
  console.log(entry);
}
// Output:
// [0, 'Apple']
// [1, 'Strawberry']
// [2, 'Cherry']


// These methods, along with many others, make arrays a powerful and flexible tool in JavaScript programming.
