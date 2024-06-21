import React from "react";
import { Link } from "react-router-dom";

import H from './Picture/home.png';
import V from './Picture/video.png';
import Ma from './Picture/store.png';
import P from './Picture/people.png';
import G from './Picture/games.png';
import './Navbar.css';

function Nav() {
  return (
    <div className="Navbar">
      <div className="L">
        <p className="L1">Lift</p>
        <input type="search" placeholder="search" />
      </div>
      <div className="M">

      <Link to='/Main' className="BT"><img src={H} className="App-logo" alt="Home" /></Link>
        <Link to='/' className="BT"><img src={V} className="App-logo" alt="Video" /></Link>
        <Link to='/' className="BT"><img src={Ma} className="App-logo" alt="Market" /></Link>
        <Link to='/' className="BT"><img src={P} className="App-logo" alt="People" /></Link>
        <Link to='/' className="BT"><img src={G} className="App-logo" alt="Game" /></Link>
      </div>
      <div className="R">
        <p className="L1">Right</p>
        <Link to='/'> <button className="Name" >Pattanawong Kupat</button></Link> 
      </div>
    </div>
  );
}

export default Nav;