const express = require("express");

const app = express();

//listenn for requests on port 3000
app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});
