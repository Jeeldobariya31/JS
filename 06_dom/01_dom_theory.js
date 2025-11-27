// ======================================================================
// 📘 10_dom_reference.js
// Full DOM Reference (Methods + Parameters + Properties + Events)
// For revision, interview, and real project use
// ======================================================================

console.log("\n📂 Loaded: 01_dom_theory.js — DOM Cheat Sheet\n");

/*
IMPORTANT NOTE:
---------------
This file is a THEORY + REFERENCE file.

✔ It lists the MOST IMPORTANT & COMMON DOM APIs:
   - Methods (with signatures & parameters)
   - Properties (with meanings)
   - Events (with categories)
✔ This is NOT the *complete* W3C spec list (too big),
  but covers 95% of what you’ll use in real-world JS & interviews.
*/

// ======================================================================
// 1️⃣ document OBJECT — MAIN ENTRY POINT
// ======================================================================

/*
document → global object representing the whole HTML page.

COMMON PROPERTIES:
------------------
document.documentElement   → <html> element
document.head              → <head> element
document.body              → <body> element
document.title             → title of tab
document.URL               → full page URL
document.forms             → HTMLCollection of <form>
document.images            → HTMLCollection of <img>
document.links             → HTMLCollection of <a> with href
document.cookie            → cookie string (if not httpOnly)

COMMON METHODS + PARAMETERS:
----------------------------

// Selectors:
document.getElementById(id: string): HTMLElement | null
document.getElementsByClassName(className: string): HTMLCollection
document.getElementsByTagName(tagName: string): HTMLCollection
document.querySelector(selectors: string): Element | null
document.querySelectorAll(selectors: string): NodeListOf<Element>

// Creation:
document.createElement(tagName: string): HTMLElement
document.createTextNode(text: string): Text

// Others:
document.getSelection(): Selection | null
document.write(htmlString: string): void  // ❌ avoid in modern code
document.addEventListener(type: string, listener: function, options?: boolean | AddEventListenerOptions): void
*/

// ======================================================================
// 2️⃣ Node / Element INTERFACE — BASE OF ALL DOM ELEMENTS
// ======================================================================

/*
All elements inherit from Node and Element.

Node COMMON PROPERTIES:
-----------------------
node.nodeType           → number (1=element, 3=text, 8=comment, 9=document)
node.nodeName           → tag name or #text / #comment
node.parentNode         → parent node
node.childNodes         → NodeList of all types
node.firstChild         → first child node
node.lastChild          → last child node
node.previousSibling    → previous node
node.nextSibling        → next node

Node COMMON METHODS:
--------------------
node.appendChild(newChild: Node): Node
node.removeChild(child: Node): Node
node.insertBefore(newNode: Node, referenceNode: Node | null): Node
node.cloneNode(deep?: boolean): Node
node.contains(otherNode: Node): boolean

Element extends Node with:
--------------------------
element.id              → string
element.className       → string
element.classList       → DOMTokenList
element.tagName         → string
element.children        → HTMLCollection (only element children)
element.firstElementChild
element.lastElementChild
element.previousElementSibling
element.nextElementSibling

element.innerHTML       → string (HTML)
element.innerText       → string (visible text)
element.textContent     → string (all text)
element.attributes      → NamedNodeMap

Element COMMON METHODS:
-----------------------
element.querySelector(selectors: string): Element | null
element.querySelectorAll(selectors: string): NodeListOf<Element>

element.getAttribute(name: string): string | null
element.setAttribute(name: string, value: string): void
element.removeAttribute(name: string): void
element.hasAttribute(name: string): boolean

element.matches(selectors: string): boolean
element.closest(selectors: string): Element | null
*/

// ======================================================================
// 3️⃣ SELECTOR METHODS — SUMMARY
// ======================================================================

/*
document.getElementById(id)
  → 1 element or null

document.getElementsByClassName(className)
  → HTMLCollection (live)

document.getElementsByTagName(tagName)
  → HTMLCollection (live)

document.querySelector(cssSelector)
  → 1st Element or null

document.querySelectorAll(cssSelector)
  → NodeList (static)

PARAMETER:
----------
cssSelector: string → same syntax as CSS:
  "#id", ".class", "div.item", "ul > li.active", "input[type='text']"
*/

// ======================================================================
// 4️⃣ CONTENT & VALUE PROPERTIES
// ======================================================================

/*
element.innerHTML: string
  - GET: returns HTML code inside element
  - SET: parses string as HTML and inserts (⚠ XSS risk with user input)

element.textContent: string
  - GET/SET: plain text (no HTML)

element.innerText: string
  - Similar to textContent but considers CSS visibility + layout (slower)

element.value: string
  - For <input>, <textarea>, <select>. Represents current field value.

element.placeholder: string
element.checked: boolean      (checkbox, radio)
element.disabled: boolean
element.readOnly: boolean
*/

// ======================================================================
// 5️⃣ ATTRIBUTES & DATASET
// ======================================================================

