import React from 'react';
import TeamMembers from './TeamMembers'
import './styles.scss';

const PersonCard = (props) => {
	return (
        <div className="person" data-test="person-image-container">
          {TeamMembers.map((teammember) => {
            return (
              <div>
              <a href={teammember.link}><img className="img2, personImg" src={teammember.src} alt="Niyon Team Members"/></a>
              <h2>{teammember.name}</h2>
              <p>{teammember.position}</p>
              </div>
            )  
      })}
		</div>
	);
};

export default PersonCard;
