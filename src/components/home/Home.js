import React, {useState, useEffect, useContext} from 'react';
import './styles.scss';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";
import { UserContext } from "../../UserContext";
import axios from 'axios';

const Home = (props) => {
  const { user, setUser } = useContext(UserContext);
  const id = window.localStorage.getItem("id");  
  const token = localStorage.getItem("token");

  useEffect(() => {
    const apiCall = async () => {
    const result = await axiosWithAuth()
                    .get(`/profile/${id}`)
                    .then((res) => {                   
                    if(res) setUser({...res.data});                     
                    })
                    .catch(err => console.log(err))
                  }
    apiCall();        
  },[id]);
 
  return (
    <div className="home" data-test="home-container">
      <Header />
      <Connections />
      <Footer value={0} />
    </div>
  );
}

export default Home;