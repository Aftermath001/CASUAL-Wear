import React, { useState } from 'react'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import './Slider.scss'





const Slider = () => {

const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://sunny16.com/cdn/shop/articles/17-best-male-model-poses-for-photoshoots-956272.jpg?v=1597172634",
        "https://d1hjkbq40fs2x4.cloudfront.net/2021-03-02/files/03_-_SURROUNDINGS.jpg",
        "https://www.drphotos.ca/wp2/wp-content/uploads/2019/10/Toronto-photographer-David-Reid.jpg",
    ];

const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
};
const nextSlide = () =>{
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
};



  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide *100}vw)`}}>
            <img src={data[0]} alt='HomepageSlider'/>
            <img src={data[1]} alt='HomepageSlider'/>
            <img src={data[2]} alt='HomepageSlider'/>
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider