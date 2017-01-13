var express = require("express");

var router = express.Router();

var test = require("../controllers/indexController");

router.get("/", test );


module.exports =router;