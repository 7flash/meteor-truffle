import Pudding from './pudding.js';

let MetaCoin = require('../../truffle/environments/development/contracts/MetaCoin.sol.js');
MetaCoin.load(Pudding);

MetaCoin.new();
