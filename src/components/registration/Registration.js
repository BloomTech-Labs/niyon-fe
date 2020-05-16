import React from "react";
import "./styles.scss";

import useCustomForm from "../customHooks/useCustomForm";

const Registration = () => {
  const { inputs, handleInputChange, handleSubmit } = useCustomForm({
    email: "",
    password1: "",
    password2: "",
  });
  return (
    <div className="formWrap">
      <form className="formRegister" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1}
        />

        <label>Repeat Password</label>
        <input
          type="password"
          name="password2"
          onChange={handleInputChange}
          value={inputs.password2}
        />

        <select onChange={handleInputChange} value="roll">
          <option value="mentor">Mentor</option>
          <option value="mentee">Mentee</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
