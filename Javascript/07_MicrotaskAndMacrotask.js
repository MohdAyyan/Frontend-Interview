// Event Loop - Microtask vs Macrotask

console.log("start"); //1

setTimeout(()=>{console.log("setTimeout");},0) // Macrotask queue

Promise.resolve().then(()=>{console.log("Promise");}) //Microtask queue

console.log("end"); //2
