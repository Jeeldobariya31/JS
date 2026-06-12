# 📘 JavaScript Events Master Guide

> **Event = Something that happens in the browser.**

Examples:

```text
✔ User clicks a button

✔ User types on keyboard

✔ Form gets submitted

✔ Mouse moves

✔ Page finishes loading
```

Based on your uploaded Events Master file. :contentReference[oaicite:0]{index=0}

---

# 🎯 What is an Event?

JavaScript allows us to **listen** for browser events and execute code.

```javascript
element.addEventListener(

    "click",

    function () {

        console.log("Clicked");

    }
);
```

---

# Ways to Attach Events

---

## 1. Inline Events ❌

```html
<button onclick="sayHello()">
    Click
</button>
```

---

## 2. DOM Property ⚠️

```javascript
button.onclick = function () {

    console.log("Clicked");

};
```

---

## 3. addEventListener() ✅ BEST

```javascript
button.addEventListener(

    "click",

    function () {

        console.log("Clicked");

    }
);
```

---

# addEventListener()

## Syntax

```javascript
target.addEventListener(

    type,

    listener,

    options
);
```

---

# Parameters

| Parameter | Meaning |
|------------|----------|
| `type` | Event name |
| `listener` | Callback function |
| `options` | Capture / Once / Passive |

---

# Options Object

```javascript
button.addEventListener(

    "click",

    handler,

    {

        capture: false,

        once: true,

        passive: true
    }
);
```

---

# removeEventListener()

```javascript
function handleClick() {

    console.log("Clicked");

}

button.addEventListener(

    "click",

    handleClick
);

button.removeEventListener(

    "click",

    handleClick
);
```

---

# Event Object

Every event handler receives an **event object**.

```javascript
button.addEventListener(

    "click",

    function (event) {

        console.log(event);

    }
);
```

---

# Important Properties

| Property | Meaning |
|-----------|----------|
| `event.type` | Event name |
| `event.target` | Actual clicked element |
| `event.currentTarget` | Element whose listener runs |
| `event.timeStamp` | Time event occurred |
| `event.bubbles` | Does it bubble? |
| `event.cancelable` | Can prevent default? |

---

# Important Methods

```javascript
event.preventDefault();
```

Stops browser default behavior.

---

```javascript
event.stopPropagation();
```

Stops event flow.

---

```javascript
event.stopImmediatePropagation();
```

Stops event flow and other listeners.

---

# Mouse Events

| Event | Description |
|---------|-------------|
| `click` | Single click |
| `dblclick` | Double click |
| `contextmenu` | Right click |
| `mousemove` | Mouse movement |
| `mouseenter` | Mouse enters |
| `mouseleave` | Mouse leaves |
| `mousedown` | Mouse button pressed |
| `mouseup` | Mouse button released |

---

# Click Example

```javascript
button.addEventListener(

    "click",

    function () {

        console.log("Button clicked");

    }
);
```

---

# Double Click Example

```javascript
button.addEventListener(

    "dblclick",

    function () {

        console.log("Double clicked");

    }
);
```

---

# Right Click Example

```javascript
button.addEventListener(

    "contextmenu",

    function (event) {

        event.preventDefault();

        console.log("Right clicked");

    }
);
```

---

# Keyboard Events

| Event | Description |
|---------|-------------|
| `keydown` | Key pressed |
| `keyup` | Key released |

---

# Useful Properties

```javascript
event.key
```

Example:

```text
a

Enter

Escape
```

---

```javascript
event.code
```

Example:

```text
KeyA

Enter
```

---

# Modifier Keys

```javascript
event.ctrlKey

event.altKey

event.shiftKey

event.metaKey
```

---

# Example

```javascript
input.addEventListener(

    "keydown",

    function (event) {

        console.log(

            event.key,

            event.code
        );

    }
);
```

---

# Input Events

---

# input Event

```javascript
input.addEventListener(

    "input",

    function () {

        console.log(input.value);

    }
);
```

---

### Fires

```text
Every value change
```

---

# change Event

```javascript
input.addEventListener(

    "change",

    function () {

        console.log(input.value);

    }
);
```

---

### Fires

```text
After focus leaves

AND

Value changed
```

---

# Form Submit Event

```javascript
form.addEventListener(

    "submit",

    function (event) {

        event.preventDefault();

        console.log("Submitted");

    }
);
```

---

# Focus Events

| Event | Description |
|---------|-------------|
| `focus` | Gains focus |
| `blur` | Loses focus |
| `focusin` | Gains focus (bubbles) |
| `focusout` | Loses focus (bubbles) |

---

# Example

```javascript
input.addEventListener(

    "focus",

    () => {

        console.log("Focused");

    }
);

input.addEventListener(

    "blur",

    () => {

        console.log("Blurred");

    }
);
```

---

# Event Flow

