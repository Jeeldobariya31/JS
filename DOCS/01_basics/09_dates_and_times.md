# 📘 JavaScript Dates and Times (`Date` Object)

JavaScript handles dates and times using the built-in **`Date` object**.

```javascript
const now = new Date();
```

> 📌 The `Date` object stores date and time as the number of milliseconds since **January 1, 1970 UTC (Unix Epoch)**.

---

# 🏗️ Creating Date Objects

## 1. Current Date and Time

```javascript
const now = new Date();

console.log(now);
```

### Example Output

```text
Thu Jun 11 2026 20:30:15 GMT+0530 (India Standard Time)
```

---

## 2. Specific Date and Time

```javascript
const specificDate = new Date('2023-01-01T12:00:00');

console.log(specificDate);
```

### Output

```text
Sun Jan 01 2023 12:00:00 GMT+0530
```

---

# 📅 Getting Date Components

```javascript
const now = new Date();
```

| Method | Description |
|---------|-------------|
| `getFullYear()` | Year |
| `getMonth()` | Month (0–11) |
| `getDate()` | Day of month |
| `getDay()` | Day of week (0–6) |
| `getHours()` | Hours |
| `getMinutes()` | Minutes |
| `getSeconds()` | Seconds |
| `getMilliseconds()` | Milliseconds |

---

## Example

```javascript
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
```

---

## Output Example

```text
2026
6
11
20
30
15
```

---

## ⚠️ Important

```javascript
getMonth()
```

returns:

```text
January = 0
February = 1
...
December = 11
```

Therefore:

```javascript
now.getMonth() + 1
```

---

# ✏️ Setting Date Components

| Method | Purpose |
|---------|----------|
| `setFullYear()` | Set year |
| `setMonth()` | Set month |
| `setDate()` | Set day |
| `setHours()` | Set hours |
| `setMinutes()` | Set minutes |
| `setSeconds()` | Set seconds |

---

## Example

```javascript
const date = new Date();

date.setFullYear(2030);

console.log(date);
```

---

# ⏩ Date Manipulation

---

## Tomorrow

```javascript
const tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);
```

---

## Yesterday

```javascript
const yesterday = new Date();

yesterday.setDate(yesterday.getDate() - 1);
```

---

## Next Month

```javascript
const nextMonth = new Date();

nextMonth.setMonth(nextMonth.getMonth() + 1);
```

---

## Next Year

```javascript
const nextYear = new Date();

nextYear.setFullYear(nextYear.getFullYear() + 1);
```

---

## One Hour Later

```javascript
const later = new Date();

later.setHours(later.getHours() + 1);
```

---

# ⏱️ Timestamp

Milliseconds since:

```text
1 January 1970 UTC
```

---

## Get Timestamp

```javascript
const timestamp = Date.now();

console.log(timestamp);
```

### Example Output

```text
1781184612000
```

---

## Using Date Object

```javascript
console.log(now.getTime());
```

---

# 🌍 Date Formatting Methods

---

## ISO Format

```javascript
console.log(now.toISOString());
```

### Output

```text
2026-06-11T15:00:00.000Z
```

---

## UTC Format

```javascript
console.log(now.toUTCString());
```

### Output

```text
Thu, 11 Jun 2026 15:00:00 GMT
```

---

## Local String

```javascript
console.log(now.toLocaleString());
```

### Example Output

```text
11/6/2026, 8:30:00 pm
```

---

## Local Date

```javascript
console.log(now.toLocaleDateString());
```

---

## Local Time

```javascript
console.log(now.toLocaleTimeString());
```

---

## Date String

```javascript
console.log(now.toDateString());
```

### Output

```text
Thu Jun 11 2026
```

---

## Time String

```javascript
console.log(now.toTimeString());
```

---

## JSON Format

```javascript
console.log(now.toJSON());
```

---

# ⚖️ Comparing Dates

Dates are compared using their timestamps.

---

## Example

