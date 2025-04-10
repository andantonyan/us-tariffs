/**
 * An object containing country names as keys and their randomly assigned
 * tariff percentages (as strings like "XX.XX%") as values.
 * Example: { "Canada": "73.12%", "Mexico": "15.89%" }
 */
type Tariffs = {
  [countryName: string]: string;
};

// Declare the variable that holds the tariff data.
// Since the JS file uses module.exports, we use 'export =' syntax.
declare const tariffs: Tariffs;

export = tariffs;
