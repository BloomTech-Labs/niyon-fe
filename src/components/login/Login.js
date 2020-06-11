import React from "react";
import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";
import Header from "../header/Header";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => handleOnSubmit(data);

  const handleOnSubmit = (props) => {
    let userAuth = {
      email: props.email,
      password: props.password,
    };

    axiosWithAuth()
      .post("/auth/login", userAuth)
      .then((res) => {
        console.log("1", res);
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("id", res.data.user.user_id);
        window.location = "/home";
      })
      .catch((err) => {
        console.log(err);
      });    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="formWrap">
        <Header />
        <div className="formLogin">
          <input
            type="email"
            placeholder="Email"
            name="email"
            ref={register({ required: true })}
          />
          {errors.email && (
            <p>"Email is required"</p>
          )}

          <input
            type="password"
            placeholder="Password"
            name="password"
            ref={register({ required: true })}
          />
          {errors.password && (
            <p>"Password is required"</p>
          )}

          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
