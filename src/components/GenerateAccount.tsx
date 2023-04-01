import { useContext } from "react";
import StreamClient from "streamr-client";
import { AccountContext } from "./Layout";

export const GenerateAccount = () => {
  const { address, setAddress, setPrivateStreamr } = useContext(AccountContext);

  const onClickHandler = () => {
    const { privateKey, address } = StreamClient.generateEthereumAccount();
    const privateStreamr = new StreamClient({
      auth: {
        privateKey,
      },
    });
    setPrivateStreamr(privateStreamr);
    setAddress(address);
  };
  return (
    <button
      disabled={address}
      onClick={onClickHandler}
      className="px-3 py-2 bg-black text-white font-bold"
    >
      {address ? address : "Generate Account"}
    </button>
  );
};
