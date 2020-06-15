import React, { useState, useEffect } from "react";
import Paper from '@material-ui/core/Paper';
import SwipeTabs from './SwipeTabs';
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";

export default function Connections(props) {

  const [profilesToDisplay, setProfilesToDisplay] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const apiCallUsers = async () => {
      await axiosWithAuth()
        .get("/profile")
        .then((results) => {
          if (results) {
            let data = results.data;
            console.log("API response", results.data);
            setProfiles(data);
          }
        })
        .catch((err) => console.log(err));
    };
    apiCallUsers();
  }, []);
 
  return ( 
    <div className="connections" data-test="connections">
      <div data-test="second-wrapper">

        <Paper className="paper" elevation={1}>
        <h1 className="container-header" data-test="my-connections">
          My Connections (Sum)
        </h1>
        <div>
        <SwipeTabs/>
        </div>
        </Paper>
        </div>
      </div>
  );
};
