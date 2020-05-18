import React from "react";
import { useForm } from "react-hook-form";
import "./styles.scss";

const Registration = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="formWrap">
      <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          ref={register({ required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          name="password1"
          ref={register({ required: true })}
        />
        <input
          type="password"
          placeholder="Repeat Password"
          name="password2"
          ref={register({
            validate: (value) => {
              return value === watch("password1"); // value is from password2 and watch will return value from password1
            },
          })}
        />
        <select name="Profession" ref={register({ required: true })}>
          <option value="Mentor">Mentor</option>
          <option value=" Mentee"> Mentee</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
