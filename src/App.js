import React from 'react';
import Marketing from './components/marketing/Marketing';
import About from './components/about/About'
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path ="/" component={Marketing}/>
      <Route path ="/about" component={About}/>
      <Route path ="/about" component={About}/>


    </div>
  );
}

export default App;
