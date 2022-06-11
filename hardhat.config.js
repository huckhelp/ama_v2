/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('@nomiclabs/hardhat-waffle');
 require('dotenv').config();
 require('@openzeppelin/hardhat-upgrades');
 require("@nomiclabs/hardhat-etherscan");
 require("@nomiclabs/hardhat-solhint");

 module.exports = {
   solidity: {
    compilers: [
     {
      version:"0.8.2",
      settings:{
      optimizer: {
        enabled: true,
        runs: 200
      }
    }}
    ],
    //  gas:7000000,
     gasMultiplier:3,
    //  gasPrice:7.3,
   },
   defaultNetwork: "hardhat",
 
   networks:{
    bsctest: {
      url: "https://speedy-nodes-nyc.moralis.io/ad50d28e8c2ae467e994cf74/bsc/testnet",
      accounts: [`${process.env.PKEY}`]
    },
    bscmain: {
      url: "https://speedy-nodes-nyc.moralis.io/ad50d28e8c2ae467e994cf74/bsc/mainnet",
      accounts: [`${process.env.PKEY}`]
    },
   },
   etherscan: {
    apiKey: "S1PFEYDQ5SXJSKTB2UE6YXAKF2XDV2Y4EV"
  },
  bscscan: {
    apiKey: "S1PFEYDQ5SXJSKTB2UE6YXAKF2XDV2Y4EV"
  }
 };
  