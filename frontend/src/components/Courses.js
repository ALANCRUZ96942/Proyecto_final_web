import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DummyImage } from 'react-simple-placeholder-image'



function App() {



  useEffect(()=>{

    getAll()

  },[]); 
  
  
  const [data,setData] = useState([]);
  
  function getAll() {
    axios.get('http://localhost:4000/api/courses')
    .then((respuesta) => {
      console.log("la respuesta es",respuesta.data)
      setData(respuesta.data)
      
    })
  }



  return (



  <div class="container">
<div class="row pt-5 pb-5 ">
<h1>Cursos:</h1>

</div>


    <div class="row">
      {data.map((userInfo,index) => (
      <a href={` ${userInfo.slug}`} class="nothing col-log-6 col-md-3 col-12">
        <div class="card m-3 courses" key={index}>
        <DummyImage className="imageCard" bgColor='#0a1929' fgColor='aqua' />

          <div class="card-body">
            <h5 class="card-title">{` ${userInfo.name}`}</h5>
            <p class="card-text">{` ${userInfo.description}`}</p>
          </div>
        </div>
      </a>
      ))}
    </div>
  </div>
  );
}


export default App;