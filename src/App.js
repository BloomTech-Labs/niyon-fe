import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Marketing from "./components/marketing/Marketing";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import Registration from "./components/registration/Registration";
import Login from "./components/login/Login";
import "./sass_master/index.scss";

function App() {
  const [user, setUser] = useState({});
  const token = window.localStorage.getItem("token");
  const authorized = token ? true : false;
  return (
    <div className="App" data-test="app">
      <Switch>
        <UserContext.Provider value={{user, setUser}}>
          <Route exact path="/" component={Marketing} />
          <Route path="/about" component={About} />
          <Route path="/registration" component={Registration} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" isAuthenticated={authorized} component={Home} />
          <PrivateRoute path="/profile" isAuthenticated={authorized} component={Profile} />
          <PrivateRoute path="/search" isAuthenticated={authorized} component={Search} />        
        </UserContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
