const path = require('path');
const fs = require('fs');
const solc = require('solc');

const trivialPath = path.resolve(__dirname, 'contracts', 'trivial.sol');
const source = fs.readFileSync(trivialPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'trivial.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'trivial.sol'
].TrivialString;