```text
Capturing Phase

↓

Target Phase

↓

Bubbling Phase
```

---

# Event Bubbling ⭐⭐⭐

```text
Child

↓

Parent

↓

Document

↓

Window
```

---

# Example

```javascript
parent.addEventListener(

    "click",

    () => {

        console.log("Parent");

    }
);

child.addEventListener(

    "click",

    () => {

        console.log("Child");

    }
);
```

---

# Clicking Child

```text
Child

↓

Parent
```

---

# stopPropagation()

```javascript
child.addEventListener(

    "click",

    function (event) {

        event.stopPropagation();

    }
);
```

---

### Output

```text
Child Only
```

---

# Event Capturing ⭐⭐⭐

```javascript
parent.addEventListener(

    "click",

    handler,

    true
);

child.addEventListener(

    "click",

    handler,

    true
);
```

---

# Clicking Child

```text
Parent

↓

Child
```

---

# Event Delegation ⭐⭐⭐⭐

Attach **one listener** to parent.

---

# HTML

```html
<ul id="list">

    <li class="item">A</li>

    <li class="item">B</li>

</ul>
```

---

# JavaScript

```javascript
list.addEventListener(

    "click",

    function (event) {

        if (

            event.target.matches(".item")
        ) {

            console.log(

                event.target.textContent
            );

        }

    }
);
```

---

# Benefits

```text
✔ Better performance

✔ Less memory usage

✔ Handles dynamic elements
```

---

# preventDefault()

Stops browser's default action.

---

# Link Example

```javascript
link.addEventListener(

    "click",

    function (event) {

        event.preventDefault();

    }
);
```

---

# Form Example

```javascript
form.addEventListener(

    "submit",

    function (event) {

        event.preventDefault();

    }
);
```

---

# Custom Events ⭐⭐⭐

Create your own events.

---

# Create

```javascript
const customEvent = new CustomEvent(

    "greet",

    {

        detail: {

            name: "Jeel",

            message: "Hello"
        }

    }
);
```

---

# Listen

```javascript
element.addEventListener(

    "greet",

    function (event) {

        console.log(

            event.detail
        );

    }
);
```

---

# Dispatch

```javascript
element.dispatchEvent(

    customEvent
);
```

---

# Event.target vs Event.currentTarget

---

# target

```text
Actual clicked element
```

---

# currentTarget

```text
Element whose listener is executing
```

---

# Example

```html
<div id="parent">

    <button id="child">
        Click
    </button>

</div>
```

---

```javascript
parent.addEventListener(

    "click",

    function (event) {

        console.log(event.target);

        console.log(event.currentTarget);

    }
);
```

---

# Clicking Button

```text
target

↓

button

currentTarget

↓

parent div
```

---

# Ctrl + Enter Detection

```javascript
element.addEventListener(

    "keydown",

    function (event) {

        if (

            event.key === "Enter" &&

            event.ctrlKey
        ) {

            console.log(

                "Ctrl + Enter"
            );

        }

    }
);
```

---

# Interview Questions

---

## What is an event?

```text
Something that occurs in the browser.
```

---

## What is addEventListener()?

```text
Registers a callback for an event.
```

---

## Difference between target and currentTarget?

```text
target

↓

Original element

currentTarget

↓

Element whose listener runs
```

---

## What is bubbling?

```text
Child

↓

Parent

↓

Document

↓

Window
```

---

## What is capturing?

```text
Window

↓

Document

↓

Parent

↓

Child
```

---

## What does preventDefault() do?

```text
Stops default browser behavior.
```

---

## What does stopPropagation() do?

```text
Stops event flow.
```

---

## What is event delegation?

```text
Parent listener handling child events.
```

---

## Difference between input and change?

```text
input

↓

Every value change

change

↓

After losing focus
```

---

## keydown vs keyup?

```text
keydown

↓

Key pressed

keyup

↓

Key released
```

---

## What is a CustomEvent?

```text
User-defined event carrying extra data.
```

---

# 🚀 Quick Revision

```text
Events

↓

Listeners

↓

Event Object

↓

Mouse Events

↓

Keyboard Events

↓

Form Events

↓

Focus Events

↓

Bubbling

↓

Capturing

↓

Delegation

↓

preventDefault()

↓

Custom Events
```

---

# 💡 Memory Trick

```text
LEMKFFBDPC

Listeners

Event Object

Mouse

Keyboard

Forms

Focus

Bubbling

Delegation

preventDefault

Custom Events
```

---

# 🏆 Most Important Topics

⭐⭐⭐⭐ Event Delegation

⭐⭐⭐⭐ Event Bubbling

⭐⭐⭐⭐ Event Object

⭐⭐⭐ preventDefault()

⭐⭐⭐ stopPropagation()

⭐⭐⭐ Custom Events

> 🎯 **Golden Rule:**  
> Listen wisely, understand event flow, and delegate when possible.