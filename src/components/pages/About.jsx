/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import Flex from "../Layout/Flex";
import { Link } from "react-router-dom";
import Image from "../Layout/Image";
import aboutImg1 from "../../assets/aboutImg1.png";
import aboutImg2 from "../../assets/aboutImg2.png";

const About = () => {
  return (
    <>
      <section>
        <div className="container">
          <BreadCrumb title={"About"} />
          <Flex className={"flex gap-x-10"}>
            <div className="w-1/2">
              <Link to={"#"}>
                <Image imgsrc={aboutImg1} className={"w-full"} />
              </Link>
            </div>
            <div className="w-1/2">
              <Link to={"#"}>
                <Image imgsrc={aboutImg2} className={"w-full"} />
              </Link>
            </div>
          </Flex>
          <h4 className="font-dm font-normal text-xl md:text-[39px] md:leading-[52px] text-secondary my-10 lg:my-28">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </h4>
          <Flex className={"sm:flex sm:gap-x-10"}>
            <div className="sm:w-1/3">
              <h4 className="font-dm font-bold text-2xl text-secondary mb-3">
                Our Vision
              </h4>
              <p className="font-dm font-normal text-base text-[#767676]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="sm:w-1/3 mt-5 sm:mr-0">
              <h4 className="font-dm font-bold text-2xl text-secondary mb-3">
                Our Story
              </h4>
              <p className="font-dm font-normal text-base text-[#767676]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>
            <div className="sm:w-1/3 mt-5 sm:mr-0">
              <h4 className="font-dm font-bold text-2xl text-secondary mb-3">
                Our Brands
              </h4>
              <p className="font-dm font-normal text-base text-[#767676]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default About;
