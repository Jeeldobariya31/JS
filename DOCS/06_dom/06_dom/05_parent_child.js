// ======================================================================
// 📘 02_dom_parent_child.js
// DOM Parent / Child / Sibling / Traversal (Full Theory + Demo + Q/A)
// ======================================================================

console.log("\n📂 Loaded: 05_parent_child.js — Parent/Child/Traversal\n");

// ======================================================================
// 1️⃣ THEORY: PARENT & CHILD IN DOM
// ======================================================================
/*
DOM is a TREE. Every element is a NODE. Nodes are connected like:

parentNode  → element above (one level up)
childNodes  → all children (including text, comment)
children    → only element children

Common relationships:

- parentNode / parentElement
- childNodes  (NodeList, includes text/comment)
- children    (HTMLCollection, only elements)
- firstChild / lastChild
- firstElementChild / lastElementChild
- previousSibling / nextSibling
- previousElementSibling / nextElementSibling
- closest(selector)
- contains(node)
- matches(selector)
*/

const root = document.getElementById("root");
const section1 = document.getElementById("section-1");
const p11 = document.getElementById("p-1-1");
const p12 = document.getElementById("p-1-2");
const section2 = document.getElementById("section-2");
const list2 = document.getElementById("list-2");
const li21 = document.getElementById("li-2-1");
const li22 = document.getElementById("li-2-2");

const logBox = document.getElementById("log-box");

function setLog(text) {
  logBox.textContent = text;
}

// ======================================================================
// 2️⃣ PARENT PROPERTIES: parentNode vs parentElement
// ======================================================================
/*
parentNode:
-----------
- Returns ANY type of parent node (could be document, element, etc.)

parentElement:
--------------
- Returns only parent ELEMENT or null (document is not returned here)

Example:
  p11.parentNode
  p11.parentElement
*/

console.log("p11.parentNode:", p11.parentNode);
console.log("p11.parentElement:", p11.parentElement);

// ======================================================================
// 3️⃣ CHILD PROPERTIES: childNodes vs children
// ======================================================================
/*
childNodes:
-----------
- Returns NodeList (can contain text nodes, comment nodes, elements)
- e.g. whitespace/newline between elements => separate Text nodes

children:
---------
- Returns HTMLCollection
- Contains only element nodes

firstChild / lastChild:
-----------------------
- Can be text nodes or element nodes

firstElementChild / lastElementChild:
-------------------------------------
- Guaranteed to be element nodes
*/

console.log("root.childNodes:", root.childNodes);
console.log("root.children:", root.children);
console.log("root.firstChild:", root.firstChild);
console.log("root.firstElementChild:", root.firstElementChild);

// ======================================================================
// 4️⃣ SIBLING PROPERTIES: next/previous
// ======================================================================
/*
previousSibling / nextSibling:
------------------------------
- Return any node (text, comment, element)

previousElementSibling / nextElementSibling:
--------------------------------------------
- Only element siblings
*/

console.log("p11.nextSibling:", p11.nextSibling);
console.log("p11.nextElementSibling:", p11.nextElementSibling);
console.log("p12.previousElementSibling:", p12.previousElementSibling);

// ======================================================================
// 5️⃣ closest(), matches(), contains()
// ======================================================================
/*
element.matches(selector)
-------------------------
- Checks if element itself matches given CSS selector.

element.closest(selector)
-------------------------
- Starts from element, moves up the tree and returns first ancestor
  (or self) that matches the selector.
- Returns null if not found.

node.contains(otherNode)
------------------------
- Returns true if otherNode is inside this node (or equal to it).
*/

console.log("li21.matches('.node'):", li21.matches(".node"));
console.log("li21.closest('.tree-box'):", li21.closest(".tree-box"));
console.log("root.contains(li22):", root.contains(li22));

// ======================================================================
// 6️⃣ BUTTON DEMOS
// ======================================================================

const btnLogRootChildren = document.getElementById("btn-log-root-children");
const btnLogSection1 = document.getElementById("btn-log-section-1");
const btnLogLi21 = document.getElementById("btn-log-li-2-1");
const btnClosestDemo = document.getElementById("btn-closest-demo");

// Helper to clear highlight
function clearHighlight() {
  document.querySelectorAll(".node").forEach((el) => {
    el.classList.remove("highlight");
  });
}

