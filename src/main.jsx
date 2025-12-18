import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Cultura from "./Pages/Cultura";
import Serviços from "./Pages/Serviços";
import Educacao from "./Pages/Educacao";
import Pagar from "./Pages/Pagar";
import "./global.css";
import TrabalheConosco from "./Pages/TrabalheConosco";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/servicos" element={<Serviços />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/pagar" element={<Pagar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
