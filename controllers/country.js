var express = require('express');
var app = express();
var countryRouter = new express.Router();

var countries = require('../client/src/models/countries');
var Country = require('../client/src/models/country');

var CountryQuery = require('../client/db/countryQuery');
var query = new CountryQuery();

//country by id
countryRouter.get('/:id', function(req, res){
  res.json(countries[req.params.id]);
});

//country index
countryRouter.get('/', function(req, res) {
  query.all(function(results){
    res.json(results);
  })
});

//add new country to bucket list
countryRouter.post('/', function(req, res) {
  var country = new country({
    name: req.body.name,
    capital: req.body.capital,
    latlng: req.body.latlng,
    population: req.body.population,
    flag: req.body.flag
  });
  query.add(country, function(results){
    res.json(results);
  });
});

module.exports = countryRouter;

