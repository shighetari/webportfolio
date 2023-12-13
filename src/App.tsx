// src/App.tsx
import React, { Suspense } from "react";
const ModelViewer = React.lazy(() => import("./components/ModelViewer"));
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import StyledLoader from "./components/StyledLoader";
import StudyZone from "./components/StudyZone";

function App() {
  return (
    <Suspense fallback={<StyledLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<ChatBox />} /> */}
        <Route path="/portfolio" element={<ModelViewer />} />
        <Route path="/study" element={<StudyZone />} />
      </Routes>
    </Suspense>
  );
}

export default App;
