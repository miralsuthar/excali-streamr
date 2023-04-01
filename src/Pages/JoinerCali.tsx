import { ExcalidrawCompJoiner } from "../components/ExcalidrawCompJoiner";

export const JoinerCali = () => {
  return (
    <div className="w-screen h-[90vh]">
      <h1 className="text-center text-3xl font-bold py-10">Viewer</h1>
      <div className="w-full h-[80vh]">
        <ExcalidrawCompJoiner />
      </div>
    </div>
  );
};
