const dotenv = require("dotenv");
require("@nomiclabs/hardhat-ethers");

dotenv.config();

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`,
      accounts: [process.env.NEXT_PUBLIC_GOERLI_PRIVATE_KEY],
    },
  },
};

// TODO: OLD CONFIG
// const fs = require("fs");

// require("@nomiclabs/hardhat-waffle");

// const GOERLI_PRIVATE_KEY = fs.readFileSync(".secret").toString().trim();
// const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;

// module.exports = {
//   networks: {
//     // hardhat: {
//     //   chainId: 1337,
//     // },
//     goerli: {
//       url: `https://eth-goerli.alchemyapi.io/v2/aR1r-mQBkEJHI3C3JfpTP7Odt9PS7xE1`,
//       accounts: ["6b76280db3f6facf04857cf05865de483b48436d512ff89d48d31363404e8878"],
//     },
//     fuji: {
//       url: "https://api.avax-test.network/ext/bc/C/rpc",
//       gasPrice: 225000000000,
//       chainId: 43113,
//       accounts: [process.env.FUJI_PRIVATE_KEY],
//     },
//   },
//   solidity: "0.8.4",
// };
