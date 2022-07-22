import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { DummyImage } from 'react-simple-placeholder-image'

function Carrousel() {
    
        return (
            <Carousel>
                <div>
                <DummyImage width={1280} height={400}  bgColor='#0a1929' fgColor='blue' />
               
                </div>
                <div>
                <DummyImage width={1280} height={400}  bgColor='#0a1929' fgColor='aqua' />
                   
                </div>
                <div>
                <DummyImage width={1280} height={400}  bgColor='#0a1929' fgColor='#eb0014' />
               
                </div>
            </Carousel>
        );

}
export default Carrousel

