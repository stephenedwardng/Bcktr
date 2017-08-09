use countryQuery;

db.countryQuery.remove({});

db.countryQuery.insert([
{
  name:"Afghanistan",
  capital: "Kabul",
  latLng: [
    33,
    65
  ],
  flag: "https://restcountries.eu/data/afg.svg",
  population: 27657145
}, 
{
  name:"Aland Islands",
  capital: "Mariehamn",
  latLng: [
    60.116667,
    19.9
  ],
  flag: "https://restcountries.eu/data/ala.svg",
  population: 28875
}]
);
