require("dotenv").config();
const { API_URL , CONTRACT_ADDRESS, PRIVATE_KEY, PUBLIC_KEY, META_DATA} = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/NonFungibleToken.sol/NonFungibleToken.json");
const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);

async function safeMint(tokenURI){

    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); // nonce starts counting from 0

    const tx = {
        'from': PUBLIC_KEY,
        'to':CONTRACT_ADDRESS,
        'nonce': nonce,
        'gas': 500000,
        'maxPriorityFeePerGas': 1000000108,
        'data': nftContract.methods.safeMint(PUBLIC_KEY,tokenURI).encodeABI(),
    };



    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });

}

safeMint(META_DATA);
