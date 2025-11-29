// ======================================================================
// 📘 06_this_and_call_bind.js
// FULL GUIDE: this • call() • apply() • bind() • arrow function this
// ======================================================================

console.log("\n📌 Loaded: 06_this_and_call_bind.js\n");

// ======================================================================
// 1️⃣ THEORY: WHAT IS "this" ?
// ======================================================================
/*
"this" = reference to the current execution context.

BUT, **this DOES NOT mean the function itself!**
JS determines "this" based on HOW a function is called.

THERE ARE 6 main THIS rules:
---------------------------------------------
1) Global context → this = global object (window / global)
2) Simple function call → this = undefined (strict mode)
3) Object method call → this = the object
4) Constructor call (new) → this = new object
5) call() / apply() / bind() → manually set "this"
6) Arrow function → NO its own this (lexical this)
*/

// ======================================================================
// 2️⃣ GLOBAL THIS
// ======================================================================

console.log("🌍 Global this example:");
console.log(this); // In Node → empty object `{}`

// ======================================================================
// 3️⃣ SIMPLE FUNCTION CALL — this = undefined (strict)
// ======================================================================

function simpleFunction() {
  console.log("👉 simpleFunction this =", this);
}
simpleFunction(); // undefined in strict mode

// ======================================================================
// 4️⃣ OBJECT METHOD — this refers to object
// ======================================================================

const user = {
  name: "Jeel",
  show() {
    console.log("🙋 this in object method =", this.name);
  },
};

user.show();

// ======================================================================
// 5️⃣ CONSTRUCTOR FUNCTION — this = new object
// ======================================================================

function Car(model, price) {
  this.model = model;
  this.price = price;
}

const c1 = new Car("BMW", 50000);
console.log("🚗 Constructor this =", c1);

// ======================================================================
// 6️⃣ ARROW FUNCTION — NO its own this (inherits from parent)
// ======================================================================
/*
Arrow functions DO NOT have:
  ❌ this
  ❌ arguments
  ❌ prototype

They capture "this" from outer scope (lexical this)
*/

const obj = {
  name: "Asha",
  normal() {
    console.log("😀 normal() this =", this.name);
  },
  arrow: () => {
    console.log("🤯 arrow() this =", this); // NOT obj
  },
};

obj.normal();
obj.arrow();

// ======================================================================
// 7️⃣ CALL(), APPLY(), BIND() — MANUALLY SET this
// ======================================================================

function greet(city, country) {
  console.log(`Hi I am ${this.name} from ${city}, ${country}`);
}

const person1 = { name: "Jeel" };
const person2 = { name: "Aarya" };

// ------------------------------------------------------
// 🔹 7.1 call() → function borrowing (comma separated args)
// ------------------------------------------------------
greet.call(person1, "Rajkot", "India");
greet.call(person2, "Ahmedabad", "India");

// ------------------------------------------------------
// 🔹 7.2 apply() → same but args as ARRAY
// ------------------------------------------------------
greet.apply(person1, ["Surat", "India"]);
greet.apply(person2, ["Mumbai", "India"]);

// ------------------------------------------------------
// 🔹 7.3 bind() → returns NEW function with fixed this
// ------------------------------------------------------
const greetJeel = greet.bind(person1, "Goa", "India");
greetJeel(); // stored & called later

// ======================================================================
// 8️⃣ HARD BINDING (Bind to fix this completely)
// ======================================================================

const objA = {
  name: "Fixed Name",
};

function show() {
  console.log("Hard bind this =", this.name);
}

const hard = show.bind(objA);
hard(); // Always prints objA.name

// ======================================================================
// 9️⃣ BORROWING METHODS
// ======================================================================

const student = {
  name: "Ravi",
  showInfo() {
    console.log("Borrowed →", this.name);
  },
};

const teacher = { name: "Professor" };

// teacher borrows method from student
student.showInfo.call(teacher);

// ======================================================================
// 🔟 THIS IN NESTED OBJECTS
// ======================================================================

const nested = {
  name: "Outer",
  inner: {
    name: "Inner",
    show() {
      console.log("Nested this =", this.name);
    },
  },
};

nested.inner.show(); // "Inner"

// ======================================================================
// 1️⃣1️⃣ THIS INSIDE SETTIMEOUT
// ======================================================================

const timerObj = {
  name: "Timeout Example",
  start() {
    setTimeout(function () {
      console.log("setTimeout this =", this); // window / global
    }, 500);

    setTimeout(() => {
      console.log("setTimeout arrow this =", this.name); // parent obj
    }, 500);
  },
};
timerObj.start();

// ======================================================================
// 1️⃣2️⃣ THIS IN EVENT LISTENER (only for browser)
// ======================================================================
/*
element.addEventListener("click", function() {
  console.log(this); // element itself
});

element.addEventListener("click", () => {
  console.log(this); // parent (window)
});
*/

// ======================================================================
// 1️⃣3️⃣ INTERVIEW MCQs (with Answers)
// ======================================================================

/*
Q1. What is "this" in arrow function?
A) A new object
B) Global object
C) Lexically inherited from parent ✔ (Correct)

Q2. call(), apply(), bind() do what?
A) Change function name
B) Change “this” value ✔
C) Convert to object

Q3. this inside constructor refers to?
A) global
B) new object ✔  
C) parent object

Q4. What is difference between call() & apply()?
A) apply uses array ✔
B) call uses string
C) both same

Q5. bind() returns?
A) undefined
B) new function ✔
C) boolean

Q6. Which has no own this?
A) normal function
B) arrow function ✔
C) constructor

Q7. Can arrow functions be constructors?
A) Yes  
B) No ✔

Q8. Best use of bind()?
A) Fixing this for callbacks ✔
B) Create classes
C) Debug code
*/

// ======================================================================
console.log("\n🎉 THIS + CALL/APPLY/BIND file completed.\n");
