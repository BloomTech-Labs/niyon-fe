import React, { useContext } from 'react';
import { UserContext } from '../../UserContext'
import './styles.scss';
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Search(props) {
  const { user, setUser } = useContext(UserContext);

  console.log(user)

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