import { useState } from "react";
import EditSide from "./components/EditSide";
import ResumeSide from "./components/ResumeSide";
import "./App.css";

function App() {
  return (
    <>
      <EditSide />
      <ResumeSide />
    </>
  );
}

export default App;
