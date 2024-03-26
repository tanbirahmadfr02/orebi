/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import InputBox from "../Layout/InputBox";
import Button from "../Layout/Button";

const Login = () => {
  return (
    <>
      <section>
        <div className="container">
          <BreadCrumb title={"Login"} />
          <div className="pb-16 lg:pb-28 mb-8 lg:mb-14 border-b border-solid border-[#f0f0f0]">
            <div className="w-full sm:w-5/12">
              <p className="font-dm font-normal text-base text-[#767676]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
            </div>
          </div>
          <div className="pb-16 border-b border-solid border-[#f0f0f0]">
            <h2 className="font-dm font-bold text-secondary text-3xl lg:text-[39px] mb-10">
              Returning Customer
            </h2>
            <div className="sm:flex sm:gap-x-10">
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
                  type="password"
                  placeholder="password"
                  title="password"
                />
              </div>
            </div>
            <button className="mt-[30px] font-dm text-sm font-bold text-secondary py-4 w-[200px] text-center border border-solid border-[#2b2b2b]">
              Log in
            </button>
          </div>
          <div>
            <div className="w-full sm:w-5/12">
              <h2 className="font-dm font-bold text-secondary text-3xl lg:text-[39px] mb-9 mt-12">
                New Customer
              </h2>
              <p className="font-dm font-normal text-base text-[#767676]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the.
              </p>
              <Button text={"Continue"} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
