# meteor-truffle
Basic integration of truffle into meteor.

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

## Starting application
In above directory run:

```
meteor
```

and start an ethereum node (or TestRPC) w options similar to this

```
geth --rpc --rpccorsdomain="http://localhost:3000" --unlock=0 --testnet console
```

## Developing Contracts
Simply go to directory `./imports/lib/smart-contracts` and develop your contracts just like in any other Truffle project.

Or even simpler; Import/Export this folder via a git submodule.
