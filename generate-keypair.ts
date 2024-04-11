const { getKeypairFromEnvironment } = require("@solana-developers/helpers");

require("dotenv").config()
const secretKey = process.env.SECRET_KEY;

const keypair = getKeypairFromEnvironment(secretKey);

console.log(keypair)

console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);