```javascript
const today = new Date();
const yesterday = new Date();

yesterday.setDate(today.getDate() - 1);

console.log(today > yesterday);
```

### Output

```text
true
```

---

## Compare Specific Dates

```javascript
const past = new Date("2022-01-01");

console.log(today > past);
```

---

# 🎨 Formatting Dates

---

## MM/DD/YYYY

```javascript
console.log(
    now.toLocaleDateString("en-US")
);
```

### Output

```text
06/11/2026
```

---

## DD/MM/YYYY

```javascript
console.log(
    now.toLocaleDateString("en-GB")
);
```

### Output

```text
11/06/2026
```

---

# Custom Formatting Options

```javascript
const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
};

console.log(
    now.toLocaleDateString(
        "en-US",
        options
    )
);
```

### Output

```text
June 11, 2026
```

---

# ⏰ Formatting Time

```javascript
const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
};

console.log(
    now.toLocaleTimeString(
        "en-US",
        options
    )
);
```

---

## 12-Hour Format

```javascript
const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
};
```

---

# 🌐 Different Locales

```javascript
console.log(
    now.toLocaleDateString("en-US")
);

console.log(
    now.toLocaleDateString("en-GB")
);

console.log(
    now.toLocaleDateString("hi-IN")
);

console.log(
    now.toLocaleDateString("ja-JP")
);
```

---

# 🌎 Working with Time Zones

---

## UTC

```javascript
console.log(
    now.toLocaleString(
        "en-US",
        { timeZone: "UTC" }
    )
);
```

---

## India

```javascript
console.log(
    now.toLocaleString(
        "en-US",
        {
            timeZone: "Asia/Kolkata"
        }
    )
);
```

---

## New York

```javascript
console.log(
    now.toLocaleString(
        "en-US",
        {
            timeZone:
            "America/New_York"
        }
    )
);
```

---

## Tokyo

```javascript
console.log(
    now.toLocaleString(
        "en-US",
        {
            timeZone: "Asia/Tokyo"
        }
    )
);
```

---

## London

```javascript
console.log(
    now.toLocaleString(
        "en-US",
        {
            timeZone: "Europe/London"
        }
    )
);
```

---

# 📋 Important Methods Summary

| Method | Purpose |
|---------|----------|
| `new Date()` | Current date |
| `Date.now()` | Current timestamp |
| `getFullYear()` | Get year |
| `getMonth()` | Get month |
| `getDate()` | Get day |
| `getDay()` | Weekday |
| `getHours()` | Hour |
| `getMinutes()` | Minutes |
| `getSeconds()` | Seconds |
| `setDate()` | Modify day |
| `setMonth()` | Modify month |
| `setFullYear()` | Modify year |
| `getTime()` | Timestamp |
| `toISOString()` | ISO format |
| `toLocaleString()` | Local format |

---

# 🎯 Interview Questions

## Q1. Why do we use `getMonth() + 1`?

Because:

```text
January = 0
February = 1
...
December = 11
```

---

## Q2. What does `Date.now()` return?

```text
Milliseconds since
January 1, 1970 UTC.
```

---

## Q3. How are dates compared?

Using:

```javascript
date1 > date2
```

because JavaScript converts dates into timestamps.

---

## Q4. Difference between `toISOString()` and `toLocaleString()`?

| `toISOString()` | `toLocaleString()` |
|-----------------|-------------------|
| UTC | Local timezone |
| Standard format | Locale dependent |
| Machine-readable | Human-readable |

---

# 🚀 Quick Revision

```text
new Date()        → Current Date

getFullYear()     → Year
getMonth()        → Month (0–11)
getDate()         → Day
getHours()        → Hour

setDate()         → Modify Date
setMonth()        → Modify Month

Date.now()        → Timestamp

toISOString()     → UTC Format
toLocaleString()  → Local Format

Dates compare using timestamps.
```

---

## 💡 Memory Trick

```text
GET → Retrieve Values
SET → Modify Values
TO  → Convert Formats
```

