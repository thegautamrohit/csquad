import React from "react";
import { IconWallet } from "@tabler/icons-react";

interface HeaderProps {
  account: string;
}

function Header({ account }: HeaderProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-sky-900 py-6 px-8">
      <div>
        <h1 className="text-white font-semibold text-xl">
          CSquad Token Manager
        </h1>
      </div>
      <div className="flex items-center justify-between text-white">
        <span>
          <IconWallet />
        </span>
        <p>: 0xe0c307E638b0D963182212ce43BBccF816fFFb19 {account}</p>
      </div>
    </nav>
  );
}

export default Header;
