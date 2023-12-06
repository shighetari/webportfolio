// src/App.tsx
import React, { Suspense } from "react";
// import ModelViewer from './components/ModelViewer';
const ModelViewer = React.lazy(() => import("./components/ModelViewer"));
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import StyledLoader from "./components/StyledLoader";
import { ChatBox } from "./components/ChatBox";

function App() {
  return (
    <Suspense fallback={<StyledLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<ChatBox />} /> */}
        <Route path="/portfolio" element={<ModelViewer />} />
      </Routes>
    </Suspense>
  );
}

export default App;
