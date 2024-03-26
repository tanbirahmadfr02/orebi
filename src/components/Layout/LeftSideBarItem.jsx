/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const LeftSideBarItem = (props) => {
  let [show, setShow] = useState(false);
  let [drop, setDrop] = useState(props.subDropdown);
  return (
    <>
      <div>
        {drop ? (
          <div
            onClick={() => setShow(!show)}
            className={
              "flex items-center justify-between cursor-pointer border-b border-solid border-[#f0f0f0] py-5"
            }
          >
            <h5 className="font-dm font-normal text-base text-[#767676]">
              {props.title}
            </h5>
            {drop && (
              <>
                {show ? (
                  <FaMinus className="text-xs" />
                ) : (
                  <FaPlus className="text-xs" />
                )}
              </>
            )}
          </div>
        ) : (
          <h5 className="font-dm font-normal text-base text-[#767676] border-b border-solid border-[#f0f0f0] py-5">
            {props.title}
          </h5>
        )}
        {show && <div>{props.children}</div>}
      </div>
    </>
  );
};

export default LeftSideBarItem;
