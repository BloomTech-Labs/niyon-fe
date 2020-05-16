import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './styles.scss';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  buttons: {
    margin: "20% auto 0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: '10px',

  },
  button: {
    width: "250px",
    borderRadius: "50px",
    height: "50px",
    margin: "15px 0",
    textTransform: "capitalize"
  }
}));

function MarketingButtons() {
    const classes = useStyles();

  return (
      <div className="marketing-container">
        <div className="container">
          <h3>Connect with Mentors in your area!
            </h3>
            </div>    
        <div className={classes.buttons}>
        <Button variant="contained" color="primary" className={classes.button}>
          Sign Up
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Login
        </Button>
        </div>
        </div>
  );
}
export default MarketingButtons;