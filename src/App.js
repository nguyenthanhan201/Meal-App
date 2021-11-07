import React from "react";
import "./components/FontawsomeIcons";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Categories from "./components/Categories/Categories";
import RandomMeal from "./components/RandomMeal/RandomMeal";
import HomePage from "./components/HomePage/HomePage";


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      {
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/categories" component={Categories}></Route>
            <Route exact path="/random" component={RandomMeal}></Route>
          </Switch>
          <Footer />
        </Router>
      }
    </div>
  );
};

export default App;
