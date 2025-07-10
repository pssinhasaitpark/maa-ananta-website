import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { img1, img2, img3 } from "../../../assets";
import "./HeroSection.css";

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
    cssEase: "ease-in-out",
  };

  const slides = [
    {
      image: img1,
      title: "Empowering Mothers & Children",
      text: "Creating a future where every child is nurtured and every mother empowered.",
    },
    {
      image: img2,
      title: "Community Upliftment",
      text: "MAA Foundation is dedicated to holistic social development through compassion and action.",
    },
    {
      image: img3,
      title: "Education & Support",
      text: "We provide education, healthcare, and emotional support to those in need.",
    },
  ];

  return (
    <div className="container hero-section px-0 ">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="position-relative hero-slide">
            <div className="hero-image-container">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-100 hero-image"
              />
            </div>
            <div className="hero-overlay"></div>
            <div className="container-fluid position-absolute top-0 start-0 h-100 d-flex align-items-center">
              <div className="row w-100">
                <div className="col-12 col-md-8 col-lg-6">
                  <div className="hero-content text-white px-3 px-md-4 px-lg-5">
                    <h1 className="hero-title display-4 display-md-3 fw-bold mb-3 mb-md-4">
                      {slide.title}
                    </h1>
                    <p className="hero-text lead fs-5 fs-md-4 mb-4 mb-md-5">
                      {slide.text}
                    </p>
                    {/* <button className="btn btn-primary btn-lg px-4 px-md-5 py-2 py-md-3 hero-cta">
                      Learn More
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
