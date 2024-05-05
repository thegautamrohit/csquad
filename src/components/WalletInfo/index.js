"use client";
import React, { useEffect, useState } from "react";
import { Web3 } from "web3";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const WalletInfo = () => {
  const { account, error } = useContext(AppContext);

  const [balance, setBalance] = useState("");

  // set a provider
  const web3 = new Web3("https://rpc.sepolia.org");

  const loadWalletInfo = async () => {
    try {
      console.log(account);
      const weiBalance = await web3.eth.getBalance(account);
      const etherBalance = web3.utils.fromWei(weiBalance, "ether");
      console.log(etherBalance);
      setBalance(etherBalance);
    } catch (error) {
      console.error("Error fetching wallet info:", error);
    }
  };

  useEffect(() => {
    if (account) {
      loadWalletInfo();
    }
  }, [account]);

  return (
    <div>
      <p>Wallet Address: {account}</p>
      <p>Ether Balance: {balance} ETH</p>
    </div>
  );
};

export default WalletInfo;
