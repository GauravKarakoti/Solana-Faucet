import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import SignMessage from "./SignMessage";

// components in react are very similar to creating your own HTML tags
// The useWallet hook provides the wallet variable inside the Airdrop Component
// because I wrapped the Airdrop Component inside the WalletProvider
export default function Airdrop() {
    // hooks in react
    const wallet = useWallet();
    const { connection } = useConnection();
    // defining the function inside the component body
    async function sendAirdropToUser() {
        const publicKey = wallet.publicKey
        if (!publicKey) {
            alert("Please connect your wallet first!");
            return;
        }
        const amount = document.getElementById("publicKey").value;
        await connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
        alert("Airdropped SOL");
    }
    return (
        <div className="airdrop-container">
            <h2>Request Airdrop</h2>
            <p>Enter the amount of SOL you want to receive on Devnet.</p>
            <div className="input-group">
                <input 
                    id="publicKey" 
                    type="text" 
                    placeholder="Amount (e.g., 1)" 
                    className="amount-input"
                />
                <button onClick={sendAirdropToUser} className="action-button">
                    Send Airdrop
                </button>
            </div>
            <SignMessage />
        </div>
    )
}