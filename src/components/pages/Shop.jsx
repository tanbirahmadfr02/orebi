/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import Flex from "../Layout/Flex";
import Pagination from "../Layout/Pagination";
import Select from "../Layout/Select";
import Option from "../Layout/Option";
import LeftSideBar from "../Layout/LeftSideBar";

const Shop = () => {
  let [showNumber, setShowNumber] = useState(12)

let handlePaginationChange = (e)=>{
  setShowNumber(+e.target.value)
}

  return (
    <>
      <section className="pt-[124px]">
        <div className="container">
          <BreadCrumb title={"Products"} />
          <Flex className={"flex gap-x-10"}>

            {/* ---------left part start ------- */}
            <div className="w-[25%]">
              <LeftSideBar/>
            </div>
            {/* ---------left part end ------- */}

          {/* -----right part start ------ */}
          <div className="w-[75%] relative">
            <div className="flex justify-end gap-x-10 mb-14">
            <div>
                <Select spanText={"Sort by:"} className={"w-[100px] sm:w-[239px]"}>
                  <Option selected text={"Features"}/>
                  <Option value={"US"} text={"US"}/>
                  <Option value={"UK"} text={"UK"}/>
                  <Option value={"UAE"} text={"UAE"}/>
                </Select>
              </div>
              <div>
                <Select onChange={handlePaginationChange} spanText={"Show:"} className={"sm:w-[139px]"}>
                  <Option selected value={"12"} text={"12"}/>
                  <Option value={"24"} text={"24"}/>
                  <Option value={"36"} text={"36"}/>
                  <Option value={"48"} text={"48"}/>
                </Select>
              </div>
            </div>
              <div>
                <Pagination itemsPerPage={showNumber} />
              </div>
            </div>
          {/* -----right part end ------ */}
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Shop;
