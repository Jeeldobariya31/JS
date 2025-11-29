// ======================================================================
// 📘 05_promise.js
// FULL GUIDE: BUILT-IN PROMISES IN JAVASCRIPT (PURE JS, NO HTML)
// ======================================================================
//
// HOW TO USE:
// -----------
// - Run with Node:
//      node 07_promises_builtin.js
//
// - Or paste into browser DevTools console.
// - Demos auto-run at bottom.
// - You can also manually call:
//      demoBasicPromise();
//      demoThenCatchFinally();
//      demoChaining();
//      demoErrorPropagation();
//      demoPromiseHelpers();
//      demoPromiseAll();
//      demoAllSettled();
//      demoRace();
//      demoAny();
//      demoMicrotaskOrder();
//      demoCallbackStyle();
//      demoPromisifiedStyle();
//
// ======================================================================
// 1️⃣ THEORY: WHAT IS A PROMISE?
// ======================================================================
/*
Promise:
--------
- A Promise is an object that represents the result of an asynchronous operation.

States:
-------
- pending   → initial state
- fulfilled → operation completed successfully (resolved)
- rejected  → operation failed (rejected)

Creating a Promise:
-------------------
  const p = new Promise((resolve, reject) => {
    // async work here
    if (ok) resolve(value);      // success
    else reject(error);          // failure
  });

Consuming a Promise:
--------------------
  p.then(onFulfilled)
   .catch(onRejected)
   .finally(onFinally);

- then(fn)   → runs when promise is fulfilled
- catch(fn)  → runs when promise is rejected (or error in then)
- finally(fn)→ runs in both success & error (cleanup)

Key points:
-----------
- Promise is a "container" for a future value.
- All .then / .catch / .finally callbacks run asynchronously (microtasks).
*/

// ======================================================================
// 2️⃣ UTILITY: LOG + SEPARATOR
// ======================================================================

function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================");
}

// Simple delay helper using setTimeout
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ======================================================================
// 3️⃣ DEMO: Creating a basic Promise
// ======================================================================

function createSimplePromise(shouldResolve = true) {
  return new Promise((resolve, reject) => {
    sep("Promise executor starts");

    console.log("Inside executor: doing work (simulated 1s delay)...");
    setTimeout(() => {
      if (shouldResolve) {
        console.log("Inside executor: resolving with value '✅ success'");
        resolve("✅ success");
      } else {
        console.log("Inside executor: rejecting with error '❌ failure'");
        reject(new Error("❌ failure"));
      }
    }, 1000);
  });
}

async function demoBasicPromise() {
  sep("DEMO 1: Basic Promise (resolve & reject)");

  console.log("Creating promise that resolves...");
  const p1 = createSimplePromise(true);
  p1.then((value) => console.log("p1 then:", value));

  console.log("Creating promise that rejects...");
  const p2 = createSimplePromise(false);
  p2.catch((err) => console.log("p2 catch:", err.message));

  await sleep(1500); // wait so you can see logs in order
}

// ======================================================================
// 4️⃣ DEMO: then / catch / finally
// ======================================================================

async function demoThenCatchFinally() {
  sep("DEMO 2: then / catch / finally");

  const p = createSimplePromise(true);

  p.then((value) => {
    console.log("then received:", value);
  })
    .catch((err) => {
      console.log("catch received:", err.message);
    })
    .finally(() => {
      console.log("finally always runs (success or failure)");
    });

  await sleep(1500);
}

// ======================================================================
// 5️⃣ DEMO: Chaining Promises (transforming values)
// ======================================================================

async function demoChaining() {
  sep("DEMO 3: Promise Chaining (then → then → then)");

  const p = new Promise((resolve) => {
    console.log("Creating base promise...");
    setTimeout(() => resolve(1), 500); // start from value 1
  });

  p.then((value) => {
    console.log("then 1:", value);
    return value + 1; // 2
  })
    .then((value) => {
      console.log("then 2:", value);
      return value * 10; // 20
    })
    .then((value) => {
      console.log("then 3:", value);
      // we could return another promise too
      return new Promise((resolve) =>
        setTimeout(() => {
          console.log("resolving from nested promise");
          resolve(value + 5); // 25
        }, 500)
      );
    })
    .then((value) => {
      console.log("then 4 (from nested promise):", value);
    });

  await sleep(2000);
}

