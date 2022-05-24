import React from "react";
import SlickSlider from "react-slick";

const Slider = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <SlickSlider {...settings}>
        {props.children}
      </SlickSlider>
    </div>
  );
};
export default Slider;
