import React from 'react';
import Headroom from 'react-headroom';

import Nav from './Navbar';
import Menu from "./Menu" ;
import Fed from "./Feds" ;
import Searchs from './Searchs';
import './Main.css'

function Main() {
  return (
    <div className="Main">
        <div className='Heads'>
          <Headroom >
            <Nav />
            </Headroom>
        </div>
        <div className='Bodys'>
            <Menu />
            <Fed />
            <Searchs />
        </div>
        
      
    </div>
  );
}

export default Main;