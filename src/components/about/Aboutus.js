import React from 'react';
import Person from './Person'
import './styles.scss';

function Aboutus() {

const team = [
  {
    name: 'Carlos Banks',
    position: 'Frontend Developer',
    src: '/CB.jpeg',
    country: 'Miami, FL',
  },
  {
    name: 'Kenneth Brook',
    position: 'Frontend Developer',
    src: '/KB.jpeg',
    country: 'City, State',
  },
  {
    name: 'Farjad Fazli',
    position: 'Frontend Developer',
    src: '/FF.jpeg',
    country: 'City, State',
  },
  {
    name: 'Tim Mitzen',
    position: 'Backend Developer',
    src: '/TM.jpeg',
    country: 'City, State',
  },
  {
    name: 'Joe Thompson',
    position: 'Backend Developer',
    src: '/JT.jpeg',
    country: 'City, State',
  },
  {
    name: 'Venky Yagatilee',
    position: 'Front Developer',
    src: '/VY.jpeg',
    country: 'City, State',
  },
  {
    name: 'Carlos Villalpando',
    position: 'Project Manager',
    src: '/CV.jpeg',
    country: 'City, State',
  },
];
  return (
      <div className="container">
        <h1>Meet the Crew</h1>
          <div className="team">
          {team.map(team => <Person key={team.name} {...team} />) }
          </div>
      </div>
  );
}





export default Aboutus;