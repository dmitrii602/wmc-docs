---
title: WMTx Contracts
sidebar_position: 2
slug: /building-with-wmtx/wmtx-contracts
description: A comprehensive list of L2 contract addresses for WMTx Mainnet and WMTx Testnet, including links to their respective blockchain explorers.
---

# Contract Addresses

## L2 Contract Addresses

### WMTx Mainnet

| Name                          | Address                                   |
| :---------------------------- | :---------------------------------------- |
| WETH9                         | {process.env.WETH9_WMTX_MAINNET}          |
| L2CrossDomainMessenger        | {process.env.L2CROSSDOMAINMESSENGER_WMTX_MAINNET} |
| L2StandardBridge              | {process.env.L2STANDARDBRIDGE_WMTX_MAINNET} |
| SequencerFeeVault             | {process.env.SEQUENCERFEEVAULT_WMTX_MAINNET} |
| OptimismMintableERC20Factory  | {process.env.OPTIMISMERC20FACTORY_WMTX_MAINNET} |
| GasPriceOracle                | {process.env.GASPRICEORACLE_WMTX_MAINNET} |
| L1Block                       | {process.env.L1BLOCK_WMTX_MAINNET}        |
| L2ToL1MessagePasser           | {process.env.L2TOL1MESSAGEPASSER_WMTX_MAINNET} |
| L2ERC721Bridge                | {process.env.L2ERC721BRIDGE_WMTX_MAINNET} |
| OptimismMintableERC721Factory | {process.env.OPTIMISMERC721FACTORY_WMTX_MAINNET} |
| ProxyAdmin                    | {process.env.PROXYADMIN_WMTX_MAINNET}     |
| WMTxFeeVault                  | {process.env.WMTXFEEVAULT_WMTX_MAINNET}   |
| L1FeeVault                    | {process.env.L1FEEVAULT_WMTX_MAINNET}     |
| EAS                           | {process.env.EAS_WMTX_MAINNET}            |
| EASSchemaRegistry             | {process.env.EASSCHEMAREGISTRY_WMTX_MAINNET} |
| LegacyERC20ETH                | {process.env.LEGACYERC20ETH_WMTX_MAINNET} |


### WMTx Testnet (Sepolia)

| Name                          | Address                                   |
| :---------------------------- | :---------------------------------------- |
| WETH9                         | {process.env.WETH9_WMTX_TESTNET}          |
| L2CrossDomainMessenger        | {process.env.L2CROSSDOMAINMESSENGER_WMTX_TESTNET} |
| L2StandardBridge              | {process.env.L2STANDARDBRIDGE_WMTX_TESTNET} |
| SequencerFeeVault             | {process.env.SEQUENCERFEEVAULT_WMTX_TESTNET} |
| OptimismMintableERC20Factory  | {process.env.OPTIMISMERC20FACTORY_WMTX_TESTNET} |
| GasPriceOracle                | {process.env.GASPRICEORACLE_WMTX_TESTNET} |
| L1Block                       | {process.env.L1BLOCK_WMTX_TESTNET}        |
| L2ToL1MessagePasser           | {process.env.L2TOL1MESSAGEPASSER_WMTX_TESTNET} |
| L2ERC721Bridge                | {process.env.L2ERC721BRIDGE_WMTX_TESTNET} |
| OptimismMintableERC721Factory | {process.env.OPTIMISMERC721FACTORY_WMTX_TESTNET} |
| ProxyAdmin                    | {process.env.PROXYADMIN_WMTX_TESTNET}     |
| WMTxFeeVault                  | {process.env.WMTXFEEVAULT_WMTX_TESTNET}   |
| L1FeeVault                    | {process.env.L1FEEVAULT_WMTX_TESTNET}     |
| EAS                           | {process.env.EAS_WMTX_TESTNET}            |
| EASSchemaRegistry             | {process.env.EASSCHEMAREGISTRY_WMTX_TESTNET} |
| LegacyERC20ETH                | {process.env.LEGACYERC20ETH_WMTX_TESTNET} |

\*_L2 contract addresses are the same on both mainnet and testnet._

## L1 Contract Addresses

### Ethereum Mainnet

| Name                         | Address                                   |
| :--------------------------- | :---------------------------------------- |
| AddressManager               | {process.env.ADDRESSMANAGER_ETH_MAINNET}  |
| L1CrossDomainMessenger       | {process.env.L1CROSSDOMAINMESSENGER_ETH_MAINNET} |
| L1ERC721Bridge               | {process.env.L1ERC721BRIDGE_ETH_MAINNET}  |
| L1StandardBridge             | {process.env.L1STANDARDBRIDGE_ETH_MAINNET} |
| L2OutputOracle               | {process.env.L2OUTPUTORACLE_ETH_MAINNET}  |
| OptimismMintableERC20Factory | {process.env.OPTIMISMERC20FACTORY_ETH_MAINNET} |
| OptimismPortal               | {process.env.OPTIMISMPORTAL_ETH_MAINNET}  |
| ProxyAdmin                   | {process.env.PROXYADMIN_ETH_MAINNET}      |
| SystemConfig                 | {process.env.SYSTEMCONFIG_ETH_MAINNET}    |
| SystemDictator               | {process.env.SYSTEMDICTATOR_ETH_MAINNET}  |

**Unneeded contract addresses**

