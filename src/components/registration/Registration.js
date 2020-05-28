import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";
import axios from 'axios';
import { UserContext } from '../../UserContext'
import "./styles.scss";
import Header from "../header/Header";

const Registration = (props) => {
  const { register, handleSubmit, watch, errors } = useForm();
  // const onSubmit = (data) => handleOnSubmit(data);
  const { user, setUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    user_type: ""
  })
  //console.log(errors);

  const handleChange = event => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value
    })
    console.log(newUser)
  }

  const handleSubmit2 = event => {
    event.preventDefault()
    axios.post('https://niyon-app.herokuapp.com/auth/register', newUser)
      .then(res => {
        console.log(res.data.user.id)
        console.log(user)
        setTimeout(
          setUser({
            id: res.data.user.id
          }), 1000
        )
        window.localStorage.setItem("token", res.data.token)
        setTimeout(
          console.log(user), 2000
        )
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="formWrap">
      <Header />
      <form className="formRegister" onSubmit={handleSubmit2}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
          onChange={handleChange}
          value={newUser.email}
        />
        {errors.email && (
          <p style={{ color: "orange", marginTop: 10 }}>"Email is required"</p>
        )}
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
          onChange={handleChange}
          value={newUser.password}
        />
        {errors.password && (
          <p style={{ color: "orange", marginTop: 10 }}>
            "Password is required"
          </p>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          ref={register({
            validate: (value) => {
              return value === watch("password"); // value is from password2 and watch will return value from password1
            },
          })}
        />
        {errors.password2 && (
          <p style={{ color: "orange", marginTop: 10 }}>
            "Passwords do not match"
          </p>
        )}
        <select 
          name="user_type" 
          ref={register({ required: true })}
          onChange={handleChange}
          value={newUser.user_type}
        >
          <option value="Mentor">Mentor</option>
          <option value=" Mentee">Mentee</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
