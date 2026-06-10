# Dates and Times in JavaScript

## Overview
Working with dates and times using the JavaScript Date object.

## Creating Dates

### Date Constructor
```javascript
new Date()                  // Current date and time
new Date(2024, 0, 15)       // January 15, 2024 (month is 0-indexed)
new Date('2024-01-15')      // ISO 8601 format string
new Date(1705276800000)     // Unix timestamp in milliseconds
new Date(year, month, day, hour, minute, second, millisecond)
```

### Current Date
```javascript
let now = new Date();
console.log(now);           // Full date and time
```

## Getting Date Components

```javascript
let date = new Date('2024-01-15 10:30:45');

date.getFullYear()          // 2024
date.getMonth()             // 0 (January, 0-indexed)
date.getDate()              // 15 (day of month)
date.getDay()               // 1 (day of week, 0=Sunday)
date.getHours()             // 10
date.getMinutes()           // 30
date.getSeconds()           // 45
date.getMilliseconds()      // 0
date.getTime()              // Unix timestamp (milliseconds since 1970)
```

## Setting Date Components

```javascript
let date = new Date();

date.setFullYear(2025)      // Set year
date.setMonth(5)            // Set month (0-indexed)
date.setDate(20)            // Set day of month
date.setHours(15)           // Set hours
date.setMinutes(45)         // Set minutes
date.setSeconds(30)         // Set seconds
date.setMilliseconds(500)   // Set milliseconds
date.setTime(1705276800000) // Set via Unix timestamp
```

## Date String Methods

```javascript
let date = new Date('2024-01-15 10:30:45');

date.toString()             // Full string with timezone
date.toDateString()         // Just date portion
date.toTimeString()         // Just time portion
date.toISOString()          // ISO 8601 format (UTC)
date.toUTCString()          // UTC format string
date.toLocaleString()       // Locale-specific format
date.toLocaleDateString()   // Locale-specific date
date.toLocaleTimeString()   // Locale-specific time
```

### Locale String Examples
```javascript
let date = new Date('2024-01-15 10:30:45');

date.toLocaleString('en-US')        // "1/15/2024, 10:30:45 AM"
date.toLocaleString('de-DE')        // "15.1.2024, 10:30:45"
date.toLocaleString('ja-JP')        // "2024/1/15 10:30:45"
date.toLocaleDateString('en-US')    // "1/15/2024"
date.toLocaleDateString('de-DE')    // "15.1.2024"
```

## Static Methods

```javascript
Date.now()                  // Current Unix timestamp (milliseconds)
Date.parse('2024-01-15')    // Parse string to timestamp
```

## Date Arithmetic

```javascript
let date = new Date('2024-01-15');

// Add days
date.setDate(date.getDate() + 7)        // Add 7 days

// Add months
date.setMonth(date.getMonth() + 1)      // Add 1 month

// Add hours
date.setHours(date.getHours() + 2)      // Add 2 hours

// Calculate difference
let date1 = new Date('2024-01-15');
let date2 = new Date('2024-01-20');
let diffMs = date2 - date1;             // Milliseconds difference
let diffDays = diffMs / (1000 * 60 * 60 * 24);  // Convert to days
```

## Best Practices
- Use ISO 8601 format for consistency
- Remember months are 0-indexed (0 = January)
- Use `getTime()` for timestamp comparisons
- Consider timezone when working with dates
- Use libraries like `moment.js` or `date-fns` for complex operations
