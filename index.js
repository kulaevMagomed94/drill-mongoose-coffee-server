const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require("path");
require("dotenv").config();



const app = express();
const port = 3000;

app.use(express.json());
//midlleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose
  .connect(process.env.MONGO_URL, {})
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

app.use(require("./routes/drinks.routes"));

app.listen(port, () => {
  console.log("Сервер запущен");
});
