import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import App from "./App";

import { HelmetProvider } from "react-helmet-async";

const root = document.getElementById("root");
if (!root) throw new Error("No #root element found");

createRoot(root).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/meetusamaservices">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
