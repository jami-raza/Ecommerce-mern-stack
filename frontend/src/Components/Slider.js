import React from 'react'
import Slider from 'react-slick'
import "../Style/Home.css";
import BeardOil from "../Content/images/Activate.png";
import { Container } from 'react-bootstrap';
const SlickSlider = () => {
    const setting = {
        dots:true,
        infinite:tre,
        autoplay:true,
        speed:1000,
        sliderToShow:1,
        slidesToScroll:1
    }

    
    return (
        <div>
            <Slider {...setting}>
           
     
            </Slider>
        </div>
    )
}

export default SlickSlider;
