import { log } from "console";
import http from "http";

const server = http.createServer((req, res) => {
  console.log("Welcome to Node JS");
  console.log(req.url);

  res.end("<h1> Hello Hello</h1>");

  console.log("Request Method");
  console.log(req.method);

  console.log("Request Socket");
  console.log(req.socket);

  console.log("Request Header");
  console.log(req.headers);
  
});

server.listen(5000, () => {
  console.log("Code in running");
});
