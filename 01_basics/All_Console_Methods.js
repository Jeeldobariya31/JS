//All_Console_Methods.js
//1. console.log() - Used to print messages to the console.
console.log("Hello, World!");
// advanced usage of console.log() with multiple arguments and string formatting
const name = "Alice";
const age = 30;
console.log("Name: %s, Age: %d", name, age);

//work only in browser environment
//consolw with CSS styling
console.log("%cThis is a styled message!", "color: blue; font-size: 20px; font-weight: bold;");
console.log("%cThis is another styled message!", "color: red; font-size: 18px; font-style: italic;");   
//2. console.error() - Used to print error messages to the console.
console.error("This is an error message!");
//3. console.warn() - Used to print warning messages to the console.
console.warn("This is a warning message!");
//4. console.info() - Used to print informational messages to the console.
console.info("This is an informational message!");
//5. console.debug() - Used to print debugging messages to the console. 
console.debug("This is a debug message!");
//6. console.table() - Used to display data in a tabular format.
const data = [
        { name: "Alice", age: 30 },
        { name: "Bob", age: 25 },
        { name: "Charlie", age: 35 }
    ];
console.table(data);
//7. console.time() and console.timeEnd() - Used to measure the time taken by a block of code.
console.time("MyTimer");
for (let i = 0; i < 1000000; i++) {
    // Some code to execute
}       
console.timeEnd("MyTimer");

//8. console.group() and console.groupEnd() - Used to group related messages together in the console.
console.group("My Group");
console.log("Message 1");
console.log("Message 2");
console.groupEnd("My Group");

//9. console.count() - Used to count the number of times a particular message has been logged.
console.count("Counter");
console.count("Counter");
console.count("Counter");

//10. console.clear() - Used to clear the console.
// console.clear();

//11. console.assert() - Used to log a message if a specified condition is false.
console.assert(1 === 2, "This assertion failed!");

//12. console.trace() - Used to print a stack trace to the console.
function a() {
    b();
}
function b() {
    c();
}
function c() {
    console.trace();
}
a();

//13. console.dir() - Used to display an interactive list of the properties of a specified JavaScript object.
const obj = { name: "Alice", age: 30, city: "New York" };
console.dir(obj);

//14. console.dirxml() - Used to display an XML/HTML element representation of a specified JavaScript object.
// const element = document.createElement("div"); //need to run in browser environment
// element.innerHTML = "<p>Hello, World!</p>";
// console.dirxml(element);        

//15. console.groupCollapsed() - Used to create a collapsed group in the console.
console.groupCollapsed("Collapsed Group");
console.log("This message is inside the collapsed group.");
console.log("This message is also inside the collapsed group.");        
console.groupEnd("Collapsed Group");

//16. console.timeStamp() - Used to add a timestamp to the console.
console.timeStamp("My Timestamp");

//17. console.profile() and console.profileEnd() - Used to start and end a JavaScript CPU profile.      
console.profile("My Profile");
for (let i = 0; i < 1000000; i++) {
    // Some code to execute
}
console.profileEnd("My Profile");

//18. console.memory - Used to display memory usage information.
console.log(console.memory);

//19. console.countReset() - Used to reset the count for a specific label.
console.count("Counter");
console.count("Counter");
console.countReset("Counter");
console.count("Counter"); // This will start counting from 1 again.

//20. console.timeLog() - Used to log the current value of a timer that was started with console.time().
console.time("MyTimer");
setTimeout(() => {
    console.timeLog("MyTimer");
    console.timeEnd("MyTimer");
}, 1000);
      


