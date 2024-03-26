/* eslint-disable no-unused-vars */
import React from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import Flex from "../Layout/Flex";

const MyAccount = () => {
  return (
    <>
      <section>
        <div className="container">
          <BreadCrumb title={"My Account"} />
          <Flex className={"sm:flex sm:gap-x-10"}>
            <div className="w-full sm:w-3/12 lg:w-2/12">
              <h3 className="font-dm font-bold text-base text-secondary pb-6 border-b border-solid border-[#f0f0f0]">
                Dashboard
              </h3>
              <button className="font-dm font-normal text-base text-[#767676] pb-6 pt-5 border-b border-solid border-[#f0f0f0] block">
                Others
              </button>
              <button className="font-dm font-normal text-base text-[#767676] pb-6 pt-5 border-b border-solid border-[#f0f0f0] block">
                Donwloads
              </button>
              <button className="font-dm font-normal text-base text-[#767676] pb-6 pt-5 border-b border-solid border-[#f0f0f0] block">
                Addresses
              </button>
              <button className="font-dm font-normal text-base text-[#767676] pb-6 pt-5 border-b border-solid border-[#f0f0f0] block">
                Account details
              </button>
              <button className="font-dm font-normal text-base text-[#767676] pb-6 pt-5 border-b border-solid border-[#f0f0f0] block">
                Logout
              </button>
            </div>
            <div className="w-full sm:w-9/12 lg:w-7/12 mt-14 sm:mt-0">
              <p className="font-dm font-normal text-base text-[#767676] mb-12">
                Hello <span className="text-secondary">admin</span> (not{" "}
                <span className="text-secondary">admin</span>?{" "}
                <span className="text-secondary">Log out</span>)
              </p>
              <p className="font-dm font-normal text-base text-[#767676]">
                From your account dashboard you can view your{" "}
                <span className="text-secondary">recent orders</span>, manage
                your{" "}
                <span className="text-secondary">
                  shipping and billing addresses
                </span>
                , and{" "}
                <span className="text-secondary">
                  edit your password and account details.
                </span>
              </p>
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default MyAccount;
