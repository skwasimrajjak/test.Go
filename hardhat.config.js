require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');

module.exports = {
    solidity: "0.8.21",
    networks: {
        opencampus: {
            url: `https://rpc.open-campus-codex.gelato.digital/`,
            accounts: [PRIVATE_KEY],
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
