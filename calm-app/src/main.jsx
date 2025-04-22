import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { JournalProvider } from "./context/JournalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JournalProvider>
      <App />
    </JournalProvider>
  </React.StrictMode>
);
