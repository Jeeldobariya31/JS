// =====================================================================
// 📘 03_async_await.js
// FULL GUIDE: PROMISES + ASYNC / AWAIT 
// =====================================================================
//
// HOW TO USE:
// -----------
// - Run in Node:  node 03_async_await_full.js
// - Or paste into browser console.
// - Call any demo function, e.g.:
//     runPromiseBasic();
//     runAsyncBasic();
//     runSequential();
//     runParallel();
//     runPromiseAllDemo();
//     runAllSettledDemo();
//     runRaceDemo();
//     runAnyDemo();
//     runCallbackStyle();
//     runPromisifyStyle();
//
// =====================================================================
// 1️⃣ THEORY: PROMISE + ASYNC / AWAIT
// =====================================================================
/*
1️⃣ PROMISE CONCEPT
-------------------
- Promise = object representing a future value.
- States:
    pending → fulfilled (resolved)
            → rejected
- Create:
    const p = new Promise((resolve, reject) => {
      // async work
      if (ok) resolve(value);
      else reject(error);
    });

2️⃣ THEN / CATCH / FINALLY
--------------------------
    p.then(value => {...})        // success
     .catch(error => {...})       // failure
     .finally(() => {...});       // always

3️⃣ async KEYWORD
-----------------
    async function f() {
      return 42;
    }

- async function ALWAYS returns a Promise.
- `return 42` becomes `return Promise.resolve(42)`.

4️⃣ await KEYWORD
-----------------
- Only allowed inside async function (in browser modules, can be top-level).
- Pauses function UNTIL Promise settles.
- Returns resolved value or THROWS error if Promise rejects.

Example:
    async function demo() {
      try {
        const value = await somePromise;
        console.log(value);
      } catch (err) {
        console.error(err);
      }
    }

5️⃣ MICROTASK QUEUE (brief)
---------------------------
- Promise callbacks (.then / await) go into "microtask queue".
- Microtasks run:
    AFTER current JS call stack
    BEFORE macrotasks like setTimeout, setInterval
*/

// =====================================================================
// 2️⃣ LOG HELPER (works in Node & Browser)
// =====================================================================

function log(...args) {
  console.log(...args);
}

// Add a separator for demos
function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================\n");
}

// =====================================================================
// 3️⃣ Utility: delayTask(label, ms, shouldFail)
// =====================================================================
// Returns a Promise that resolves/rejects after given milliseconds.
// Used to simulate async operations.

function delayTask(label, ms, shouldFail = false) {
  return new Promise((resolve, reject) => {
    log(`⏳ [${label}] started (delay=${ms}ms)`);
    setTimeout(() => {
      if (shouldFail) {
        const err = new Error(`❌ [${label}] failed`);
        log(err.message);
        reject(err);
      } else {
        const msg = `✅ [${label}] done in ${ms}ms`;
        log(msg);
        resolve(msg);
      }
    }, ms);
  });
}

// =====================================================================
// 4️⃣ DEMO 1: Promise with then/catch/finally
// =====================================================================

function runPromiseBasic() {
  sep("▶ DEMO: Promise basic (.then / .catch / .finally)");

  delayTask("basic-success", 1000, false)
    .then((value) => {
      log("then() got:", value);
      // Return another Promise to show chaining
      return delayTask("chained-task", 500, false);
    })
    .then((value2) => {
      log("then() chained got:", value2);
      // Throw error to see catch()
      throw new Error("Manual error in chain");
    })
    .catch((err) => {
      log("catch() got error:", err.message);
    })
    .finally(() => {
      log("finally() → always runs at the end");
    });
}

// =====================================================================
// 5️⃣ DEMO 2: Same logic using async/await + try/catch/finally
// =====================================================================

async function runAsyncBasic() {
  sep("▶ DEMO: async/await basic");

  try {
    const value1 = await delayTask("async-basic-1", 1000, false);
    log("await got:", value1);

    const value2 = await delayTask("async-basic-2", 500, false);
    log("await got:", value2);

    // Simulate error
    throw new Error("Manual error in async/await demo");
  } catch (err) {
    log("try/catch got error:", err.message);
  } finally {
    log("finally() block after async/await");
  }
}

// =====================================================================
// 6️⃣ DEMO 3: Sequential vs Parallel async work
// =====================================================================

// Sequential: A → B → C
async function runSequential() {
  sep("▶ DEMO: Sequential tasks (A → B → C)");

  const start = Date.now();
  try {
    const a = await delayTask("SEQ-A", 1000);
    const b = await delayTask("SEQ-B", 1000);
    const c = await delayTask("SEQ-C", 1000);
    const end = Date.now();
    log("Results:", a, "|", b, "|", c);
    log(`Total time (sequential) ≈ ${end - start} ms`);
  } catch (err) {
    log("Error in sequential:", err.message);
  }
}

// Parallel: A, B, C concurrently with Promise.all
async function runParallel() {
  sep("▶ DEMO: Parallel tasks (A, B, C with Promise.all)");

  const start = Date.now();
  try {
    const [a, b, c] = await Promise.all([
      delayTask("PAR-A", 1000),
      delayTask("PAR-B", 1000),
      delayTask("PAR-C", 1000),
    ]);
    const end = Date.now();
    log("Results:", a, "|", b, "|", c);
    log(`Total time (parallel) ≈ ${end - start} ms`);
  } catch (err) {
    log("Error in parallel:", err.message);
  }
}

