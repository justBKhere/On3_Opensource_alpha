const { Keypair } = require('@solana/web3.js');

function simpleGenerateWallet() {
    const wallet = Keypair.generate();
    const publicKey = wallet.publicKey.toBase58();
    const privateKey = wallet.secretKey.slice(0, 32).toString('hex');
    return { publicKey, privateKey };
}

module.exports = simpleGenerateWallet;
