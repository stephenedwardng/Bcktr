var Country = function(options) {
  this.name = options.name;
  this.capital = options.capital;
  this.latLng = options.latLng;
  this.flag = options.flag;
  this.population = options.population;
}

Country.prototype = {

}

module.exports = Country;