Certain contracts are mandatory according to the [OP Stack SDK](https://stack.optimism.io/docs/build/sdk/#unneeded-contract-addresses), despite not being utilized. For such contracts, you can simply assign the zero address:

- `StateCommitmentChain`
- `CanonicalTransactionChain`
- `BondManager`

### Ethereum Testnet (Sepolia)

| Name                         | Address                                   |
| :--------------------------- | :---------------------------------------- |
| AddressManager               | {process.env.ADDRESSMANAGER_ETH_TESTNET}  |
| AnchorStateRegistryProxy     | {process.env.ANCHORSTATEREGISTRYPROXY_ETH_TESTNET} |
| DelayedWETHProxy             | {process.env.DELAYEDWETHPROXY_ETH_TESTNET} |
| DisputeGameFactoryProxy      | {process.env.DISPUTEGAMEFACTORYPROXY_ETH_TESTNET} |
| FaultDisputeGame             | {process.env.FAULTDISPUTEGAME_ETH_TESTNET} |
| L1CrossDomainMessenger       | {process.env.L1CROSSDOMAINMESSENGER_ETH_TESTNET} |
| L1ERC721Bridge               | {process.env.L1ERC721BRIDGE_ETH_TESTNET}  |
| L1StandardBridge             | {process.env.L1STANDARDBRIDGE_ETH_TESTNET} |
| L2OutputOracle               | {process.env.L2OUTPUTORACLE_ETH_TESTNET}  |
| MIPS                         | {process.env.MIPS_ETH_TESTNET}            |
| OptimismMintableERC20Factory | {process.env.OPTIMISMERC20FACTORY_ETH_TESTNET} |
| OptimismPortal               | {process.env.OPTIMISMPORTAL_ETH_TESTNET}  |
| PermissionedDisputeGame      | {process.env.PERMISSIONEDDISPUTEGAME_ETH_TESTNET} |
| PreimageOracle               | {process.env.PREIMAGEORACLE_ETH_TESTNET}  |
| ProxyAdmin                   | {process.env.PROXYADMIN_ETH_TESTNET}      |
| SystemConfig                 | {process.env.SYSTEMCONFIG_ETH_TESTNET}    |

## WMTx Admin Addresses

### WMTx Mainnet

| Admin Role                       | Address                                   | Type of Key                               |
| :------------------------------- | :---------------------------------------- | :---------------------------------------- |
| Batch Sender                     | {process.env.BATCHSENDER_WMTX_MAINNET}    | EOA managed by World Mobile Token Technologies      |
| Batch Inbox                      | {process.env.BATCHINBOX_WMTX_MAINNET}     | EOA (with no known private key)           |
| Output Proposer                  | {process.env.OUTPUTPROPOSER_WMTX_MAINNET} | EOA managed by World Mobile Token Technologies      |
| Proxy Admin Owner (L1)           | {process.env.PROXYADMINOWNER_L1_WMTX_MAINNET} | 2-of-2 Nested Gnosis Safe (signers below) |
| L1 Nested Safe Signer (World Mobile Token) | {process.env.L1NESTEDSAFE_WMTX_MAINNET} | Gnosis Safe                               |
| L1 Nested Safe Signer (Optimism) | {process.env.L1NESTEDSAFE_OPTIMISM_WMTX_MAINNET} | Gnosis Safe                               |
| Proxy Admin Owner (L2)           | {process.env.PROXYADMINOWNER_L2_WMTX_MAINNET} | 2-of-2 Nested Gnosis Safe (signers below) |
| L2 Nested Safe Signer (World Mobile Token) | {process.env.L2NESTEDSAFE_WMTX_MAINNET} | Gnosis Safe                               |
| L2 Nested Safe Signer (Optimism) | {process.env.L2NESTEDSAFE_OPTIMISM_WMTX_MAINNET} | Gnosis Safe                               |
| Challenger                       | {process.env.CHALLENGER_WMTX_MAINNET}     | 1-of-2 Smart contract                     |
| System config owner              | {process.env.SYSTEMCONFIGOWNER_WMTX_MAINNET} | Gnosis Safe                               |
| Guardian                         | {process.env.GUARDIAN_WMTX_MAINNET}       | Gnosis Safe                               |

### WMTx Testnet (Sepolia)

| Admin Role             | Address                                   | Type of Key                          |
| :--------------------- | :---------------------------------------- | :----------------------------------- |
| Batch Sender           | {process.env.BATCHSENDER_WMTX_TESTNET}    | EOA managed by World Mobile Token Technologies |
| Batch Inbox            | {process.env.BATCHINBOX_WMTX_TESTNET}     | EOA (with no known private key)      |
| Output Proposer        | {process.env.OUTPUTPROPOSER_WMTX_TESTNET} | EOA managed by World Mobile Token Technologies |
| Proxy Admin Owner (L1) | {process.env.PROXYADMINOWNER_L1_WMTX_TESTNET} | Gnosis Safe                          |
| Proxy Admin Owner (L2) | {process.env.PROXYADMINOWNER_L2_WMTX_TESTNET} | Gnosis Safe                          |
| Challenger             | {process.env.CHALLENGER_WMTX_TESTNET}     | EOA managed by World Mobile Token Technologies |
| System config owner    | {process.env.SYSTEMCONFIGOWNER_WMTX_TESTNET} | Gnosis Safe                          |
| Guardian               | {process.env.GUARDIAN_WMTX_TESTNET}       | EOA managed by World Mobile Token Technologies |
