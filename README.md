# Project About NFT Create, Deploy, & Mint

1. Setting up the environment

Most Ethereum libraries and tools are written in JavaScript, and one of that is Hardhat. If you're not familiar with Node.js, it's a JavaScript runtime built on Chrome's V8 JavaScript engine. It's the most popular solution to run JavaScript outside of a web browser and hardhat is built on one of it.

First you will run
```shell
$ npm i 
```
for installing the dependenscies of package.json and then node_modules folder will be create.

Create your .env file accordingly

API_KEY=""

PRIVATE_KEY=""

CONTRACT_ADDRESS=""

Menemonic=""

2. Compiling contracts

To compile the contract run npx hardhat compile in your terminal. The compile task is one of the built-in tasks.

3. Create script folder for deploy and mint nft, use existing .env files for both scripts:

Before deploying smart contract first you will have to need .env file and that file you will write secret keys like mnemoics, private keys and api-key of your ethereun node. And then you use following steps.

4. Deploying NFT

After create the script for deploying then run:
```shell
$ npx hardhat migrate --network rinkeby
```
Compiling 1 file with 0.8.4
Compilation finished successfully and then migration finished succesfully and then your contract will deploy on ethereum testnet like rinkeby.
The contract has been successfully deployed and is ready to be used.

5. Minting NFT

After create the script for mint NFt using ether.js. Run
```shell
$ node scripts/mint-nft.js
```
Then your NFT will go be mint.
