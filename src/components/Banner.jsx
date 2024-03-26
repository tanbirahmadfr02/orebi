/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import bannerBg from "../assets/bannerBg.png";
import Image from "./Layout/Image";
import { Link } from "react-router-dom";

const Banner = () => {
  const [slickActive, setSlickActive] = useState(0);
  var settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setSlickActive(next);
    },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          left: "9%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", flexDirection: "column" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slickActive
            ? {
                width: "35px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "10px 0",
              }
            : {
                width: "35px",
                borderRight: "3px white solid",
                padding: "10px 0",
                color: "transparent",
              }
        }
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <>
      <section>
        <Slider {...settings}>
          <Link to={"#"}>
            <div className="w-full">
              <Image imgsrc={bannerBg} className={"w-full object-cover"} />
            </div>
          </Link>
          <Link to={"#"}>
            <div className="w-full">
              <Image imgsrc={bannerBg} className={"w-full object-cover"} />
            </div>
          </Link>
          <Link to={"#"}>
            <div className="w-full">
              <Image imgsrc={bannerBg} className={"w-full object-cover"} />
            </div>
          </Link>
        </Slider>
      </section>
    </>
  );
};

export default Banner;
