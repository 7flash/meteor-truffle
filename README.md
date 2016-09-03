# meteor-truffle

Makes it about as easy as it gets to integrate smart-contracts into your Meteor project.

## Installation

1. Install <a href="https://github.com/ConsenSys/truffle">Truffle</a>:
    ```
    npm install -g truffle
    ```
  
2. Install <a href="https://github.com/ethereumjs/testrpc">Testrpc</a>:

    ```
    npm install -g ethereumjs-testrpc
    ```

3. Install meteor-truffle
    ```
    git clone https://github.com/blockchain-hacklab/meteor-truffle.git
    cd meteor-truffle
    meteor npm install
    ```

## Develop with Truffle
Simply go to directory `./imports/lib/smart-contracts` and develop your smart-contracts just like in any other Truffle project.

Or even simpler; Import/Export this folder via a git submodule.

## Integrate Smart Contracts
Simply import the smart-contract into your Meteor project, e.g. `import MetaCoin from '../smart-contracts/build/contracts/MetaCoin.sol.js';` and use like in any other <a href="https://github.com/ConsenSys/ether-pudding">Ether-pudding</a> project.

## Starting Meteor application
In above directory run:

```
meteor
```

and start an ethereum node (or TestRPC) w options similar to this

```
geth --rpc --rpccorsdomain="http://localhost:3000" --unlock=0 --testnet console
```
