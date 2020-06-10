import React from "react";
import Card from '@material-ui/core/Card';

function UserCard(props) {

  return (
    <Card>
            <h1>first name: {props.value.first_name}</h1>
            <h1>last name: {props.value.last_name} </h1>
            <p>Techs: {props.value.techs} </p>
            <p>Bio: {props.value.bio}</p>
            <p>Location: {props.value.location_id}</p>
            <p>Job Title: {props.value.job_title_id}</p>
    </Card>
  );
}

export default UserCard;
