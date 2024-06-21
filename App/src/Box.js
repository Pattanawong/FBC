import React, { useEffect, useState } from 'react';
import axios from 'axios';



import './Box.css' ;

function Box (){
  const [data, sepata] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/')
      .then(res => sepata(res.data))
      .catch(err => console.log(err))
  }, [data]);


  return (
            <>
                
         
            {data.map((car, index) => {
              return <div className="Box"  key={index}>
                <p>Number Plate :</p><p>   {car.numcar}</p>
                <p>Car-Bran     :</p><p>   {car.bran}</p>
                <p>Car-Model    :</p><p>   {car.model}</p>
                <p>Notes        :</p><p>   {car.note}</p>
                
              </div>
            })}
       
            
            </>
      
    
  );


}

export default Box;