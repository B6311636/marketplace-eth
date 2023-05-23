const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    sepolia: {
      provider: () => 
        new HDWalletProvider(
          keys.MNEMONIC,
          keys.INFURA_API_KEY
        ),
      network_id: 11155111,
      gas:  5500000,
    }
  },
  compilers: {
    solc: {
      version: "0.8.19",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
