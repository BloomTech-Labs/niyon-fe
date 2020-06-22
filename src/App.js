
import React, { useState } from "react";
import { UserContext } from "./UserContext";
import Routes from './components/routes/Routes';
import "./sass_master/index.scss";

function App() {
  const [user, setUser] = useState({});  
  return (      
      <UserContext.Provider value={{user, setUser}}>
        <Routes />                
      </UserContext.Provider>     
  );
};

export default App;
