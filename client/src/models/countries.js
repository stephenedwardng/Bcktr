var Country = require('./country');

var Countries = function() {

}

Countries.prototype = {
  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', callback);
    request.send();
  },

  all: function(callback){
    this.makeRequest("http://localhost:3000/api/countries", function(){
      if (this.status !== 200) return;
        // this.response text needs to be in the context of makeRequest, rather than a new function
        var jsonString = this.responseText;
        var results = JSON.parse(jsonString);
        // similar to Ruby Map, BUT we want this to mean something different to above this.response. Global prototype 
        var countries = Countries.prototype.populateCountries(results);
        // callback countries which is called in New UI
        callback(countries);
      });
  },

  populateCountries: function(results){
    var countries = [];
      // pull out each JSON object, loops through and adds to new array
      for(var result of results){
        var country = new Country(result);
        countries.push(country);
      }
      // then return array then CALLBACK above
      return countries;
    },

  // callback to hit the API.  Cant use make request above as its a GET request.  We need a POST request - makePostRequest
  add: function(newCountry, callback){
    var countryToAdd = JSON.stringify(newCountry);
    this.makePostRequest("http://localhost:3000/api/countries", callback, countryToAdd);
  },

    // additional parameter. payload is data you want to add
    makePostRequest: function(url, callback, payload){
      var request = new XMLHttpRequest();
      request.open('POST', url);
      // we need to tell function that the data in in JSON format as its a POST
      request.setRequestHeader("Content-type", "application/json");
      request.addEventListener('load', callback);
      // payload fed back, will be a call back
      request.send(payload);
    }

}

module.exports = Countries;