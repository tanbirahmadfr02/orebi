/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ className, text, href }) => {
  return (
    <li>
      <Link className={`inline-block ${className}`} to={href}>
        {text}
      </Link>
    </li>
  );
};

export default ListItem;
