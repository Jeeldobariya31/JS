// ======================================================================
// 📘 01_events_master.js
// FULL JAVASCRIPT EVENTS GUIDE (Theory + UI Demo + Interview Qs)
//
// This file covers:
// ✔ What is an event?
// ✔ How to add/remove event listeners
// ✔ Event object (event.target, event.currentTarget, etc.)
// ✔ Mouse events
// ✔ Keyboard events
// ✔ Input / form events
// ✔ Focus / blur events
// ✔ Event bubbling & capturing
// ✔ Event delegation
// ✔ preventDefault() & stopPropagation()
// ✔ Custom events
// ✔ Short interview-style Q/A at bottom
// ======================================================================

console.log("\n📂 Loaded: 01_events_master.js — Full Events Guide\n");

// ======================================================================
// 1️⃣ BASIC THEORY: WHAT IS AN EVENT?
// ======================================================================
/*
👉 Event = something that happens in the browser:
   - User clicks
   - User types
   - Page loads
   - Mouse moves
   - Form is submitted

👉 We can "listen" for these events and run functions:

element.addEventListener("click", function (event) {
  // respond to click
});

Three main ways to attach events:
1) HTML attribute (inline)   → <button onclick="fn()">  ❌ avoid
2) DOM property              → element.onclick = fn     ⚠ old style
3) addEventListener()        → BEST (multiple handlers, options)
*/

// ======================================================================
// 2️⃣ addEventListener() AND removeEventListener()
// ======================================================================
/*
Syntax:
-------
target.addEventListener(type, listener, options?);

Parameters:
-----------
type    → string, event name e.g. "click", "input"
listener→ function(event) { ... } OR arrow function
options → boolean or object:
          true  → useCapture = true  (capturing phase)
          false → default (bubbling)
          OR {
              capture: false,
              once: false,     // if true => auto remove after first call
              passive: false   // true => won't call preventDefault()
          }

Removing listener:
------------------
function handleClick(e) { ... }

element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick); // same function reference required
*/

// ======================================================================
// 3️⃣ EVENT OBJECT (event)
// ======================================================================
/*
Every event handler gets an object usually called "event" or "e":

element.addEventListener("click", function(event) {
    console.log(event);
});

Common properties:
------------------
event.type            → event name ("click", "keydown")
event.target          → element that triggered the event (deepest target)
event.currentTarget   → element whose listener is currently running
event.timeStamp       → when event happened (ms)
event.bubbles         → does it bubble?
event.cancelable      → can we preventDefault?

Common methods:
---------------
event.preventDefault()     → stop default action (e.g. form submit, link navigation)
event.stopPropagation()    → stop event from going further (no bubble to parent)
event.stopImmediatePropagation() → also prevents other handlers on same element
*/

// ======================================================================
// 4️⃣ EVENT FLOW: CAPTURING vs BUBBLING
// ======================================================================
/*
Phases:
-------
1) Capturing phase  : window → document → body → ... → target
2) Target phase     : event reaches actual element
3) Bubbling phase   : target → parent → up to window

addEventListener("click", handler, true)  → capturing phase
addEventListener("click", handler, false) → bubbling phase (default)

Most of the time, we use bubbling.
*/

// ======================================================================
// 5️⃣ INITIAL SETUP — Selecting Elements & Helper for Logging
// ======================================================================

const logBox = document.getElementById("log");

// Simple helper to log both on screen & in console
function log(message) {
  logBox.textContent += message + "\n";
  logBox.scrollTop = logBox.scrollHeight;
  console.log(message);
}

// ======================================================================
// 6️⃣ MOUSE EVENTS DEMO (click, dblclick, contextmenu, mousemove)
// ======================================================================

const btnClick = document.getElementById("btn-click");
const btnDblClick = document.getElementById("btn-dblclick");
const btnRight = document.getElementById("btn-right");
const mouseArea = document.getElementById("mouse-area");

// click
btnClick.addEventListener("click", function (event) {
  log("Mouse: click on #btn-click");
  console.log("Event object for click:", event);
});

