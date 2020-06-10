import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Select from "react-select";
import { job } from "../profile/job";
import { location } from "../profile/location";
import { technology } from "../profile/technologies";
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";

function Search(props) {
  const { user, setUser } = useContext(UserContext);
  const [profiles, setProfiles] = useState([]);
  const [jobTitlesToDisplay, setJobTitlesToDisplay] = useState([]);
  const [locationsToDisplay, setLocationsToDisplay] = useState([]);
  const [technologiesToDisplay, setTechnologiesToDisplay] = useState([]);
  const jobs = job;
  const locations = location;
  const technologies = technology;

  const handleJobChange = (selectedItem) => {
    if (selectedItem) {
      console.log("Selected job title", selectedItem);
      const usersToDisplayByJobTitle = profiles.filter(
        (user) => user.job_title_id === selectedItem.value
      );
      console.log("Users to display", usersToDisplayByJobTitle);
      setJobTitlesToDisplay(usersToDisplayByJobTitle);
    }
  };

  const handleLocationChange = (selectedItem) => {
    if (selectedItem) {
      console.log("Selected location", selectedItem);
      const usersToDisplayByLocation = profiles.filter(
        (location) => location.location_id === selectedItem.value
      );
      console.log("Locations to display", usersToDisplayByLocation);
      setLocationsToDisplay(usersToDisplayByLocation);
    }
  };

  const handleTechChange = (selectedItem) => {
    if (selectedItem) {
      console.log("Selected technology", selectedItem)
      const selectedTechStack = selectedItem.map(item => item.value)
      const usersWhoHaveSelectedTechs = [];
      const mappingFunction = profiles.map(profile => {
        if (selectedTechStack.every(value => profile.techs.includes(value))) {
          usersWhoHaveSelectedTechs.push(profile);
          setTechnologiesToDisplay(usersWhoHaveSelectedTechs)
        }
      })
      console.log('selectedTechStack', selectedTechStack)
      console.log("usersWhoHaveSelectedTechs", usersWhoHaveSelectedTechs);
  }}

  useEffect(() => {
    const apiCall = async () => {
      await axiosWithAuth()
        .get("/profile")
        .then((res) => {
          if (res) {
            let data = res.data;
            console.log("API response", res.data);
            setProfiles(data);
          }
        })
        .catch((err) => console.log(err));
    };
    apiCall();
  }, []);

  return (
    <div>
      <Header />
      <div className="search" data-test="search-container">
        <div>
          <h1 className="search-header">Search</h1>
          <h2>Job Title</h2>
          <Select
            name="job_title_id"
            options={jobs}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleJobChange}
          />
          <p>Users with Selected Job Title</p>
          {jobTitlesToDisplay.map((profile) => (
            <div key={profile.id}>
              {profile.first_name}
              {profile.last_name}
              {profile.user_type}
              {profile.location}
            </div>
          ))}
          <h2>Location</h2>
          <Select
            name="location_id"
            options={locations}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleLocationChange}
          />
          <p>Users with Selected Location</p>
          {locationsToDisplay.map((profile) => (
            <div key={profile.id}>
              {profile.first_name}
              {profile.last_name}
              {profile.user_type}
              {profile.location}
            </div>
          ))}
          <h2>Technologies</h2>
          <Select
            isMulti
            name="techs"
            options={technologies}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleTechChange}
          />
          <p>Users with Selected Technology</p>
          {technologiesToDisplay.map((profile) => (
            <div key={profile.id}>
              {profile.first_name}
              {profile.last_name}
              {profile.user_type}
              {profile.location}
            </div>
          ))}
        </div>
      </div>
      <Footer value={2} />
    </div>
  );
}

export default Search;