/*
Attribute METHODS:
------------------
element.getAttribute(name: string): string | null
element.setAttribute(name: string, value: string): void
element.removeAttribute(name: string): void
element.hasAttribute(name: string): boolean

Common attribute names:
-----------------------
"id", "class", "href", "src", "alt", "title",
"type", "value", "name", "placeholder",
"data-*", etc.

dataset:
--------
HTML: <div id="box" data-user-id="101" data-role="admin"></div>
JS:
  const box = document.getElementById("box");
  box.dataset.userId   → "101"
  box.dataset.role     → "admin"
  box.dataset.role = "super-admin";

element.dataset: DOMStringMap
  - Keys are camelCase of data-* attributes (data-user-id → userId)
*/

// ======================================================================
// 6️⃣ className, classList & STYLE
// ======================================================================

/*
className:
----------
element.className: string
  - GET: "btn primary"
  - SET: overwrites all classes

classList:
----------
element.classList: DOMTokenList

Methods:
  add(token: string): void
  remove(token: string): void
  toggle(token: string, force?: boolean): boolean
  contains(token: string): boolean
  replace(oldToken: string, newToken: string): boolean

style:
------
element.style.propertyName = "value";

Examples:
  element.style.color = "red";
  element.style.backgroundColor = "#fff";
  element.style.fontSize = "18px";
  element.style.marginTop = "10px";

Note: propertyName is camelCase (backgroundColor, borderRadius).
*/

// ======================================================================
// 7️⃣ TRAVERSAL (PARENT / CHILD / SIBLING / CLOSEST)
// ======================================================================

/*
PARENT:
-------
element.parentNode: Node | null
element.parentElement: Element | null

CHILDREN:
---------
element.children: HTMLCollection
element.firstElementChild: Element | null
element.lastElementChild: Element | null
element.childNodes: NodeList (includes text, comment, etc.)
element.firstChild / lastChild: Node | null

SIBLINGS:
---------
element.previousElementSibling: Element | null
element.nextElementSibling: Element | null
element.previousSibling / nextSibling: Node | null

OTHER USEFUL:
-------------
element.closest(selectors: string): Element | null
  → climbs up ancestors until match or document

element.matches(selectors: string): boolean
  → true if this element would be selected by given selector

element.contains(otherNode: Node): boolean
  → true if otherNode is inside this element
*/

// ======================================================================
// 8️⃣ MUTATION METHODS (CREATE / INSERT / REMOVE / REPLACE)
// ======================================================================

/*
Creation:
---------
document.createElement(tagName: string): HTMLElement
document.createTextNode(text: string): Text

Insertion (modern):
-------------------
parent.append(...nodesOrStrings): void
parent.prepend(...nodesOrStrings): void

Older insertion:
----------------
parent.appendChild(newChild: Node): Node
parent.insertBefore(newNode: Node, referenceNode: Node | null): Node

Removal:
--------
node.remove(): void                 // modern
parent.removeChild(child: Node): Node // older

Replace:
--------
parent.replaceChild(newChild: Node, oldChild: Node): Node

insertAdjacent*:
----------------
element.insertAdjacentHTML(position: string, text: string): void
element.insertAdjacentElement(position: string, element: Element): Element | null
element.insertAdjacentText(position: string, text: string): void

position (string):
  "beforebegin" – before element itself
  "afterbegin"  – just inside element, before first child
  "beforeend"   – just inside element, after last child
  "afterend"    – after element itself
*/

// ======================================================================
// 9️⃣ GEOMETRY & SCROLL PROPERTIES (BASIC)
// ======================================================================

/*
element.offsetWidth / offsetHeight        → includes padding + border
element.clientWidth / clientHeight        → excludes border, includes padding
element.offsetTop / offsetLeft            → position relative to offsetParent
element.getBoundingClientRect(): DOMRect  → {top, left, width, height, ...}

scroll:
-------
element.scrollTop / scrollLeft            → scroll position of element
window.scrollX / scrollY                  → scroll position of window

window.scrollTo(x: number, y: number): void
window.scrollBy(dx: number, dy: number): void
*/

// ======================================================================
// 🔟 EventTarget & addEventListener PARAMETERS
// ======================================================================

/*
All DOM nodes that can receive events implement EventTarget.

METHOD:
-------
target.addEventListener(
  type: string,
  listener: (event: Event) => void,
  options?: boolean | AddEventListenerOptions
): void

type: string
  → event name: "click", "input", "keydown", ...

listener: function
  (event) => { ... }

options (third argument):
-------------------------
1) boolean → capture or not:
   true  → capture phase
   false → bubbling phase (default)

2) object AddEventListenerOptions:
   {
     capture?: boolean,
     once?: boolean,       // auto remove after 1 call
     passive?: boolean     // promise not to call preventDefault
   }

Example:
--------
element.addEventListener("click", handler, { once: true });
*/

