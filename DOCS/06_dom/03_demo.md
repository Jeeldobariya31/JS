# DOM Manipulation Demonstrations

## Overview
Practical examples of manipulating DOM elements through JavaScript.

## Basic Element Selection and Modification

### Select and Change Text
```javascript
// HTML: <h1 id="title">Original Title</h1>

let title = document.getElementById("title");
title.textContent = "New Title";
title.style.color = "blue";
```

### Select and Change Multiple Elements
```javascript
// HTML:
// <p class="text">Text 1</p>
// <p class="text">Text 2</p>

let paragraphs = document.querySelectorAll(".text");
paragraphs.forEach((p, index) => {
    p.textContent = `Updated text ${index + 1}`;
});
```

## Class Manipulation

### Toggle Classes
```javascript
// HTML: <div id="box" class="container"></div>

let box = document.getElementById("box");

// Add class
box.classList.add("active");       // class="container active"

// Remove class
box.classList.remove("active");    // class="container"

// Toggle class
box.classList.toggle("highlight"); // Adds if not present, removes if present
```

### Check and Update Based on Class
```javascript
let box = document.getElementById("box");

if (box.classList.contains("active")) {
    console.log("Box is active");
} else {
    box.classList.add("active");
}
```

## Style Manipulation

### Change Multiple Styles
```javascript
// HTML: <div id="box"></div>

let box = document.getElementById("box");

// Set individual styles
box.style.width = "200px";
box.style.height = "150px";
box.style.backgroundColor = "lightblue";
box.style.borderRadius = "10px";
box.style.padding = "20px";
```

### Create Style Object
```javascript
let box = document.getElementById("box");

let styles = {
    width: "300px",
    height: "200px",
    backgroundColor: "green",
    color: "white",
    fontSize: "18px",
    textAlign: "center",
    lineHeight: "200px"
};

Object.assign(box.style, styles);
```

### Get Computed Styles
```javascript
let box = document.getElementById("box");
let computed = window.getComputedStyle(box);

console.log(computed.backgroundColor);
console.log(computed.width);
console.log(computed.fontSize);
```

## Content Manipulation

### Change Text Content
```javascript
// HTML: <p id="para">Original</p>

let para = document.getElementById("para");
para.textContent = "Updated text";
```

### Change HTML Content
```javascript
// HTML: <div id="container">Original</div>

let container = document.getElementById("container");
container.innerHTML = "<p>New <strong>content</strong></p>";
```

### Append Content
```javascript
let container = document.getElementById("container");

// Append to existing content
container.innerHTML += "<p>Added paragraph</p>";

// Or using textContent for text only
container.textContent += " More text";
```

## Creating and Inserting Elements

### Create Single Element
```javascript
let newDiv = document.createElement("div");
newDiv.textContent = "New element";
newDiv.className = "box";
newDiv.id = "newBox";

let parent = document.getElementById("container");
parent.appendChild(newDiv);
```

### Create Multiple Elements
```javascript
let parent = document.getElementById("list");

for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${i}`;
    parent.appendChild(li);
}
```

### Create Complex Structure
```javascript
let parent = document.getElementById("container");

// Create article
let article = document.createElement("article");
article.className = "post";

// Create heading
let h2 = document.createElement("h2");
h2.textContent = "Post Title";
article.appendChild(h2);

// Create paragraph
let p = document.createElement("p");
p.textContent = "Post content goes here";
article.appendChild(p);

// Create button
let btn = document.createElement("button");
btn.textContent = "Read More";
btn.className = "btn-primary";
article.appendChild(btn);

// Add to parent
parent.appendChild(article);
```

## Removing Elements

### Remove Single Element
```javascript
let element = document.getElementById("toDelete");
element.remove();                  // Direct removal

// Or from parent
let parent = element.parentElement;
parent.removeChild(element);
```

### Remove All Children
```javascript
let parent = document.getElementById("list");

// Method 1: removeChild in loop
while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
}

// Method 2: innerHTML empty
parent.innerHTML = "";

// Method 3: forEach with remove
parent.querySelectorAll("li").forEach(li => li.remove());
```

## Attribute Manipulation

### Get and Set Attributes
```javascript
// HTML: <img id="photo" src="old.jpg">

let img = document.getElementById("photo");

// Get attribute
console.log(img.getAttribute("src"));     // "old.jpg"

// Set attribute
img.setAttribute("src", "new.jpg");
img.setAttribute("alt", "Photo description");

// Remove attribute
img.removeAttribute("alt");

// Check attribute
if (img.hasAttribute("src")) {
    console.log("Image has src");
}
```

### Data Attributes
```html
<div id="item" data-id="123" data-category="books"></div>
```

```javascript
let item = document.getElementById("item");

// Get data attributes
console.log(item.dataset.id);              // "123"
console.log(item.dataset.category);        // "books"

// Set data attributes
item.dataset.price = "19.99";
// Now: <div id="item" data-id="123" data-category="books" data-price="19.99">

// Remove data attribute
delete item.dataset.price;
```

## Form Elements

### Get Form Input Values
```html
<input id="username" type="text" value="">
<input id="password" type="password" value="">
<textarea id="message"></textarea>
<select id="country">
    <option>Select...</option>
    <option value="US">USA</option>
    <option value="UK">UK</option>
</select>
```

```javascript
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let message = document.getElementById("message").value;
let country = document.getElementById("country").value;
```

### Set Form Input Values
```javascript
document.getElementById("username").value = "john_doe";
document.getElementById("password").value = "secret123";
document.getElementById("message").value = "Hello";
document.getElementById("country").value = "US";
```

### Handle Checkboxes
```html
<input id="subscribe" type="checkbox">
<input id="terms" type="checkbox" checked>
```

```javascript
let subscribe = document.getElementById("subscribe");
let terms = document.getElementById("terms");

console.log(subscribe.checked);    // false
console.log(terms.checked);        // true

subscribe.checked = true;
terms.checked = false;
```

### Handle Radio Buttons
```html
<input name="size" type="radio" value="small">
<input name="size" type="radio" value="medium">
<input name="size" type="radio" value="large" checked>
```

```javascript
let selected = document.querySelector("input[name='size']:checked");
console.log(selected.value);       // "large"
```

## Table Manipulation

### Add Rows to Table
```html
<table id="myTable">
    <thead>
        <tr><th>Name</th><th>Age</th></tr>
    </thead>
    <tbody id="tableBody">
    </tbody>
</table>
```

```javascript
let tableBody = document.getElementById("tableBody");

let data = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 28 }
];

data.forEach(row => {
    let tr = document.createElement("tr");
    
    let nameTd = document.createElement("td");
    nameTd.textContent = row.name;
    tr.appendChild(nameTd);
    
    let ageTd = document.createElement("td");
    ageTd.textContent = row.age;
    tr.appendChild(ageTd);
    
    tableBody.appendChild(tr);
});
```

## Best Practices
- Use querySelector/querySelectorAll for modern selection
- Minimize DOM manipulation - batch updates together
- Use textContent instead of innerHTML when possible
- Cache element references to avoid repeated queries
- Use classList for class manipulation
- Consider performance with large DOM updates
- Clean up elements properly when removing
- Use data attributes for storing element-specific data
