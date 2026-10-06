import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Cultura from "./Pages/Cultura";
import Servicos from "./Pages/Servicos";
import Educacao from "./Pages/Educacao/Educacao";
import Pagar from "./Pages/Pagar";
import "./global.css";
import TrabalheConosco from "./Pages/TrabalheConosco";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./Pages/blog/Blog";
import Links from "./Pages/Links";
import KathCNPJ from "./Pages/KathCPNJ";
import TermosDeServico from "./Pages/TermosDeServico";
import PoliticaDePrivacidade from "./Pages/PoliticaDePrivacidade";
import Diagnostico from "./Pages/Diagnostico/Diagnostico";
import PaginaEscolas from "./Pages/PaginaEscolas";
import BlogList from "./Pages/blog/BlogList";
import RouteSeo from "./components/RouteSeo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RouteSeo />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escolas" element={<PaginaEscolas />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/cultura" element={<Cultura />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
        <Route path="/educacao" element={<Educacao />} />
        <Route path="/pagar" element={<Pagar />} />
        <Route path="/termos-de-servico" element={<TermosDeServico />} />
        <Route
          path="/politica-de-privacidade"
          element={<PoliticaDePrivacidade />}
        />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/pagina/:pageNumber" element={<BlogList />} />
        <Route path="/blog/:postSlug" element={<Blog />} />
        <Route path="/kath" element={<KathCNPJ />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
