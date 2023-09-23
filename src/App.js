import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
// import { IntlProvider, addLocaleData } from "react-intl";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Officers from "./pages/Officers";
import Scholars from "./pages/Scholars";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/Home" element={Home} /> */}
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Officers" element={<Officers />} />
          <Route path="/Scholars" element={<Scholars />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
