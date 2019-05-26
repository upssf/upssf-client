import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import { IntlProvider, addLocaleData } from "react-intl";
import Home from "./pages/Home";
import Mission from "./pages/Mission";

function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/mission" component={Mission} />
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
