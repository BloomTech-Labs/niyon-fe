import React from "react";
import Paper from '@material-ui/core/Paper';

function ConnectionRequests(props) {
  return (

    <div className="connection-req" data-test="connections">
      <div data-test="second-wrapper">
        <Paper elevation={1}>
        <h1 className="c" data-test="my-connections">
          Connection Requests (#)
        </h1>
        <p className="c">Cards go here</p>
        </Paper>
        </div>
      </div>
  );
}

export default ConnectionRequests;
