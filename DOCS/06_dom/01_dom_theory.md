# 📘 JavaScript DOM (Document Object Model) Reference Guide

> **DOM = Document Object Model**  
> A programming interface that represents an HTML document as a **tree structure**, allowing JavaScript to access and manipulate web pages dynamically.

Based on your uploaded DOM reference file. :contentReference[oaicite:0]{index=0}

---

# 🌳 What is DOM?

```text
Browser
   ↓
HTML Document
   ↓
DOM Tree
   ↓
JavaScript Manipulation
```

Example HTML:

```html
<body>
    <h1>Hello</h1>

    <p>Welcome</p>
</body>
```

DOM Tree:

```text
document
   │
 html
   │
 body
 ┌──┴─────┐
 h1       p
```

---

# 📄 `document` Object

The entry point to the DOM.

```javascript
document
```

---

# Important Properties

| Property | Description |
|-----------|-------------|
| `document.documentElement` | `<html>` element |
| `document.head` | `<head>` element |
| `document.body` | `<body>` element |
| `document.title` | Page title |
| `document.URL` | Current URL |
| `document.forms` | All forms |
| `document.images` | All images |
| `document.links` | All links |
| `document.cookie` | Browser cookies |

---

# Important Methods

## Select Elements

```javascript
document.getElementById(id)
```

```javascript
document.getElementsByClassName(className)
```

```javascript
document.getElementsByTagName(tagName)
```

```javascript
document.querySelector(selector)
```

```javascript
document.querySelectorAll(selector)
```

---

# Create Elements

```javascript
document.createElement(tagName)
```

Example:

```javascript
const div = document.createElement("div");
```

---

```javascript
document.createTextNode(text)
```

Example:

```javascript
const text = document.createTextNode("Hello");
```

---

# 🎯 Selector Methods

---

## `getElementById()`

Returns:

```text
One Element OR null
```

Example:

```javascript
const box = document.getElementById("box");
```

---

## `getElementsByClassName()`

Returns:

```text
HTMLCollection (LIVE)
```

Example:

```javascript
document.getElementsByClassName("card");
```

---

## `getElementsByTagName()`

Returns:

```text
HTMLCollection (LIVE)
```

Example:

```javascript
document.getElementsByTagName("li");
```

---

## `querySelector()`

Returns:

```text
First matching element
```

Example:

```javascript
document.querySelector(".card");
```

---

## `querySelectorAll()`

Returns:

```text
Static NodeList
```

Example:

```javascript
document.querySelectorAll(".card");
```

---

# 📊 Selector Comparison

| Method | Returns | Live |
|----------|----------|-------|
| `getElementById()` | Element | ❌ |
| `getElementsByClassName()` | HTMLCollection | ✅ |
| `getElementsByTagName()` | HTMLCollection | ✅ |
| `querySelector()` | Element | ❌ |
| `querySelectorAll()` | NodeList | ❌ |

---

# 🌲 Node vs Element

---

## Node

Everything in DOM.

```text
Elements

Text

Comments

Document
```

---

## Element

Only HTML tags.

```text
div

p

img

button
```

---

# Node Properties

| Property | Description |
|-----------|-------------|
| `nodeType` | Node type number |
| `nodeName` | Node name |
| `parentNode` | Parent node |
| `childNodes` | All child nodes |
| `firstChild` | First child |
| `lastChild` | Last child |
| `nextSibling` | Next node |
| `previousSibling` | Previous node |

---

# Element Properties

| Property | Description |
|-----------|-------------|
| `id` | Element ID |
| `className` | Classes |
| `classList` | DOMTokenList |
| `tagName` | Tag name |
| `children` | Element children |
| `innerHTML` | HTML content |
| `innerText` | Visible text |
| `textContent` | Raw text |

---

# 📄 `innerHTML`

Works with HTML.

```javascript
box.innerHTML = "<b>Hello</b>";
```

Output:

```html
<b>Hello</b>
```

---

⚠️ XSS Risk:

```text
Avoid using user input directly.
```

---

# 📄 `textContent`

Plain text only.

```javascript
box.textContent = "<b>Hello</b>";
```

Output:

```text
<b>Hello</b>
```

---

# 📄 `innerText`

Visible text only.

Affected by CSS.

```javascript
box.innerText
```

---

# Comparison

| Property | HTML | CSS Aware |
|-----------|-------|------------|
| `innerHTML` | ✅ | ❌ |
| `textContent` | ❌ | ❌ |
| `innerText` | ❌ | ✅ |

---

# 🏷️ Attributes

Get:

```javascript
element.getAttribute(name);
```

---

Set:

```javascript
element.setAttribute(name, value);
```

---

Remove:

```javascript
element.removeAttribute(name);
```

---

Check:

```javascript
element.hasAttribute(name);
```

---

# Example

```javascript
img.setAttribute(

    "src",

    "photo.jpg"
);
```

---

# 📦 Dataset

HTML:

```html
<div data-user-id="101"></div>
```

JavaScript:

```javascript
element.dataset.userId;
```

Output:

```text
101
```

---

# 🎨 `classList`

---

Add

```javascript
element.classList.add("active");
```

---

Remove

```javascript
element.classList.remove("active");
```

---

Toggle

```javascript
element.classList.toggle("active");
```

---

Contains

```javascript
element.classList.contains("active");
```

---

Replace

```javascript
element.classList.replace(

    "old",

    "new"
);
```

---

