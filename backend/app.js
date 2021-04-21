const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: uuidv4(),
      title: "first server-side post",
      content: "this is coming from the server",
    },
    {
      id: uuidv4(),
      title: "second server-side post",
      content: "this is coming from the server!!!",
    },
  ];
  res.status(200).json({
    message: " Posts fetched successfully! ",
    posts: posts,
  });
});

module.exports = app;
