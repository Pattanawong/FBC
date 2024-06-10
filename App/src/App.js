import React from 'react';

import Nav from './Navbar.js' ;
import Menu from './Menu.js' ;
import Fed from './Feds.js';
import Searchs from './Searchs.js';
import './App.css' ;


function App() {
  return (
    <div className="App">
      <div className='N'>
      <Nav />
      </div>
      
      <div className='content'>
      <Menu />
      <Fed />
      <Searchs />
      </div>
      
    </div>
  );
}

export default App;
