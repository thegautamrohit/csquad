"use client";

import React, { createContext, useState, useEffect } from "react";
import CSquad from "../truffle_abis/CSquad.json";
import Web3 from "web3";

export const AppContext = createContext();

const { ethereum } = typeof window !== "undefined" ? window : {};

const AppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [error, setError] = useState("");
  const [CSquadData, setCSquadData] = useState(null);
  const [balance, setBalance] = useState();

  const checkEthereumExists = async () => {
    // if (!ethereum) {
    //   setError("Please Install MetaMask.");
    //   return false;
    // }
    // return true;

    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      return false;
    }
  };

  const loadBlockchainData = async () => {
    setError("");
    if (checkEthereumExists()) {
      try {
        const web3 = window.web3;
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setAccount(accounts[0]);
        const networkId = await web3.eth.net.getId();
        console.log(networkId);

        //Load CSquad token data
        const tokenData = CSquad.networks[networkId];
        if (tokenData) {
          const CST = new web3.eth.Contract(CSquad.abi, tokenData.address);
          setCSquadData(CST);
          const tokenBalance = await CST.methods.balanceOf(accounts[0]).call();
          setBalance(tokenBalance);
          console.log(tokenBalance);
          console.log(CST);
        } else {
          window.alert("Error! Contract not deployed - no network detected.");
        }
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <AppContext.Provider
      value={{ account, loadBlockchainData, error, CSquadData }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
