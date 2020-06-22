import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import SwipeTabsConnections from './SwipeTabsConnections'
import { axiosWithAuth } from '../apiStuff/axiosWithAuth'

export default function Connections (props) {
  const [profilesToDisplay, setProfilesToDisplay] = useState([])
  const [profiles, setProfiles] = useState([])

  return (
    <div className="connections" data-test="connections">
      <div data-test="second-wrapper">

        <Paper className="paper" elevation={1}>
          <h1 className="container-header" data-test="my-connections">
          My Connections (Sum)
          </h1>
          <div>
            <SwipeTabsConnections/>
          </div>
        </Paper>
      </div>
    </div>
  )
};
