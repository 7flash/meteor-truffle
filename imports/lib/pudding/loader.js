import Pudding from './pudding.js';

const MetaCoin = require('../../truffle/environments/development/contracts/MetaCoin.sol.js');

MetaCoin.load(Pudding);
let meta = MetaCoin.deployed();

console.log(meta);
