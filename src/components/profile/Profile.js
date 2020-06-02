import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import Select from "react-select";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TextField from "@material-ui/core/TextField";
import "./styles.scss";
import { technology } from "./technologies";
import { location } from "./location";
import { job } from "./job";

function Profile(props) {
  // const { user, setUser } = useContext(UserContext);
  const id = window.localStorage.getItem("id");
  console.log("From localStorage", id);
  const technologies = technology;
  const locations = location;
  const jobs = job;

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    bio: "",
    job_title: 0,
    location_id: 0,
    techs: [],
  });

  const handleTextFieldChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const handleJobChange = (selectedItem) => {
    setInputs({
      ...inputs,
      job_title: selectedItem.value,
    });
  };

  const handleLocationChange = (selectedItem) => {
    setInputs({
      ...inputs,
      location_id: selectedItem.value,
    });
  };

  const handleTechChange = (selectedItem) => {
    const technologies = selectedItem.map((item) => item.value);
    setInputs({
      ...inputs,
      techs: technologies,
    });
  };

  return (
    <div>
      <Header />
      <div className="profile">
        <h1>User Profile</h1>
        <TextField
          id="outlined-basic"
          variant="outlined"
          name="first_name"
          label="First Name"
          className="textfield"
          onChange={handleTextFieldChange}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          name="last_name"
          label="Last Name"
          className="textfield"
          onChange={handleTextFieldChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Bio"
          multiline
          name="bio"
          rows={3}
          variant="outlined"
          className="textfield"
          onChange={handleTextFieldChange}
        />
        <h2>Job Title</h2>
        <Select
          defaultValue={"job"}
          name="job_title"
          options={jobs}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleJobChange}
        />
        <h2>Location</h2>
        <Select
          defaultValue={[]}
          name="location_id"
          options={locations}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleLocationChange}
        />

        <h2>Technologies</h2>
        <Select
          defaultValue={[]}
          isMulti
          name="techs"
          options={technologies}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleTechChange}
        />
        <button
          onClick={() => {
            console.log('user');
          }}
        >
          Save
        </button>
      </div>
      <Footer value={1} />
    </div>
  );
}

export default Profile;
