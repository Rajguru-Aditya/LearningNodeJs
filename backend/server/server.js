//Creating server with http

const fs = require("fs");
const http = require("http");
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log("Request was made: ", req.url);

  //lodash
  const randomNum = _.random(0, 30);
  const greetUser = _.once(() => {
    console.log("Hello World");
  });

  greetUser();
  console.log(randomNum);

  //Set header content type
  res.setHeader("Content-Type", "text/html");
  let filePath = "../views/";

  switch (req.url) {
    case "/":
      filePath += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      filePath += "about.html";
      res.statusCode = 200;
      break;
    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      filePath += "404.html";
      res.statusCode = 404;
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });

  //Send HTML file
});

const port = 3000;
server.listen(port, "localhost", () => {
  console.log("Server up and running on port: ", port);
});
