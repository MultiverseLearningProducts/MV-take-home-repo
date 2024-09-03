const express = require("express");
const router = express.Router();

// different model routers
router.use("/", require("./products.js"))

module.exports = router;