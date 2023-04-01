import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState } from "@excalidraw/excalidraw/types/types";
import {
  StreamMetadata,
  Stream,
  Field,
  StreamrClient,
  PermissionAssignment,
  StreamPermission,
} from "streamr-client";

export const createStrm = async (
  streamr: StreamrClient,
  address: string,
  streamId: string,
  description: string,
  storageDays: number,
  config?: { fields: Field[] }
): Promise<Stream> => {
  const stream = await streamr.createStream({
    id: `${address}/${streamId}`,
    // config: config,
    description: description,
    storageDays: storageDays,
    partitions: 1,
  });

  return stream;
};

export const getStrm = async (
  streamr: StreamrClient,
  streamId: string
): Promise<Stream> => {
  const stream = await streamr.getStream(streamId);
  return stream;
};

export const updateStrm = async (
  stream: Stream,
  config: { fields: Field[] },
  description: string,
  storageDays: number
) => {
  await stream.update({
    config: config,
    description: description,
    storageDays: storageDays,
    partitions: 1,
  } as StreamMetadata);
};
export type Data = {
  elements: readonly ExcalidrawElement[];
  state: AppState;
};
export const publishStrm = async (
  streamr: StreamrClient,
  streamId: string,
  data: Data
) => {
  await streamr.publish(streamId, data);
};

export const deleteStrm = async (stream: Stream) => {
  await stream.delete();
};

export const givePermissions = async (
  streamr: StreamrClient,
  streamId: string,
  permissions: PermissionAssignment[]
) => {
  await streamr.setPermissions({ streamId, assignments: permissions });
};

export const setPublicPermissions = async (stream: Stream) => {
  await stream.grantPermissions({
    public: true,
    permissions: [StreamPermission.SUBSCRIBE],
  });
};
