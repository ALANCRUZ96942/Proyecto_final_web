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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus quaerat consequuntur ullam commodi aliquid. Accusamus, porro? Accusamus consequatur veniam, non repellendus veritatis voluptatibus hic, enim voluptatem laborum cumque quas.
                        </h2>
                    </div>

                </div>
                <div class="col-md-4 col-12">
                    <div class="card shadow-lg p-5 m-3">
                        <h1>Misión </h1>

                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus quaerat consequuntur ullam commodi aliquid. Accusamus, porro? Accusamus consequatur veniam, non repellendus veritatis voluptatibus hic, enim voluptatem laborum cumque quas.
                        </h2>
                    </div>
                </div>
                <div class="col-md-4 col-12">
                    <div class="card shadow-lg p-5  m-3">
                        <h1>Misión </h1>

                        <h2>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea necessitatibus quaerat consequuntur ullam commodi aliquid. Accusamus, porro? Accusamus consequatur veniam, non repellendus veritatis voluptatibus hic, enim voluptatem laborum cumque quas.
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home