import "./App.css";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collections" element={<Collections />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
