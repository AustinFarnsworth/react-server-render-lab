const express = require("express");

const app = new express();

app.get("/", (_req, res) => {
  res.send(`<h1>React App is Working!</h1>`);
});

app.listen(4000);
console.log("Server is Running");
