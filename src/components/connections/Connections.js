import React from 'react';
import './styles.scss';

function Connections(props) {
  return (
    <div className='connections' data-test="connections">
      <div data-test="second-wrapper">
        <h1 className='c' data-test="my-connections">My Connections</h1>
        <h1 className='c' data-test="request-connections">Connection Requests</h1>
        <h1 className='c' data-test="recommended-connections">Recommended Connections</h1>
      </div>
    </div>
  );
}

export default Connections;