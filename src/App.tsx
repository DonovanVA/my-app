import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField} from './TextField';
import { useState } from 'react';
import { json } from 'stream/consumers';


const App:React.FC=()=>{
  const [alldvd, setalldvd] = useState([])
  const getdvd = async()=>{
    try{
      const response = await fetch("/")
      console.log(response)
      const jsonData = await response.json()

      setalldvd(jsonData)
      console.log(jsonData)
    }
    catch (err){
      console.error(err);
    }
  }
  useEffect(()=>{
    getdvd();
    
  },[])
  console.log(alldvd)
  
  return (
    <div className="App">
      <div>
      
      {alldvd.map(actor=>{
        <div>
        
        </div>
      })}
      </div>
     

    </div>
  );
}

export default App;
