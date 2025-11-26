// ===================================================================
// 📘 04_this_and_arrow.js — ARROW FUNCTIONS (first) then `this` (detailed)
// ===================================================================
console.log("\n📂 Loaded: 08_this_and_arrow.js (Arrow first → then this)\n");

// ===================================================================
// PART A — ARROW FUNCTIONS (All you need to know first)
// ===================================================================

// ===================================================================
// A.1 What is an Arrow Function?
// ===================================================================
// ▶ Shorter syntax introduced in ES6
// ▶ Lexical `this` — arrow DOES NOT create its own `this`
// ▶ No `prototype`, cannot use as constructor
// ▶ No `arguments` object (use rest `...args`)
// ===================================================================

console.log("\nA️⃣ Arrow Functions — Basics\n");

// A.2 Basic syntax (short form)
const add = (a, b) => a + b;
console.log("A.2 add(2,3):", add(2, 3)); // 5

// A.3 Block body (multiple lines & explicit return)
const sumAndLog = (a, b) => {
  const s = a + b;
  console.log("A.3 inside block:", s);
  return s;
};
sumAndLog(4, 5);

// A.4 No parameters or single parameter
const noArg = () => "no args";
const oneArg = (x) => x * 2; // parentheses optional for single param
console.log("A.4:", noArg(), oneArg(7));

// A.5 Returning object literal (wrap in parentheses)   👈 Note For Interview
const makeObj = (n) => ({ name: n, time: Date.now() }); 
console.log("A.5 return object:", makeObj("Jeel"));

// A.6 Rest parameters (useful because `arguments` not available)
const joinAll = (...items) => items.join("-");
console.log("A.6 rest:", joinAll("a", "b", "c"));

// A.7 Arrow functions & `this` — lexical binding (short explanation)
// ▶ Arrow does NOT bind its own `this` — it uses the `this` of enclosing scope
console.log("\nA.7 Arrow functions capture parent `this` (lexical)\n");

// A.8 Example: arrow inside method uses parent's this
const personA = {
  name: "Nina",
  greet() {
    // here `this` refers to personA
    const arrow = () => console.log("A.8 arrow->", this.name); // same this as greet()
    arrow();
  },
};
personA.greet(); // Nina

// A.9 Example: arrow as object method — BAD if you expect method `this`
const personB = {
  name: "Asha",
  greet: () => {
    // lexical this here is NOT personB (it's the parent; in module it's undefined)
    console.log("A.9 arrow as method -> this:", this);
  },
};
personB.greet(); // not personB

// A.10 Arrow in callbacks (excellent use-case)
setTimeout(
  () => console.log("A.10 setTimeout arrow — works with lexical this"),
  10
);

// A.11 Arrow in array methods (very common)
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((n) => n * 2);
console.log("A.11 map with arrow:", doubled);

// A.12 Arrow cannot be used as constructor (no prototype)
try {
  // const C = () => {}; new C(); // would throw: C is not a constructor
  console.log("A.12 Arrow functions have no prototype and cannot be `new`ed.");
} catch (e) {
  console.log(e);
}

// A.13 Arrow has no `arguments` object — use rest
const showArgs = (...args) => console.log("A.13 args via rest:", args);
showArgs(1, 2, 3);

// A.14 When to use / not use arrow functions
/*
✔ Use arrow for short callbacks, array methods, and preserving parent `this`
❌ Do NOT use arrow for object methods that rely on `this`, constructors, or prototypes
*/

// ===================================================================
// PART B — `this` (in-depth, after arrow functions)
// ===================================================================

console.log("\nB️⃣ `this` — Detailed Guide\n");

// B.1 What is `this`?
// ▶ `this` is the reference to the execution context (value depends on call-site)
// ▶ Determined at runtime (except for arrow which is lexical)
// ===================================================================

console.log("B.1 global this:", this);

// B.2 `this` in object method (normal functions)
const user1 = {
  name: "Jeel",
  greet() {
    console.log("B.2 object method this ->", this);
    console.log("   this.name ->", this.name);
  },
};
user1.greet();

// B.3 `this` in standalone function (non-strict vs strict / Node vs Browser)
// In strict mode a plain function call has `this = undefined`, otherwise global/window.
function normalThis() {
  console.log("B.3 normal function this ->", this);
}
normalThis();

// B.4 `this` when function is assigned to variable and called
const objWithMethod = {
  value: 100,
  show() {
    console.log("B.4 show this.value:", this.value);
  },
};
const extracted = objWithMethod.show;
try {
  extracted(); // this becomes undefined (strict) or global — loss of object context
} catch (e) {
  console.log(
    "B.4 extracted() error or undefined this:",
    e?.message ?? "called"
  );
}

// B.5 call(), apply(), bind() — control `this` manually
function intro(city, country) {
  console.log(`B.5 ${this.name} from ${city}, ${country}`);
}
const p = { name: "Ravi" };
intro.call(p, "Ahmedabad", "India");
intro.apply(p, ["Rajkot", "India"]);
const bound = intro.bind(p, "Surat"); // returns new function with fixed this
bound("India");

// B.6 `this` in constructors (normal functions with new)
function Person(name) {
  this.name = name;
}
const pp = new Person("Kiran");
console.log("B.6 constructor this =>", pp);

// B.7 Arrow functions and `this` recap
/*
- Arrow functions DO NOT have their own `this`.
- They use the `this` value from the surrounding (lexical) scope.
- This is why arrow is useful for callbacks inside methods — it preserves method's this.
*/

// B.8 Example: preserving `this` in callbacks without .bind
const box = {
  id: "BOX1",
  items: ["a", "b", "c"],
  showLater() {
    setTimeout(() => {
      // arrow uses lexical this → same as showLater's this (box)
      console.log("B.8 arrow preserves this ->", this.id, this.items.length);
    }, 20);
  },
};
box.showLater();

// B.9 Example: classic problem solved by arrow (no bind needed)
const counterObj = {
  count: 0,
  start() {
    setInterval(() => {
      this.count++; // arrow keeps `this` referring to counterObj
      console.log("B.9 count:", this.count);
    }, 50);
  },
};
// counterObj.start(); // uncomment to test live increments

// B.10 `this` in event handlers (browser)
// normal function -> `this` is element; arrow -> `this` is lexical parent (often window)
// (Not run here; for browser notes only)
// element.addEventListener('click', function(){ console.log(this) });
// element.addEventListener('click', () => { console.log(this) });

// B.11 Shadowing `this` by using arrow incorrectly
const badObj = {
  x: 10,
  arrowMethod: () => {
    // `this` not pointing to badObj
    console.log("B.11 arrowMethod this (bad):", this);
  },
};
badObj.arrowMethod(); // unexpected this

// B.12 Best Practices (this + arrow)
/*
✔ Use arrow for callbacks inside methods (preserve lexical this)
✔ Use normal function for object methods and constructors (dynamic this)
✔ Use bind/call/apply when you need to set `this`
*/

// B.13 Interview Qs & Short Answers
/*
Q1: What is the difference between arrow and normal functions regarding `this`?
A: Normal functions have dynamic `this` set at call time. Arrow functions have lexical `this` from surrounding scope.

Q2: Can arrow functions be constructors?
A: No. Arrow functions have no prototype and cannot be used with `new`.

Q3: Why arrow functions are preferred in callbacks like setTimeout?
A: They preserve parent's `this` and avoid explicit bind().

Q4: How to change `this` of a function?
A: Use call(), apply(), or bind().
*/

// ===================================================================
console.log(
  "\n✅ Completed — Arrow Functions first, then `this` (full examples & notes)\n"
);
// ===================================================================
