/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Flex from "./Layout/Flex";
import Image from "./Layout/Image";
import logo from "../assets/logo.png";
import List from "./Layout/List";
import ListItem from "./Layout/ListItem";
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [show, setShow] = useState(true);

  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);

  return (
    <>
      <nav className="py-8">
        <div className="container">
          <Flex className={"lg:flex items-center"}>
            <div className="w-full lg:w-1/4">
              <Image imgsrc={logo} alt={"logo"} />
            </div>
            <div className="w-full lg:w-3/4">
              <FaBarsStaggered
                onClick={() => setShow(!show)}
                className="block lg:hidden ml-auto text-2xl text-secondary absolute top-7 right-5"
              />
              {show && (
                <List
                  className={
                    "lg:flex lg:justify-end lg:gap-x-10 font-dm font-bold text-sm text-[#767676]"
                  }
                >
                  <ListItem href={"/"}
                    className={"duration-500 hover:text-secondary my-4 lg:my-0"}
                    text={"Home"}
                  />
                  <ListItem href={"/shop"}
                    className={"duration-500 hover:text-secondary my-4 lg:my-0"}
                    text={"Shop"}
                  />
                  <ListItem href={"/about"}
                    className={"duration-500 hover:text-secondary my-4 lg:my-0"}
                    text={"About"}
                  />
                  <ListItem href={"/contact"}
                    className={"duration-500 hover:text-secondary my-4 lg:my-0"}
                    text={"Contacts"}
                  />
                  <ListItem href={"#"}
                    className={"duration-500 hover:text-secondary my-4 lg:my-0"}
                    text={"Journal"}
                  />
                </List>
              )}
            </div>
          </Flex>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
