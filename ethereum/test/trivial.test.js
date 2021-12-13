const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { abi, evm } = require('../compile');

let accounts;
let trivial;

const INITIAL_STRING = 'Hello';

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //Use one of the accounts to deploy contract
  trivial = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [INITIAL_STRING] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Trivial', () => {
  it('deploys a contract', () => {
    assert.ok(trivial.options.address);
  });

  it('has a default string', async () => {
    const initialString = await trivial.methods.trivial().call();
    assert.equal(initialString, INITIAL_STRING);
  });

  it('can change the message', async () => {
    await trivial.methods.setString('another one').send({ from: accounts[0] });
    const trivialString = await trivial.methods.trivial().call();
    assert.equal(trivialString, 'another one');
  });
});
