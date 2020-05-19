import React from 'react';
import Aboutus from './Aboutus';
import Navbar from '../navbar/Navbar';
import './styles.scss';

function About({ team }) {

return (
    <div>
      <Navbar/>
      <Aboutus team={team}/>
    </div>
  );
};

export default About;
