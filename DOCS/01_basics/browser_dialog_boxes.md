# 📘 08_browser_dialog_boxes.md
## Complete Guide to `alert()`, `confirm()`, and `prompt()` in JavaScript

---

# 🎯 Learning Objectives

After completing this chapter, you should understand:

- ✅ What dialog boxes are
- ✅ How `alert()` works
- ✅ How `confirm()` works
- ✅ How `prompt()` works
- ✅ Return values of each dialog box
- ✅ Real conversation examples
- ✅ Common interview questions
- ✅ MCQs for practice

---

# 1️⃣ What are Dialog Boxes?

JavaScript provides built-in dialog boxes to interact with users.

There are **3 types**:

| Dialog Box | Purpose |
|------------|----------|
| `alert()` | Show information |
| `confirm()` | Get Yes/No decision |
| `prompt()` | Take user input |

---

# 2️⃣ alert()

## What is alert()?

Displays a message box with an **OK** button.

---

## Syntax

```javascript
alert(message);
```

---

## Example

```javascript
alert("Welcome to JavaScript!");
```

---

## Output

```text
┌─────────────────────────┐
│ Welcome to JavaScript!  │
│                         │
│           [ OK ]        │
└─────────────────────────┘
```

---

## Return Value

```text
undefined
```

---

## Example

```javascript
const result = alert("Hello");

console.log(result);
```

### Output

```text
undefined
```

---

# Real Conversation Example

## Teacher Website

```javascript
alert("Attendance submitted successfully.");
```

### User sees

```text
System:
Attendance submitted successfully.

[ OK ]
```

---

# 3️⃣ confirm()

## What is confirm()?

Displays a dialog box asking the user to confirm an action.

---

## Syntax

```javascript
confirm(message);
```

---

## Returns

| Button | Return Value |
|---------|---------------|
| OK | true |
| Cancel | false |

---

## Example

```javascript
const answer = confirm(
    "Do you want to logout?"
);

console.log(answer);
```

---

# Output (OK)

```text
┌────────────────────────────┐
│ Do you want to logout?     │
│                            │
│      [ OK ] [ Cancel ]     │
└────────────────────────────┘
```

```javascript
true
```

---

# Output (Cancel)

```javascript
false
```

---

# Real Conversation Example

## Delete Confirmation

```javascript
const confirmed = confirm(
    "Delete this record?"
);

if (confirmed) {
    console.log("Deleted");
} else {
    console.log("Cancelled");
}
```

---

## User clicks OK

### Conversation

```text
System:
Delete this record?

User:
Clicks OK

System:
Record deleted successfully.
```

---

## User clicks Cancel

### Conversation

```text
System:
Delete this record?

User:
Clicks Cancel

System:
Deletion cancelled.
```

---

# 4️⃣ prompt()

## What is prompt()?

Displays an input box to collect data from the user.

---

## Syntax

```javascript
prompt(message);

prompt(message, defaultValue);
```

---

## Returns

| User Action | Return Value |
|-------------|---------------|
| Enter text + OK | String |
| Empty input + OK | "" |
| Cancel | null |

---

# Example

```javascript
const name = prompt(
    "Enter your name:"
);

console.log(name);
```

---

# Output

```text
┌────────────────────────────┐
│ Enter your name:           │
│                            │
│ [______________]           │
│                            │
│      [ OK ] [ Cancel ]     │
└────────────────────────────┘
```

---

# User enters "Jeel"

```text
Jeel
```

---

# User presses Cancel

```text
null
```

---

# Real Conversation Example

---

## Scenario 1: Student Login

```javascript
const name = prompt(
    "Enter your name:"
);
```

---

### Conversation

```text
System:
Enter your name:

User:
Jeel

System:
Welcome Jeel!
```

---

## Code

```javascript
const name = prompt(
    "Enter your name:"
);

if (name !== null) {
    alert(`Welcome ${name}!`);
}
```

---

# Scenario 2: Age Verification

```javascript
const age = prompt(
    "Enter your age:"
);
```

---

## Conversation

