const usersRoute = require("express").Router();
const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../data/users.json");

usersRoute.get("/users", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(404).send({ message: "Usuario no encontrado" });
      return;
    }
    res.send(JSON.parse(data));
  });
});
usersRoute.get("/users/:id", (req, res) => {
  fs.readFile(usersPath, { encoding: "utf8" }, (err, data) => {
    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params.id);
    if (!user) {
      res.send({ Error: "ID de usuario no encontrado" });
      return;
    }
    res.send(user);
  });
});
module.exports = usersRoute;
