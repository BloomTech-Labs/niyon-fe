import React, { useEffect, useContext, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'
import ConnectionRequests from '../connections/ConnectionRequests'
import RecommendedConnections from '../connections/RecommendedConnections'
import { axiosWithAuth } from '../apiStuff/axiosWithAuth'
import { UserContext } from '../../UserContext'

const Home = (props) => {
  const { user, setUser } = useContext(UserContext)
  const id = window.localStorage.getItem('id')
  /*eslint-disable */
  const [profiles, setProfiles] = useState([])
  const [profilesToDisplay, setProfilesToDisplay] = useState([])
/*eslint-disable */
  const [requests, setRequests] = useState([])
  const [sumConnections, setSumConnections] = useState(0)
  const [sumRequests, setSumRequests] = useState(0)

  useEffect(() => {
    const apiCall = async () => {
      await axiosWithAuth()
        .get(`/profile/${id}`)
        .then((res) => {
          if (res) {
            setUser({ ...user, ...res.data })
            setRequests(res.data.myRequests)
            setSumConnections(res.data.myConnections.length)
            setSumRequests(res.data.myRequests.length)
          }
        })
        .catch((err) => console.log(err))
    }
    apiCall()
  }, [])

  return (
    <div className="home" data-test="home-container">
      <Header />
      <Connections sumConnections={sumConnections} />
      <ConnectionRequests requests={user.myRequests} sumRequests={sumRequests}/>
      {/* <RecommendedConnections /> */}
      <Footer value={0} />
    </div>
  )
}

export default Home
