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
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";

function Profile(props) {
  const { user, setUser } = useContext(UserContext);
  const id = window.localStorage.getItem("id");
  const technologies = technology;
  const locations = location;
  const jobs = job;

  console.log('this is on page load from context', user)

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    bio: "",
    job_title_id: 0,
    location_id: 0,
    techs: [],
  });

  const handleOnSave = () => {
    axiosWithAuth()
      .post(`/profile/${id}`, inputs)
      .then((res) => {
        console.log('this is from API response', res);
        // window.location = "/home";
        if(res) {
          setUser({...res})
        }
      })
      .catch((err) => {
        console.log(err);
      });
      console.log('this is from the context', user)
  };

  const handleTextFieldChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    // setUser(inputs)
  };

  const handleJobChange = (selectedItem) => {
    setInputs({
      ...inputs,
      job_title_id: selectedItem.value,
    });
    // setUser(inputs)
  };

  const handleLocationChange = (selectedItem) => {
    setInputs({
      ...inputs,
      location_id: selectedItem.value,
    });
    // setUser(inputs)
  };

  const handleTechChange = (selectedItem) => {
    const technologies = selectedItem.map((item) => item.value);
    setInputs({
      ...inputs,
      techs: technologies,
    });
    // setUser(inputs)
  };

  let techs = []

  const handleTechs = () => {
    if (user.techs) {
      techs = user.techs.map(tech => tech)
      console.log(techs)
    } else {
      techs = [0]
    }
  }

  handleTechs()
  console.log('this is from the context>>>>>>>>>>>>>>>>>>>', user)
  return (
    <div>
      <Header />
      <div className="profile">
        <h1>User Profile</h1>
        <TextField
          defaultValue={user.first_name}
          id="outlined-basic"
          variant="outlined"
          name="first_name"
          label="First Name"
          className="textfield"
          onChange={handleTextFieldChange}
        />
        <TextField
          defaultValue={user.last_name}
          id="outlined-basic"
          variant="outlined"
          name="last_name"
          label="Last Name"
          className="textfield"
          onChange={handleTextFieldChange}
        />
        <TextField
          defaultValue={user.bio}
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
          defaultValue={[job[user.job_title_id - 1]]}
          name="job_title_id"
          options={jobs}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleJobChange}
        />
        <h2>Location</h2>
        <Select
          defaultValue={[location[user.location_id - 1]]}
          name="location_id"
          options={locations}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleLocationChange}
        />

        <h2>Technologies</h2>
        <Select
          defaultValue={techs}
          isMulti
          name="techs"
          options={technologies}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={handleTechChange}
        />
        <button
          onClick={() => {
            console.log('inputs from state', inputs)
            handleOnSave()
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
