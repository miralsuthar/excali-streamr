import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-12 shadow-lg">
      <h1 className="text-xl font-bold">
        <Link to="/">Excali-Steamr</Link>
      </h1>
      <ConnectButton />
    </div>
  );
};
