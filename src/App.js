import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Officers from "./pages/Officers";
import Scholars from "./pages/Scholars";

const App = () => {
  return (
    <div>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Mission" element={<Mission />} />
          <Route path="/Officers" element={<Officers />} />
          <Route path="/Scholars" element={<Scholars />} />
        </Routes>

        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
