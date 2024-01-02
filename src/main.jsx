import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ScrollToTop from "./utils/ScrollToTop";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
