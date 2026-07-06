# JavaScript Events Handbook

# 1. What is an Event?

An **event** is an action performed by the user or browser. JavaScript listens for these actions and executes code.

Examples:
- Clicking a button
- Typing in an input
- Moving the mouse
- Submitting a form

---

# 2. What is `addEventListener()`?

`addEventListener()` is used to attach an event to an HTML element.

## Syntax

```javascript
element.addEventListener("eventName", Function);
```

## Example

```javascript
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    alert("Button Clicked");
});
```

### How it Works

1. Select the element.
2. Choose the event.
3. Pass a callback function.
4. Browser waits.
5. When the event occurs, the callback executes.

---

# 3. Event Object

```javascript
button.addEventListener("click", function(e){
    console.log(e.target);
});
```

| Property | Description |
|-----------|-------------|
| `e.target` | Element that triggered the event |
| `e.currentTarget` | Element having the listener |
| `e.type` | Event name |
| `e.key` | Pressed key |
| `e.clientX` | Mouse X position |
| `e.clientY` | Mouse Y position |

---

# 4. Mouse Events

| Event | Description | Example |
|-------|-------------|---------|
| `click` | Fires when the user clicks once. | `btn.addEventListener("click", handler)` |
| `dblclick` | Fires when the user double-clicks. | `btn.addEventListener("dblclick", handler)` |
| `mousedown` | Fires when mouse button is pressed. | `btn.addEventListener("mousedown", handler)` |
| `mouseup` | Fires when mouse button is released. | `btn.addEventListener("mouseup", handler)` |
| `mousemove` | Fires continuously while moving the mouse. | `btn.addEventListener("mousemove", handler)` |
| `mouseover` | Fires when pointer enters element. | `btn.addEventListener("mouseover", handler)` |
| `mouseout` | Fires when pointer leaves element. | `btn.addEventListener("mouseout", handler)` |
| `mouseenter` | Fires when pointer enters (no bubbling). | `btn.addEventListener("mouseenter", handler)` |
| `mouseleave` | Fires when pointer leaves (no bubbling). | `btn.addEventListener("mouseleave", handler)` |
| `contextmenu` | Fires on right click. | `btn.addEventListener("contextmenu", handler)` |
| `wheel` | Fires on mouse wheel scroll. | `window.addEventListener("wheel", handler)` |

## Example

```javascript
btn.addEventListener("mouseover", function () {
    btn.style.backgroundColor = "red";
});
```

---

# 5. Keyboard Events

| Event | Description | Example |
|-------|-------------|---------|
| `keydown` | Fires when key is pressed. | `input.addEventListener("keydown", handler)` |
| `keyup` | Fires when key is released. | `input.addEventListener("keyup", handler)` |
| `keypress` | Deprecated keyboard event. | `input.addEventListener("keypress", handler)` |

## Example

```javascript
input.addEventListener("keydown", function(e){
    console.log(e.key);
});
```

---

# 6. Form Events

| Event | Description | Example |
|-------|-------------|---------|
| `submit` | Fires when form is submitted. | `form.addEventListener("submit", handler)` |
| `input` | Fires whenever value changes. | `input.addEventListener("input", handler)` |
| `change` | Fires after value changes and loses focus. | `input.addEventListener("change", handler)` |
| `focus` | Fires when element gets focus. | `input.addEventListener("focus", handler)` |
| `blur` | Fires when element loses focus. | `input.addEventListener("blur", handler)` |
| `reset` | Fires when form is reset. | `form.addEventListener("reset", handler)` |
| `invalid` | Fires when validation fails. | `input.addEventListener("invalid", handler)` |

## Example

```javascript
form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Submitted Successfully");
});
```

---

# 7. Event Methods

| Method | Purpose |
|---------|---------|
| `addEventListener()` | Attach an event |
| `removeEventListener()` | Remove an event |
| `preventDefault()` | Stop browser default behavior |
| `stopPropagation()` | Stop event bubbling |
| `stopImmediatePropagation()` | Stop remaining listeners |

---

# 8. Common Interview Questions

1. What is an event?
2. What is addEventListener()?
3. Difference between click and dblclick?
4. Difference between mouseover and mouseenter?
5. Difference between keydown and keyup?
6. Difference between input and change?
7. What is preventDefault()?
8. What is stopPropagation()?
