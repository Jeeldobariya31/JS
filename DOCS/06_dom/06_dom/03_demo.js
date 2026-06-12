// ======================================================================
// 📘 03_demo.js
// Topic-wise DOM demonstrations for 01_dom_reference.js
// ======================================================================

console.log("\n📂 Loaded: 03_demo.js — Live DOM Demos\n");

// ======================================================================
// 1️⃣ document OBJECT DEMO
// ======================================================================

const docTitleLine = document.getElementById("doc-title-line");
const docUrlLine = document.getElementById("doc-url-line");

// Show document properties from JS
docTitleLine.textContent = `document.title → ${document.title}`;
docUrlLine.textContent = `document.URL → ${document.URL}`;

// ======================================================================
// 2️⃣ SELECTORS DEMO
// ======================================================================

const selList = document.getElementById("sel-list");
const specialItem = document.querySelector(".sel-item.special");
const allSelItems = document.querySelectorAll(".sel-item");
const btnHighlightSpecial = document.getElementById("btn-highlight-special");

btnHighlightSpecial.addEventListener("click", () => {
  // Remove highlight from all
  allSelItems.forEach((li) => li.classList.remove("highlight"));

  // Add highlight to special
  if (specialItem) {
    specialItem.classList.add("highlight");
    console.log("👉 Highlighted .special using querySelector()");
  }
});

// ======================================================================
// 3️⃣ CONTENT & VALUE PROPERTIES DEMO
// ======================================================================

const contentHeading = document.getElementById("content-heading");
const contentPara = document.getElementById("content-para");
const contentInput = document.getElementById("content-input");
const contentLink = document.getElementById("content-link");
const btnUpdateContent = document.getElementById("btn-update-content");

btnUpdateContent.addEventListener("click", () => {
  // textContent
  contentHeading.textContent = "Updated by JS (textContent)";

  // innerHTML
  contentPara.innerHTML =
    "This text is <b>updated</b> using <code>innerHTML</code>.";

  // value
  console.log("Input old value:", contentInput.value);
  contentInput.value = "New value set via JS";

  // href & title
  contentLink.href = "https://google.com";
  contentLink.textContent = "Go to Google (updated)";
  contentLink.title = "Updated link via JS";

  console.log("✅ Content updated for content section.");
});

// ======================================================================
// 4️⃣ ATTRIBUTES & DATASET DEMO
// ======================================================================

const attrImg = document.getElementById("attr-img");
const attrOutput = document.getElementById("attr-output");
const btnAttrChange = document.getElementById("btn-attr-change");

btnAttrChange.addEventListener("click", () => {
  // Read attributes
  const oldSrc = attrImg.getAttribute("src");
  const oldAlt = attrImg.getAttribute("alt");
  const userId = attrImg.dataset.userId;
  const role = attrImg.dataset.role;

  // Change attributes
  attrImg.setAttribute(
    "src",
    "https://via.placeholder.com/100/ff9800/000000?text=JS"
  );
  attrImg.setAttribute("alt", "Updated Avatar");

  // Update dataset role
  attrImg.dataset.role = "admin";

  attrOutput.innerHTML = `
    <div><b>Old src:</b> ${oldSrc}</div>
    <div><b>Old alt:</b> ${oldAlt}</div>
    <div><b>data-user-id:</b> ${userId}</div>
    <div><b>data-role (updated):</b> ${attrImg.dataset.role}</div>
  `;

  console.log("✅ Attributes & dataset updated:", {
    oldSrc,
    oldAlt,
    userId,
    newRole: attrImg.dataset.role,
  });
});

// ======================================================================
// 5️⃣ classList & style DEMO
// ======================================================================

const classBox = document.getElementById("class-box");
const btnToggleClass = document.getElementById("btn-toggle-class");

// Initial style
classBox.style.border = "1px solid #999";
classBox.style.padding = "10px";

btnToggleClass.addEventListener("click", () => {
  classBox.classList.toggle("highlight"); // highlight class defined in CSS
  console.log("Class toggled. Current className:", classBox.className);
});

// ======================================================================
// 6️⃣ TRAVERSAL DEMO
// ======================================================================

const travRoot = document.getElementById("trav-root");
const travChild1 = document.getElementById("trav-child-1");
const travChild11 = document.getElementById("trav-child-1-1");
const travChild2 = document.getElementById("trav-child-2");
const btnTravLog = document.getElementById("btn-trav-log");

btnTravLog.addEventListener("click", () => {
  console.log("travRoot.children:", travRoot.children);
  console.log("travChild1.parentElement.id:", travChild1.parentElement.id);
  console.log(
    "travChild1.nextElementSibling.id:",
    travChild1.nextElementSibling?.id
  );
  console.log(
    "Does travRoot contain travChild11?",
    travRoot.contains(travChild11)
  );
});

// Also let user click boxes to see highlight & logs
const travBoxes = document.querySelectorAll("#trav-root .child-box");
travBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    travBoxes.forEach((b) => (b.style.background = ""));
    box.style.background = "#e1f5fe";

    console.log("Clicked:", box.id);
    console.log("  parentElement:", box.parentElement.id || "no-id");
    console.log("  firstElementChild:", box.firstElementChild?.id || "none");
    console.log("  nextElementSibling:", box.nextElementSibling?.id || "none");
  });
});

// ======================================================================
// 7️⃣ MUTATION DEMO
// ======================================================================

const mutList = document.getElementById("mut-list");
const btnMutAdd = document.getElementById("btn-mut-add");
const btnMutInsert = document.getElementById("btn-mut-insert");
const btnMutRemove = document.getElementById("btn-mut-remove");

let mutCounter = 1;

btnMutAdd.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = `New Item #${mutCounter++}`;
  mutList.appendChild(li);
  console.log("Appended:", li.textContent);
});

btnMutInsert.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Inserted at Top";
  const first = mutList.firstElementChild;
  mutList.insertBefore(li, first);
  console.log("Inserted before first:", li.textContent);
});

btnMutRemove.addEventListener("click", () => {
  const last = mutList.lastElementChild;
  if (!last) {
    console.log("No items to remove.");
    return;
  }
  last.remove();
  console.log("Removed:", last.textContent);
});

// ======================================================================
// 8️⃣ EVENTS DEMO
// ======================================================================

const evClickBtn = document.getElementById("ev-click-btn");
const evInput = document.getElementById("ev-input");
const eventLog = document.getElementById("event-log");

// Click event
evClickBtn.addEventListener("click", (e) => {
  eventLog.textContent = `Clicked at timeStamp=${e.timeStamp.toFixed(0)}`;
  console.log("Click event object:", e);
});

// Keyup event
evInput.addEventListener("keyup", (e) => {
  eventLog.textContent = `Key: "${e.key}" | Value: "${e.target.value}"`;
});

// ======================================================================
console.log("\n🎉 Live DOM demos ready. Interact with the page!\n");
// ======================================================================
