import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Routes from './components/routes/Routes';
import "./sass_master/index.scss";

function App() {
  const [user, setUser] = useState({});  
  return (
    <div className="App" data-test="app">     
        <UserContext.Provider value={{user, setUser}}>
          <Routes />                
        </UserContext.Provider>      
    </div>
  );
}

export default App;
