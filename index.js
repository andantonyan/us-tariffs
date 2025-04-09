const countries = require('countries-list').countries;

const generatedTariffs = {};

const countryCodes = Object.keys(countries);

countryCodes.forEach(code => {
  const countryName = countries[code].name;
  const randomTariff = (Math.random() * 100).toFixed(2);
  generatedTariffs[countryName] = `${randomTariff}%`;
});


if (generatedTariffs['United States']) {
  generatedTariffs['United States'] = `${(Math.random() * 5).toFixed(2)}%`;
}

module.exports = generatedTariffs;
