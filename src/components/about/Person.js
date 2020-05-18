import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import './styles.scss';

const useStyles = makeStyles((theme) => ({
  root: { display: 'flex' },
  person: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "32px",
    width: "250px"
  },
  personImg: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
    marginBottom: "10px",
  },
  h2: {
    margin: "0",
    marginTop: "10px"
  },
  p: {
    color: "#484848",
    margin: "0",
    marginTop: "10px"
  },
  img2: {
    width: "160px",
    height: "auto"
  }
}));

function Person({src, name, position, link}) {
  const classes = useStyles();
  return (
    <div className={classes.person} data-test="person-container">
      <div className={classes.personImg} data-test="person-image-container">
        <a href={link}><img className={classes.img2} src={src} alt=""/></a>
        {/* // can make the link pop up in a window with 'target="_blank"// */}
      </div>
      <h2>{name}</h2>
      <p>{position}</p>
    </div>
  );
};

export default Person;
