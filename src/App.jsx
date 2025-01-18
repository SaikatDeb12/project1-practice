import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/contact";
import Service from "./components/Service";
import Footer from "./components/Footer";

import "./styles/header.scss";
import "./styles/App.scss";
import "./styles/home.scss";
import "./styles/contact.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
