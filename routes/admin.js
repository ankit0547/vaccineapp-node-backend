const express = require("express");
const path = require("path");
const router = express.Router();
// const rootDir = require("../utils/path");
const adminValidator = require("../controllers/admin/validateAdmin");
const adminController = require("../controllers/admin/admin");

router.post("/", adminValidator.validateLoginAdmin, adminController.adminLogin);

module.exports = router;
