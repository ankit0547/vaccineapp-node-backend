const express = require("express");
const path = require("path");
const router = express.Router();
// const rootDir = require("../utils/path");

const postController = require("../controllers/posts/post-controller");
const Validator = require("../controllers/posts/Validator");

router.get("/", postController.getPosts);
router.post("/", Validator.validate, postController.createPost);

module.exports = router;
