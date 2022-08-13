const express = require("express");
const path = require("path");
const router = express.Router();
// const rootDir = require("../utils/path");

const { userController } = require("../controllers/index");
// const Validator = require("../controllers/user/validate-user");

//GET ROUTES
router.get("/", userController.getUsers);

//POST ROUTES
router.post("/register", userController.createUser);
// router.post("/login", userController.logInUser);

//DELETE ROUTE
// router.delete("/", userController.deleteUser);

module.exports = router;
