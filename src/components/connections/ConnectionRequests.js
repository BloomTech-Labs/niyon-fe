import React from "react";
import Paper from '@material-ui/core/Paper';
import SwipeTabs from './SwipeTabs';

function ConnectionRequests(props) {

  return (

    <div className="connection-req" data-test="connections">
      <div data-test="second-wrapper">
        <Paper className="paper" elevation={1}>
        <h1 className="container-header" data-test="my-connections">
          Connection Requests (#)
        </h1>
        <SwipeTabs/>
        </Paper>
        </div>
      </div>
  );
}

export default ConnectionRequests;
