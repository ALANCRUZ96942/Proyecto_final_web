import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MyImage1 from './assets/52524-programacion.jpg';
import MyImage2 from './assets/52702-programacion.jpg';
import MyImage3 from './assets/52714-programacion.jpg';

function Carrousel() {
    
        return (
            <Carousel>
                <div>
                <img src={MyImage1}  />
               
                </div>
                <div>
                <img src={MyImage2}  />
                   
                </div>
                <div>
                <img src={MyImage3}  />
               
                </div>
            </Carousel>
        );

}
export default Carrousel

