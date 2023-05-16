# On3_Opensource_alpha
This repository handles most of the Solana related actions in the backend, This is to provide educational value. Some features of On3 are private and not included to ensure security of the users opting the service. (Authentications, DBMS, Encryptions, Payments Etc)


This repository will be updated frequently as on when new modules of solana are added, Happy learning and building. If any questions please join our discord - https://discord.gg/4933EbdsRf, we are setting up exclusive channel for developers who want to build on solana and if interested be the part of VORLD. where we will be creating infra tools for game and app development and also provide most of them as open source modules for the devs to build on. 



# ON3 Node.js Project

This is a Node.js project that allows you to interact with the Solana blockchain using the Solana JavaScript SDK.

## Prerequisites

- Node.js installed on your machine. You can download it from the official Node.js website (https://nodejs.org).

## Getting Started

1. Clone this repository to your local machine or create a new directory for your project.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the project dependencies by running the following command:

npm install

## Usage

### 1. Selecting RPC Endpoints

In the `constants.js` file, you can define the available RPC endpoints for Solana. Modify the file to add or remove endpoints as needed.

### 2. Connecting to a Solana Network

In the `app.js` file, you can use the `selectEndpoint` function to choose an RPC endpoint based on an integer input. Update the `connectToEndpoint` function to include your specific Solana code.

To run the project and connect to a Solana network, execute the following command:


npm run dev


This will execute the `dev` script defined in the `package.json` file, which runs the `app.js` script.

Make sure to update the `app.js` file with your actual Solana code and modify the connection logic as needed.

## Additional Resources

- [Solana Documentation](https://docs.solana.com/)
- [Solana JavaScript SDK](https://github.com/solana-labs/solana-web3.js)

