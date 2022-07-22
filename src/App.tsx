import "./App.css";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Collections from "./pages/Collections/Collections";
import Soon from "./pages/Soon/Soon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route path="soon" element={<Soon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
