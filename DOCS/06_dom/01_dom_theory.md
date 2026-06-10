# DOM (Document Object Model) Theory

## Overview
Understanding the DOM structure, hierarchy, and how to interact with HTML elements via JavaScript.

## What is the DOM?

The DOM is a tree-like structure representing all HTML elements on a page:
- Each element is a node
- Nodes have parent-child relationships
- JavaScript can access and modify any node

## DOM Tree Structure

```
Document
├── html
│   ├── head
│   │   ├── title
│   │   └── meta
│   └── body
│       ├── h1
│       ├── p
│       └── div
│           ├── span
│           └── button
```

## Node Types

### Element Nodes
```html
<div id="main" class="container">Content</div>
```

### Text Nodes
```html
<p>This is text content</p>
```

### Attribute Nodes
```html
<img src="image.jpg" alt="description">
```

### Comment Nodes
```html
<!-- This is a comment -->
```

## Accessing the DOM

### Global Objects

#### document
```javascript
document                           // Entire HTML document
document.title                     // Page title
document.URL                       // Current URL
document.body                      // Body element
document.head                      // Head element
```

#### window
```javascript
window                             // Global object
window.document                    // Same as document
window.location                    // URL information
window.history                     // Browser history
```

## Selecting Elements

### getElementById()
```html
<div id="main">Content</div>
```

```javascript
let element = document.getElementById("main");
console.log(element);              // <div id="main">
```

### getElementsByClassName()
```html
<div class="box">Box 1</div>
<div class="box">Box 2</div>
```

```javascript
let boxes = document.getElementsByClassName("box");
console.log(boxes.length);         // 2
console.log(boxes[0]);             // First box
```

### getElementsByTagName()
```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<p>Paragraph 3</p>
```

```javascript
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);    // 3
for (let p of paragraphs) {
    console.log(p.textContent);
}
```

### querySelector()
Returns first matching element:

```html
<div id="main" class="container">
    <p class="text">Paragraph</p>
</div>
```

```javascript
let main = document.querySelector("#main");
let text = document.querySelector(".text");
let element = document.querySelector("div");
let specific = document.querySelector("#main .text");
```

### querySelectorAll()
Returns all matching elements:

```javascript
let boxes = document.querySelectorAll(".box");
boxes.forEach(box => console.log(box));
```

## DOM Navigation

### Parent Relationships
```html
<div id="parent">
    <p id="child">Content</p>
</div>
```

```javascript
let child = document.getElementById("child");
let parent = child.parentElement;
console.log(parent.id);            // "parent"
```

### Child Relationships
```javascript
let parent = document.getElementById("parent");
let children = parent.children;    // All child elements
console.log(children.length);
console.log(children[0]);          // First child

let firstChild = parent.firstElementChild;
let lastChild = parent.lastElementChild;
```

### Sibling Relationships
```html
<div>
    <p id="first">First</p>
    <p id="second">Second</p>
    <p id="third">Third</p>
</div>
```

```javascript
let second = document.getElementById("second");
let next = second.nextElementSibling;      // <p id="third">
let prev = second.previousElementSibling;  // <p id="first">
```

### All Descendants
```javascript
let parent = document.getElementById("main");
let allElements = parent.querySelectorAll("*"); // All descendants
```

## Element Properties

### Content

#### textContent
Gets/sets text content (ignores HTML tags):

```html
<div id="box"><p>Hello</p></div>
```

```javascript
let box = document.getElementById("box");
console.log(box.textContent);      // "Hello"
box.textContent = "New text";      // Overwrites with plain text
```

#### innerHTML
Gets/sets HTML content:

```javascript
let box = document.getElementById("box");
console.log(box.innerHTML);        // "<p>Hello</p>"
box.innerHTML = "<p>New content</p>";  // Parses HTML
```

#### innerText
Similar to textContent but considers styling:

```javascript
box.innerText = "Text";            // Sets visible text only
```

### Attributes

#### getAttribute()
```html
<img id="photo" src="photo.jpg" alt="My photo">
```

```javascript
let img = document.getElementById("photo");
console.log(img.getAttribute("src"));    // "photo.jpg"
console.log(img.getAttribute("alt"));    // "My photo"
```

#### setAttribute()
```javascript
img.setAttribute("src", "new-photo.jpg");
img.setAttribute("alt", "Different photo");
```

#### removeAttribute()
```javascript
img.removeAttribute("alt");
```

#### hasAttribute()
```javascript
if (img.hasAttribute("alt")) {
    console.log("Has alt text");
}
```

### Attributes as Properties
```javascript
img.src = "photo.jpg";             // Direct property access
img.alt = "My photo";
img.style.width = "200px";
```

## Element Classes

### className
```html
<div id="box" class="container active"></div>
```

```javascript
let box = document.getElementById("box");
console.log(box.className);        // "container active"
box.className = "box new-class";   // Replaces all classes
```

### classList
Modern approach:

```javascript
let box = document.getElementById("box");

// Add class
box.classList.add("highlight");

// Remove class
box.classList.remove("active");

// Toggle class
box.classList.toggle("selected");

// Check if has class
if (box.classList.contains("highlight")) {
    console.log("Has highlight class");
}

// Get all classes
console.log(box.classList);        // DOMTokenList
```

## Element Styles

### Setting Inline Styles
```javascript
let box = document.getElementById("box");

box.style.color = "red";
box.style.backgroundColor = "yellow";
box.style.fontSize = "20px";
box.style.marginTop = "10px";
box.style.padding = "15px";
```

### Getting Computed Styles
```javascript
let box = document.getElementById("box");
let styles = window.getComputedStyle(box);

console.log(styles.color);
console.log(styles.backgroundColor);
console.log(styles.fontSize);
```

## Creating and Removing Elements

### createElement()
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "New element";
newDiv.className = "container";
```

### appendChild()
```javascript
let parent = document.getElementById("main");
parent.appendChild(newDiv);        // Add at end
```

### insertBefore()
```javascript
let target = document.getElementById("second");
parent.insertBefore(newDiv, target); // Insert before target
```

### removeChild()
```javascript
let child = document.getElementById("child");
parent.removeChild(child);         // Remove from parent
```

### remove()
```javascript
child.remove();                    // Remove element itself
```

## Best Practices
- Use querySelector/querySelectorAll for modern code
- Use textContent instead of innerHTML when not setting HTML
- Be careful with innerHTML to prevent XSS attacks
- Use classList for class manipulation
- Prefer property access for common attributes
- Store element references to avoid repeated DOM queries
- Minimize DOM manipulation for better performance
- Use event delegation for better event handling
