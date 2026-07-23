import { EventEmitter } from "node:events";

const sayHi = (name) => {
  console.log(`${name} logged in.`);
};

const task = new EventEmitter();

task.once("greet", () => {
  console.log("System starts working.\n");
});

task.on("greet", sayHi);

task.on("greet", (name) => {
  console.log(`${name} starts working.`);
});

task.on("greet", (name) => {
  console.log(`${name} stops working.\n`);
});

task.once("exit", () => {
  console.log("System shutdown by manager.\n");
});

task.emit("greet", "Rahul Singh");
task.emit("greet", "Bhavesh Joshi");
console.log();
task.off("greet", sayHi);

task.emit("greet", "Manish Sinha");

task.emit("exit", "Manager"); //execute only once
task.emit("exit", "Employee") //wont affect

console.log("total listener", task.listenerCount("greet"));
task.removeAllListeners
