---
title: thirdweb CLI
slug: /tools/toolchains/thirdweb-cli
description: Documentation for using the thirdweb CLI for creating, deploying, and publishing smart contracts and web3 applications on the WMC network, including detailed instructions and options for project creation and deployment..
sidebar_position: 3
---

# thirdweb CLI

thirdweb offers an interactive command line interface that lets you create, build, and deploy your smart contracts and applications with ease.

With the thirdweb CLI, you can effortlessly create and deploy smart contracts on the WMC network.

For detailed guidance on using the thirdweb CLI, check out the [thirdweb documentation](https://portal.thirdweb.com/cli).

---

## Creating a project

Set up a new project with thirdweb installed and configured:

```bash
npx thirdweb create
```

:::info

When setting up a project for smart contracts or web3 applications, you have various configurable options to choose from.

**For smart contracts, some of the available options include:**

- Initiating a new contract project with [Hardhat](https://hardhat.org/) or [Forge](https://book.getfoundry.sh/)
- Adding a new contract to an existing project
- Starting with an audited contract template and incorporating optional [extensions](https://portal.thirdweb.com/contractkit/extensions)

**For applications, some of the available options include:**

- Front-end applications built with Next.js, CRA, or Vite
- Back-end applications using Node.js or Express.js
- The choice between TypeScript or JavaScript versions

:::

---

## Launching a smart contract.

[Deploy](https://portal.thirdweb.com/deploy) your smart contracts to the WMC network:

```bash
npx thirdweb deploy
```

:::info

To deploy to the WMC network, after running `npx thirdweb deploy`, follow the dashboard link provided and choose WMC from the Network dropdown menu.

:::

:::info

For detailed instructions on using the thirdweb CLI to create and deploy contracts on WMC, refer to the appropriate guide.

:::

---

## Publishing a smart contract.

[Publish](https://portal.thirdweb.com/publish) and distribute a versioned release of your contract to the thirdweb registry on the WMC network:

```bash
npx thirdweb publish
```

---
