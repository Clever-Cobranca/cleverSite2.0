import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home  from "./Pages/Home";
import Sobre from "./Pages/Sobre"
import Cultura from "./Pages/Cultura";
import Serviços from "./Pages/Serviços";
import Educacao from "./Pages/Educacao";
import Pagar from "./Pages/Pagar"
import "./global.css";
import { Header } from "./components/Header/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/Serviços" element={<Serviços />} />
        <Route path="/Educacao" element={<Educacao />}/>
        <Route path="/Pagar" element={<Pagar />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
