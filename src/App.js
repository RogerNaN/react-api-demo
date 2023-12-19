import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {useEffect, useState} from 'react';
import React from 'react';

function App() {
  const [catFact, setCatFact] = useState("")
  useEffect(()=>{
    Axios.get("https://catfact.ninja/fact").then((res)=>{
      console.log(res.data);
      setCatFact(res.data.fact);
    });
  }, []);
  
 



  // fetch("https://catfact.ninja/fact")
  //   .then((res)=> res.json())
  //   .then((data)=>{
  //     console.log(data);
  // })

  return (
    <div className="App">
     {catFact}
    </div>
  );
}

export default App;
