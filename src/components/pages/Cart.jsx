/* eslint-disable no-unused-vars */
import React from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import Flex from "../Layout/Flex";
import { RxCross1 } from "react-icons/rx";
import Image from "../Layout/Image";
import cartImg from "../../assets/cartImg.png";
import { HiMiniMinus } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
import Select from "../Layout/Select";
import Option from "../Layout/Option";

const Cart = () => {
  return (
    <>
      <section>
        <div className="container">
          <BreadCrumb title={"Cart"} />
          <Flex className={"sm:flex flex-wrap"}>
            <div className="w-full sm:w-1/2 lg:w-5/12 border-l border-solid border-[#f0f0f0]">
              <div className="py-[33px] px-5 bg-[#f5f5f3]">
                <h3 className="font-dm font-bold text-base text-secondary">
                  Product
                </h3>
              </div>
              <div className="py-[30px] px-5 flex items-center">
                <span className="block mr-5 md:mr-16">
                  <RxCross1 className="text-xl" />
                </span>
                <div>
                  <Image imgsrc={cartImg} className={"h-[100px] w-[100px]"} />
                </div>
                <h4 className="font-dm font-bold text-base text-secondary ml-5">
                  Product name
                </h4>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12">
              <div className="py-[33px] px-5 bg-[#f5f5f3]">
                <h3 className="font-dm font-bold text-base text-secondary">
                  Price
                </h3>
              </div>
              <h4 className="font-dm font-bold text-base text-secondary py-[68px]">
                $44.00
              </h4>
            </div>
            <div className="w-full sm:w-1/2 lg:w-3/12">
              <div className="py-[33px] px-5 bg-[#f5f5f3]">
                <h3 className="font-dm font-bold text-base text-secondary">
                  Quantity
                </h3>
              </div>
              <div className="inline-block py-[62px]">
                <div className="py-3 px-5 flex gap-x-[35px] border border-solid border-[#f0f0f0] items-center font-dm font-semibold text-base text-[#767676]">
                  <span>
                    <HiMiniMinus />
                  </span>
                  <span>1</span>
                  <span>
                    <FiPlus />
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-2/12 border-r border-solid border-[#f0f0f0]">
              <div className="py-[33px] px-5 bg-[#f5f5f3]">
                <h3 className="font-dm font-bold text-base text-secondary">
                  Total
                </h3>
              </div>
              <h4 className="font-dm font-bold text-base text-secondary py-[68px]">
                $44.00
              </h4>
            </div>
          </Flex>
          <div className="flex justify-between items-center p-5 border border-solid border-[#f0f0f0]">
            <div className="flex flex-wrap gap-x-[23px] items-center">
              <select className="py-2.5 px-5 bg-transparent border border-solid border-[#f0f0f0] w-[155px] md:w-[255px]">
                <Option selected text={"SIZE"} />
                <Option value={"41"} text={"41"} />
                <Option value={"42"} text={"42"} />
                <Option value={"43"} text={"43"} />
              </select>
              <h3 className="font-dm font-bold text-base text-secondary">
                Apply coupon
              </h3>
            </div>
            <h3 className="font-dm font-bold text-base text-secondary">
              <h3 className="font-dm font-bold text-base text-secondary">
                Update cart
              </h3>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
