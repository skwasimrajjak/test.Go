require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

//ImageStorage deployed to: 0x375Fa8fcb3352d694E25110CEc2eEedfDEc7859e

const { PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
    solidity: "0.8.21",
    networks: {
        opencampus: {
            url: `https://rpc.open-campus-codex.gelato.digital/`,
            accounts: [`0x${PRIVATE_KEY}`]
          },
    },
    etherscan: {
        apiKey: "ETHERSCAN_API_KEY"  // Replace with your Etherscan API key
    },
    customChains: [
        {
          network: "opencampus",
          chainId: 656476,
          urls: {
            apiURL: "https://rpc.open-campus-codex.gelato.digital/api",
            browserURL: "https://rpc.open-campus-codex.gelato.digital/",
          },
        },
      ],
};
