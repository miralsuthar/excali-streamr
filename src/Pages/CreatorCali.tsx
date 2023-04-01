import { ExcalidrawCompCreator } from "../components/ExcalidrawCompCreator";
import { publishStrm } from "../utils/streamrUtils";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useAccount } from "wagmi";
import { AccountContext } from "../components/Layout";
import StreamrClient, { ExternalProvider } from "streamr-client";

export const CreatorCali = () => {
  const [elements, setElements] = useState<any>([]);
  const [state, setState] = useState<any>({});
  const { privateStreamr } = useContext(AccountContext);
  const [publishLoading, setPublishLoading] = useState(false);

  const { id } = useParams();
  const { address } = useAccount();
  const publishHandler = async () => {
    setPublishLoading(true);
    try {
      await publishStrm(privateStreamr, `${address}/${id}`, {
        elements,
        state,
      });
    } catch (e) {
      console.log("Publish eroro", e);
    }
    console.log("private strmr", privateStreamr);
    setPublishLoading(false);
  };
  return (
    <div className="w-screen h-[90vh]">
      <h1 className="text-center text-3xl font-bold py-10">Creator</h1>
      <button onClick={publishHandler}>
        {publishLoading ? "Loading..." : "Publish"}
      </button>
      <div className="w-full h-[80vh]">
        <ExcalidrawCompCreator
          onChange={(elements, state) => {
            setElements(elements);
            setState(state);
          }}
        />
      </div>
    </div>
  );
};