// ======================================================================
// 6️⃣ DEMO: Error propagation in promise chains
// ======================================================================

async function demoErrorPropagation() {
  sep("DEMO 4: Error / Rejection Propagation");

  const p = new Promise((resolve) => {
    console.log("Creating promise that will throw in then...");
    resolve("start");
  });

  p.then((value) => {
    console.log("then 1:", value);
    // Throwing here turns into a rejected promise
    throw new Error("Error inside then 1");
  })
    .then((value) => {
      console.log("then 2 (WILL NOT RUN because previous threw):", value);
    })
    .catch((err) => {
      console.log("catch got error:", err.message);
      // can recover and return a value
      return "recovered value";
    })
    .then((value) => {
      console.log("then 3 after catch:", value);
    })
    .finally(() => {
      console.log("finally runs at end of chain.");
    });

  await sleep(1000);
}

// ======================================================================
// 7️⃣ DEMO: Promise helpers (resolve, reject)
// ======================================================================

async function demoPromiseHelpers() {
  sep("DEMO 5: Promise.resolve / Promise.reject");

  const p1 = Promise.resolve(100);
  p1.then((v) => console.log("Promise.resolve(100) →", v));

  const p2 = Promise.reject(new Error("Rejected via Promise.reject"));
  p2.catch((err) => console.log("Promise.reject →", err.message));

  await sleep(500);
}

// ======================================================================
// 8️⃣ DEMO: Promise.all
// ======================================================================

function makeTask(label, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    console.log(`Task [${label}] started (${ms}ms)...`);
    setTimeout(() => {
      if (shouldFail) {
        console.log(`Task [${label}] → REJECT`);
        reject(new Error(`Task [${label}] failed`));
      } else {
        console.log(`Task [${label}] → RESOLVE`);
        resolve(`Result of ${label}`);
      }
    }, ms);
  });
}

async function demoPromiseAll() {
  sep("DEMO 6: Promise.all (fail fast)");

  try {
    const results = await Promise.all([
      makeTask("A", 500),
      makeTask("B", 800),
      makeTask("C (will fail)", 300, true),
    ]);

    console.log("Promise.all results:", results);
  } catch (err) {
    console.log("Promise.all error:", err.message);
  }
}

// ======================================================================
// 9️⃣ DEMO: Promise.allSettled
// ======================================================================

async function demoAllSettled() {
  sep("DEMO 7: Promise.allSettled (always wait all)");

  const results = await Promise.allSettled([
    makeTask("AS-1", 200),
    makeTask("AS-2 (fail)", 400, true),
    makeTask("AS-3", 100),
  ]);

  console.log("Promise.allSettled results:");
  console.log(JSON.stringify(results, null, 2));
}

// ======================================================================
// 🔟 DEMO: Promise.race
// ======================================================================

async function demoRace() {
  sep("DEMO 8: Promise.race (first settled wins)");

  try {
    const result = await Promise.race([
      makeTask("RACE-FAST", 300),
      makeTask("RACE-SLOW", 1000),
    ]);
    console.log("race result:", result);
  } catch (err) {
    console.log("race error:", err.message);
  }
}

// ======================================================================
// 1️⃣1️⃣ DEMO: Promise.any
// ======================================================================

async function demoAny() {
  sep("DEMO 9: Promise.any (first FULFILLED wins)");

  try {
    const result = await Promise.any([
      makeTask("ANY-FAIL-1", 200, true),
      makeTask("ANY-OK", 500, false),
      makeTask("ANY-FAIL-2", 100, true),
    ]);
    console.log("Promise.any result:", result);
  } catch (err) {
    // If all reject, we get AggregateError
    console.log("Promise.any AggregateError:", err.message);
  }
}

