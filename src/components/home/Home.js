import React from 'react';
import './styles.scss';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'


function Home(props) {
  return (
    <div className="home" data-test="home-container">
      <Header />
      <Connections />
      <Footer value={0} />
    </div>
  );
}

export default Home;