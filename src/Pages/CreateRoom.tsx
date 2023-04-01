import { useState, useContext, useEffect } from "react";
import { createStrm, givePermissions } from "../utils/streamrUtils";
import StreamrClient, {
  ExternalProvider,
  StreamPermission,
} from "streamr-client";
import { useAccount } from "wagmi";
import { AccountContext } from "../components/Layout";
import { GenerateAccount } from "../components/GenerateAccount";

export const CreateRoom = () => {
  const { setStreamrClient, address: generatedAddress } =
    useContext(AccountContext);
  const streamr = new StreamrClient({
    auth: {
      ethereum: window && (window.ethereum as ExternalProvider),
    },
  });
  const { address } = useAccount();

  useEffect(() => {
    setStreamrClient(streamr);
  }, [window.ethereum]);

  const [streamId, setStreamId] = useState("");
  const [description, setDescription] = useState("");
  const [streamUrl, setStreamUrl] = useState("");
  const config = {
    fields: [
      {
        name: "name",
        type: "string",
      },
    ],
  };
  return (
    <div className="flex gap-10 w-6/12 my-auto mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-col">
          <label htmlFor="steramId" className="font-medium text-xl">
            StreamId
          </label>
          <input
            name="stremId"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700"
            onChange={(e) => setStreamId(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium text-xl">
            Description
          </label>
          <input
            type="text"
            name="description"
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 w-fit hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={async () => {
            const stream = await createStrm(
              streamr,
              address!,
              streamId,
              description,
              10
            );
            setStreamUrl(stream.id);
          }}
        >
          Create
        </button>
      </div>
      <div>{streamUrl && <GenerateAccount />}</div>
      <div>
        {generatedAddress && (
          <button
            onClick={async () => {
              await givePermissions(streamr, streamUrl, [
                {
                  user: generatedAddress as `0x${string}`,
                  permissions: [StreamPermission.PUBLISH],
                },
              ]);
              window.location.replace(
                `/create-room/${streamUrl.split("/")[1]}`
              );
            }}
          >
            Giver permission
          </button>
        )}
      </div>
    </div>
  );
};
