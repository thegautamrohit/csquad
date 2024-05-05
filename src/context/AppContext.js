"use client";

import React, { createContext, useState } from "react";
export const AppContext = createContext();

const { ethereum } = typeof window !== "undefined" ? window : {};

const AppProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  const [error, setError] = useState("");

  const checkEthereumExists = () => {
    if (!ethereum) {
      setError("Please Install MetaMask.");
      return false;
    }
    return true;
  };

  const connectWallet = async () => {
    setError("");
    if (checkEthereumExists()) {
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setAccount(accounts[0]);
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <AppContext.Provider value={{ account, connectWallet, error }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
