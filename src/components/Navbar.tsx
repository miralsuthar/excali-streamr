import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-12 shadow-lg">
      <h1>Excali-Steamr</h1>
      <ConnectButton />
    </div>
  );
};
