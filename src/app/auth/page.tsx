import React from "react";
import Logo from "@/assets/logo.png";
import Image from "next/image";

function AuthPage() {
  return (
    <div className="flex items-center justify-center h-[70vh] ">
      <div className="flex items-center justify-center flex-col border border-gray-400 max-w-[90%] m-auto px-12 py-8 rounded-lg bg-[#f7f7f7] ">
        <div className="flex items-center justify-center mb-10">
          <Image alt="Logo" src={Logo} width={100} height={100} />
        </div>

        <h1 className="text-2xl font-semibold">CSquad Token Manager</h1>
        <p className="mt-2 text-lg">Welcome to our dApp</p>

        <button className="text-white bg-sky-900 px-4 py-2 rounded-md cursor-pointer m-4 w-full">
          Connect
        </button>
        <p className="text-sm">Connect with metamask wallet to interact</p>
      </div>
    </div>
  );
}

export default AuthPage;
