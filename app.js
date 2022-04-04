const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/users", (req, res, next) => {
  res.send("<h1>User: " + req.body.username + "</h1>");
});

app.get("/", (req, res, next) => {
  res.send(
    '<form action="/users" method="POST"><input type="text" name="username"><button type="submit">Create a user</button></form>'
  );
});

app.listen(5000);
