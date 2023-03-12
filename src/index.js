import React from "react";
import ReactDOM from "react-dom/client";
import "tailwind.css";
import App from "App";
import SiteContext from "context/SiteContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SiteContext>
    <App />
  </SiteContext>
);
