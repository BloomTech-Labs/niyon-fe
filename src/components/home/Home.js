import React, {useState, useEffect, useContext} from 'react';
import './styles.scss';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";
import { UserContext } from "../../UserContext";
import axios from 'axios';

function Home(props) {
  const { user, setUser } = useContext(UserContext);
  const id = window.localStorage.getItem("id");

  const [inputs, setInputs] = useState({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    let response = fetch(`https://niyon-app.herokuapp.com/profile/${id}`, {
      method: 'GET',
      headers: {
        authorization: token
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('data from response', data)
        console.log('data from user state before', inputs)
        setInputs(data)
        console.log('data from user state after', inputs) 
      })
  }, [id])






  // useEffect(async () => {
  //   const result = await axios()
  //     .get(`https://niyon-app.herokuapp.com/profile/${id}`, {
  //       headers: {authorization: token}
  //     })
  //     .then((res) => {
  //       console.log(res.data)
  //       setInputs(res.data)
  //       console.log(inputs)
  //     })
  //     .catch(err => console.log(err))
  //   }, [])

  return (
    <div className="home" data-test="home-container">
      <Header />
      <Connections />
      <Footer value={0} />
    </div>
  );
}

export default Home;