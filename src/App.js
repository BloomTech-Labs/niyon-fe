import React from "react";
import Marketing from "./components/marketing/Marketing";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import { Route } from "react-router-dom";
import "./App.css";

import Registration from "./components/registration/Registration";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Marketing} />
      <Route path="/about" component={About} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/search" component={Search} />
      <Route path="/registration" component={Registration} />
    </div>
  );
}

export default App;
