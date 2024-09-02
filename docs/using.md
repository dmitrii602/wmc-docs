---
sidebar_position: 2
description: General description of interactions with LinQ services
slug: /docs/using
title: Using WMC
---

import Link from '/src/components/Links/Link';

# Using WMC with your wallet

---

## MetaMask

To add {process.env.BLOCKCHAIN_NETWORK} as a custom network to MetaMask:

1. Open the MetaMask browser extension.
2. Open the network selection dropdown menu by clicking the dropdown button at the top of the extension.
3. Click the **Add network** button.
4. Click **Add a network manually**.
5. In the **Add a network manually** dialog that appears, enter the following information for {process.env.BLOCKCHAIN_NETWORK} mainnet:

   | Name            | Value                                                        |
   | :-------------- | :----------------------------------------------------------- |
   | Network Name    | {process.env.BLOCKCHAIN_NETWORK} Mainnet                                                 |
   | Description     | The public mainnet for {process.env.BLOCKCHAIN_NETWORK}.                                 |
   | RPC Endpoint    | {process.env.RPC_ENDPOINT_MAINNET}         |
   | Chain ID        | {process.env.CHAIN_ID_MAINNET}                                                         |
   | Currency Symbol | {process.env.CURRENCY_SYMBOL_MAINNET}                                                          |
   | Block Explorer  | <Link url={process.env.BLOCK_EXPLORER_MAINNET} showUrl={true} />  |

6. Tap the Save button to save {process.env.BLOCKCHAIN_NETWORK} as a network.

You should now be able to connect to the {process.env.BLOCKCHAIN_NETWORK} by selecting it from the network selection dropdown menu.

---

## Testnet

#### MetaMask

To add {process.env.BLOCKCHAIN_NETWORK} Sepolia as a custom network to MetaMask:

1. Open the MetaMask browser extension.
2. Open the network selection dropdown menu by clicking the dropdown button at the top of the extension.
3. Click the **Add network** button.
4. Click **Add a network manually**.
5. In the **Add a network manually** dialog that appears, enter the following information for the {process.env.BLOCKCHAIN_NETWORK} Sepolia testnet:

   | Name            | Sepolia                                                                |
   | :-------------- | :--------------------------------------------------------------------- |
   | Network Name    | {process.env.BLOCKCHAIN_NETWORK} Sepolia                                                           |
   | RPC Endpoint    | {process.env.RPC_ENDPOINT_TESTNET}                   |
   | Chain ID        | {process.env.CHAIN_ID_TESTNET}                                                                  |
   | Currency Symbol | {process.env.CURRENCY_SYMBOL_TESTNET}                                                                    |
   | Block Explorer  | <Link url={process.env.BLOCK_EXPLORER_TESTNET} showUrl={true} /> |


6. Tap the Save button to save {process.env.BLOCKCHAIN_NETWORK} Sepolia as a network.

You should now be able to connect to the {process.env.BLOCKCHAIN_NETWORK} testnet by selecting it from the network selection dropdown menu.

---


