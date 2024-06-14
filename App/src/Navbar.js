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
        <p>Lift</p>
        <input type="search" placeholder="search" />
      </div>
      <div className="M">

        <button> <img src={H} className="App-logo" alt="Home" /></button>
        <button><img src={V} className="App-logo" alt="Video" /></button>
        <button><img src={Ma} className="App-logo" alt="Market" /></button>
        <button><img src={P} className="App-logo" alt="People" /></button>
        <button><img src={G} className="App-logo" alt="Game" /></button>
      </div>
      <div className="R">
        <p>Right</p>
        <Link to='/'> <button className="Name" >Pattanawong Kupat</button></Link> 
      </div>
    </div>
  );
}

export default Nav;