---
title: Network Information
sidebar_position: 1
slug: /building-with-wmtx/network-information
description: Documentation about WMC Mainnet and WMC Testnet. This page covers network information for the WMC network, including network names, descriptions, RPC endpoints, chain IDs, currency symbols, and block explorers.
---

import Link from '/src/components/Links/Link';

# Network Information

---

#### {process.env.PRODUCT_NAME} Mainnet

| Name            | Value                                                                                                   |
| :-------------- | :------------------------------------------------------------------------------------------------------ |
| Network Name    | {process.env.PRODUCT_NAME} Mainnet                                                                                            |
| Description     | The public mainnet for {process.env.PRODUCT_NAME}.                                                                            |
| RPC Endpoint    | {process.env.RPC_ENDPOINT_MAINNET} <br/>_Rate limited and not for production systems._ |
| Chain ID        | {process.env.CHAIN_ID_MAINNET}                                                                                                    |
| Currency Symbol | {process.env.CURRENCY_SYMBOL_MAINNET}                                                                                                     |
| Block Explorer  | <Link url={process.env.BLOCK_EXPLORER_MAINNET} showUrl={true} />  |

---

#### {process.env.PRODUCT_NAME} Testnet (Sepolia)

| Name            | Value                                                                                                   |
| :-------------- | :------------------------------------------------------------------------------------------------------ |
| Network Name    | {process.env.PRODUCT_NAME} Sepolia                                                                                            |
| Description     | A public testnet for {process.env.PRODUCT_NAME}.                                                                              |
| RPC Endpoint    | {process.env.RPC_ENDPOINT_TESTNET} <br/>_Rate limited and not for production systems._ |
| Chain ID        | {process.env.CHAIN_ID_TESTNET}                                                                                                   |
| Currency Symbol | {process.env.CURRENCY_SYMBOL_TESTNET}                                                                                                     |
| Block Explorer  | <Link url={process.env.BLOCK_EXPLORER_TESTNET} showUrl={true} />                                   |

---

:::info
L1 & L2 protocol and network-related smart contract deployments can be found on the [{process.env.PRODUCT_NAME} Contracts](/building-with-wmtx/wmtx-contracts) page.
:::

:::info
For production systems, we recommend using a node from one of our [node partners](/tools/node-providers), or running your own {process.env.PRODUCT_NAME} node.
:::

---

