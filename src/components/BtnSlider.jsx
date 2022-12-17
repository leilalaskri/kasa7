import React from "react";

import "../styles/Slider.css";
import leftArrow from "./icons/gauche.png";
import rightArrow from "./icons/droite.png";

export default function BtnSlider({ direction, moveSlide }) 
{
    
    return (<button onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img src={direction === "next" ? rightArrow : leftArrow} alt="fleche"/>
    </button>
    );
}