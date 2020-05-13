import React from 'react';
import './styles.scss';
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Profile(props) {
  return (
    <div>
        <Header />
        <div className='profile'>
            <div>
                <h1 className='profile-header'>Profile</h1>
            </div>
        </div>        
        <Footer value={1} />
    </div>
  );
}

export default Profile;