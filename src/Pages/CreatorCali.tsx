import { ExcalidrawCompCreator } from "../components/ExcalidrawCompCreator";

export const CreatorCali = () => {
  return (
    <div className="w-screen h-[90vh]">
      <h1 className="text-center text-3xl font-bold py-10">Creator</h1>
      <div className="w-full h-[80vh]">
        <ExcalidrawCompCreator />
      </div>
    </div>
  );
};
