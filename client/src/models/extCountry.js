var app = function(){
  var url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);
  showDetails(JSON.parse(localStorage.getItem("savedCountry")));
};

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  populateDropDown(countries);
};

var populateDropDown = function(countries){
  var select = document.querySelector("#country-select");
  countries.forEach(function(country){
    var option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  })
  select.addEventListener("change", function(){
    showDetails(countries[select.selectedIndex -1]);
    save(countries[select.selectedIndex -1]);
  })

var makePostRequest = function(url, callback, payload)
  {
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader("Content-type", "application/json");
    request.addEventListener('load', callback);
    request.send(payload);
  }
}

module.exports = ExtCountry;