import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../UserContext";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Select from "react-select";
import { job } from "../profile/job";
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";

function Search(props) {
  const { user, setUser } = useContext(UserContext);
  const [profiles, setProfiles] = useState([]);
  const [profilesToDisplay, setProfilesToDisplay] = useState([]);
  const jobs = job;

  const handleJobChange = (selectedItem) => {
    if (selectedItem) {    
      const usersToDisplay = profiles.filter(
        (user) => user.job_title_id === selectedItem.value
      );      
      setProfilesToDisplay(usersToDisplay);
    }
  };

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
          {profilesToDisplay.map((profile) => (
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
