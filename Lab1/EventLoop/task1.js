// JS is synchronous and single-threaded.
const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 ends");
};

const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};

const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 ends");
};

function main() {
  console.log("main starts");
  f1();
  console.log("main running");
  console.log("end main");
  
}

main();

// In asynchronous programming, we use event loop to manage the call stack.
/*
Asynchronous calls using timers:
1. setTimeout
2. setImmediate
3. process.nextTick
4. setInterval
 */
