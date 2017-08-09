var express = require('express');
var app = express();
var countryRouter = new express.Router();

// countryRouter.get("/", function(req, res){
//   res.json({data: "Hello from country router"});
// });

var countries = require('../client/src/models/countries')();
var country = require('../client/src/models/country');

var countryQuery = require('../client/db/countryQuery');
var query = new countryQuery();

//country by id
countryRouter.get('/:id', function(req, res){
  res.json(countries[req.params.id]);
});

//country index
countryRouter.get('/', function(req, res) {
  //res.json(countries);
  query.all(function(results){
    res.json(results);
  })
});

//country update
countryRouter.put('/:id', function(req, res) {
  var country = new country({
    name: req.body.name
  });
  countries[req.params.id] = country;
  res.json({data: countries});
});

//add new country
countryRouter.post('/', function(req, res) {
  var country = new country({
    name: req.body.name
  });
  query.add(country, function(results){
    res.json(results);
  });
});

//delete country
countryRouter.delete('/:id', function(req, res) {
  countries.splice(req.params.id, 1);
  res.json({data: countries});
});

module.exports = countryRouter;

