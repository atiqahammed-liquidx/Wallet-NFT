const axios = require('axios');
require('dotenv').config()

const ALCHEMY_PROVIDER_URL = process.env.ALCHEMY_PROVIDER_URL; 
const WALLET_ADDRESS = process.env.WALLET_ADDRESS;

const USR_NFT_LIST_URL = `${ALCHEMY_PROVIDER_URL}/getNFTs/?owner=${WALLET_ADDRESS}`;

axios
  .get(USR_NFT_LIST_URL)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res.data);
  })
  .catch(error => {
    console.error(error);
  });