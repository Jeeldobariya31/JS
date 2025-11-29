// ======================================================================
// 📘 04_custom_promise.js
// CUSTOM PROMISES USING `new Promise()` + CLASS DEMO + THEORY + MCQs
// ======================================================================
//
// HOW TO RUN:
// -----------
//  node 04_custom_promise_new.js
//
// Or paste into browser console.
//
// GOAL:
// -----
// ✅ Learn how to create your OWN promises using `new Promise()`
// ✅ Learn resolve / reject / then / catch / finally
// ✅ Learn how to write promise-returning FUNCTIONS and CLASSES
// ======================================================================

// ======================================================================
// 1️⃣ BASIC CUSTOM PROMISE — YOUR ORIGINAL EXAMPLE (FIXED)
// ======================================================================
//
// A. Using `new Promise(executor)`
// --------------------------------
// - executor = function(resolve, reject) { ... }
//   • resolve(value) → mark success (fulfilled)
//   • reject(error)  → mark as failure (rejected)
//
// B. Very important:
// ------------------
// - If you never call resolve/reject, the promise stays "pending" forever.
//   so you MUST call one of them.
// ======================================================================

function demoBasicCustomPromise() {
  console.log("\n================ 1️⃣ BASIC CUSTOM PROMISE ================\n");

const promiseOne = new Promise(function (resolve, reject) {
  // do any async task (DB call, network request, cryptography, etc.)
  console.log("Promise executor started...");

  setTimeout(function () {
    console.log("Async task complete (inside Promise)");

    // Simulate success or error
    const success = true; // change to false to test reject

    if (success) {
      resolve("✅ RESULT: Task finished successfully");
    } else {
      reject("❌ ERROR: Task failed");
    }
  }, 1000);
});

promiseOne
  .then(function (result) {
    console.log("then() received:", result);
  })
  .catch(function (err) {
    console.log("catch() received:", err);
  })
  .finally(function () {
    console.log("finally(): always runs");
  });

}

// ======================================================================
// 2️⃣ CUSTOM PROMISE WRAPPER FUNCTION (PROMISE FACTORY)
// ======================================================================
//
// PATTERN:
// --------
// function doSomethingAsync(args) {
//   return new Promise((resolve, reject) => {
//       // async work
//   });
// }
//
// Benefit:
// --------
// - Reusable
// - Clean and easy to test
// ======================================================================

// Example: simulate loading a user from "DB" using setTimeout
function getUserFromDb(userId) {
  return new Promise(function (resolve, reject) {
    console.log(
      `\n[getUserFromDb] Starting fake DB call for userId=${userId} ...`
    );

    setTimeout(function () {
      if (typeof userId !== "number" || userId <= 0) {
        // ❌ invalid userId
        reject(new Error("Invalid userId (must be positive number)"));
        return;
      }

      // ✅ success: return a fake user object
      const user = { id: userId, name: "Jeel", role: "Admin" };
      console.log("[getUserFromDb] DB call complete, returning user...");
      resolve(user);
    }, 800);
  });
}

function demoWrapperFunctionPromise() {
  console.log(
    "\n============ 2️⃣ FUNCTION THAT RETURNS A PROMISE ============\n"
  );

  // Valid call
  getUserFromDb(1)
    .then(function (user) {
      console.log("✅ getUserFromDb(1) resolved with:", user);
      return getUserFromDb(-5); // invalid → will reject
    })
    .then(function (user2) {
      // will NOT execute because previous rejected
      console.log("user2:", user2);
    })
    .catch(function (err) {
      console.log("❌ Error caught in chain:", err.message);
    })
    .finally(function () {
      console.log("Done with getUserFromDb demo.");
    });
}

// ======================================================================
// 3️⃣ CLASS THAT RETURNS PROMISES (OOP STYLE)
// ======================================================================
//
// We often use classes/services that have methods returning promises:
//
// class ApiClient {
//   getUser(id)   → returns Promise
//   saveUser(u)   → returns Promise
// }
//
// This is very common with Fetch, DB libraries, etc.
// ======================================================================

