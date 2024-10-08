import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        I’ve tried almost every pizza in town, but Tasty Treat has completely stolen my heart! The crust is crispy, the cheese is perfectly melted, and the toppings are always fresh. Plus, the delivery is lightning fast! My go-to for pizza night
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Abhishek</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "Tasty Treat's pizza is hands down the best I’ve had in ages! The flavors are spot-on, and the fact that it arrives piping hot every single time makes it even better. Their delivery service is incredibly reliable, and I love how easy it is to order from their app!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Strange</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        "I’m obsessed with Tasty Treat! Every pizza I’ve ordered has been bursting with flavor, and their variety of toppings is amazing. Whether I’m craving classic Margherita or something more unique, they always deliver the perfect pizza. Highly recommend!"
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Anmol</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
