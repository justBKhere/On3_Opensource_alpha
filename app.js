// app.js
const RPC_ENDPOINTS = require('./Constants/solana_contants');
const simpleGenerateWallet = require('./SolanaScripts/wallets');
const web3 = require('@solana/web3.js');


/**
 * Selects an endpoint based on the given endpoint number.
 *
 * @param {number} endpointNumber - The endpoint number to select.
 * @return {undefined} This function does not return a value.
 */

function selectEndpoint(endpointNumber) {
    if (RPC_ENDPOINTS[endpointNumber]) {
        const selectedRPC = RPC_ENDPOINTS[endpointNumber];
        console.log(`Selected RPC Endpoint: ${selectedRPC}`);
        connectToEndpoint(selectedRPC);
    } else {
        console.log('Invalid endpoint selection.');
    }
}


/**
 * Connects to a given Solana endpoint URL and logs the network version.
 *
 * @async
 * @param {string} endpointURL - The URL of the Solana endpoint to connect to.
 * @returns {Promise<void>} - Returns nothing.
 * @throws {Error} - If an error occurs while connecting to Solana.
 */

async function connectToEndpoint(endpointURL) {
    try {
        const connection = new web3.Connection(endpointURL, 'confirmed');

        // Get the network information
        const version = await connection.getVersion();
        console.log('Solana network version:', version['solana-core']);

        // Additional connection setup and Solana code can be written here

    } catch (error) {
        console.error('Error connecting to Solana:', error);
    }
}




// Call the simpleGenerateWallet function from createWallet.js
const wallet = simpleGenerateWallet();
console.log('Public Key:', wallet.publicKey);
console.log('Private Key:', wallet.privateKey);

// Continue with your Solana code
// ...

// Example usage
selectEndpoint(2); // Selects the devnet endpoint
