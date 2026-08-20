import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Us</h1>");
  } else if (req.url === "/product") {
    res.end(`
            <h1>Mobile Phone</h1>
            <h2>Price: 25000</h2>
            <p>Discount: 5%</p>
            <a href="#">Buy Now</a>
        `);
  } else {
    res.statusCode = 404;
    res.end(`
            <h1>404, Not Found</h1>
            <p>Page not Found</p>
            <a href="/">Home</a>
        `);
  }
});

const PORT = 4444;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
