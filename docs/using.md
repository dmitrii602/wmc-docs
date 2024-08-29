---
sidebar_position: 2
description: General description of interactions with LinQ services
slug: /docs/using
title: Using WMTx
---

import BlockExplorerLinkMainnet from '/src/components/Links/BlockExplorerLinkMainnet';
import BlockExplorerLinkTestnet from '/src/components/Links/BlockExplorerLinkTestnet';

# Using WMTx with your wallet

---

## MetaMask

To add {process.env.PRODUCT_NAME} as a custom network to MetaMask:

1. Open the MetaMask browser extension.
2. Open the network selection dropdown menu by clicking the dropdown button at the top of the extension.
3. Click the **Add network** button.
4. Click **Add a network manually**.
5. In the **Add a network manually** dialog that appears, enter the following information for {process.env.PRODUCT_NAME} mainnet:

   | Name            | Value                                                        |
   | :-------------- | :----------------------------------------------------------- |
   | Network Name    | {process.env.PRODUCT_NAME} Mainnet                                                 |
   | Description     | The public mainnet for {process.env.PRODUCT_NAME}.                                 |
   | RPC Endpoint    | {process.env.RPC_ENDPOINT_MAINNET}         |
   | Chain ID        | {process.env.CHAIN_ID_MAINNET}                                                         |
   | Currency Symbol | {process.env.CURRENCY_SYMBOL_MAINNET}                                                          |
   | Block Explorer  | <BlockExplorerLinkMainnet/> |

6. Tap the Save button to save {process.env.PRODUCT_NAME} as a network.

You should now be able to connect to the {process.env.PRODUCT_NAME} by selecting it from the network selection dropdown menu.

---

## Testnet

#### MetaMask

To add {process.env.PRODUCT_NAME} Sepolia as a custom network to MetaMask:

1. Open the MetaMask browser extension.
2. Open the network selection dropdown menu by clicking the dropdown button at the top of the extension.
3. Click the **Add network** button.
4. Click **Add a network manually**.
5. In the **Add a network manually** dialog that appears, enter the following information for the {process.env.PRODUCT_NAME} Sepolia testnet:

   | Name            | Sepolia                                                                |
   | :-------------- | :--------------------------------------------------------------------- |
   | Network Name    | {process.env.PRODUCT_NAME} Sepolia                                                           |
   | RPC Endpoint    | {process.env.RPC_ENDPOINT_TESTNET}                   |
   | Chain ID        | {process.env.CHAIN_ID_TESTNET}                                                                  |
   | Currency Symbol | {process.env.CURRENCY_SYMBOL_TESTNET}                                                                    |
   | Block Explorer  | <BlockExplorerLinkTestnet/> |

6. Tap the Save button to save {process.env.PRODUCT_NAME} Sepolia as a network.

You should now be able to connect to the {process.env.PRODUCT_NAME} testnet by selecting it from the network selection dropdown menu.

---


