// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import firebaseConfig from "./authentication/firebase.config.js";
// import { BrowserRouter } from "react-router";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/liveChat">
    <App />
  </BrowserRouter>
);
