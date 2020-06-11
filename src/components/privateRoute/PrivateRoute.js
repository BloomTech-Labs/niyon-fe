import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({auth, component:Component, ...rest}) => {  
    // const token = window.localStorage.getItem("token");    
    return (
     <Route {...rest} render={(props) => 
         auth ? (
                  <Component {...props} />
            ) : (
                  <Redirect to="/login" />
            )
        } 
     />
    );
  };

export default PrivateRoute;
