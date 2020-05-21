import React from 'react';
import Navbar from '../navbar/Navbar'
import Marketingbuttons from './Marketingbuttons';
import './styles.scss';

function Marketing() {

  return (
    <div data-test="marketing">
      <Navbar/>
      <Marketingbuttons/>
    </div>
  );
};

export default Marketing;
