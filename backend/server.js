const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();
connectDB();

// instance of express
const app = express();

// first express api
app.get("/", (req, res) => {
  res.send("api is running succesfully");
});

// complex api and dummy data at /api/chat
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

// to get singlechat using params id and respond
app.get("/api/chat/:id", (req, res) => {
  //   console.log(req.params.id);
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

// you can choose any port number
// we dont want to make port 5000 public so make a .envfile and create varible PORT = 5000 and install dotevn
//import dotenv and config

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server is listening at port ${PORT}`.yellow.bold)
);
