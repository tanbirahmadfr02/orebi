/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span
      className={
        "text-white text-xl lg:text-3xl bg-[rgba(0,0,0,.20)] h-10 lg:h-16 w-10 lg:w-16 rounded-full !flex justify-center items-center z-50 absolute top-[34%] left-[14px] duration-300 hover:bg-[rgba(0,0,0,.70)]"
      }
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </span>
  );
};

export default SamplePrevArrow;
