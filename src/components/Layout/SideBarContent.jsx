/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Flex from "./Flex";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import LeftSideBarItem from "./LeftSideBarItem";

const SideBarContent = ({ dropDown, dropTitle, subDropdown }) => {
  let [show, setShow] = useState(dropDown);
  let [drop, setDrop] = useState(dropDown);
  return (
    <>
      <div className="mb-14">
        {drop ? (
          <div
            onClick={() => setShow(!show)}
            className={"flex items-center justify-between cursor-pointer mb-6"}
          >
            <h3 className="font-dm font-bold text-xl text-secondary">
              {dropTitle}
            </h3>
            {drop && <>{show ? <GoTriangleDown /> : <GoTriangleUp />}</>}
          </div>
        ) : (
          <h3 className="font-dm font-bold text-xl text-secondary mb-6">
            {dropTitle}
          </h3>
        )}
        {show && (
          <>
            <LeftSideBarItem title="Category 1" subDropdown={subDropdown}>
              <p className="font-dm font-normal text-base text-[#767676] pl-5 border-b border-solid border-[#f0f0f0] py-5">
                Lorem, ipsum.
              </p>
            </LeftSideBarItem>
            <LeftSideBarItem title="Category 2" subDropdown={subDropdown}>
              <p className="font-dm font-normal text-base text-[#767676] pl-5 border-b border-solid border-[#f0f0f0] py-5">
                Lorem, ipsum.
              </p>
            </LeftSideBarItem>
            <LeftSideBarItem title="Category 3" subDropdown={subDropdown}>
              <p className="font-dm font-normal text-base text-[#767676] pl-5 border-b border-solid border-[#f0f0f0] py-5">
                Lorem, ipsum.
              </p>
            </LeftSideBarItem>
          </>
        )}

        {!drop && (
          <>
            <LeftSideBarItem title="Category 1">
              <p className="font-dm font-normal text-base text-[#767676] pl-5 border-b border-solid border-[#f0f0f0] py-5">
                Lorem, ipsum.
              </p>
            </LeftSideBarItem>
            <LeftSideBarItem title="Category 2">
              <p className="font-dm font-normal text-base text-[#767676] pl-5 border-b border-solid border-[#f0f0f0] py-5">
                Lorem, ipsum.
              </p>
            </LeftSideBarItem>
            <LeftSideBarItem title="Category 3">
              <p className="font-dm font-normal text-base text-[#767676] pl-5 border-b border-solid border-[#f0f0f0] py-5">
                Lorem, ipsum.
              </p>
            </LeftSideBarItem>
          </>
        )}
      </div>
    </>
  );
};

export default SideBarContent;
