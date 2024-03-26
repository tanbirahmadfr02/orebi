/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import InputBox from "../Layout/InputBox";
import Option from "../Layout/Option";

const SignUp = () => {
  return (
    <>
      <section>
        <div className="container">
          <BreadCrumb title={"Sign Up"} />
          <div className="pb-16 lg:pb-28 mb-8 lg:mb-14 border-b border-solid border-[#f0f0f0]">
            <div className="w-full sm:w-5/12">
              <p className="font-dm font-normal text-base text-[#767676]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
          </div>
         
         {/* ---personal details start --- */}
         <div className="pb-16 border-b border-solid border-[#f0f0f0]">
            <h2 className="font-dm font-bold text-secondary text-3xl lg:text-[39px] mb-10">
              Your Personal Details
            </h2>
            <div className="sm:flex sm:gap-x-10">
              <div className="w-full sm:w-1/2 md:w-4/12">
                <InputBox
                  as="input"
                  type="text"
                  placeholder="First Name"
                  title="First Name"
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-4/12 mt-6 sm:mt-0">
                <InputBox
                  as="input"
                  type="text"
                  placeholder="Last Name"
                  title="Last Name"
                />
              </div>
            </div>
            <div className="sm:flex sm:gap-x-10 mt-6">
              <div className="w-full sm:w-1/2 md:w-4/12">
                <InputBox
                  as="input"
                  type="email"
                  placeholder="company@domain.com"
                  title="Email address"
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-4/12 mt-6 sm:mt-0">
                <InputBox
                  as="input"
                  type="tel"
                  placeholder="Your phone number"
                  title="Telephone"
                />
              </div>
            </div>
          </div>
         {/* ---personal details start --- */}

        
{/* ---new customer start --- */}
<div className="pb-16 mt-14 border-b border-solid border-[#f0f0f0]">
            <h2 className="font-dm font-bold text-secondary text-3xl lg:text-[39px] mb-10">
              New Customer
            </h2>
            <div className="sm:flex sm:gap-x-10">
              <div className="w-full sm:w-1/2 md:w-4/12">
                <InputBox
                  as="input"
                  type="text"
                  placeholder="4279 Zboncak Port Suite 6212"
                  title="Address 1"
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-4/12 mt-6 sm:mt-0">
                <InputBox
                  as="input"
                  type="text"
                  placeholder="--"
                  title="Address 2"
                />
              </div>
            </div>
            <div className="sm:flex sm:gap-x-10  mt-6">
              <div className="w-full sm:w-1/2 md:w-4/12">
                <InputBox
                  as="input"
                  type="text"
                  placeholder="Your city"
                  title="City"
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-4/12 mt-6 sm:mt-0">
                <InputBox
                  as="input"
                  type="text"
                  placeholder="6362"
                  title="Post Code"
                />
              </div>
            </div>
            <div className="sm:flex sm:gap-x-10  mt-6">
              <div className="w-full sm:w-1/2 md:w-4/12">
                <span className="font-dm font-bold text-base text-secondary block mb-2.5">
                  Division
                </span>
                <select className="font-dm font-normal text-sm text-[#767676] outline-none pb-4 border-b border-solid border-[#f0f0f0] w-full bg-transparent">
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    selected text={"Please Select"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"chittagong"} text={"chittagong"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Dhaka"} text={"Dhaka"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Rangpur"} text={"Rangpur"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Barisal"} text={"Barisal"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Sylhet"} text={"Sylhet"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Rajsahi"} text={"Rajsahi"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Khulna"} text={"Khulna"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Mymensingh"} text={"Mymensingh"}
                  />
                </select>
              </div>
              <div className="w-full sm:w-1/2 md:w-4/12">
                <span className="font-dm font-bold text-base text-secondary block mb-2.5">
                  District
                </span>
                <select className="font-dm font-normal text-sm text-[#767676] outline-none pb-4 border-b border-solid border-[#f0f0f0] w-full bg-transparent">
                <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    selected text={"Please Select"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"chittagong"} text={"chittagong"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Dhaka"} text={"Dhaka"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Rangpur"} text={"Rangpur"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Barisal"} text={"Barisal"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Sylhet"} text={"Sylhet"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Rajsahi"} text={"Rajsahi"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Khulna"} text={"Khulna"}
                  />
                  <Option
                    className="font-dm font-normal text-sm text-[767676]"
                    value={"Mymensingh"} text={"Mymensingh"}
                  />
                </select>
              </div>
            </div>
          </div>
{/* ---new customer end --- */}

          <div className="pb-16 border-b border-solid border-[#f0f0f0]">
            <h2 className="font-dm font-bold text-secondary text-3xl lg:text-[39px] mb-10 mt-14">
              Your Password
            </h2>
            <div className="sm:flex sm:gap-x-10">
              <div className="w-full sm:w-1/2 md:w-4/12">
                <InputBox
                  as="input"
                  type="password"
                  placeholder="Password"
                  title="Password"
                />
              </div>
              <div className="w-full sm:w-1/2 md:w-4/12 mt-6 sm:mt-0">
                <InputBox
                  as="input"
                  type="password"
                  placeholder="Repeat Password"
                  title="Repeat Password"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mt-16">
            <div className="flex gap-x-4 justify-start">
              <input type="checkbox" />
              <p className="font-dm font-normal text-sm text-[#767676]">
                I have read and agree to the Privacy Policy
              </p>
            </div>
            <div className="mt-6 flex gap-x-[33px]">
            <p className="font-dm font-normal text-sm text-[#767676]">
            Subscribe Newsletter
              </p>
              <div className="flex gap-x-4 justify-start">
              <input type="checkbox" />
              <p className="font-dm font-normal text-sm text-[#767676]">
                Yes
              </p>
            </div>
              <div className="flex gap-x-4 justify-start">
              <input type="checkbox" />
              <p className="font-dm font-normal text-sm text-[#767676]">
                No
              </p>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
