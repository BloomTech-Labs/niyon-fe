import React, { useState, useEffect } from "react";
import "./styles.scss";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit;

  const handleChange = (e) => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    } else {
      setPassword(e.currentTarget.value);
    }
  };

  return (
    <div className="formWrap">
      <form className="formLogin">
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />

        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
