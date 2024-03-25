import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* // BrowserRouter habilita el enrutamiento dinámico en la aplicación sin recargas de página. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
