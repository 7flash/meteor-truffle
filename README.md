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

**Ubuntu User?** Follow the basic instructions for installing [Node.js](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) and make sure that you have `npm` installed, as well as the `build-essential` `apt` package (it supplies `make` which you will need to compile most things). Use the official Node.js packages, *do not use the package supplied by your distribution.*


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
Go to directory `./imports/lib/smart-contracts`: and develop just like any other Truffle project.

Or even simpler; Import/Export this folder via a git submodule.