// dblclick
btnDblClick.addEventListener("dblclick", function () {
  log("Mouse: double click on #btn-dblclick");
});

// contextmenu (right click)
btnRight.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // avoid browser menu
  log("Mouse: right click on #btn-right (contextmenu)");
});

// mousemove
mouseArea.addEventListener("mousemove", function (event) {
  // We'll only log a small message to avoid too much text
  log(`Mousemove: X=${event.clientX}, Y=${event.clientY}`);
});

// ======================================================================
// 7️⃣ KEYBOARD EVENTS DEMO (keydown, keyup)
// ======================================================================

const keyInput = document.getElementById("key-input");

/*
KeyboardEvent important fields:
-------------------------------
event.key      → which key (e.g. "a", "Enter", "Escape")
event.code     → physical key code on keyboard (e.g. "KeyA", "Enter")
event.altKey, ctrlKey, shiftKey, metaKey → modifier keys (true/false)
*/

keyInput.addEventListener("keydown", function (event) {
  log(`keydown: key="${event.key}", code="${event.code}"`);
});

keyInput.addEventListener("keyup", function (event) {
  log(`keyup: key="${event.key}"`);
});

// ======================================================================
// 8️⃣ INPUT, CHANGE, SUBMIT EVENTS
// ======================================================================

/*
input event:
------------
- Fires on every key press/change for <input>, <textarea>, etc.

change event:
-------------
- Fires when element loses focus AND its value changed.

submit event:
-------------
- Fires when form is submitted.
- Usually we call event.preventDefault() to stop page reload.
*/

const nameInput = document.getElementById("name-input");
const demoForm = document.getElementById("demo-form");

nameInput.addEventListener("input", function () {
  log("input event: " + nameInput.value);
});

nameInput.addEventListener("change", function () {
  log("change event: " + nameInput.value);
});

demoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page reload
  log("submit event on #demo-form (preventDefault used)");
});

// ======================================================================
// 9️⃣ FOCUS EVENTS (focus, blur)
// ======================================================================

/*
focus: element gains focus (no bubbling)
blur : element loses focus (no bubbling)

There are also focusin / focusout which DO bubble.
*/

const focusInput = document.getElementById("focus-input");

focusInput.addEventListener("focus", function () {
  log("focus event on #focus-input");
});

focusInput.addEventListener("blur", function () {
  log("blur event on #focus-input");
});

// ======================================================================
// 🔟 BUBBLING DEMO (Parent & Child)
// ======================================================================

/*
We have:
<div id="bubble-parent">
  <div id="bubble-child"></div>
</div>

Click on child:
- child click handler runs
- then event bubbles up → parent handler runs
*/
//on click child -> First: Child
 //              ->Second : Parent

const bubbleParent = document.getElementById("bubble-parent");
const bubbleChild = document.getElementById("bubble-child");

bubbleParent.addEventListener(
  "click",
  function () {
    log("Bubbling: parent clicked (bubbleParent handler)");
  },
  false // bubbling
);

bubbleChild.addEventListener(
  "click",
  function (event) {
    log("Bubbling: child clicked (bubbleChild handler)");
    // Uncomment to stop bubbling:
    // event.stopPropagation();
    // it print only child log it not propogate to parent 
  },
  false
);

// ======================================================================
// 1️⃣1️⃣ CAPTURING DEMO (Parent & Child)
// ======================================================================
/*
Same elements but with capture = true:

bubbleParent.addEventListener("click", ..., true)
bubbleChild.addEventListener("click", ..., true)

→ Parent's capturing handler will run before child's.
(This part we just explain in comments; actual UI uses bubbling to avoid confusion.)
*/
//on click child -> First: parent
 //              ->Second : Child
// ======================================================================
// 1️⃣2️⃣ EVENT DELEGATION DEMO
// ======================================================================

/*
Instead of adding click listener to every <li>:
<li class="del-item">Item A</li>
<li class="del-item">Item B</li>

We add ONE listener to the <ul> and check event.target:

Benefits:
---------
✔ Only one listener
✔ Works with dynamically added <li>
✔ Better performance and easier code
*/

