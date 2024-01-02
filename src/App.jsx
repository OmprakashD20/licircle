import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Process from "./pages/Process/Process";
import Technology from "./pages/Technology/Technology";
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
        <Route path="/process" element={<Process />} />
        {/* Technology Page */}
        <Route path="/technology" element={<Technology />} />
        {/* Error / Not Found Page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
