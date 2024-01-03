import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Proces from "./pages/Process/Process";
import Technology from "./pages/Technology/Technology";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <div className="">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* Process Page */}
        <Route path="/process" element={<Proces />} />
        {/* Technology Page */}
        <Route path="/technology" element={<Technology />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        {/* Error / Not Found Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
