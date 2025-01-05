const http = require("node:http");

const sports = ["soccer", "volley", "tennis", "basketball"];
const server = http.createServer(async (request, response) => {
  const { method, statusCode, url } = request;

  const bodyPromise = new Promise((resolve, reject) => {
    let body;
    request.on("data", (data) => {
      body = JSON.parse(data);
    });

    request.on("end", (data) => {
      resolve(body);
    });
  });

  if (url === "/") {
    response.write("<h1>Hello from node</h1>");
    response.end();
  }
  if (url === "/api/sports") {
    if (method === "POST") {
      const body = await bodyPromise;
      const { name } = body;
      if (
        !sports.map((sport) => sport.toLowerCase()).includes(name.toLowerCase())
      ) {
        sports.push(name.toLowerCase());
      }
    }
    response.write(JSON.stringify(sports));
    response.end();
  } else {
    response.statusCode = 404;
    response.write("<h1>Page not found</h1>");
    response.end();
  }
});

server.listen(5173, "localhost", () => {
  console.log("Server working at localhost:5173");
});
