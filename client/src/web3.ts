import Web3 from 'web3';

let web3: any;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    process.env.REACT_APP_PROVIDER!
  );
  web3 = new Web3(provider);
}

export default web3;