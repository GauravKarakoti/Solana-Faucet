import { useConnection, useWallet } from "@solana/wallet-adapter-react"

// components in react are very similar to creating your own HTML tags
// The useWallet hook provides the wallet variable inside the Airdrop Component
// because I wrapped the Airdrop Component inside the WalletProvider
export default function Airdrop() {
    // hooks in react
    const wallet = useWallet();
    const { connection } = useConnection();
    // defining the function inside the component body
    async function sendAirdropToUser() {
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
        alert("Airdropped SOL");
    }
    return <div>
        <input id="publicKey" type="text" placeholder="Amount"></input>
        <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}