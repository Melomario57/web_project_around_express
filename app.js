const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname, "/")));

mongoose.connect("mongodb://localhost:27017/aroundb");

const usersRoute = require("./routes/users");
const cardsRoute = require("./routes/cards");

const { PORT = 3000 } = process.env;

app.use("/", cardsRoute);
app.use("/", usersRoute);

app.listen(PORT, () => {
  console.log(`La app esta corriendo en el servidor ${PORT}`);
});
