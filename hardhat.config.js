require("@nomiclabs/hardhat-waffle");

require("dotenv").config();

const { ALCHEMY_KEY } = process.env;


if (!ALCHEMY_KEY) {
  throw Error("You need to provide an alchemy key.");
}

module.exports = {
  solidity: "0.8.9",

  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
      },
    },
  },
};
