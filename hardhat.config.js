require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();
const {API_URL, PRIVATE_KEY} = process.env;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gasMultiplier: 1,
      gas: 2100000,
      gasPrice: 8000000000,
      timeout: 20000,
      saveDeployments: true,
      chainId: 4,
    },
  },
};