// ======================================================================
// 1️⃣1️⃣ Event OBJECT — COMMON PROPERTIES
// ======================================================================

/*
Base Event properties:
----------------------
event.type: string                     → event name ("click", "input", ...)
event.target: EventTarget | null       → original target element
event.currentTarget: EventTarget | null → current element in bubbling/capturing
event.bubbles: boolean                 → does event bubble?
event.cancelable: boolean              → can we preventDefault?
event.timeStamp: number

Common methods:
---------------
event.preventDefault(): void
  → cancel default action (form submit, link navigation)

event.stopPropagation(): void
  → stop further bubbling/capturing

event.stopImmediatePropagation(): void
  → stop other listeners on same element
*/

/*
MouseEvent (extends Event):
---------------------------
extra properties:
  clientX, clientY   → position in viewport
  pageX, pageY       → position in page
  button             → which mouse button
  altKey, ctrlKey, shiftKey, metaKey

KeyboardEvent:
--------------
event.key            → pressed key ("a", "Enter", "Escape", ...)
event.code           → physical key code ("KeyA", "Enter")
event.altKey, ctrlKey, shiftKey, metaKey
*/

// ======================================================================
// 1️⃣2️⃣ EVENT TYPES — CATEGORIES & LISTS (MOST USED)
// ======================================================================

/*
NOTE:
There are many events; below is a practical list grouped by type.
You rarely need more than these in typical projects.

💻 1) MOUSE EVENTS:
-------------------
"click"               → mouse click (mousedown + mouseup)
"dblclick"            → double click
"mousedown"           → button pressed
"mouseup"             → button released
"mousemove"           → mouse moves
"mouseenter"          → mouse enters element (no bubble)
"mouseleave"          → mouse leaves element (no bubble)
"mouseover"           → mouse enters (bubbles)
"mouseout"            → mouse leaves (bubbles)
"contextmenu"         → right-click (opens context menu)

⌨ 2) KEYBOARD EVENTS (on input, document, window):
--------------------------------------------------
"keydown"             → key pressed (repeats when hold)
"keyup"               → key released

📝 3) INPUT & FORM EVENTS:
--------------------------
"input"               → value changed (every keystroke / change)
"change"              → input loses focus with value changed
"submit"              → form submitted
"reset"               → form reset

🎯 4) FOCUS EVENTS:
-------------------
"focus"               → element gained focus (NO bubbling)
"blur"                → element lost focus (NO bubbling)
"focusin"             → like focus but bubbles
"focusout"            → like blur but bubbles

📦 5) CLIPBOARD EVENTS:
-----------------------
"copy"
"cut"
"paste"

📜 6) WINDOW / DOCUMENT EVENTS:
-------------------------------
"load"                → page/resources loaded
"DOMContentLoaded"    → DOM fully built (no images needed)
"resize"              → window size changed
"scroll"              → scroll happened
"hashchange"          → URL hash (#...) changed
"beforeunload"        → user tries to leave page

📂 7) DRAG & DROP EVENTS:
-------------------------
"dragstart"
"drag"
"dragenter"
"dragover"
"dragleave"
"drop"
"dragend"

📱 8) TOUCH EVENTS (mobile devices):
------------------------------------
"touchstart"
"touchmove"
"touchend"
"touchcancel"

📦 9) POINTER EVENTS (modern unified mouse/touch/pen):
------------------------------------------------------
"pointerdown"
"pointerup"
"pointermove"
"pointerenter"
"pointerleave"
"pointercancel"

🧪 10) MEDIA EVENTS (audio/video):
----------------------------------
"play"
"pause"
"ended"
"timeupdate"
"volumechange"
"seeked"
"seeking"
*/

// ======================================================================
// 1️⃣3️⃣ MINI INTERVIEW SUMMARY — DOM
// ======================================================================

/*
Q1: What is DOM?
A: An in-memory tree representation of the HTML document, manipulated via JS.

Q2: Node vs Element?
A: Element is a type of Node; Node is the base interface for all DOM nodes.

Q3: Difference between childNodes & children?
A: childNodes → includes text/comments; children → only element nodes.

Q4: querySelector vs getElementById?
A: getElementById is ID-only & fast; querySelector uses full CSS selectors.

Q5: innerHTML vs textContent?
A: innerHTML parses and returns HTML; textContent returns only text.

Q6: What is event bubbling?
A: When an event is fired on a child and then goes up to its ancestors.

Q7: How to stop a form from submitting?
A: In submit handler: e.preventDefault().

Q8: classList main methods?
A: add, remove, toggle, contains, replace.

Q9: How to create and append a new <li>?
A:
  const li = document.createElement("li");
  li.textContent = "Item";
  parent.appendChild(li);

Q10: addEventListener parameters?
A:
  type (string), listener (function), optional options (capture/once/passive).
*/

// ======================================================================
console.log("\n🎉 DOM Reference Completed — Use this as your cheat sheet!\n");
// ======================================================================
