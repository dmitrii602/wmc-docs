---
title: WMC Contracts
sidebar_position: 2
slug: /building-with-wmtx/wmtx-contracts
description: A comprehensive list of L2 contract addresses for WMC Mainnet and WMC Testnet, including links to their respective blockchain explorers.
---

# Contract Addresses

## L2 Contract Addresses

### WMC Mainnet

| Name                          | Address                                   |
| :---------------------------- | :---------------------------------------- |
| WETH9                         | {process.env.WETH9_WMC_MAINNET}          |
| L2CrossDomainMessenger        | {process.env.L2CROSSDOMAINMESSENGER_WMC_MAINNET} |
| L2StandardBridge              | {process.env.L2STANDARDBRIDGE_WMC_MAINNET} |
| SequencerFeeVault             | {process.env.SEQUENCERFEEVAULT_WMC_MAINNET} |
| OptimismMintableERC20Factory  | {process.env.OPTIMISMERC20FACTORY_WMC_MAINNET} |
| GasPriceOracle                | {process.env.GASPRICEORACLE_WMC_MAINNET} |
| L1Block                       | {process.env.L1BLOCK_WMC_MAINNET}        |
| L2ToL1MessagePasser           | {process.env.L2TOL1MESSAGEPASSER_WMC_MAINNET} |
| L2ERC721Bridge                | {process.env.L2ERC721BRIDGE_WMC_MAINNET} |
| OptimismMintableERC721Factory | {process.env.OPTIMISMERC721FACTORY_WMC_MAINNET} |
| ProxyAdmin                    | {process.env.PROXYADMIN_WMC_MAINNET}     |
| WMCFeeVault                  | {process.env.WMTCFEEVAULT_WMTC_MAINNET}   |
| L1FeeVault                    | {process.env.L1FEEVAULT_WMC_MAINNET}     |
| EAS                           | {process.env.EAS_WMC_MAINNET}            |
| EASSchemaRegistry             | {process.env.EASSCHEMAREGISTRY_WMC_MAINNET} |
| LegacyERC20ETH                | {process.env.LEGACYERC20ETH_WMC_MAINNET} |


### WMC Testnet (Sepolia)

| Name                          | Address                                   |
| :---------------------------- | :---------------------------------------- |
| WETH9                         | {process.env.WETH9_WMC_TESTNET}          |
| L2CrossDomainMessenger        | {process.env.L2CROSSDOMAINMESSENGER_WMC_TESTNET} |
| L2StandardBridge              | {process.env.L2STANDARDBRIDGE_WMC_TESTNET} |
| SequencerFeeVault             | {process.env.SEQUENCERFEEVAULT_WMC_TESTNET} |
| OptimismMintableERC20Factory  | {process.env.OPTIMISMERC20FACTORY_WMC_TESTNET} |
| GasPriceOracle                | {process.env.GASPRICEORACLE_WMC_TESTNET} |
| L1Block                       | {process.env.L1BLOCK_WMC_TESTNET}        |
| L2ToL1MessagePasser           | {process.env.L2TOL1MESSAGEPASSER_WMC_TESTNET} |
| L2ERC721Bridge                | {process.env.L2ERC721BRIDGE_WMC_TESTNET} |
| OptimismMintableERC721Factory | {process.env.OPTIMISMERC721FACTORY_WMC_TESTNET} |
| ProxyAdmin                    | {process.env.PROXYADMIN_WMC_TESTNET}     |
| WMCFeeVault                  | {process.env.WMCFEEVAULT_WMC_TESTNET}   |
| L1FeeVault                    | {process.env.L1FEEVAULT_WMC_TESTNET}     |
| EAS                           | {process.env.EAS_WMC_TESTNET}            |
| EASSchemaRegistry             | {process.env.EASSCHEMAREGISTRY_WMC_TESTNET} |
| LegacyERC20ETH                | {process.env.LEGACYERC20ETH_WMC_TESTNET} |

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
| PreimageOracle               | {process.env.PREIMAGEORACLE_ETH_TESTNET}  |
| ProxyAdmin                   | {process.env.PROXYADMIN_ETH_TESTNET}      |
| SystemConfig                 | {process.env.SYSTEMCONFIG_ETH_TESTNET}    |

## WMC Admin Addresses

### WMC Mainnet

| Admin Role                       | Address                                   | Type of Key                               |
| :------------------------------- | :---------------------------------------- | :---------------------------------------- |
| Batch Sender                     | {process.env.BATCHSENDER_WMC_MAINNET}    | EOA managed by World Mobile Chain Technologies      |
| Batch Inbox                      | {process.env.BATCHINBOX_WMC_MAINNET}     | EOA (with no known private key)           |
| Output Proposer                  | {process.env.OUTPUTPROPOSER_WMC_MAINNET} | EOA managed by World Mobile Chain Technologies      |
| Proxy Admin Owner (L1)           | {process.env.PROXYADMINOWNER_L1_WMC_MAINNET} | 2-of-2 Nested Gnosis Safe (signers below) |
| L1 Nested Safe Signer (World Mobile Chain) | {process.env.L1NESTEDSAFE_WMC_MAINNET} | Gnosis Safe                               |
| L1 Nested Safe Signer (Optimism) | {process.env.L1NESTEDSAFE_OPTIMISM_WMC_MAINNET} | Gnosis Safe                               |
| Proxy Admin Owner (L2)           | {process.env.PROXYADMINOWNER_L2_WMC_MAINNET} | 2-of-2 Nested Gnosis Safe (signers below) |
| L2 Nested Safe Signer (World Mobile Chain) | {process.env.L2NESTEDSAFE_WMC_MAINNET} | Gnosis Safe                               |
| L2 Nested Safe Signer (Optimism) | {process.env.L2NESTEDSAFE_OPTIMISM_WMC_MAINNET} | Gnosis Safe                               |
| Challenger                       | {process.env.CHALLENGER_WMC_MAINNET}     | 1-of-2 Smart contract                     |
| System config owner              | {process.env.SYSTEMCONFIGOWNER_WMC_MAINNET} | Gnosis Safe                               |
| Guardian                         | {process.env.GUARDIAN_WMC_MAINNET}       | Gnosis Safe                               |

### WMC Testnet (Sepolia)

| Admin Role             | Address                                   | Type of Key                          |
| :--------------------- | :---------------------------------------- | :----------------------------------- |
| Batch Sender           | {process.env.BATCHSENDER_WMC_TESTNET}    | EOA managed by World Mobile Chain Technologies |
| Batch Inbox            | {process.env.BATCHINBOX_WMC_TESTNET}     | EOA (with no known private key)      |
| Output Proposer        | {process.env.OUTPUTPROPOSER_WMC_TESTNET} | EOA managed by World Mobile Chain Technologies |
| Proxy Admin Owner (L1) | {process.env.PROXYADMINOWNER_L1_WMC_TESTNET} | Gnosis Safe                          |
| Proxy Admin Owner (L2) | {process.env.PROXYADMINOWNER_L2_WMC_TESTNET} | Gnosis Safe                          |
| Challenger             | {process.env.CHALLENGER_WMC_TESTNET}     | EOA managed by World Mobile Chain Technologies |
| System config owner    | {process.env.SYSTEMCONFIGOWNER_WMC_TESTNET} | Gnosis Safe                          |
| Guardian               | {process.env.GUARDIAN_WMC_TESTNET}       | EOA managed by World Mobile Chain Technologies |
