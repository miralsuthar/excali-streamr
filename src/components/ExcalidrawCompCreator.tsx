import { Excalidraw } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { AppState } from "@excalidraw/excalidraw/types/types";

export const ExcalidrawCompCreator = ({
  onChange,
}: {
  onChange: (elements: readonly ExcalidrawElement[], state: AppState) => void;
}) => {
  return (
    <div className="w-full h-full border-[1px] border-black rounded-lg overflow-hidden">
      <Excalidraw onChange={onChange} />
    </div>
  );
};