```text
System:
Enter your age:

User:
18

System:
You are eligible.
```

---

## Code

```javascript
const age = prompt(
    "Enter your age:"
);

if (age >= 18) {
    alert("Eligible");
} else {
    alert("Not Eligible");
}
```

---

# Scenario 3: Cancel Prompt

---

## Conversation

```text
System:
Enter your city:

User:
Cancel

System:
Operation cancelled.
```

---

## Code

```javascript
const city = prompt(
    "Enter your city:"
);

if (city === null) {
    alert("Operation cancelled.");
}
```

---

# 5️⃣ Complete Flow Example

```javascript
alert("Welcome!");

const proceed = confirm(
    "Do you want to continue?"
);

if (proceed) {

    const name = prompt(
        "Enter your name:"
    );

    if (name !== null) {

        alert(
            `Hello ${name}!`
        );

    } else {

        alert(
            "Name entry cancelled."
        );
    }

} else {

    alert(
        "Goodbye!"
    );
}
```

---

# Possible Conversation 1

```text
System:
Welcome!

User:
OK

System:
Do you want to continue?

User:
OK

System:
Enter your name:

User:
Jeel

System:
Hello Jeel!
```

---

# Possible Conversation 2

```text
System:
Welcome!

User:
OK

System:
Do you want to continue?

User:
Cancel

System:
Goodbye!
```

---

# Possible Conversation 3

```text
System:
Welcome!

User:
OK

System:
Do you want to continue?

User:
OK

System:
Enter your name:

User:
Cancel

System:
Name entry cancelled.
```

---

# 6️⃣ Important Notes

---

## alert()

```text
✔ Shows information
✔ Only OK button
✔ Returns undefined
✔ Stops JS execution until closed
```

---

## confirm()

```text
✔ Used for decisions
✔ OK and Cancel buttons
✔ Returns boolean
✔ Blocks execution
```

---

## prompt()

```text
✔ Used for user input
✔ Returns string
✔ Cancel returns null
✔ Blocks execution
```

---

# 7️⃣ Comparison Table

| Feature | alert() | confirm() | prompt() |
|----------|----------|------------|-----------|
| Input Box | ❌ | ❌ | ✅ |
| OK Button | ✅ | ✅ | ✅ |
| Cancel Button | ❌ | ✅ | ✅ |
| Return Type | undefined | boolean | string/null |
| Blocks JS | ✅ | ✅ | ✅ |

---

# 8️⃣ Interview Questions

---

## Q1. What does alert() return?

```text
undefined
```

---

## Q2. What does confirm() return?

```text
OK      → true
Cancel → false
```

---

## Q3. What does prompt() return?

```text
User input → string
Cancel     → null
```

---

## Q4. Are dialog boxes asynchronous?

```text
No.

They are synchronous and block execution.
```

---

## Q5. Can prompt() return a number?

```text
No.

It always returns a string.

Use Number() if needed.
```

Example:

```javascript
const age = Number(
    prompt("Enter age:")
);
```

---

# 9️⃣ MCQs

---

## MCQ 1

What does `alert()` return?

```text
A) true
B) false
C) undefined   ✅
D) null
```

---

## MCQ 2

What happens when Cancel is clicked in confirm()?

```text
A) undefined
B) null
C) false   ✅
D) Error
```

---

## MCQ 3

What is returned by prompt() if user clicks Cancel?

```text
A) ""
B) false
C) undefined
D) null   ✅
```

---

## MCQ 4

Which dialog box takes input?

```text
A) alert()
B) confirm()
C) prompt()   ✅
D) console.log()
```

---

## MCQ 5

Which statement is true?

```text
A) prompt() returns number

B) confirm() returns string

C) alert() returns undefined   ✅

D) prompt() returns boolean
```

---

# 📝 Final Revision Notes

```text
alert()
↓
Information box

confirm()
↓
Decision box

prompt()
↓
Input box


alert()
→ undefined

confirm()
→ true / false

prompt()
→ string / null


All three:
✔ Built-in browser methods
✔ Synchronous
✔ Block JavaScript execution
```

---

