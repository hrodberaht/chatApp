var express = require("express");
var router = express.Router();

var apiController = require("../controllers/apiController");


router.get("/", apiController);
module.exports = router;