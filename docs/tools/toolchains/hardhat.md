---
title: Hardhat
slug: /tools/toolchains/hardhat
description: Documentation for configuring Hardhat for smart contract development on WMTx, including setup instructions for mainnet, testnet, and local development environments.
sidebar_position: 2
---

# Hardhat

Hardhat is a robust Ethereum development platform that provides a versatile and efficient environment for smart contract development.

Utilize Hardhat to manage the entire lifecycle of your smart contracts, including editing, compiling, debugging, and deploying on WMTx.

---

# Configuring Hardhat for WMTx

To set up [Hardhat](https://hardhat.org/) for deploying smart contracts on WMTx, update your project’s `hardhat.config.ts` file by adding WMTx as a network:

```tsx
networks: {
   // for mainnet
   "wmtx-mainnet": {
     url: "https://default.url", // rpc mainnet
     accounts: [process.env.PRIVATE_KEY as string],
     gasPrice: 1000000000,
   },
   // for Sepolia testnet
   "wmtx-sepolia": {
     url: "https://default.url", // rpc testnet
     accounts: [process.env.PRIVATE_KEY as string],
     gasPrice: 1000000000,
   },
   // for local development environment
   "wmtx-local": {
     url: "http://localhost:8545",
     accounts: [process.env.PRIVATE_KEY as string],
     gasPrice: 1000000000,
   },
 },
 defaultNetwork: "wmtx-local",
```

:::info

For a complete guide on using Hardhat to deploy contracts on WMTx, see Deploying a Smart Contract.

:::

---
