//module.js
// =======================================================
// 📦 JAVASCRIPT MODULES (ALL-IN-ONE FILE DEMO)
// =======================================================
//
// A module = a file with its own scope that can EXPORT
// and IMPORT code.
//
// In real projects:
// - module.js → exports
// - main.js → imports
//
// Here we SIMULATE everything in one file
// =======================================================



// =======================================================
// ✅ 1. NAMED EXPORTS (SIMULATED MODULE)
// =======================================================

console.log("\n=========== NAMED EXPORTS ===========\n");

// Simulating module.js
const ModuleA = (function () {
    let name = "Jeel";
    let count = 0;

    function greet() {
        console.log("Hello,", name);
    }

    function increment() {
        count++;
        console.log("Count is:", count);
    }

    return {
        name,
        greet,
        increment
    };
})();

// Simulating import
const { name, greet, increment } = ModuleA;

console.log("Imported name:", name);
greet();

increment();
increment();



// =======================================================
// ✅ 2. DEFAULT EXPORT (SIMULATED)
// =======================================================

console.log("\n=========== DEFAULT EXPORT ===========\n");

// Simulating module.js
const DefaultModule = (function () {
    function sayHello() {
        console.log("Hello from default export 👋");
    }

    return sayHello; // default export
})();

// Simulating import
const sayHello = DefaultModule;

sayHello();



// =======================================================
// ✅ 3. EXPORT MULTIPLE VALUES
// =======================================================

console.log("\n=========== MULTIPLE EXPORTS ===========\n");

const MathModule = (function () {
    function add(a, b) {
        return a + b;
    }

    function multiply(a, b) {
        return a * b;
    }

    return { add, multiply };
})();

const { add, multiply } = MathModule;

console.log("Add:", add(2, 3));
console.log("Multiply:", multiply(2, 3));



// =======================================================
// ✅ 4. RENAMING IMPORTS
// =======================================================

console.log("\n=========== RENAMING IMPORTS ===========\n");

// Simulating: import { add as sum } from './module.js'
const sum = MathModule.add;

console.log("Sum (renamed add):", sum(5, 5));



// =======================================================
// ✅ 5. IMPORT ALL (* as)
// =======================================================

console.log("\n=========== IMPORT ALL (* as) ===========\n");

// Simulating: import * as MathUtils from './module.js'
const MathUtils = MathModule;

console.log("Add using namespace:", MathUtils.add(10, 5));
console.log("Multiply using namespace:", MathUtils.multiply(10, 5));



// =======================================================
// ✅ 6. MODULE SCOPE (IMPORTANT)
// =======================================================

console.log("\n=========== MODULE SCOPE ===========\n");

const ScopeModule = (function () {
    let privateVar = "I am private 🔒";

    function show() {
        console.log(privateVar);
    }

    return { show };
})();

ScopeModule.show();

// ❌ Not accessible outside
console.log("Trying to access privateVar:", ScopeModule.privateVar);



// =======================================================
// 🎯 FINAL THEORY SUMMARY
// =======================================================

console.log("\n=========== SUMMARY ===========\n");

console.log("1. Modules help organize code into separate files 📁");
console.log("2. export → used to send code out");
console.log("3. import → used to bring code in");
console.log("4. Named exports → multiple values");
console.log("5. Default export → single main value");
console.log("6. Modules have their own private scope 🔒");

console.log("\n🔥 In real projects, use ES Modules (import/export) with separate files!");