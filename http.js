const http = require("node:http");

const server = http.createServer((request, response) => {
  const { method, statusCode, url } = request;

  const sports = ["soccer", "volley", "tennis"];

  if (url === "/") {
    response.write("<h1>Hello from node</h1>");
    response.end();
  }

  if (url === "/sports") {
    for (const el of sports) {
      response.write(`<p>${el}</p>`);
    }
    response.end();
  }

  response.statusCode = 404;
  response.write("<h1>Page not found</h1>");
  response.end();
});

server.listen(5173, "localhost", () => {
  console.log("Server working at localhost:5173");
});
