import web3 from '../ethereum/web3.js';
// Import Truffle file
import MetaCoin from '../smart-contracts/build/contracts/MetaCoin.sol.js';
import ConvertLib from '../smart-contracts/build/contracts/ConvertLib.sol.js';

// Load Truffle file
ConvertLib.setProvider(web3);

// This works!
var convertLib = ConvertLib.deployed();
console.log(convertLib);

// This doesn't work not!
const fromAddr =web3.eth.coinbase;
const gasPrice = 100000000000;
const gas = 2500000;
ConvertLib.new({ from: fromAddr, gasPrice: gasPrice, gas: gas });
