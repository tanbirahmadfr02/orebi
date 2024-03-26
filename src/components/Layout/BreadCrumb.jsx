/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const BreadCrumb = ({ title }) => {
  return (
    <>
     <div className="my-14 lg:my-24">
     <h1 className="font-dm font-bold text-2xl md:text-5xl text-secondary capitalize">{title}</h1>
      <p className="font-dm font-normal text-xs text-[#767676] mt-3 flex items-center gap-x-1.5">
        Home <FaAngleRight /> {window.location.pathname.split("/")[1]}
      </p>
     </div>
    </>
  );
};

export default BreadCrumb;