const delegateList = document.getElementById("delegate-list");
const addDelItemBtn = document.getElementById("add-del-item");
let delCounter = 3;

// Parent listener (delegation)
delegateList.addEventListener("click", function (event) {
  // check if target matches the selector of interest
  if (event.target.matches(".del-item")) {
    log("Delegation: clicked on list item → " + event.target.textContent);
  }
});

// Add new list item dynamically (delegation still works)
addDelItemBtn.addEventListener("click", function () {
  delCounter++;
  const li = document.createElement("li");
  li.className = "del-item";
  li.textContent = "Item " + delCounter;
  delegateList.appendChild(li);
  log("Added new delegated list item: " + li.textContent);
});

// ======================================================================
// 1️⃣3️⃣ CUSTOM EVENTS DEMO
// ======================================================================

/*
CustomEvent allows us to create our own event names and pass extra data.

const custom = new CustomEvent("greet", {
  detail: { name: "Jeel", message: "Hello" }
});
element.dispatchEvent(custom);

We can listen with:
element.addEventListener("greet", (e)=>{ ... });
*/

const btnCustom = document.getElementById("btn-custom");
const customOutput = document.getElementById("custom-output");

// Listener for custom event
customOutput.addEventListener("greet", function (event) {
  const { name, message } = event.detail;
  const text = `Custom event "greet" received: name=${name}, message=${message}`;
  customOutput.textContent = text;
  log(text);
});

// Dispatch custom event when button clicked
btnCustom.addEventListener("click", function () {
  const customEvent = new CustomEvent("greet", {
    detail: {
      name: "Jeel",
      message: "Welcome to CustomEvent 🎉",
    },
  });

  customOutput.dispatchEvent(customEvent);
});

// ======================================================================
// 1️⃣4️⃣ MINI INTERVIEW Q/A (IN COMMENTS)
// ======================================================================

/*
Q1: What is an event in JavaScript?
A: An event is a signal that something has happened (click, keypress, etc.).

Q2: What is addEventListener()?
A: Method to register a function (listener) to run when a specific event happens.

Q3: Difference between event.target and event.currentTarget?
A:
  event.target        → element that originally triggered the event (deepest child).
  event.currentTarget → element whose listener is currently running.

Q4: What is event bubbling?
A:
  After event hits target, it bubbles up through ancestors (child → parent → document → window).

Q5: What is event capturing?
A:
  Opposite direction (window → document → parent → child). Controlled by the 3rd parameter (capture: true).

Q6: What does event.preventDefault() do?
A:
  Cancels the default browser behavior (e.g. form submit reload, link navigation).

Q7: What does event.stopPropagation() do?
A:
  Stops event from going to next elements in bubbling/capturing chain.

Q8: What is event delegation and why is it useful?
A:
  Attaching one listener to a parent instead of many children, and checking event.target.
  Useful for performance and dynamic content (e.g. lists, tables).

Q9: Difference between input and change events?
A:
  input:
    - fires on every value change (every key stroke).
  change:
    - fires when element loses focus and the value changed.

Q10: keydown vs keyup?
A:
  keydown → when key is pressed (may repeat if held).
  keyup   → when key is released.

Q11: How to listen to multiple listeners on same element?
A:
  Use addEventListener() multiple times. They all will run in order registered.

Q12: Why inline events (onclick="fn()") are not recommended?
A:
  - Mix HTML & JS (bad separation).
  - Only one handler possible easily.
  - Harder to maintain and test.

Q13: How to detect Ctrl + Enter combination?
A:
  element.addEventListener("keydown", e => {
    if (e.key === "Enter" && e.ctrlKey) { ... }
  });

Q14: What is a CustomEvent?
A:
  A user-defined event that can carry extra data via detail property.

Q15: What is the third parameter of addEventListener?
A:
  capture OR options object:
    - capture: boolean
    - once: boolean
    - passive: boolean
*/

// ======================================================================
console.log(
  "\n🎉 Events Master Demo Initialized — Try interacting with the page!\n"
);
// ======================================================================
