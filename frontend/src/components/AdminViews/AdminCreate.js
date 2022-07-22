import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DummyImage } from 'react-simple-placeholder-image'



function AdminCreate() {







  return (



    <div class="container  pt-5 pb-5 pr-5 pl-5 ">
      <div class="row ">
      <h1>
        Crear nuevo curso:
    </h1>
      <form>
            <div class="form-group">
                <label for="Nombre">Nombre del curso:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nombre"/>
            </div>
            <div class="form-group">
                <label for="Nombre">Descripción del curso:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Descripción"/>
            </div>
            <button type="submit" class="btn btn-primary">Subir</button>
            </form>
      </div>


     

    </div>
  );
}


export default AdminCreate;