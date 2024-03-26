/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "./Layout/Heading";
import Image from "./Layout/Image";
import newArrival1 from "../assets/newArrival1.png";
import newArrival2 from "../assets/newArrival2.png";
import newArrival3 from "../assets/newArrival3.png";
import newArrival4 from "../assets/newArrival4.png";
import Product from "./Layout/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./Layout/SampleNextArrow";
import SamplePrevArrow from "./Layout/SamplePrevArrow";

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplaySpeed: 3000,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="pt-16 lg:pt-32">
        <div className="container">
          <Heading title={"New Arrivals"} />
          <div className="slider-container">
            <Slider {...settings}>
              <div className="px-[15px]">
                <Product
                  imgsrc={newArrival1}
                  alt={"product"}
                  badge={true}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  brand={"Black"}
                  cartDetails={true}
                />
              </div>
              <div className="px-[15px]">
                <Product
                  imgsrc={newArrival2}
                  alt={"product"}
                  badge={true}
                  text={"10%"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  brand={"Black"}
                  cartDetails={true}
                />
              </div>
              <div className="px-[15px]">
                <Product
                  imgsrc={newArrival3}
                  alt={"product"}
                  badge={true}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  brand={"Black"}
                  cartDetails={true}
                />
              </div>
              <div className="px-[15px]">
                <Product
                  imgsrc={newArrival4}
                  alt={"product"}
                  badge={true}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  brand={"Black"}
                  cartDetails={true}
                />
              </div>
              <div className="px-[15px]">
                <Product
                  imgsrc={newArrival2}
                  alt={"product"}
                  badge={true}
                  text={"New"}
                  title={"Basic Crew Neck Tee"}
                  price={"$44.00"}
                  brand={"Black"}
                  cartDetails={true}
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrival;
