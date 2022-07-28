import React, { useState, useEffect } from "react";
//import React from "react";
import Carrousel from '../components/Parts/Carrousel';
//import NavBar from "./NavBar";
import axios from "axios"


function Home() {

    // const token = localStorage.getItem("token")
    // const headers = { 'auth_key': token }

    // console.log(`Headers ${headers.auth_key}`)

    return (

        <div class="row m-0 p-0">

            <Carrousel />
            <div class="row m-0 p-5">
                <div class="col-md-4 col-12">
                    <div class="card shadow-lg p-5  m-3">
                        <h1>Misión </h1>
                        <h2>
                        Promover la educación, dando las herramientas necesarias para obtener y compartir conocimiento en diferentes áreas.                        </h2>
                    </div>

                </div>
                <div class="col-md-4 col-12">
                    <div class="card shadow-lg p-5 m-3">
                        <h1>Visión </h1>

                        <h2>
                        Comprometidos con dar la mejor calidad a nuestros usuarios, respondemos todo contacto con nosotros vía telefónica o por correo electrónico.                        </h2>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="card shadow-lg p-5  m-3">
                        <h1>Valores </h1>

                        <h2>
Honestidad, Responsabilidad                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home