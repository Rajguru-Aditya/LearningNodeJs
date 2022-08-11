//Creating server with http

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request was made");
});

const port = 3000;
server.listen(port, "localhost", () => {
  console.log("Server up and running on port: ", port);
});
