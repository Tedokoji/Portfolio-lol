import React from 'react'
import a from '../staticfiles/a.jpg'
import d from '../staticfiles/d.jpg'
import f from '../staticfiles/f.jpg'
import g from '../staticfiles/g.jpg'
import h from '../staticfiles/h.jpg'
import s from '../staticfiles/s.jpg'
import Slider from "react-slick";
import '../SCSSs/Sliderone.scss'
function Sliderone() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <div className='imgslide'>
      
            <Slider  {...settings} >           
                <img  src={a}/>
                <img  src={d}/>
                <img  src={f}/>
                <img  src={g}/>
                <img  src={h}/>
                <img  src={s}/>            
            </Slider>
        </div>
    )
}

export default Sliderone
