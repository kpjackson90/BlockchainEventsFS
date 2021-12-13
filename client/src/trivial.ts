import web3 from './web3';

const address = process.env.REACT_APP_ADDRESS!;

const abi = [
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

export default new web3.eth.Contract(abi, address);
