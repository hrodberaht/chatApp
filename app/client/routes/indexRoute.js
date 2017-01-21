var express = require("express");

var router = express.Router();

var test = require("../controllers/indexController");
var addToDatabase = require("../controllers/addController");


router.get("/", test );
router.get("/add", addToDatabase);


module.exports =router;