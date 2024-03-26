/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Image = ({ imgsrc, alt, className }) => {
  return <img src={imgsrc} alt={alt} className={className} />;
};

export default Image;
