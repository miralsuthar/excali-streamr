import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { createContext, useState } from "react";
import { useAccount } from "wagmi";
import { StreamrClient } from "streamr-client";
export const AccountContext = createContext({} as any);

export const Layout = ({ children }: { children: ReactNode }) => {
  const [privateKey, setPrivateKey] = useState("");
  const [address, setAddress] = useState("");
  const [streamrClient, setStreamrClient] = useState(null);
  const [setPrivateStreamr, privateStreamr] = useState<StreamrClient | null>(
    null
  );
  const { address: walletAddress } = useAccount();

  return (
    <AccountContext.Provider
      value={{
        privateKey,
        address,
        setPrivateKey,
        setPrivateStreamr,
        privateStreamr,
        setAddress,
        streamrClient,
        setStreamrClient,
      }}
    >
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        {walletAddress ? children : "Connect wallet to continue"}
      </div>
    </AccountContext.Provider>
  );
};
