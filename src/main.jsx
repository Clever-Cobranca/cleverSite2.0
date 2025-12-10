import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Home from "./Pages/Home/Index";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>
);
