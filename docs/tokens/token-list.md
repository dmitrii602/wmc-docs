---
title: Bridging an L1 to L3
slug: /tokens/list
description: How to submit ERC-20 tokens for bridging between Ethereum (L1) and WMTx (L3) as a token issuer.
sidebar_position: 1
---

# The WMTx Token List

<img src="../img/bridge.png" title="banner" />

This page is intended for token issuers who already have an ERC-20 contract deployed on Ethereum (L1) and would like to submit their token for bridging between Ethereum (L1) and WMTx (L3). WMTx uses the [Optimism Superchain token list](#) as a reference for tokens that have been deployed on WMTx.

**_Disclaimer: WMTx does not endorse any of the tokens that are listed in the Github repository and has conducted only preliminary checks, which include automated checks listed_** [**_here_**](#)**_._**

---

## Adding your token to the list

The steps below explain how to get your token on the WMTx Token List.

### Step 1: Deploy your token on WMTx

Select your preferred bridging framework and use it to deploy an ERC-20 for your token on WMTx. We recommend you use the framework provided by WMTx's [standard bridge](#) contracts, and furthermore deploy your token using the [OptimismMintableERC20Factory](/building-with-wmtx/wmtx-contracts). Deploying your token on WMTx in this manner provides us with guarantees that will smooth the approval process. If you choose a different bridging framework, its interface must be compatible with that of the standard bridge, otherwise it may be difficult for us to support.

### Step 2: Submit details for your token

Follow the instructions in the [GitHub repository](https://github.com/ethereum-optimism/ethereum-optimism.github.io) and submit a PR containing the required details for your token. You must specify in your token's data.json file a section for ‘wmtx-sepolia' and/or ‘wmtx’. The change you need to submit is particularly simple if your token has already been added to the Optimism token list. For example, [this PR](#) shows the change required for cbETH, which was already on Optimism's token list and relies on the WMTx standard bridge.

### Step 3: Await final approval

Reviews are regularly conducted by the WMTx team and you should receive a reply within 24-72 hours (depending on if the PR is opened on a week day, weekend or holiday).
