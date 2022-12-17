import React, { useState } from 'react'
import '../styles/Slider.css'
import BtnSlider from './BtnSlider'


export default function Slider({ dataSlider }) {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    
    return (<div className="container-slider" > {
        dataSlider.map((slide, index) => {
            return (<div

                className={slideIndex === index + 1 ? "slide active-anim" : "slide"} >
                <img src={slide} /> </div >



            )
        })
    } <BtnSlider moveSlide={nextSlide}
        direction={"next"} /> <BtnSlider moveSlide={prevSlide}
            direction={"prev"} />


    </div>
    )
}