// =======================================================
// 🔥 SINGLETON PATTERN IN JAVASCRIPT (ALL-IN-ONE FILE)
// =======================================================
//
// 📌 Definition:
// Singleton ensures ONLY ONE instance of an object exists
// and provides a global access point to it.
//
// 📌 Real-world use:
// - Logger
// - Database connection
// - Config manager
// - Cache system
//
// =======================================================

// =======================================================
// ✅ TYPE 1: OBJECT LITERAL SINGLETON
// =======================================================

console.log("\n================ TYPE 1: OBJECT LITERAL ================\n");

const clock1 = {
  _hours: 12,
  _minutes: 0,

  tick() {
    this._minutes++;
    if (this._minutes === 60) {
      this._hours++;
      this._minutes = 0;
    }
  },

  time() {
    return `${String(this._hours).padStart(2, "0")}:${String(this._minutes).padStart(2, "0")}`;
  },
};

console.log("Initial Time:", clock1.time());

clock1.tick();
clock1.tick();

console.log("After 2 ticks:", clock1.time());

const obj1 = clock1;
const obj2 = clock1;

console.log("Are both references same?", obj1 === obj2); // true

// =======================================================
// ✅ TYPE 2: CLOSURE (IIFE) SINGLETON
// =======================================================

console.log("\n================ TYPE 2: CLOSURE (IIFE) ================\n");

const clock2 = (function () {
  let hours = 12;
  let minutes = 0;

  return {
    tick() {
      minutes++;
      if (minutes === 60) {
        hours++;
        minutes = 0;
      }
    },

    time() {
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    },
  };
})();

console.log("Initial Time:", clock2.time());

clock2.tick();
clock2.tick();

console.log("After 2 ticks:", clock2.time());

// Trying to access private data ❌
console.log("Accessing private variable (should be undefined):", clock2.hours);

// =======================================================
// ✅ TYPE 3: CLASS SINGLETON (Constructor Control)
// =======================================================

console.log("\n================ TYPE 3: CLASS SINGLETON ================\n");

class Clock3 {
  constructor() {
    if (Clock3.instance) {
      console.log("Returning existing instance...");
      return Clock3.instance;
    }

    console.log("Creating new instance...");

    this.hours = 12;
    this.minutes = 0;

    Clock3.instance = this;
  }

  tick() {
    this.minutes++;
    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }
  }

  time() {
    return `${String(this.hours).padStart(2, "0")}:${String(this.minutes).padStart(2, "0")}`;
  }
}

const c1 = new Clock3();
const c2 = new Clock3();

console.log("Are both objects same?", c1 === c2);

c1.tick();
console.log("Time from c2 (shared instance):", c2.time());

// =======================================================
// ✅ TYPE 4: STATIC METHOD SINGLETON
// =======================================================

console.log("\n================ TYPE 4: STATIC METHOD ================\n");

class Clock4 {
  constructor() {
    this.hours = 12;
    this.minutes = 0;
  }

  static getInstance() {
    if (!Clock4.instance) {
      console.log("Creating new static instance...");
      Clock4.instance = new Clock4();
    } else {
      console.log("Returning existing static instance...");
    }
    return Clock4.instance;
  }

  tick() {
    this.minutes++;
    if (this.minutes === 60) {
      this.hours++;
      this.minutes = 0;
    }
  }

  time() {
    return `${String(this.hours).padStart(2, "0")}:${String(this.minutes).padStart(2, "0")}`;
  }
}

const s1 = Clock4.getInstance();
const s2 = Clock4.getInstance();

console.log("Are both objects same?", s1 === s2);

s1.tick();
console.log("Time from s2 (shared):", s2.time());

// =======================================================
// ✅ TYPE 5: MODULE SINGLETON (SIMULATED)
// =======================================================

console.log("\n================ TYPE 5: MODULE PATTERN ================\n");

const ClockModule = (function () {
  let hours = 12;
  let minutes = 0;

  function tick() {
    minutes++;
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
  }

  function time() {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
  }

  return {
    tick,
    time,
  };
})();

console.log("Initial Time:", ClockModule.time());

ClockModule.tick();
ClockModule.tick();

console.log("After 2 ticks:", ClockModule.time());

// =======================================================
// 🎯 FINAL SUMMARY
// =======================================================

console.log("\n================ SUMMARY ================\n");

console.log("1. Object Literal → Simple, direct singleton");
console.log("2. Closure (IIFE) → Private variables");
console.log("3. Class → OOP-based singleton");
console.log("4. Static Method → Controlled instance creation");
console.log("5. Module → Best modern approach (ES Modules)");

console.log("\n🔥 Tip: In real projects, ES Modules are singleton by default!");
