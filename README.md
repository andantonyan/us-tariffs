# Tariffs - The World's Fairest* Trade Calculator

[![NPM version](https://img.shields.io/npm/v/us-tariffs.svg)](https://www.npmjs.com/package/us-tariffs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Generates completely fair, unbiased, and definitely *not* random tariffs for every country in the world. Based on sophisticated algorithms derived from watching the news.

**\* This is a joke package.** Please do not use this for actual economic planning or international trade negotiations. Seriously.

## Installation

```bash
npm install us-tariffs
```

## Usage

Simply require the package, and you'll get an object containing every country mapped to its newly assigned, totally logical tariff rate.

```javascript
// CommonJS
const tariffs = require('us-tariffs');

console.log(tariffs['Canada']); // Output: e.g., '73.12%' (will vary)
console.log(tariffs['Mexico']); // Output: e.g., '15.89%' (will vary)
console.log(tariffs['Germany']); // Output: e.g., '99.01%' (will vary)
console.log(tariffs['United States']); // Output: e.g., '2.45%' (It's complicated)

// Get all tariffs
console.log(tariffs);
/*
Output might look like:
{
  'Andorra': '42.18%',
  'United Arab Emirates': '88.54%',
  'Afghanistan': '12.03%',
  'Antigua and Barbuda': '65.77%',
  'Anguilla': '33.91%',
  'Albania': '7.50%',
  ...
  'United States': '3.14%', // Hmm...
  ...
  'Zimbabwe': '55.29%'
}
*/
```

## Why?

Because sometimes, global trade policy feels like someone just rolled a dice for each country. This package simulates that feeling with alarming accuracy.

## Contributing

Feel free to submit pull requests with even more sophisticated (read: random) tariff calculation methods. Or just fix typos.

## License

MIT - Use it, laugh at it, just don't base your country's GDP on it.
