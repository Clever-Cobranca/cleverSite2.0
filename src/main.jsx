import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home  from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre"
import Cultura from "./Pages/Cultura";
import Serviços from "./Pages/Serviços";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/Serviços" element={<Serviços />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