// 6.1 Log Root Children
btnLogRootChildren.addEventListener("click", () => {
  clearHighlight();
  root.classList.add("highlight");

  const childrenArray = Array.from(root.children).map((el) => `#${el.id}`);
  const text = [
    "ROOT CHILDREN DEMO",
    "-------------------",
    `root.children.length = ${root.children.length}`,
    `Children ids: ${childrenArray.join(", ")}`,
    `firstElementChild.id = ${root.firstElementChild.id}`,
    `lastElementChild.id = ${root.lastElementChild.id}`,
  ].join("\n");

  setLog(text);
  console.log(text);
});

// 6.2 Log Section-1 Parent & Children
btnLogSection1.addEventListener("click", () => {
  clearHighlight();
  section1.classList.add("highlight");

  const parentId = section1.parentElement ? section1.parentElement.id : "null";
  const childrenArray = Array.from(section1.children).map((el) => `#${el.id}`);

  const text = [
    "SECTION-1 PARENT & CHILDREN DEMO",
    "---------------------------------",
    `section1.parentElement.id = ${parentId}`,
    `section1.children.length = ${section1.children.length}`,
    `Children ids: ${childrenArray.join(", ")}`,
    `firstElementChild.id = ${section1.firstElementChild.id}`,
    `lastElementChild.id = ${section1.lastElementChild.id}`,
  ].join("\n");

  setLog(text);
  console.log(text);
});

// 6.3 Log li-2-1 Relationships
btnLogLi21.addEventListener("click", () => {
  clearHighlight();
  li21.classList.add("highlight");

  const text = [
    "li-2-1 RELATIONSHIPS DEMO",
    "-------------------------",
    `li21.parentElement.id = ${li21.parentElement.id}`,
    `li21.parentElement.parentElement.id = ${li21.parentElement.parentElement.id}`,
    `li21.nextElementSibling.id = ${li21.nextElementSibling.id}`,
    `li21.previousElementSibling = ${li21.previousElementSibling}`, // null for first
    `li21.closest('.node').id = ${li21.closest(".node").id}`,
    `li21.closest('#root').id = ${li21.closest("#root").id}`,
  ].join("\n");

  setLog(text);
  console.log(text);
});

// 6.4 closest() & contains() Demo
btnClosestDemo.addEventListener("click", () => {
  clearHighlight();

  root.classList.add("highlight");
  li22.classList.add("highlight");

  const text = [
    "closest() & contains() DEMO",
    "----------------------------",
    `li22.closest('.tree-box').id = ${li22.closest(".tree-box").id}`,
    `root.contains(li22) = ${root.contains(li22)}`,
    `section1.contains(li22) = ${section1.contains(li22)}`,
  ].join("\n");

  setLog(text);
  console.log(text);
});

// ======================================================================
// 7️⃣ EXTRA: hasChildNodes() & Node vs Element difference
// ======================================================================
/*
hasChildNodes():
----------------
node.hasChildNodes(): boolean
  → true if node has any child (text/comment/element)

Difference Node vs Element:
---------------------------
Node is base type (text, comment, document, element).
Element is Node with tagName, attributes, classList, etc.
*/

console.log("root.hasChildNodes():", root.hasChildNodes());
console.log("p11.hasChildNodes():", p11.hasChildNodes());

// ======================================================================
// 8️⃣ QUICK INTERVIEW Q/A (Parent/Child/Sibling)
// ======================================================================

/*
Q1: childNodes vs children?
A:
- childNodes → NodeList (text, comment, element).
- children   → HTMLCollection of ELEMENT nodes only.

Q2: parentNode vs parentElement?
A:
- parentNode → can be any node (document, element).
- parentElement → only element, or null if parent is not an element.

Q3: previousSibling vs previousElementSibling?
A:
- previousSibling → any node (may be text).
- previousElementSibling → only element sibling.

Q4: firstChild vs firstElementChild?
A:
- firstChild → may be a text node (whitespace).
- firstElementChild → always an element or null.

Q5: What does closest(selector) do?
A:
- Starts from element and goes UP through parents until it finds an ancestor
  that matches the selector (including the element itself). Returns null if none.

Q6: What does contains(node) do?
A:
- Returns true if node is inside (or equal to) the current node.

Q7: Why can whitespace become a child node?
A:
- Because HTML is parsed as text nodes between elements.

Q8: How to get all direct child elements of a node?
A:
- Use element.children or Array.from(element.children).
*/

// ======================================================================
console.log("\n🎉 Parent/Child/Traversal Demo Ready — Click Buttons in UI!\n");
// ======================================================================
