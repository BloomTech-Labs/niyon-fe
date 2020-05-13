import React from 'react';
import './styles.scss';
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Search(props) {
  return (
    <div>
        <Header />
        <div className='search'>
            <div>
                <h1 className='search-header'>Search</h1>
            </div>
        </div>
        <Footer value={2} />
    </div>
  );
}

export default Search;