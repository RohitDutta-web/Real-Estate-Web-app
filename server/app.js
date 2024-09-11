const express = require("express");

const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
})

app.listen(3000, () => {
  console.log("Server is listening to port: 3000");
})