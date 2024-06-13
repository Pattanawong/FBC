import React, { Component } from 'react';
import {BrowserRouter, Route  , Routes} from 'react-router-dom' ;

import Login from './Login.js';
import Main from './Main.js';


function App (){
  return (
    
      <BrowserRouter>
      <Routes >
        <Route path='/' element = {<Login/>} />
        <Route path='/Main'  element = {<Main />} />

      </Routes>
      </BrowserRouter>
      
    
  );


}

export default App;
