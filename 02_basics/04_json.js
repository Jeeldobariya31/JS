// ===================================================================
// 📘 04_json.js — COMPLETE JSON NOTES & METHODS (Easy + Interview Ready)
// ===================================================================
console.log("\n📂 Loaded: 04_json.js (JSON Guide)\n");

// ===================================================================
// 1️⃣ What is JSON?
// ===================================================================
// 👉 JSON = JavaScript Object Notation
// 👉 Lightweight format for sending & receiving data
// 👉 Mainly used in REST APIs, config files, DBs
// 👉 JSON looks like JavaScript object BUT:
//       ❌ no functions
//       ❌ no comments
//       ❌ keys must be in double quotes
// ===================================================================

const jsObject = { name: "Jeel", age: 21 };
console.log("1️⃣ JS Object:", jsObject);

// ===================================================================
// 2️⃣ JSON Format Example (valid JSON)
// ===================================================================
// ⭐ JSON supports ONLY:
//    • string
//    • number
//    • boolean
//    • null
//    • array
//    • object
// ❌ JSON doesn't support functions, undefined, date object etc.
// ===================================================================

const jsonStringExample = `
{
  "name": "Jeel",
  "age": 21,
  "skills": ["JS", "HTML", "CSS"],
  "isStudent": true,
  "address": {
    "city": "Rajkot",
    "state": "Gujarat"
  }
}
`;

console.log("2️⃣ JSON Example (string):", jsonStringExample);

// ===================================================================
// 3️⃣ JSON.stringify() → Convert JS Object → JSON String
// ===================================================================
// ⭐ Used when sending data to server (API / backend)
// ⭐ Removes functions, undefined, symbol
// ===================================================================

const user = {
  name: "Jeel",
  age: 21,
  skills: ["JS", "React"],
  active: true,
  greet() {
    return "Hello"; // ❌ Will not appear in JSON
  },
};

const jsonString = JSON.stringify(user);
console.log("3️⃣ JSON.stringify:", jsonString);

// pretty formatting (for readability)
const prettyJSON = JSON.stringify(user, null, 2);
console.log("3.1 Pretty JSON:\n", prettyJSON);

// ===================================================================
// 4️⃣ JSON.parse() → Convert JSON String → JS Object
// ===================================================================
// ⭐ Used when receiving data from API / server
// ===================================================================

const jsonData = `{"name":"Asha","age":22,"city":"Surat"}`;
const parsedObj = JSON.parse(jsonData);
console.log("4️⃣ JSON.parse:", parsedObj);

// ===================================================================
// 5️⃣ JSON.stringify() WITH REPLACER (filter keys)
// ===================================================================
// 🤓 Example: remove "age" from final JSON
// ===================================================================

const filteredJSON = JSON.stringify(user, ["name", "skills"]);
console.log("5️⃣ JSON.stringify with replacer:", filteredJSON);

// ===================================================================
// 6️⃣ JSON.stringify() WITH FUNCTION REPLACER
// ===================================================================

const filtered = JSON.stringify(user, (key, value) => {
  if (key === "age") return undefined; // remove key
  return value;
});
console.log("6️⃣ JSON.stringify with function replacer:", filtered);

// ===================================================================
// 7️⃣ JSON.parse() WITH REVIVER FUNCTION
// ===================================================================
// ⭐ Modify values while converting JSON → Object
// ⭐ Example: convert JSON number into integer + add extra text
// ===================================================================

const jsonMarks = `{"math": "90", "science": "88"}`;

const revived = JSON.parse(jsonMarks, (key, value) => {
  if (!isNaN(value)) return Number(value); // convert string → number
  return value;
});

console.log("7️⃣ JSON.parse with reviver:", revived);

// ===================================================================
// 8️⃣ JSON vs JavaScript Object (Important Interview Question)
// ===================================================================
/*
JSON:
✔ data exchange format
✔ keys MUST be in double quotes
✔ only supports: string, number, boolean, null, array, object
✔ no functions
✔ no comments

JS Object:
✔ can contain functions, methods
✔ keys can be without quotes
✔ supports everything (Date, Map, Set, undefined, symbol etc.)
*/

// ===================================================================
// 9️⃣ Convert JSON → Formatted Object (Indentation Example)
// ===================================================================

console.log("9️⃣ formatted JSON:", JSON.stringify(jsObject, null, 4));

// ===================================================================
// 🔟 Common JSON Interview Questions
// ===================================================================
/*
Q1: What is JSON?
A: Text format for sending data between client & server.

Q2: Difference between JS object & JSON?
A: JSON is a string format; JS object is actual in-memory data.

Q3: What does JSON.stringify do?
A: Converts JS object → JSON string.

Q4: What does JSON.parse do?
A: Converts JSON string → JS object.

Q5: Can JSON contain functions?
A: ❌ No.

Q6: Can JSON support comments?
A: ❌ No.

Q7: Why do APIs send JSON?
A: It's lightweight, text-based, language-independent.
*/

// ===================================================================
console.log("\n🎉 COMPLETED — Full JSON Notes + Examples (Easy + Clean)\n");
// ===================================================================
