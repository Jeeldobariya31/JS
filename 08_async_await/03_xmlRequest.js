// ======================================================================
// 📘 05_xhr_console_app.js
// FULL XHR SIMULATOR FOR NODE.JS (WORKS IN CONSOLE)
// Step-by-step request lifecycle logging
// ======================================================================
//
// WHY THIS FILE?
// --------------
// XMLHttpRequest does NOT work in Node.js.
// So this file gives you a PERFECT console-learning simulation of:
//   ✓ xhr.open()
//   ✓ xhr.send()
//   ✓ readyState changes (0 → 4)
//   ✓ status, responseText, onload, onerror
//   ✓ abort()
// And explains EVERYTHING step-by-step.
//
// ======================================================================

// ================================================================
// LOGGER HELPERS
// ================================================================
function sep(title) {
  console.log("\n==================================================");
  console.log(title);
  console.log("==================================================");
}

function logStep(step, message) {
  console.log(`STEP ${step}: ${message}`);
}

// API used for demo
const BASE_URL = "https://jsonplaceholder.typicode.com/posts/1";

// ======================================================================
// XHR SIMULATOR CLASS (Node-Compatible)
// ======================================================================

class XHRConsole {
  constructor() {
    this.readyState = 0; // UNSENT
    this.status = 0;
    this.responseText = "";
    this.aborted = false;

    this._onreadystatechange = null;
    this.onload = null;
    this.onerror = null;
    this.onabort = null;

    sep("XHR CREATED");
    logStep(0, "readyState = 0 (UNSENT)");
  }

  // mimic browser API → setter for onreadystatechange
  set onreadystatechange(fn) {
    this._onreadystatechange = fn;
  }

  // trigger readyState change
  _changeState(newState, detail = "") {
    this.readyState = newState;
    sep(`readyState changed → ${newState}`);
    if (detail) console.log(detail);

    if (this._onreadystatechange) {
      this._onreadystatechange();
    }
  }

  // OPEN
  open(method, url, async = true) {
    sep("OPEN() CALLED");

    this.method = method;
    this.url = url;
    this.async = async;

    logStep(1, `Method = ${method}`);
    logStep(1, `URL = ${url}`);
    logStep(1, `Async = ${async}`);

    this._changeState(1, "readyState = 1 (OPENED)");
  }

  // SEND
  async send(body = null) {
    sep("SEND() CALLED");
    logStep(2, "Preparing request...");

    if (body) logStep(2, `Body = ${body}`);

    this._changeState(2, "readyState = 2 (HEADERS_RECEIVED simulated)");

    // Slight delay to simulate network
    await new Promise((r) => setTimeout(r, 500));
    this._changeState(3, "readyState = 3 (LOADING simulated)");

    // If request was aborted
    if (this.aborted) {
      sep("REQUEST ABORTED BEFORE SEND");
      if (this.onabort) this.onabort();
      return;
    }

    // Simulate fetch
    try {
      const res = await fetch(this.url, {
        method: this.method,
        body: this.method !== "GET" ? body : undefined,
        headers: { "Content-Type": "application/json" },
      });

      this.status = res.status;
      this.responseText = await res.text();

      this._changeState(4, "readyState = 4 (DONE)");

      sep("LOAD COMPLETE");
      logStep(4, `HTTP STATUS = ${this.status}`);
      logStep(4, `RESPONSE LENGTH = ${this.responseText.length} chars`);

      if (this.onload) this.onload();
    } catch (err) {
      this._changeState(4, "readyState = 4 (DONE, but ERROR)");

      sep("NETWORK ERROR OCCURRED");
      console.log("❌ ERROR:", err.message);

      if (this.onerror) this.onerror(err);
    }
  }

  // ABORT
  abort() {
    sep("ABORT() CALLED");
    this.aborted = true;

    if (this.onabort) this.onabort();
    this._changeState(4, "readyState = 4 (DONE, aborted)");
  }
}

// ======================================================================
// DEMO FUNCTION → RUNS A FULL REQUEST STEP-BY-STEP
// ======================================================================

async function runXHRDemo() {
  sep("▶ XHR CONSOLE DEMO STARTED");

  const xhr = new XHRConsole();

  xhr.onreadystatechange = function () {
    console.log(`📌 EVENT: readyState = ${xhr.readyState}`);
  };

  xhr.onload = function () {
    sep("📥 ONLOAD EVENT TRIGGERED");
    console.log("Parsed JSON Preview:");
    console.log(xhr.responseText );
  };

  xhr.onerror = function () {
    sep("❌ ONERROR EVENT TRIGGERED");
  };

  xhr.onabort = function () {
    sep("⚠️ ONABORT EVENT TRIGGERED");
  };

  xhr.open("GET", BASE_URL, true);
  await xhr.send();
}

// ======================================================================
// AUTO RUN THE DEMO
// ======================================================================

runXHRDemo();

// ======================================================================
// END OF FILE
// ======================================================================
