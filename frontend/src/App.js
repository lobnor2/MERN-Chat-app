import { Button } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chatpage" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
