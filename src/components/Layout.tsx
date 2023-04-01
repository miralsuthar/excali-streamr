import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { useAccount } from "wagmi";

export const Layout = ({ children }: { children: ReactNode }) => {
  const { address } = useAccount();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      {address ? (
        children
      ) : (
        <p className="text-center my-auto text-3xl">
          Connect wallet to start using the app
        </p>
      )}
    </div>
  );
};
