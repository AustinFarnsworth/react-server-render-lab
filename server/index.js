// const express = require("express");
import express from "express";
import { readFileSync } from "fs";

const app = new express();

app.use(express.static("dist"));


app.get("/", async (_req, res) => {
  
    const index = readFileSync('public/index.html', 'utf8');
    res.send(index);

  // res.send(`<h1>React App is Working!</h1>`);
});


app.listen(4000);
console.log("Server is Running");
