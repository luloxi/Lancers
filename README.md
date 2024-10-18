dApp to hire freelancers who are registered in Talent Protocol 🌊

# 🌊 Features

- ✅ **Escrow system with milestones**: Contractor locks funds and when a freelancer completes a task, the contractor releases the funds for that task.
- 💰 **Multiple payment methods**: Pay with native gas (ETH) or with USDC.
- 📈 **Revenue dashboard**: Track and analyze your revenue and spending
- 🤹‍♂️ **Work offers media**: Work offers can have text, image, audio, video and links

## 👥 Social features

- 💌 **Messaging**: Private messaging to communicate between freelancer and contractor
- 🔔 **Notifications**: Receive alerts on activity
- 🎨 **Profile customization**: Users can customize their profile

## 👨‍🦽 Ease of use

- 📱 **Web 2.5 login**: Social login options with Web2 platforms (Google, Twitter, etc.)
- 🎧 **Accessibility support**: ARIA compliant for screen readers and other assistive technologies

# 🌊 Roadmap

## 🐣 Phase 1 (MVP)

- ✅ **LancersWorkOffer contract:** To register work offers info
- ✅ **Lancers contract:** To manage contracts and payments between users
- ✅ **Work offer creation tool**
- ✅ **User profile page**
- ✅ Enable options for sharing on other platforms
- ✅ Enable bookmarking work offers
- ✅ **Search**: By address, ENS, basename or Talent Protocol name
- ✅ **Integrate OnchainKit** (Reference: [OnchainKit](https://onchainkit.xyz/)
- **Escrow system**: Escrow funds and release it as milestones are completed in the job
- **Individual work offer viewer**

## 📈 Phase 2 (Indexing)

- **Integrate The Graph to index activity** and save RPC calls (Reference: [Bootstrap a Full Stack Modern dapp using the Scaffold-ETH CLI and Subgraph Extension](https://siddhantk08.hashnode.dev/bootstrap-a-full-stack-modern-dapp-using-the-scaffold-eth-cli-and-subgraph-extension) | [The Graph tool for creating a subgraph](https://thegraph.com/docs/en/developing/creating-a-subgraph/))
- **Search by work offer name**
- **Categories**: Categorize work offers, filter by category and search by categories)
- **Notification system**: Receive alerts on activity
- **Dashboard Insights**: Track and analyze revenue

## 💬 Phase 3 (Interactions enhancement)

- **Stablecoin payment methods:** Pay with native gas or with `$USDC`. (Reference: [Easy2Pay](https://github.com/luloxi/Easy2Pay))
- Enable audio, video and links on work offers
- Enable following users
- Enable commenting on past gigs (and rating with stars)
- **Customization**: Allow users to customize their profile appearance

## 💌 Phase 4 (Communication)

- **Direct messages:** Allow users to send private messages to each other

## ✍️ Phase 5 (Gasless activity)

- **Signatures:** Interact with the platform without paying gas fees
- **Database:** To store and retrieve EIP 712 signatures (Reference: [SE-2 firebase-auth-extension](https://github.com/ByteAtATime/firebase-auth-extension))

## 👨‍🦽 Phase 6 (Ease of use)

- **Web 2.5 social login:** Sign up and log in with Google, Twitter, Instagram, etc
- **Account abstraction**: Interact with the platform without having to sign every interaction.
- **Accesibility support**: For the hearing and visually impaired, the app should be ARIA compliant to support screen readers and other assistive technologies (Reference: [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA))
- **Multi-language support**: Switch between languages
- **Educational Content**: Include step-by-step guides and tutorials

# 🌊 Development

## 📅 Current tasks

Currently this project is being built in public.

📥 To see current development tasks, [see here](https://trello.com/b/r6iJyZtR/basedshop)

## 🛠️ Technical details

⚙️ Built using Foundry, NextJS, RainbowKit, Wagmi, Viem, and Typescript,

🔗 To be deployed on Base and/or other EVM compatible chains

## 📚 Prerequisites

- [Node (>= v18.17)](https://nodejs.org/en/download/package-manager)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/#windows-stable) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)
- [Foundry](https://book.getfoundry.sh/getting-started/installation)

## 👨‍🏫 Instructions

To get started follow the steps below:

1. Open a terminal and run this commands to clone this repo and install dependencies:

```
git clone https://github.com/luloxi/BasedShop.git
cd BasedShop
yarn install
```

2. After everything is installed, run this command to start a local blockchain network:

```
yarn chain
```

This command starts a local Ethereum network using Foundry. The network runs on your local machine and can be used for testing and development.

3. Duplicate and rename `packages/foundry/.env.example` to `packages/foundry/.env` (you don't need to fill it out until deploying to a live network)

4. Open a second terminal, navigate to `BasedShop` and run this command to deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/foundry/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/foundry/script/Deploy.s.sol` to deploy the contract to the network. You can also customize the deploy script.

5. Go to `packages/nextjs/scaffold.config.ts` and comment out `targetNetworks: [chains.sepolia]` and uncomment `targetNetworks: [chains.foundry]`

6. Rename the `.env.example` to `.env` in the `packages/nextjs` folder.

- [Log in or Create an account on Pinata](https://app.pinata.cloud/signin), then create a new project, and copy the **API Key** and the **Secret API Key** into the `.env` file's `NEXT_PUBLIC_PINATA_API_KEY` and `NEXT_PUBLIC_PINATA_SECRET_API_KEY` variables and save the file.
- Get your [OnchainKit API Key here](https://portal.cdp.coinbase.com/products/onchainkit) and your [OnchainKit Project ID here](https://portal.cdp.coinbase.com/projects/), then copy them into the `.env` file's `NEXT_PUBLIC_ONCHAINKIT_API_KEY` and `NEXT_PUBLIC_CDP_PROJECT_ID` variables and save the file.

7. Open a third terminal, navigate to `BasedShop` and run this command to start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page.
