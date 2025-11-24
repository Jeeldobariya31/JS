// ===================================================================
// 📘 06_function_with_array_and_object.js
// FUNCTIONS with ARRAYS + OBJECTS (Easy + Complete)
// ===================================================================

console.log("\n📂 Loaded: 02_function_with_array_and_object.js\n");

// ===================================================================
// 1️⃣ Function that takes an ARRAY as input
// ===================================================================

function printArray(arr) {
  console.log("1️⃣ Array received:", arr);
}
printArray([10, 20, 30]);

// ===================================================================
// 2️⃣ Function that returns an ARRAY
// ===================================================================

function makeArray(a, b, c) {
  return [a, b, c];
}
console.log("2️⃣ Returned Array:", makeArray(1, 2, 3));

// ===================================================================
// 3️⃣ Function that takes an OBJECT as parameter
// ===================================================================

function printUser(user) {
  console.log("3️⃣ User Info:", user.name, user.age);
}

printUser({ name: "Jeel", age: 21 });

// ===================================================================
// 4️⃣ Function that returns an OBJECT
// ===================================================================

function createUser(name, age) {
  return {
    name,
    age,
    isActive: true,
  };
}
console.log("4️⃣ Returned Object:", createUser("Asha", 22));

// ===================================================================
// 5️⃣ Function modifying ARRAY (push, pop etc.)
// ===================================================================

function addSkill(skillsArr, skill) {
  skillsArr.push(skill); // modifies original array
  return skillsArr;
}

let skills = ["JS", "HTML"];
console.log("5️⃣ Modified Array:", addSkill(skills, "CSS"));

// ===================================================================
// 6️⃣ Function modifying OBJECT (adding/updating key)
// ===================================================================

function updateUser(userObj, key, value) {
  userObj[key] = value; // adds/updates key
  return userObj;
}

let user = { name: "Jeel", age: 21 };
console.log("6️⃣ Updated Object:", updateUser(user, "city", "Rajkot"));

// ===================================================================
// 7️⃣ Destructuring ARRAY inside function
// ===================================================================

function sumArray([a, b, c]) {
  return a + b + c;
}

console.log("7️⃣ Array Destructure inside function:", sumArray([5, 10, 15]));

// ===================================================================
// 8️⃣ Destructuring OBJECT inside function
// ===================================================================

function printDetails({ fname, age, city }) {
  console.log("8️⃣ Object Destructure:", fname, age, city);
}

printDetails({ fname: "Nina", age: 22, city: "Ahmedabad" });

// ===================================================================
// 9️⃣ Returning both ARRAY + OBJECT
// ===================================================================

function getData() {
  return {
    list: [1, 2, 3],
    user: { name: "Ravi", age: 25 },
  };
}

console.log("9️⃣ Return object + array:", getData());

// ===================================================================
// 🔟 Function with REST parameter for arrays
// ===================================================================

function total(...nums) {
  return nums.reduce((sum, n) => sum + n, 0);
}

console.log("🔟 Rest with array:", total(10, 20, 30, 40));

// ===================================================================
// 1️⃣1️⃣ Function with default OBJECT value
// ===================================================================

function login(user = { name: "Guest" }) {
  console.log("11️⃣ User logged:", user.name);
}

login({ name: "Jeel" });
login(); // Guest

// ===================================================================
// 1️⃣2️⃣ Higher-order function with ARRAY (map)
// ===================================================================

function doubleArray(arr, fn) {
  return arr.map(fn); // fn = callback
}

console.log(
  "12️⃣ Higher-order with array:",
  doubleArray([1, 2, 3], (n) => n * 2)
);

// ===================================================================
// 1️⃣3️⃣ Higher-order with OBJECT ARRAY (filter)
// ===================================================================

const users = [
  { name: "Jeel", age: 21 },
  { name: "Asha", age: 17 },
  { name: "Ravi", age: 23 },
];

function filterAdults(userArray) {
  return userArray.filter((u) => u.age >= 18);
}
console.log("13️⃣ Filter adults:", filterAdults(users));

// ===================================================================
// 1️⃣4️⃣ Function returns FUNCTION working with array
// ===================================================================

function createMultiplier(n) {
  return function (arr) {
    return arr.map((x) => x * n);
  };
}

let triple = createMultiplier(3);
console.log("14️⃣ Function returning function:", triple([1, 2, 3]));

// ===================================================================
// 1️⃣5️⃣ Advanced: Immutability (does NOT modify original)
// ===================================================================

function addItemImmutable(arr, item) {
  return [...arr, item]; // returns new array
}

let nums = [1, 2, 3];
console.log("15️⃣ Immutable add:", addItemImmutable(nums, 4), nums);

// ===================================================================
// 1️⃣6️⃣ Practice: Object + Array combined function
// ===================================================================

function addProduct(cart, name, price) {
  cart.items.push({ name, price });
  cart.total += price;
  return cart;
}

let cart = { items: [], total: 0 };
console.log("16️⃣ Combined object + array:", addProduct(cart, "Pen", 20));
console.log("16️⃣ Combined object + array:", addProduct(cart, "Book", 50));

// ===================================================================
// 1️⃣7️⃣ Interview Questions (Short Notes)
// ===================================================================
/*
Q1: Can functions return objects?
✔ Yes, functions can return any data type.

Q2: Can arrays be passed to functions?
✔ Yes, arrays are passed by reference.

Q3: Can functions modify objects?
✔ Yes, objects are mutable and passed by reference.

Q4: What happens if you destructure array/object inside function?
✔ Makes code cleaner and avoids arr[0] or obj.key syntax.

Q5: When to use rest parameter (...args)?
✔ When arguments count is unknown.

Q6: How to avoid modifying original array/object?
✔ Use spread operator to create copy before modifying.
*/

// ===================================================================
console.log(
  "\n🎉 COMPLETED — Functions with Arrays & Objects (All Examples Done!)\n"
);
// ===================================================================
