import { useState } from "react";
import Slider from "react-slick";
import './Sllider.css'
import a from "./img/1.jpg";
import b from "./img/2.jpg";
import c from "./img/3.jpg";
import d from "./img/4.jpg";
import e from "./img/5.jpg";
import f from "./img/6.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// array to store images
const images = [a,b,c,d,e,f];

function Sliderr() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  //slider settings
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Slider">
      <Slider {...settings}>
        {images.map((pic, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={pic} alt={pic} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Sliderr;