import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Licznik from "./components/pages/Licznik";
import pobierzPostaci from "./components/pages/List";
import Rejestracja from "./components/pages/Register";
import Logowanie from "./components/pages/Signin";
import Stoper from "./components/pages/Stoper";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Licznik" component={Licznik} />
          <Route path="/list" component={pobierzPostaci} />
          <Route path="/register" component={Rejestracja} />
          <Route path="/signin" component={Logowanie} />
          <Route path="/Stoper" component={Stoper} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
