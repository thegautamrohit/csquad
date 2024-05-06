"use client";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import Interaction from "@/components/Interaction";
import Marquee from "@/components/common/Marquee/Marquee";
import Header from "@/components/common/Header";

export default function Home() {
  const { account, loadBlockchainData, error }: any = useContext(AppContext);

  return (
    <main className="">
      <Header account={account} />
      <div className="">
        <div className="">
          {account && <Interaction />}
          <Marquee />
        </div>
      </div>
    </main>
  );
}
