const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/aroundb", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const usersRoute = require("./routes/users");
const cardsRoute = require("./routes/cards");

const { PORT = 3000 } = process.env;

app.use(cardsRoute);
app.use(usersRoute);
/* app.use((err, req, res, next)); */
app.use((req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});
app.listen(PORT, () => {
  console.log(`La app esta corriendo en el servidor ${PORT}`);
});
