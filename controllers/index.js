var express = require('express');
var router = new express.Router();

router.use('/api/countries', require("./country.js"));

router.get("/", function(req, res){
  res.sendFile(__dirname + '/../client/build/index.html');
});

module.exports = router;

