import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
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
    height: "150px",
    width: "150px",
    borderRadius: "50%",
    background: "#484848",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 5px 25px rgba(0,0,0,0.2)",
    marginBottom: "10px"
},
h2: {
    margin: "0",
    marginTop: "10px"
},
p: {
    color: "#484848",
    margin: "0",
    marginTop: "10px"
}
}));



function Person({src, name, position}) {
    const classes = useStyles();

  return (
    <div className={classes.person}>
    <div className={classes.personImg}>
      <img src={src} alt="" height="100%" />
    </div>
    <h2>{name}</h2>
    <p>{position}</p>

  </div>
  );
}


export default Person;