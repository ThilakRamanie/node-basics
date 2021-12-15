const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1>This is the home page</h1>");
    res.end();
  }
  if (req.url === "/about") {
    res.end("<h1>This is the about page</h1>");
  }
  res.end(`
   <h1>404 Error!</h1>
   <a href="/">Go to home page</a>
   `);
});

server.listen(5000);
