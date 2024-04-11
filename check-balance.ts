import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function checkBalance(suppliedPublicKey) {
  if (!suppliedPublicKey) {
    throw new Error("Please provide a public key as the first argument!");
  }

  try {
    const connection = new Connection(
      "https://api.devnet.solana.com",
      "confirmed"
    );
    const publicKey = new PublicKey(suppliedPublicKey);
    const balanceInLamports = await connection.getBalance(publicKey);
    const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

    console.log(
      `✅ Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`
    );
  } catch (error) {
    console.error("Error fetching balance:", error.message);
  }
}

const suppliedPublicKey = process.argv[2];

checkBalance(suppliedPublicKey);
