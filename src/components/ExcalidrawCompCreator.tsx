import { Excalidraw } from "@excalidraw/excalidraw";

export const ExcalidrawCompCreator = () => {
  return (
    <div className="w-full h-full border-[1px] border-black rounded-lg overflow-hidden">
      <Excalidraw onChange={(elements, state) => {}} />
    </div>
  );
};
