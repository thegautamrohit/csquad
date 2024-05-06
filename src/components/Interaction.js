import React, { useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Web3 from "web3";

function Interaction() {
  const { account, loadBlockchainData, error, CSquadData } =
    useContext(AppContext);

  const web3 = new Web3("https://rpc.sepolia.org");

  const [receiver, setReceiver] = useState(null);

  async function transferTokens() {
    try {
      await CSquadData.methods.transfer(receiver, 9999).send({ from: account });
      console.log("Tokens transferred successfully!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />

      <button onClick={transferTokens}>Transfer</button>
    </div>
  );
}

export default Interaction;
