import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/Home/components/About";
import Contact from "./pages/Home/components/Contact";
import Product from "./pages/Home/components/Product";
import Technology from "./pages/Home/components/Technology";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <div className="">
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        {/* About Page */}
        <Route path="/about" element={<About />} />
        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
        {/* Product Page */}
        <Route path="/product" element={<Product />} />
        {/* Technology Page */}
        <Route path="/technology" element={<Technology />} />
        {/* Error / Not Found Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