// =====================================================================
// 7️⃣ DEMO 4: Promise combinators (all, allSettled, race, any)
// =====================================================================

// Promise.all: fails fast if any reject
async function runPromiseAllDemo() {
  sep("▶ DEMO: Promise.all (fails fast)");

  try {
    const results = await Promise.all([
      delayTask("ALL-1", 500),
      delayTask("ALL-2", 800, true), // will fail
      delayTask("ALL-3", 300),
    ]);
    log("Promise.all results:", results);
  } catch (err) {
    log("Promise.all error:", err.message);
  }
}

// Promise.allSettled: always returns all results
async function runAllSettledDemo() {
  sep("▶ DEMO: Promise.allSettled (always all results)");

  const results = await Promise.allSettled([
    delayTask("ALLSET-1", 300),
    delayTask("ALLSET-2", 500, true),
    delayTask("ALLSET-3", 100),
  ]);
  log("Promise.allSettled results:\n", JSON.stringify(results, null, 2));
}

// Promise.race: first settled (resolve OR reject) wins
async function runRaceDemo() {
  sep("▶ DEMO: Promise.race (first settled wins)");

  try {
    const result = await Promise.race([
      delayTask("RACE-FAST", 300),
      delayTask("RACE-SLOW", 1000),
    ]);
    log("Promise.race resolved with:", result);
  } catch (err) {
    log("Promise.race rejected:", err.message);
  }
}

// Promise.any: first success wins; rejects only if ALL reject
async function runAnyDemo() {
  sep("▶ DEMO: Promise.any (first success wins)");

  try {
    const result = await Promise.any([
      delayTask("ANY-FAIL-1", 500, true),
      delayTask("ANY-SUCCESS", 800, false),
      delayTask("ANY-FAIL-2", 200, true),
    ]);
    log("Promise.any result:", result);
  } catch (err) {
    // If all fail, we get AggregateError
    log("Promise.any error (AggregateError if all rejected):", err.message);
  }
}

// =====================================================================
// 8️⃣ DEMO 5: Callback-style API → Promisify → async/await
// =====================================================================

// Old Node-style callback: fn(args..., callback)
// callback signature: (error, result)
function fakeCallbackAPI(value, cb) {
  log(`📞 [callback API] started with value="${value}"`);
  setTimeout(() => {
    if (value === "error") {
      cb(new Error("Callback got 'error' string"), null);
    } else {
      cb(null, "Callback success: " + value.toUpperCase());
    }
  }, 800);
}

// Using old callback
function runCallbackStyle() {
  sep("▶ DEMO: Old callback style");
  fakeCallbackAPI("hello", (err, result) => {
    if (err) {
      log("Callback error:", err.message);
      return;
    }
    log("Callback result:", result);
  });
}

// Promisify wrapper
function fakeCallbackAPIPromise(value) {
  return new Promise((resolve, reject) => {
    fakeCallbackAPI(value, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

// Using promisified version with async/await
async function runPromisifyStyle() {
  sep("▶ DEMO: Promisified callback + async/await");
  try {
    const res = await fakeCallbackAPIPromise("hello");
    log("async/await result:", res);
  } catch (err) {
    log("async/await error:", err.message);
  }
}

// =====================================================================
// 9️⃣ AUTO-DEMO (optional)
// =====================================================================
//
// Uncomment below if you want to auto-run some demos when file starts:
//
// (async () => {
//   await runPromiseBasic();
//   await new Promise(r => setTimeout(r, 2000));
//   await runAsyncBasic();
// })();

// =====================================================================
// 🔟 MINI INTERVIEW NOTES (Async/Await Deep)
// =====================================================================
/*
Q1: Does async function always return a Promise?
A: Yes. Even if you `return 5`, it's equivalent to `return Promise.resolve(5)`.

Q2: How does error propagate with async/await?
A:
  - If awaited Promise rejects, await throws an error.
  - You must use try/catch to handle it.

Q3: Difference between Promise.all and Promise.allSettled?
A:
  - Promise.all:
      → resolves when ALL Promises resolve
      → rejects immediately when FIRST Promise rejects
  - Promise.allSettled:
      → waits for ALL Promises to settle
      → always resolves with array of { status, value | reason }

Q4: Difference between Promise.race and Promise.any?
A:
  - race:
      → returns first Promise that settles (resolve OR reject)
      → can reject if first completed is a rejection
  - any:
      → returns first FULFILLED Promise
      → rejects only if ALL Promises reject (AggregateError)

Q5: What is the microtask queue?
A:
  - Internal queue where Promise callbacks (.then / catch / finally / await)
    are scheduled.
  - Runs after current synchronous code, before macrotasks (setTimeout, etc.).

Q6: Why is async/await usually easier than .then() chains?
A:
  - Code reads top-to-bottom like synchronous.
  - Error handling with try/catch is cleaner.
  - Avoids "callback hell" and long chains.
*/

// =====================================================================
// END OF FILE
// =====================================================================
