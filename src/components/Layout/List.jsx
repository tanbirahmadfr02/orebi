/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const List = ({ children, className }) => {
  return (
    <>
      <ul className={className}>{children}</ul>
    </>
  );
};

export default List;
