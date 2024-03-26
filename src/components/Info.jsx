/* eslint-disable no-unused-vars */
import React from "react";
import Flex from "./Layout/Flex";
import { MdLocalShipping } from "react-icons/md";
import { Fa2 } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";

const Info = () => {
  return (
    <>
      <section className="py-[22px] border-y border-red">
        <div className="container">
          <Flex
            className={
              "flex flex-col gap-y-4 sm:flex-row sm:gap-y-0 items-center sm:justify-between "
            }
          >
            <div className="flex gap-x-[17px] items-center">
              <div>
                <Fa2 className="text-3xl text-secondary font-bold" />
              </div>
              <p className="font-dm font-normal text-[#6D6D6D] text-base">
                Two years warranty
              </p>
            </div>
            <div className="flex gap-x-[17px] items-center">
              <div>
                <MdLocalShipping className="text-3xl text-secondary font-bold" />
              </div>
              <p className="font-dm font-normal text-[#6D6D6D] text-base">
                Free shipping
              </p>
            </div>
            <div className="flex gap-x-[17px] items-center">
              <div>
                <IoReload className="text-3xl text-secondary font-bold" />
              </div>
              <p className="font-dm font-normal text-[#6D6D6D] text-base">
                Return policy in 30 days
              </p>
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Info;
