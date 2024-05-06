"use client";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Wallet from "@/components/WalletInfo";

export default function Home() {
  const { account, loadBlockchainData, error }: any = useContext(AppContext);
  return (
    <main className="">
      <h1>MAIN PAGE</h1>
      <div className="container">
        <div className="box">
          <h2>
            MetaMask <span className="block">Connect.</span>
          </h2>

          {account ? (
            <div className="account-box">
              <p className="shadow-border">{account}</p>
            </div>
          ) : (
            <button className="btn shadow-border" onClick={loadBlockchainData}>
              Connect
            </button>
          )}
          {error && (
            <p className={`error shadow-border`}>{`Error: ${error}`}</p>
          )}

          {/* {account && <Wallet />} */}
        </div>
      </div>
    </main>
  );
}
