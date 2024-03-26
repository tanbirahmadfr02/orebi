/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Image from "./Image";
import Badge from "./Badge";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import Flex from "../Layout/Flex";

const Product = ({
  imgsrc,
  alt,
  badge,
  text,
  className,
  brand,
  price,
  title,
  cartDetails
}) => {
  return (
    <>
      <div className={`group ${className}`}>
        <div className="relative overflow-hidden">
          <Image imgsrc={imgsrc} className={"w-full scale-100 duration-300 hover:scale-125"} alt={alt} />
          {badge == true && <Badge text={text} />}
         {
          cartDetails == true &&
          <div className="w-full bg-white py-6 px-7 absolute right-0 bottom-[-41%] duration-300 group-hover:bottom-0">
          <div className="flex gap-x-[15px] items-center justify-end">
            <p className="font-dm font-normal text-[#767676] text-base duration-300 hover:text-secondary">
              Two years warranty
            </p>
            <div className="inline-block">
              <FaHeart className="text-base text-secondary font-bold" />
            </div>
          </div>
          <div className="flex gap-x-[15px] items-center justify-end my-5">
            <p className="font-dm font-normal text-[#767676] text-base duration-300 hover:text-secondary">
              Compare
            </p>
            <div className="inline-block">
              <IoReload className="text-base text-secondary font-bold" />
            </div>
          </div>
          <div className="flex gap-x-[15px] items-center justify-end">
            <p className="font-dm font-normal text-[#767676] text-base duration-300 hover:text-secondary">
              Add to Cart
            </p>
            <div className="inline-block">
              <FaShoppingCart className="text-base text-secondary font-bold" />
            </div>
          </div>
        </div>
         }
        </div>
        <div className="details mt-6">
          <Flex className={"flex justify-between items-center"}>
            <h3 className="font-dm font-bold text-secondary text-xl">
              {title}
            </h3>
            <span className="font-dm font-normal text-[#767676] text-base">
              {price}
            </span>
          </Flex>
          <p className="font-dm font-normal text-[#767676] text-base mt-4">
            {brand}
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
