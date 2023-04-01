import StreamrClient, { ExternalProvider } from "streamr-client";
import { useAccount } from "wagmi";
import { useState } from "react";
import { id } from "ethers/lib/utils.js";

type Props = {};

export const CreateStream = (props: Props) => {
  const [roomName, setRoomName] = useState<string>("");
  const [data, setData] = useState<string>("");

  const { address, isConnected } = useAccount();
  const streamr = new StreamrClient({
    auth: {
      privateKey: import.meta.env.VITE_PRIVATE_KEY!,
    },
  });

  // const createStrm = async (roomName: string) => {
  //   const stream = await streamr.createStream({
  //     id: `${address}/${roomName}`,
  //   });

  //   console.log(stream);
  // };

  const updateStrm = async (roomName: string, data: any) => {
    await streamr.publish(roomName, data);
  };

  return (
    <>
      {isConnected && (
        <div className="space-y-4 space-x-2">
          <div className="text-5xl">Create Stream</div>
          <p className="text-xl">Stream name:</p>
          {/* <div>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700"
              onChange={(e) => setRoomName(e.target.value)}
            />
            <button
              className="
            bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
          "
              onClick={() => createStrm(roomName)}
            >
              Create
            </button>
          </div> */}

          <div className="space-x-5">
            <div>RoomName:</div>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700"
              onChange={(e) => setRoomName(e.target.value)}
            />
            <div>Data:</div>
            <input
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700"
              onChange={(e) => updateStrm(roomName, e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => updateStrm(roomName, data)}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};
