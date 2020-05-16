import React from 'react';
import './styles.scss';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'


function Home(props) {
  return (
    <div>
      <Header />
      <Connections />
      <Footer value={0} />
    </div>
  );
}

export default Home;