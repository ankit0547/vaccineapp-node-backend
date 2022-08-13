const express = require("express");
const router = express.Router();

const userController = require("../controllers/user/user-controller");
const Validator = require("../controllers/user/validate-user");

router.get("/", userController.getUsers);
router.post("/", Validator.validateClient, userController.createUser);
router.delete("/", userController.deleteUser);

module.exports = router;
