require('dotenv').config({path:__dirname+'/.env'});
require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-web3');
require('@openzeppelin/hardhat-upgrades');
require('hardhat-contract-sizer');

module.exports = {
  defaultNetwork: 'local',
  networks: {
    mainnet: {
      url: 'https://mainnet.infura.io/v3/' + process.env.INFURA_KEY,
      gasPrice: 11000000000,
      chainId: 1,
      timeout: 500000000,
      accounts: [process.env.PK]
    },
    local: {
      url: 'http://localhost:8545',
    },
  },
  solidity: {
      compilers: [ {version: '0.6.12'}, {version: '0.8.15'}, {version: '0.8.16'} ],
  }
};
