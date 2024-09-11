---
title: Bridging an L1 to L3
slug: /tokens/list
description: How to bridge ERC-20 tokens between Ethereum (L1) and WMC (L3) networks, simplifying token transfers across layers.
sidebar_position: 1
---

import Link from '/src/components/Links/Link';

# Bridging an L1 to L3

<img src="../img/bridge.png" title="banner" />

## Deposit WMTx from Ethereum to WMC

### Instructions

1. After navigating to the <Link url={process.env.BRIDGE_TESTNET}>bridge app</Link>, press the “Connect Wallet” button. You might need to switch your wallet to the right network.

2. In the app, select the **Deposit** tab.

3. Enter the required amount of {process.env.TOKEN_NAME} to transfer to L3. Then click the "Approve" button to finalize the deposit. 

4. After the amount of {process.env.TOKEN_NAME} is approved, you can make a deposit no greater than the approved amount.

5. Once the transfer transaction is sent and confirmed, the token will be deducted from your wallet.

6. You can always check the transaction status by clicking the "**Activity**" button at the bottom of the screen.

---

## Withdraw WMTx from WMC to Ethereum

### Instructions

#### Submitting your Initial Withdrawal Transaction

1. First, select the "**Withdraw**" tab in the app. You may need to switch your wallet to the correct network.

2. Enter the allowable amount of {process.env.TOKEN_NAME}.

3. Then press the "**Withdraw**" button to initiate the withdrawal. Your wallet will prompt you to confirm the transaction.

### Withdrawing funds from WMC (L3) — it's a three-step process that includes 1 transaction on L3 and 2 transactions on L1, and takes around 7 days

1. **Initiating the withdrawal**. First, you need to initiate the withdrawal. This will require one transaction in the L3 network.

2. **Waiting ~1 hour**. After initiating the withdrawal, you need to wait approximately 1 hour for this step to complete.

3. **Confirmation on L1**. The next step is to confirm the transaction on the L1 network. This requires a separate transaction on L1.

4. **Waiting ~7 days**. Then you will need to wait approximately 7 days for the process to complete.

5. **Receiving funds on L1**. After completing all steps, you can finalize the withdrawal by pressing the "**Claim**" button on the L1 network.
