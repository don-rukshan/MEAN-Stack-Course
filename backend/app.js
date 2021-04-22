const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const postsRoutes = require("./routes/posts");

const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(
    "mongodb+srv://rukshan:Lb7moRgHTGKrcfLy@cluster0.ubqeb.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,PUT,DELETE,OPTIONS"
  );
  next();
});

app.use("api/posts", postsRoutes);

module.exports = app;