class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  // Simulate a GET /users/:id API
  getUser(id) {
    return new Promise((resolve, reject) => {
      console.log(
        `\n[ApiClient.getUser] Sending request to ${this.baseUrl}/users/${id}`
      );

      setTimeout(() => {
        if (id <= 0) {
          reject(new Error("User ID must be > 0"));
          return;
        }
        // Fake response:
        const user = { id, name: "User" + id, email: `user${id}@mail.com` };
        console.log("[ApiClient.getUser] Response received");
        resolve(user);
      }, 700);
    });
  }

  // Simulate a POST /users API (create user)
  createUser(data) {
    return new Promise((resolve, reject) => {
      console.log(
        `\n[ApiClient.createUser] Sending POST to ${this.baseUrl}/users`
      );
      console.log("Payload:", data);

      setTimeout(() => {
        if (!data || !data.name) {
          reject(new Error("Name is required to create user"));
          return;
        }
        // Fake created user with id
        const created = { id: Math.floor(Math.random() * 1000), ...data };
        console.log("[ApiClient.createUser] User created successfully");
        resolve(created);
      }, 900);
    });
  }
}

function demoClassWithPromises() {
  console.log("\n============ 3️⃣ CLASS WITH PROMISE METHODS ============\n");

  const api = new ApiClient("https://api.example.com");

  // Chain: create user → then get user
  api
    .createUser({ name: "Jeel", role: "Developer" })
    .then((createdUser) => {
      console.log("Created user:", createdUser);
      return api.getUser(createdUser.id);
    })
    .then((fetchedUser) => {
      console.log("Fetched user:", fetchedUser);
    })
    .catch((err) => {
      console.log("Error in ApiClient chain:", err.message);
    })
    .finally(() => {
      console.log("ApiClient demo finished.");
    });
}

// ======================================================================
// 4️⃣ THEORY: METHODS USED WHEN BUILDING CUSTOM PROMISES
// ======================================================================
//
// 1) new Promise(executor)
// ------------------------
// - executor = function(resolve, reject) { ... }
// - Called IMMEDIATELY when you create the Promise.
// - You perform your async work inside executor.
// - When done: call resolve(value) or reject(error).
//
// 2) resolve(value)
// -----------------
// - Set state → fulfilled
// - Triggers all .then() success handlers with that value.
//
// 3) reject(error)
// ----------------
// - Set state → rejected
// - Triggers all .catch() error handlers.
//
// 4) then(onFulfilled, onRejected?)
// ---------------------------------
// - Called on a promise to handle success (and optionally error).
// - Returns a NEW promise, enabling chaining.
// - Example:
//      doSomething()
//        .then(result => {...})
//        .then(next => {...})
//
// 5) catch(onRejected)
// --------------------
// - Shortcut for `.then(undefined, onRejected)`.
// - Recommended for error handling at end of chain.
//
// 6) finally(onFinally)
// ---------------------
// - Called regardless of success or failure.
// - Good for cleanup (closing loader, connection, etc.).
// - Does NOT change the value/error of the chain.
//      promise
//        .then(...)
//        .catch(...)
//        .finally(() => console.log("done"));
// ======================================================================

// ======================================================================
// 5️⃣ MCQs (FOR THEORY REVISION) — IN COMMENTS
// ======================================================================
/*
📝 MCQ 1:
--------
Which function is passed into `new Promise()`?

A) resolver
B) rejector
C) executor
D) controller

Correct: C
Explanation: The function `(resolve, reject) => {}` is called the executor.

📝 MCQ 2:
--------
What happens if you never call resolve or reject inside executor?

A) Promise auto-resolves
B) Promise auto-rejects
C) Promise stays pending forever
D) Promise throws error

Correct: C
Explanation: Promise state will remain "pending" and then/catch are never triggered.

📝 MCQ 3:
--------
Which is TRUE about `.then()`?

A) It returns the same promise.
B) It always returns a NEW promise.
C) It can only handle success.
D) It can only handle errors.

Correct: B
Explanation: then() ALWAYS returns a new promise (chaining).

📝 MCQ 4:
--------
Which is the best place to put cleanup logic (like hiding loader)?

A) then()
B) catch()
C) finally()
D) executor

Correct: C
Explanation: finally() runs for both success and failure.

📝 MCQ 5:
--------
How to create a reusable async function using Promise?

A)
  const p = new Promise(...);

B)
  function task() {
    return new Promise((resolve, reject) => { ... });
  }

C)
  function task() { new Promise(...); }

D)
  function task(resolve, reject) { ... }

Correct: B
Explanation: For reusable code, return a Promise from a function.
*/

// ======================================================================
// 6️⃣ AUTO-RUN DEMOS (ONE BY ONE)
// ======================================================================

function runAllDemos() {
  demoBasicCustomPromise();

  setTimeout(() => {
    demoWrapperFunctionPromise();

    setTimeout(() => {
      demoClassWithPromises();

      setTimeout(() => {
        console.log("\n🎉 All custom new Promise demos completed.\n");
      }, 2500);
    }, 2500);
  }, 2000);
}

runAllDemos();

// ======================================================================
// END OF 04_custom_promise.js
// ======================================================================
