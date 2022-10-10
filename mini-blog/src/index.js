import React from "react";
import ReactDOM from "react-dom/client";
import { globalStyles } from "./stitches.config";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
globalStyles();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
