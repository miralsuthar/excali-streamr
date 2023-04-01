import { StreamMetadata, Stream, Field, StreamrClient } from "streamr-client";

export const createStrm = async (
  streamr: StreamrClient,
  address: string,
  streamId: string,
  config: { fields: Field[] },
  description: string,
  storageDays: number
): Promise<Stream> => {
  const stream = await streamr.createStream({
    id: `${address}/${streamId}`,
    config: config,
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

export const deleteStrm = async (stream: Stream) => {
  await stream.delete();
};
