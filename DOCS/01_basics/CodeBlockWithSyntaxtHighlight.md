# 📘 Highlight.js Example

This example demonstrates how to use **Highlight.js** to add syntax highlighting to JavaScript code blocks.

## HTML Code

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
</head>

<body>

<pre><code class="language-javascript">
const name = "Jeel";

// ! Important function
function test() {
    console.log("Hello");
}
</code></pre>

<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

<script>
    hljs.highlightAll();
</script>

</body>
</html>
```

---

## JavaScript Code Being Highlighted

```javascript
const name = "Jeel";

// ! Important function
function test() {
    console.log("Hello");
}

test();
```

---

## How It Works

1. Include a Highlight.js **CSS theme**.

```html
<link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
```

2. Wrap your code inside:

```html
<pre><code class="language-javascript">
    // Your code here
</code></pre>
```

3. Include the Highlight.js script.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
```

4. Initialize syntax highlighting.

```javascript
hljs.highlightAll();
```

---

## Supported Languages

```
language-javascript
language-html
language-css
language-python
language-java
language-c
language-cpp
language-sql
language-json
```

Example:

```html
<code class="language-python">
print("Hello World")
</code>
```

---

## Popular Themes

- `github.min.css`
- `github-dark.min.css`
- `atom-one-dark.min.css`
- `monokai.min.css`
- `stackoverflow-dark.min.css`
- `vs.min.css`

---

## Output

The JavaScript code:

```javascript
const name = "Jeel";

// ! Important function
function test() {
    console.log("Hello");
}
```

will be displayed with beautiful syntax highlighting similar to **GitHub** or **VS Code**.