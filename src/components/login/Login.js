import React from "react";
import { useForm } from "react-hook-form";
import "./styles.scss";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && (
          <p style={{ color: "orange", marginTop: 10 }}>"Email is required"</p>
        )}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && (
          <p style={{ color: "orange", marginTop: 10 }}>
            "Password is required"
          </p>
        )}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
