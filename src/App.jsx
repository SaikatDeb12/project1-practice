import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/header.scss";
import "./styles/App.scss";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
