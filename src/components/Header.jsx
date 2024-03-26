/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Layout/Flex";
import Dropdown from "./Layout/Dropdown";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { ImCross } from "react-icons/im";
import List from "./Layout/List";
import ListItem from "./Layout/ListItem";
import Search from "./Search";
import Image from "./Layout/Image";
import cartImg from "../assets/cartImg.png";
import { Link } from "react-router-dom";

const Header = () => {
  let [categoryShow, setCategoryShow] = useState(false);
  let [cartShow, setCartShow] = useState(false);
  let [userShow, setUserShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserShow(true);
      } else {
        setUserShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartShow(true);
      } else {
        setCartShow(false);
      }
    });
  }, []);
  return (
    <>
      <header className="bg-[#F5F5F3] py-10">
        <div className="container">
          <Flex className={"flex justify-between items-center"}>
            <div>
              <Dropdown className={"relative"} dropref={categoryRef}>
                <p className="flex gap-x-2.5 items-center font-dm font-normal text-sm text-secondary">
                  <FaBarsStaggered />
                  <span className="hidden lg:inline-block">
                    Shop by Category
                  </span>
                </p>
                {categoryShow && (
                  <List
                    className={
                      "bg-secondary absolute z-50 top-[60px] w-[263px]"
                    }
                  >
                    <ListItem
                      className={
                        "font-dm font-semibold text-sm text-rgbWhite py-4 pl-5 border-b border-[#2D2D2D] duration-300 hover:text-white hover:pl-8"
                      }
                      text={"Accesories"}
                    />
                    <ListItem
                      className={
                        "font-dm font-semibold text-sm text-rgbWhite py-4 pl-5 border-b border-[#2D2D2D] duration-300 hover:text-white hover:pl-8"
                      }
                      text={"Furniture"}
                    />
                    <ListItem
                      className={
                        "font-dm font-semibold text-sm text-rgbWhite py-4 pl-5 border-b border-[#343333] duration-300 hover:text-white hover:pl-8"
                      }
                      text={"Electronics"}
                    />
                    <ListItem
                      className={
                        "font-dm font-semibold text-sm text-rgbWhite py-4 pl-5 border-b border-[#2D2D2D] duration-300 hover:text-white hover:pl-8"
                      }
                      text={"Clothes"}
                    />
                    <ListItem
                      className={
                        "font-dm font-semibold text-sm text-rgbWhite py-4 pl-5 border-b border-[#2D2D2D] duration-300 hover:text-white hover:pl-8"
                      }
                      text={"Bags"}
                    />
                    <ListItem
                      className={
                        "font-dm font-semibold text-sm text-rgbWhite py-4 pl-5 duration-300 hover:text-white hover:pl-8"
                      }
                      text={"Home appliances"}
                    />
                  </List>
                )}
              </Dropdown>
            </div>
            <div className="w-auto md:w-[300px] lg:w-[600px] relative">
              <Search
                className={
                  "w-full py-4 pl-5 pr-10 placeholder:font-dm font-normal placeholder:text-[#C4C4C4] placeholder:text-sm"
                }
                placeholder={"Search Products"}
              />
              <FaSearch className="absolute right-4 top-[50%] translate-y-[-50%]" />
            </div>
            <div className="flex gap-x-5 lg:gap-x-10">
              <Dropdown className={"flex relative"} dropref={userRef}>
                <div className="flex">
                  <FaUser className="text-xl lg:text-2xl" />
                  <GoTriangleDown className="text-xl lg:text-2xl" />
                </div>
                {userShow && (
                  <List
                    className={
                      "bg-secondary absolute z-50 top-[60px] w-[200px] right-0"
                    }
                  >
                    <ListItem
                      href={"#"}
                      className={
                        "w-full bg-white font-dm font-bold text-sm text-secondary text-center py-4 duration-300 hover:text-white hover:bg-btnClr border border-gray-200"
                      }
                      text={"My Account"}
                    />
                    <ListItem
                      href={"#"}
                      className={
                        "w-full bg-white font-dm font-bold text-sm text-secondary text-center py-4 duration-300 hover:text-white hover:bg-btnClr border border-gray-200"
                      }
                      text={"Log Out"}
                    />
                  </List>
                )}
              </Dropdown>
              <Dropdown className={"flex relative group"} dropref={cartRef}>
                <FaShoppingCart className="text-xl lg:text-2xl" />
                {cartShow && (
                  <div
                    className={
                      "absolute z-50 top-[60px] w-[320px] sm:w-[360px] right-0 border border-[#f0f0f0]"
                    }
                  >
                    <div className="bg-[#f5f5f3] p-5 w-full flex items-center gap-5 relative">
                      <div className="h-[100px] w-[100px] overflow-hidden">
                        <Image
                          imgsrc={cartImg}
                          className={
                            "duration-300 scale-100 group-hover:scale-125"
                          }
                        />
                      </div>
                      <div>
                        <h3 className="font-dm font-bold text-sm text-secondary">
                          Black Smart Watch
                        </h3>
                        <p className="font-dm font-bold text-sm text-secondary mt-3">
                          $44.00
                        </p>
                      </div>
                      <div className="absolute top-[50%] translate-y-[-50%] right-5">
                        <ImCross />
                      </div>
                    </div>
                    <div className="bg-white p-5 w-full gap-5 relative">
                      <h4 className="font-dm font-normal text-base text-[#767676] mb-[13px]">
                        Subtotal:{" "}
                        <span className="font-bold text-secondary">
                          {" "}
                          $44.00
                        </span>
                      </h4>
                      <div className="flex justify-between">
                        <Link
                          to={"/Cart"}
                          className="font-dm font-bold text-secondary text-sm border border-secondary py-4 px-8 sm:px-10 inline-block duration-300 hover:bg-secondary hover:text-white"
                        >
                          View Cart
                        </Link>
                        <Link
                          to={"/CheckOut"}
                          className="font-dm font-bold text-secondary text-sm border border-secondary py-4 px-8 sm:px-10 inline-block duration-300 hover:bg-secondary hover:text-white"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </Dropdown>
            </div>
          </Flex>
        </div>
      </header>
    </>
  );
};

export default Header;