# 🎨 Style Manipulation

```javascript
element.style.color = "red";
```

```javascript
element.style.fontSize = "20px";
```

```javascript
element.style.backgroundColor = "black";
```

---

# 🌲 DOM Traversal

---

# Parent

```javascript
element.parentNode;
```

```javascript
element.parentElement;
```

---

# Children

```javascript
element.children;
```

```javascript
element.childNodes;
```

---

# First Child

```javascript
element.firstElementChild;
```

---

# Last Child

```javascript
element.lastElementChild;
```

---

# Siblings

```javascript
element.nextElementSibling;
```

```javascript
element.previousElementSibling;
```

---

# Closest Ancestor

```javascript
element.closest(".card");
```

---

# Check Match

```javascript
element.matches(".active");
```

---

# Check Contains

```javascript
parent.contains(child);
```

---

# 🏗️ Create Elements

```javascript
document.createElement("li");
```

---

Text Node

```javascript
document.createTextNode("Hello");
```

---

# Insert Elements

Append:

```javascript
parent.append(child);
```

---

Prepend:

```javascript
parent.prepend(child);
```

---

Older Method:

```javascript
parent.appendChild(child);
```

---

# Remove Elements

Modern:

```javascript
element.remove();
```

---

Old:

```javascript
parent.removeChild(child);
```

---

# Replace Elements

```javascript
parent.replaceChild(

    newNode,

    oldNode
);
```

---

# insertAdjacentHTML()

Positions:

```text
beforebegin

afterbegin

beforeend

afterend
```

---

Example

```javascript
element.insertAdjacentHTML(

    "beforeend",

    "<li>Item</li>"
);
```

---

# 📐 Geometry

Width including border:

```javascript
element.offsetWidth;
```

---

Width excluding border:

```javascript
element.clientWidth;
```

---

Position:

```javascript
element.offsetTop;
```

---

Bounding Rectangle:

```javascript
element.getBoundingClientRect();
```

---

# 📜 Scroll

```javascript
window.scrollY;
```

```javascript
window.scrollTo(

    0,

    500
);
```

---

# 🎯 Events

Register Event:

```javascript
element.addEventListener(

    type,

    listener,

    options
);
```

---

Parameters:

| Parameter | Meaning |
|------------|----------|
| `type` | Event name |
| `listener` | Callback |
| `options` | Capture/Once/Passive |

---

# Example

```javascript
button.addEventListener(

    "click",

    handleClick,

    {

        once: true
    }
);
```

---

# Event Object

Properties:

| Property | Meaning |
|-----------|----------|
| `type` | Event type |
| `target` | Original element |
| `currentTarget` | Current listener |
| `bubbles` | Does it bubble? |
| `cancelable` | Can prevent default? |
| `timeStamp` | Event time |

---

Methods:

```javascript
event.preventDefault();
```

---

```javascript
event.stopPropagation();
```

---

```javascript
event.stopImmediatePropagation();
```

---

# 🖱️ Mouse Events

```text
click

dblclick

mousedown

mouseup

mousemove

mouseenter

mouseleave

mouseover

mouseout

contextmenu
```

---

# ⌨️ Keyboard Events

```text
keydown

keyup
```

Useful Properties:

```javascript
event.key;
```

```javascript
event.code;
```

---

# 📝 Form Events

```text
input

change

submit

reset
```

---

# 🎯 Focus Events

```text
focus

blur

focusin

focusout
```

---

# 📜 Window Events

```text
load

DOMContentLoaded

resize

scroll

hashchange

beforeunload
```

---

# 📱 Touch Events

```text
touchstart

touchmove

touchend

touchcancel
```

---

# 🖊️ Pointer Events

```text
pointerdown

pointerup

pointermove

pointerenter

pointerleave

pointercancel
```

---

# 🎥 Media Events

```text
play

pause

ended

timeupdate

volumechange
```

---

# 🎯 DOM Interview Questions

---

## What is DOM?

```text
In-memory representation of HTML.
```

---

## Node vs Element?

```text
Element is a type of Node.
```

---

## `children` vs `childNodes`?

```text
children

↓

Elements Only

childNodes

↓

Elements + Text + Comments
```

---

## `querySelector()` vs `getElementById()`?

```text
querySelector

↓

CSS Selectors

getElementById

↓

ID Only
```

---

## `innerHTML` vs `textContent`?

```text
innerHTML

↓

Handles HTML

textContent

↓

Plain Text
```

---

## What is Event Bubbling?

```text
Child

↓

Parent

↓

Grandparent
```

---

## How to stop form submission?

```javascript
event.preventDefault();
```

---

## Main `classList` methods?

```text
add

remove

toggle

contains

replace
```

---

# 🚀 Quick Revision

```text
document

↓

Select Elements

↓

Modify Content

↓

Change Attributes

↓

Manipulate Classes

↓

Traverse DOM

↓

Create Elements

↓

Handle Events
```

---

# 💡 Memory Trick

```text
SCATEEH

Select

Content

Attributes

Traversal

Elements

Events

Handlers
```

---

# 🏆 Most Important Topics

⭐⭐⭐ `querySelector`

⭐⭐⭐ `innerHTML` vs `textContent`

⭐⭐⭐ `classList`

⭐⭐⭐ Event Bubbling

⭐⭐⭐ `addEventListener`

> 🎯 **Golden Rule:**  
> Select elements efficiently, manipulate them safely, and handle events properly to build dynamic web applications.