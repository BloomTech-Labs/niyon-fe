import React from "react";
import "./styles.scss";

import useCustomForm from "../customHooks/useCustomForm";

const Login = () => {
  const { inputs, handleInputChange, handleSubmit } = useCustomForm({
    email: "",
    password: "",
  });
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
