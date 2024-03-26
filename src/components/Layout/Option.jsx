/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Option = ({value, text}) => {
  return (
    <>
      <option
        value={value}
        className="font-dm font-normal text-[#767676] text-base"
      >{text}</option>
    </>
  );
};

export default Option;
