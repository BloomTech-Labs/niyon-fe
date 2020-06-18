import React, {useContext } from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ChatIcon from '@material-ui/icons/Chat';
import { UserContext } from "../../UserContext";
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";




const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
    textAlign: "left",
    padding: "5px 10px"
  },
});

function UserCard(props) {

  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);

  console.log('user from context in CARD>>>', user);

  const myRequests = user.myRequests;

  console.log("value>>>>", props.value)
  // console.log("John Does requests>>>>", myRequests);

  const id = window.localStorage.getItem("id");

  const payload = props.endpoint === "request" ? {mentor_id: props.value.id} :  {    status: true,    rejected: false,    userReq: props.value.id  }

  const handleRequest = () => {
    
    
    axiosWithAuth()
      .post(`/connection/${props.endpoint}/${id}`, payload)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <React.Fragment>
    { myRequests && <Card className='userCard'>
      <div className='avatar'>
      <Avatar src="/broken-image.jpg" />
      </div>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          {props.value.first_name} {props.value.last_name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          <p>{props.value.location}</p>
        </Typography>
        <Typography variant="h6" gutterBottom>
          <p>{props.value.job}</p>
        </Typography>
      </div>
      <div className='addIcon'>
        <AddBoxIcon onClick={handleRequest} style={{color: 'green'}} className='iconSize'/>
      </div>
    </Card>}
    {/* {!myRequests && <p>Loading....</p>} */}
    </React.Fragment>
  );
}

export default UserCard;
