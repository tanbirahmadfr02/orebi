/* eslint-disable no-unused-vars */
import React from "react";
import SideBarContent from "../Layout/SideBarContent.jsx";
import ProductColor from "../ProductColor.jsx";

const LeftSideBar = () => {
  return (
    <>
      <SideBarContent
        dropDown={true}
        subDropdown={true}
        dropTitle={"Short by Category"}
      />
   <ProductColor/>
      <SideBarContent
        dropDown={true}
        subDropdown={false}
        dropTitle={"Short by Brand"}
      />
      <SideBarContent
        dropDown={true}
        subDropdown={false}
        dropTitle={"Short by Price"}
      />
    </>
  );
};

export default LeftSideBar;
