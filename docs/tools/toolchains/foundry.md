---
title: Foundry
slug: /tools/toolchains/foundry
description: Documentation for Foundry, a toolchain for smart contract development. Provides instructions on deploying and verifying contracts on WMC's mainnet and testnet using Foundry.
sidebar_position: 1
---

# Foundry

Foundry is a comprehensive toolchain for smart contract development.

With Foundry, you can manage dependencies, compile projects, run tests, deploy smart contracts, and interact with the blockchain via the command line and Solidity scripts.

Refer to the [Foundry Book](https://book.getfoundry.sh/) to begin using Foundry with WMC.

---

# Using Foundry with WMC

Foundry offers native support for WMC.

Simply provide the WMC RPC URL and Chain ID when deploying and verifying your contracts.

## Mainnet

### Deploying a smart contract

```bash
forge create ... --rpc-url=https://mainnet.wmc.org/
```

### Verifying a smart contract

```bash
forge verify-contract ... --chain-id 8453
```

## Testnet

### Deploying a smart contract

```bash
forge create ... --rpc-url=https://testnet.wmc.org/
```

### Verifying a smart contract

```bash
forge verify-contract ... --chain-id 84532
```
