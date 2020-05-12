import React from 'react';
import './styles.scss';
import Footer from '../footer/Footer'
import Header from '../header/Header'


function Home(props) {
  return (
    <div>
      // Header, incoming requests, my connections
      <Header />
      <Footer />
    </div>
  );
}

export default Home;