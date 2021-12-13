import Web3 from 'web3';
import EthereumEvents from 'ethereum-events';

const ERC20_ABI = [
  {
    inputs: [{ internalType: 'string', name: 'initialString', type: 'string' }],
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'createdString',
        type: 'string',
      },
    ],
    name: 'StringCreated',
    type: 'event',
    signature:
      '0x070f8025711354444e911100e5d77af521b1eda4a9d34fc5330c2f93cb3419c8',
  },
  {
    inputs: [{ internalType: 'string', name: 'newString', type: 'string' }],
    name: 'setString',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x7fcaf666',
  },
  {
    inputs: [],
    name: 'trivial',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    signature: '0x170b99d9',
  },
];

const WEB3_PROVIDER = process.env.WEB3_PROVIDER!;

const contracts = [
  {
    name: process.env.CONTRACT_NAME,
    address: process.env.ADDRESS!,
    abi: ERC20_ABI,
  },
];

const options = {
  pollInterval: 13000,
  confirmations: 12,
  chunkSize: 10000,
  concurrency: 10,
  backoff: 1000,
};

const web3 = new Web3(WEB3_PROVIDER);

export default new EthereumEvents(web3, contracts, options);
