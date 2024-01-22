import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import ScrollToTop from "@/utils/ScrollToTop";
import App from "@/App";
import { Toaster } from "@/components/ui/toaster";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Toaster duration={2000} />
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  </React.StrictMode>
);
