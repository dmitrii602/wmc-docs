---
title: Network Fees
sidebar_position: 3
slug: /building-with-wmtx/fees
description: Overview of Network Fees on WMC. This page explains the two-part fee structure, detailing the L3 execution fees and L1 security fees, while providing insights into how these fees fluctuate and offering strategies to minimize costs by optimizing transaction timing.
---

# Network Fees

## How are network fees calculated on WMC?

Each {process.env.BLOCKCHAIN_NETWORK} transaction between L3 and L1 involves two key costs: the L3 (execution) fee and the L1 (security) fee.
The L3 fee covers transaction execution on the L3, while the L1 fee accounts for the cost of publishing the transaction to the L1 for security purposes. In most cases, the L1 security fee will be higher than the L3 execution fee.

The L1 fee can vary based on transaction volume on the L1 network. For flexibility, users can reduce costs by submitting transactions during periods of lower gas prices, such as weekends. Similarly, the L3 fee may fluctuate based on the number of transactions on the L3 network, with adjustments similar to the L1.

## Why Layer-3 networks?

Layer-3 networks (L3s) like {process.env.BLOCKCHAIN_NETWORK} offer several advantages over Layer-2 (L2) networks. They reduce transaction costs from cents to fractions of a cent and can bundle thousands of L3 transactions into one L2 transaction, vastly improving throughput without congesting the network. This vertical scaling makes L3s ideal for applications requiring high transaction volume and low fees, such as microtransactions or onchain gaming.

L3 networks also provide greater customization, allowing developers to fine-tune their blockchain for specific use cases. While L2s focus on general scalability, L3s can optimize for specific applications, keeping more data onchain to reinforce user trust and security.

## Transaction throughput and fees on L3s

By adding layers, the compounding effect results in exponential improvements. Ethereum, for example, processes about 15 transactions per second, but by using L3, this throughput could expand to 150,000 transactions per second without significantly raising costs.
