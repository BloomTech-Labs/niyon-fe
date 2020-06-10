import React from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({component:Component, ...rest}) => {  
    const token = window.localStorage.getItem("token");
    console.log('token>>>>>>>',token);
    console.log('props>>>>>>>>>', {...rest} );
    return (
     <Route {...rest} render={(props) => 
         token ? (
                  <Component {...props} />
            ) : (
                  <Redirect to="/login" />
            )
        } 
     />
    );
  };

export default PrivateRoute;
