import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router";
import Homecss from "./pages/Homecss";
import Aboutcss from "./pages/Aboutcss";
import Contactcss from "./pages/Contactcss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homecss />} />
        <Route path="/about" element={<Aboutcss />} />
        <Route path="/contact" element={<Contactcss />} />
        <Route path="/contact/121" element={<Contactcss />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;