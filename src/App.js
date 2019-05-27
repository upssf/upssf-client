import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import NavBar from "./components/navbar";
import Footer from "./components/footer";
// import { IntlProvider, addLocaleData } from "react-intl";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Officers from "./pages/Officers";

function App() {
  return (
    <Router>
      <div>
      <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/Home" component={Home} /> */}
        <Route exact path="/Mission" component={Mission} />
        <Route exact path="/Officers" component={Officers} />
        </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
