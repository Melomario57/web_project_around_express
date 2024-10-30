const usersRoute = require("express").Router();

const { getUsers, getUserId, createUser } = require("../controllers/users");

usersRoute.get("/users", getUsers);
usersRoute.get("/users/:userId", getUserId);
usersRoute.post("/users", createUser);

module.exports = usersRoute;
