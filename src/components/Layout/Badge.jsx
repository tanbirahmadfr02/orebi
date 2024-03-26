/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Badge = ({ text }) => {
  return (
    <span className="bg-secondary py-[9px] px-[30px] text-white font-dm font-bold text-sm absolute top-5 left-5">
      {text}
    </span>
  );
};

export default Badge;
