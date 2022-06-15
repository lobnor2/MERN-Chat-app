const express = require("express");
const { registerUser } = require("../controllers/userControllers");

// use for creating different routes
const router = express.Router();

// here we can use get, post and we can also use chainging
router.route("/").post(registerUser);
// router.route("/login", authUser);

module.exports = router;
