import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DummyImage } from 'react-simple-placeholder-image'



function Admin() {



  useEffect(() => {

    getAll()

  }, []);


  const [data, setData] = useState([]);

  function getAll() {
    axios.get('http://localhost:4000/api/courses')
      .then((respuesta) => {
        console.log("la respuesta es", respuesta.data)
        setData(respuesta.data)

      })
  }



  return (



    <div class="container">
      <div class="row pt-5 pb-5 ">
        <h1>Cursos:</h1>
        <a href="admin/cursos/agregar"><button type="button" class="btn btn-info">Agregar curso</button></a>     

      </div>


      <table id="userList" class="table table-bordered table-hover table-striped">
		<thead class="thead-light">
		<tr>
			<th scope="col">id</th>
			<th scope="col">Nombre</th>
			<th scope="col">Description</th>
			<th scope="col" >Acciones</th>
		</tr>
		</thead>
		<tbody>
        {data.map((userInfo, index) => (

            <tr>
            <th scope="row">{index}</th>
            <td>{` ${userInfo.name}`}</td>
            <td>{` ${userInfo.description}`}</td>
            <td>
            <a href={"admin/cursos/agregar/"+index}><button type="button" class="btn btn-warning m-3">Editar</button></a>                  
            <a href={"admin/cursos/eliminar/"+index}><button type="button" class="btn btn-danger m-3">Eliminar</button></a>        
            </td>

            </tr>

        ))}


		</tbody>
	</table>

    </div>
  );
}


export default Admin;