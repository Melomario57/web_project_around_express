const cardsRoute = require("express").Router();
const fs = require("fs");
const path = require("path");
const cardsPath = path.join(__dirname, "../data/cards.json");

cardsRoute.get("/cards", (req, res) => {
  fs.readFile(cardsPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(404).send({ message: "No se pudieron leer los datos" });
      return;
    }
    res.send(JSON.parse(data));
  });
});

module.exports = cardsRoute;
