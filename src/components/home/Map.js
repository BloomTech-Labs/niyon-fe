/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable padded-blocks */
// eslint-disable-next-line object-curly-spacing
import React, { useState, useContext } from 'react'
import MapGL, { Marker } from 'react-map-gl'
import { UserContext } from '../../UserContext'
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle'

function Map (props) {
  // eslint-disable-next-line indent
  const { user, setUser } = useContext(UserContext)
  const myConnections = props.connections

  const [viewport, setViewport] = useState({
    latitude: 13.531665,
    longitude: 2.460415,
    zoom: 3.5,
    width: '80%',
    height: '200px'
  })

  return (
    <div className="map">
      <MapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidGltaXNtYXAiLCJhIjoiY2tjcnZza2cyMDEwYzJycWo2Ynp0dGt1YiJ9.YXA40zBV_jsV-IAmvL0d2Q"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
        mapStyle="mapbox://styles/timismap/ckcrz63oi0cti1imla80jwj1s"
      >
        {myConnections.length > 0 && myConnections.map(connection => {
          return <Marker latitude={connection.latitude} longitude={connection.longitude}>
            <div className='tim'>
              <h6>{connection.first_name} {connection.last_name}</h6>
              <PersonPinCircleIcon />
            </div>
          </Marker>
        })}

        {/* <Marker latitude={13.5} longitude={2.46}>
          <div>{user.myConnections[0].first_name}</div>
        </Marker> */}
      </MapGL>
    </div>
  )
}

export default Map

//     const [clickMarker, setOnClickMarker] = useState({popupInfo: null})

//     const updateViewport = viewport => {
//         SetViewport({viewport});
//       };

//     const onClickMarker = city => {
//         setOnClickMarker({popupInfo: city});
//       };

//     function renderPopup() {
//         const {popupInfo} = this.state;

//         return (
//           popupInfo && (
//             <Popup
//               tipSize={5}
//               anchor="top"
//               longitude={popupInfo.longitude}
//               latitude={popupInfo.latitude}
//               closeOnClick={false}
//               onClose={() => this.setState({popupInfo: null})}
//             >
//               <CityInfo info={popupInfo} />
//             </Popup>
//           )
//         );

//     const {viewport} = this.state;

//   return (
//     {...viewport}
//         width="100%"
//         height="100%"
//         mapStyle="mapbox://styles/mapbox/dark-v9"
//         onViewportChange={this.updateViewport}
//         mapboxApiAccessToken={TOKEN}
//       >
//         <Pins data={CITIES} onClick={this.onClickMarker} />

//         {this._renderPopup()}

//         <div style={geolocateStyle}>
//           <GeolocateControl />
//         </div>
//         <div style={fullscreenControlStyle}>
//           <FullscreenControl />
//         </div>
//         <div style={navStyle}>
//           <NavigationControl />
//         </div>
//         <div style={scaleControlStyle}>
//           <ScaleControl />
//         </div>

//         <ControlPanel containerComponent={this.props.containerComponent} />
//   )
// }
