// app.js
const RPC_ENDPOINTS = require('./Constants/solana_contants');
const web3 = require('@solana/web3.js');


/**This code defines a function that takes an endpointNumber as input.
 *It checks if the RPC_ENDPOINTS array has an element with the index endpointNumber. 
 If it does, it selects that element, logs the selection, and then passes it as an argument to the connectToEndpoint function.
  Otherwise, it logs an error message saying that the endpoint selection is invalid. */

function selectEndpoint(endpointNumber) {
    if (RPC_ENDPOINTS[endpointNumber]) {
        const selectedRPC = RPC_ENDPOINTS[endpointNumber];
        console.log(`Selected RPC Endpoint: ${selectedRPC}`);
        connectToEndpoint(selectedRPC);
    } else {
        console.log('Invalid endpoint selection.');
    }
}

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

// Example usage
selectEndpoint(2); // Selects the devnet endpoint
