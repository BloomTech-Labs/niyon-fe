import React from 'react';
import Marketing from './components/marketing/Marketing';
import About from './components/about/About';
import Home from './components/home/Home';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path ="/" component={Marketing}/>
      <Route path ="/about" component={About}/>
      <Route path="/home" component={Home}/>
    </div>
  );
}

export default App;
