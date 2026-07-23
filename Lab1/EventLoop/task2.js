// In asynchronous programming, we use event loop to manage the call stack.
/*
Asynchronous calls using timers:
1. setTimeout
2. setImmediate
3. process.nextTick
4. setInterval
promise:
1. async
2. await
 */
import fs from "fs/promises";
// only async function can use await
const writeData = async () => {
  try {
    console.log("about to write......");
    await fs.writeFile("stud.txt", "Name: Raman Singh");
    console.log("file written");
  } catch (error) {
    console.log(error);
  }
};
const f1 = () => {
  console.log("f1");
};

const f2 = () => {
  console.log("f2");
};

const f3 = () => {
  console.log("f3");
};

const main = () => {
  console.log("main");
  setTimeout(f1, 0);
  //   setInterval(f2, 1000);
  setImmediate(f2);
  console.log("end");
  process.nextTick(f3);

  writeData();
};

main();
