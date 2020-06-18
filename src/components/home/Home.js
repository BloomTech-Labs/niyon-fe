import React, { useEffect, useContext, useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Connections from "../connections/Connections";
import ConnectionRequests from "../connections/ConnectionRequests";
import RecommendedConnections from "../connections/RecommendedConnections";
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";
import { UserContext } from "../../UserContext";

const Home = (props) => {
  const { user, setUser } = useContext(UserContext);
  const id = window.localStorage.getItem("id");
  const [profiles, setProfiles] = useState([]);
  const [profilesToDisplay, setProfilesToDisplay] = useState([]);

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      await axiosWithAuth()
        .get(`/profile/${id}`)
        .then((res) => {
          if (res) {
            setUser({ ...user, ...res.data });
            setRequests(res.data.myRequests);
          }
        })
        .catch((err) => console.log(err));
    };
    apiCall();
  },[]);

  return (
    <div className="home" data-test="home-container">
      <Header />
      <Connections />
      <ConnectionRequests requests={user.myRequests}/>
      <RecommendedConnections />
      <Footer value={0} />
    </div>
  );
};

export default Home;
