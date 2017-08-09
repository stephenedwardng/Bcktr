var express = require('express');
var countryRouter = new express.Router();

countryRouter.get("/", function(req, res){
  res.json({data: "Hello from country router"});
});

module.exports = countryRouter;

