
# 📘 JavaScript Date Object Handbook

## What is the Date Object?

The **Date object** is a built-in JavaScript object used to create, store, manipulate and format dates and times. It stores date and time internally as the number of milliseconds since **1 January 1970 UTC (Unix Epoch)**.

Create a Date object:

```javascript
let d = new Date();
```

### Why do we use the Date Object?

- Display current date and time
- Calculate age
- Create digital clocks
- Build countdown timers
- Compare two dates
- Display calendars

---

## Understanding Date Methods

There are three main categories of Date methods:

- **Getter methods (`get...`)** → Used to **read** information from a Date object.
- **Setter methods (`set...`)** → Used to **change or update** the values stored in a Date object.
- **Formatting methods (`to...`)** → Used to convert a Date object into a readable string.

---

## Date Methods

| Method | Description | Example | Output |
|:---|:---|:---|:---|
| `new Date()` | Creates a new Date object containing the current system date and time. | `new Date()` | `Sun Jun 28 2026...` |
| `Date.now()` | Returns the current timestamp in milliseconds since 1 January 1970 UTC. | `Date.now()` | `1781184612000` |
| `getFullYear()` | Returns the year as a four-digit number. It is commonly used in age calculation and displaying the current year. | `d.getFullYear()` | `2026` |
| `getMonth()` | Returns the month as a number from **0 to 11**. January is `0` and December is `11`, so developers often add `1` before displaying it. | `d.getMonth()` | `5` |
| `getDate()` | Returns the **day of the month** (1–31). It tells the calendar date, not the weekday. | `d.getDate()` | `28` |
| `getDay()` | Returns the **day of the week** (0–6). Sunday is `0` and Saturday is `6`. Useful for checking weekends. | `d.getDay()` | `0` |
| `getHours()` | Returns the current hour in **24-hour format** (0–23). | `d.getHours()` | `14` |
| `getMinutes()` | Returns the current minutes (0–59). | `d.getMinutes()` | `35` |
| `getSeconds()` | Returns the current seconds (0–59). | `d.getSeconds()` | `20` |
| `getMilliseconds()` | Returns the milliseconds (0–999). | `d.getMilliseconds()` | `450` |
| `getTime()` | Returns the complete timestamp in milliseconds. Used to compare dates and measure time differences. | `d.getTime()` | `1781184612000` |
| `setFullYear()` | Changes the year stored in the Date object. It modifies the original object instead of creating a new one. | `d.setFullYear(2030)` | `2030` |
| `setMonth()` | Changes the month of the Date object. Remember that months start from `0`. | `d.setMonth(11)` | `December` |
| `setDate()` | Changes the day of the month. It can also be used to add or subtract days from a date. | `d.setDate(15)` | `15` |
| `setHours()` | Changes the hour value of the Date object. | `d.setHours(9)` | `09:00` |
| `setMinutes()` | Changes the minute value of the Date object. | `d.setMinutes(45)` | `45` |
| `setSeconds()` | Changes the second value of the Date object. | `d.setSeconds(30)` | `30` |
| `toDateString()` | Converts the Date object into a readable **date-only** string. | `d.toDateString()` | `Sun Jun 28 2026` |
| `toTimeString()` | Converts the Date object into a readable **time-only** string. | `d.toTimeString()` | `10:30:15 GMT...` |
| `toLocaleDateString()` | Converts the date into the user's local date format. Different countries display dates differently. | `d.toLocaleDateString()` | `28/06/2026` |
| `toLocaleTimeString()` | Converts the time into the user's local time format. | `d.toLocaleTimeString()` | `10:30:15 AM` |
| `toLocaleString()` | Returns both date and time in the local format. | `d.toLocaleString()` | `28/06/2026, 10:30 AM` |
| `toISOString()` | Converts the Date object into the international ISO-8601 format. Commonly used in APIs and databases. | `d.toISOString()` | `2026-06-28T05:00:00.000Z` |
| `toUTCString()` | Converts the Date object into UTC (Universal Coordinated Time). | `d.toUTCString()` | `Sun, 28 Jun 2026 05:00:00 GMT` |
| `toJSON()` | Converts the Date object into a JSON-compatible date string. Mainly used when sending data to servers. | `d.toJSON()` | `2026-06-28T05:00:00.000Z` |
