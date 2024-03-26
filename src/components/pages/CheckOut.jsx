/* eslint-disable no-unused-vars */
import React from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import Flex from "../Layout/Flex";
import InputBox from "../Layout/InputBox";
import Select from "../Layout/Select";
import Option from "../Layout/Option";

const CheckOut = () => {
  return (
    <>
      <section>
        <div className="container">
          <BreadCrumb title={"CheckOut"} />
          <p className="font-dm font-normal text-base text-secondary">
            <span className="text-[#767676]">Have a coupon?</span> Click here to
            enter your code
          </p>
          <h3 className="font-dm font-bold text-secondary text-3xl md:text-[39px] mt-28 mb-11">
            Billing Details
          </h3>
          <Flex className={"sm:flex justify-between mb-6"}>
            <div className="w-full sm:w-[49%] mb-6 sm:mb-0">
              <InputBox
                as="input"
                title="First Name *"
                placeholder="First Name"
              />
            </div>
            <div className="w-full sm:w-[49%]">
              <InputBox
                as="input"
                title="Last Name *"
                placeholder="Last Name"
              />
            </div>
          </Flex>
          <div>
            <InputBox
              as="input"
              type="text"
              title="Company Name (optional)"
              placeholder="Company Name"
              className="mb-6"
            />
            <div className="mb-6">
              <span
                className=" font-dm font-bold text-base text-secondary block mb-2.5
                "
              >
                Country *
              </span>
              <select className="bg-transparent w-full text-[#767676] pb-4 border-b border-solid border-[#f0f0f0]">
                <Option selected text="Please select" />
                <Option value={"Bangladesh"} text="Bangladesh" />
                <Option value={"US"} text="US" />
                <Option value={"UK"} text="UK" />
              </select>
            </div>
            <InputBox
              as="input"
              type="text"
              title="Street Address *"
              placeholder="House number and street name"
              className="mb-6"
            />
            <InputBox
              as="input"
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              className="mb-6"
            />
            <InputBox
              as="input"
              type="text"
              title="Town/City *"
              placeholder="Town/City"
              className="mb-6"
            />
            <InputBox
              as="input"
              type="text"
              title="County (optional)"
              placeholder="County"
              className="mb-6"
            />
            <InputBox
              as="input"
              type="text"
              title="Post Code *"
              placeholder="Post Code"
              className="mb-6"
            />
            <InputBox
              as="input"
              type="tel"
              title="Phone *"
              placeholder="Phone"
              className="mb-6"
            />
            <InputBox
              as="input"
              type="Email"
              title="Email Address *"
              placeholder="Email"
            />
          </div>
          <div className="my-16 lg:my-28">
            <h3 className="font-dm font-bold text-3xl md:text-[39px] text-secondary mb-10">
              Additional Information
            </h3>
            <InputBox
              as="textarea"
              type="text"
              title="Other Notes (optional)"
              placeholder="Notes about your order, e.g. special notes for delivery."
            />
          </div>
          <div>
            <h3 className="font-dm font-bold text-3xl md:text-[39px] text-secondary mb-10">
              Your Order
            </h3>
          </div>
          <div>
            <div className="flex">
              <h6 className="font-dm font-bold text-base text-secondary py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
                Product
              </h6>
              <h6 className="font-dm font-normal text-base text-[#767676] py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
                Total
              </h6>
            </div>
            <div className="flex">
              <h6 className="font-dm font-bold text-base text-secondary py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
                Product name x 1
              </h6>
              <h6 className="font-dm font-normal text-base text-[#767676] py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
                389.99 $
              </h6>
            </div>
            <div className="flex">
              <h6 className="font-dm font-bold text-base text-secondary py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
              Subtotal
              </h6>
              <h6 className="font-dm font-normal text-base text-secondary py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
                389.99 $
              </h6>
            </div>
            <div className="flex">
              <h6 className="font-dm font-bold text-base text-secondary py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
              Total
              </h6>
              <h6 className="font-dm font-normal text-base text-secondary py-4 px-5 border border-solid border-[#f0f0f0] w-[320px]">
                389.99 $
              </h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