// ======================================================================
// 1️⃣2️⃣ DEMO: Microtask vs macrotask (Promise vs setTimeout)
// ======================================================================

async function demoMicrotaskOrder() {
  sep("DEMO 10: Microtask Queue (Promise) vs setTimeout");

  console.log("Script start");

  setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
  }, 0);

  Promise.resolve().then(() => {
    console.log("Promise.then callback (microtask)");
  });

  console.log("Script end");

  /*
  Expected order:
    Script start
    Script end
    Promise.then callback (microtask)
    setTimeout callback (macrotask)
  */

  await sleep(100); // wait a bit for logs
}

// ======================================================================
// 1️⃣3️⃣ DEMO: Callback → Promise (Promisify)
// ======================================================================

// Old-style callback function: (value, callback)
// callback(error, result)
function fakeCallbackAPI(value, callback) {
  console.log(`fakeCallbackAPI started with value="${value}"`);
  setTimeout(() => {
    if (value === "error") {
      callback(new Error("Callback got 'error'"), null);
    } else {
      callback(null, "Callback success: " + value.toUpperCase());
    }
  }, 500);
}

async function demoCallbackStyle() {
  sep("DEMO 11: Using old callback style");

  fakeCallbackAPI("hello", (err, result) => {
    if (err) {
      console.log("Callback error:", err.message);
    } else {
      console.log("Callback result:", result);
    }
  });

  await sleep(700);
}

function promisifyFakeAPI(value) {
  return new Promise((resolve, reject) => {
    fakeCallbackAPI(value, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

async function demoPromisifiedStyle() {
  sep("DEMO 12: Promisified callback → Promise");

  try {
    const result = await promisifyFakeAPI("hello");
    console.log("Promisified result:", result);
  } catch (err) {
    console.log("Promisified error:", err.message);
  }
}

// ======================================================================
// 1️⃣4️⃣ MINI INTERVIEW NOTES (PROMISES)
// ======================================================================
/*
Q1: What is a Promise?
A:
  - An object representing the eventual completion or failure of an async operation.

Q2: States of a Promise?
A:
  - pending → fulfilled or rejected

Q3: What does then() return?
A:
  - Always returns a NEW Promise.
  - This is why chaining works.

Q4: Difference between then and catch?
A:
  - then(onFulfilled) handles success.
  - catch(onRejected) handles errors (rejections or thrown errors).

Q5: Where do Promise callbacks run (event loop)?
A:
  - In the microtask queue (after current synchronous code, before macrotasks like setTimeout).

Q6: Difference between Promise.all and Promise.allSettled?
A:
  - all:
      → resolves when ALL promises are fulfilled
      → rejects immediately if ANY promise rejects
  - allSettled:
      → waits for ALL promises to settle
      → always resolves with array of {status, value|reason}

Q7: Difference between Promise.race and Promise.any?
A:
  - race:
      → first settled (resolve or reject) wins
  - any:
      → first fulfilled wins; rejects only if ALL promises reject

Q8: How to convert callback API to Promise?
A:
  - Wrap callback in new Promise and call resolve/reject inside the callback.

Q9: What is "Promise chaining"?
A:
  - Using then() return value to pass data to the next then(), forming a chain.
*/

// ======================================================================
// 1️⃣5️⃣ AUTO RUN SOME DEMOS WHEN FILE STARTS
// ======================================================================

(async function autoRun() {
  await demoBasicPromise();
  await demoThenCatchFinally();
  await demoChaining();
  await demoErrorPropagation();
  await demoPromiseHelpers();
  await demoPromiseAll();
  await demoAllSettled();
  await demoRace();
  await demoAny();
  await demoMicrotaskOrder();
  await demoCallbackStyle();
  await demoPromisifiedStyle();

  sep("ALL BUILT-IN PROMISE DEMOS COMPLETED");
})();

// ======================================================================
// END OF 07_promises_builtin.js
// ======================================================================
