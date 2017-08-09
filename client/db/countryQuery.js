var MongoClient = require('mongodb').MongoClient;

var CountryQuery = function(){
  // hit database
  this.url = "mongodb://localhost:27017/countries";
};

CountryQuery.prototype = {
  // get all country(docs) out of DB
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      // grab collection/table via variable
      var collection = db.collection('countries');
      // return all countries to Array
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  },

  add: function(countryToAdd, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('countries');
        // insert new country
        collection.insert(countryToAdd);
        collection.find().toArray(function(err, results){
          callback(results);
        });
      };
    });
  }
}

module.exports = CountryQuery;