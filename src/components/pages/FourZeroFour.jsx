/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { IoSearch } from "react-icons/io5";
import Button from "../Layout/Button";
import { Link } from "react-router-dom";


const FourZeroFour = () => {
  return (
    <>
      <section>
        <div className="container">
          <div>
            <div className="w-full md:w-8/12 lg:w-5/12">
              <h2 className="font-dm font-bold text-[100px] md:text-[200px] text-secondary">
                404
              </h2>
              <p className="font-dm font-normal text-base text-[#767676] mb-12">
                The page you were looking for couldn't be found. The page could
                be removed or you misspelled the word while searching for it.
                Maybe try a search?
              </p>
              <div className="relative">
              <input type="search"  className="border border-solid border-[#767676] p-5 w-full outline-none" placeholder="Type to search"/>
              <div className="absolute top-[50%] translate-y-[-50%] right-7"><IoSearch className="text-2xl"/></div>
              </div>
              <Link to={"/"}><Button text={"Back To Home"}/></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FourZeroFour;
