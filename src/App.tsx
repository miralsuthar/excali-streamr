import { CreateRoom } from "./Pages/CreateRoom";
import { JoinerCali } from "./Pages/JoinerCali";
import { Button } from "./components";
import { CreatorCali } from "./components";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen my-auto flex justify-center items-center gap-10">
      <Button title="create your own" path="/creator-room" type="primary" />
      <Button title="Join board" path="/viewer-room" type="secondary" />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-room" element={<CreateRoom />} />
      <Route path="/create-room/:id" element={<CreatorCali />} />
      <Route path="/viewer-room" element={<JoinerCali />} />
    </Routes>
  );
}

export default App;
