/* eslint-disable no-unused-vars */
import React from "react";
import Flex from "./Layout/Flex";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import List from "./Layout/List.jsx";
import ListItem from "./Layout/ListItem.jsx";
import Image from "./Layout/Image";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <section className="mt-24 bg-[#F5F5F3] py-14">
        <div className="container">
          <div className="footer-top">
            <Flex className={"flex flex-wrap justify-between"}>
              <div className="w-full lg:w-8/12 flex flex-wrap justify-between order-2 lg:order-1">
                <div className="w-full sm:w-3/6 flex flex-wrap justify-between text-center sm:text-start">
                  <div>
                    <h4 className="font-dm text-base font-bold text-secondary mb-4">
                      MENU
                    </h4>
                    <List>
                      <ListItem
                        href={"#"}
                        text={"Home"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Shop"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"About"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Contact"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Journal"}
                        className={"font-dm font-normal text-sm text-[#6D6D6D]"}
                      />
                    </List>
                  </div>
                  <div>
                    <h4 className="font-dm text-base font-bold text-secondary mb-4">
                      SHOP
                    </h4>
                    <List>
                      <ListItem
                        href={"#"}
                        text={"Category 1"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Category 2"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Category 3"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Category 4"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Category 5"}
                        className={"font-dm font-normal text-sm text-[#6D6D6D]"}
                      />
                    </List>
                  </div>
                  <div>
                    <h4 className="font-dm text-base font-bold text-secondary mb-4">
                      HELP
                    </h4>
                    <List>
                      <ListItem
                        href={"#"}
                        text={"Privacy Policy"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Terms & Conditions"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Special E-shop"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Shipping"}
                        className={
                          "font-dm font-normal text-sm text-[#6D6D6D] mb-1.5"
                        }
                      />
                      <ListItem
                        href={"#"}
                        text={"Secure Payments"}
                        className={"font-dm font-normal text-sm text-[#6D6D6D]"}
                      />
                    </List>
                  </div>
                </div> 
                <div className="w-full mt-5 sm:mt-0 text-center sm:text-start sm:w-2/6">
                  <h4 className="font-dm text-base font-bold text-secondary mb-4">
                    (052) 611-5711{" "}
                    <span className="block">company@domain.com</span>
                  </h4>
                  <p className={"font-dm font-normal text-sm text-[#6D6D6D]"}>
                    575 Crescent Ave. Quakertown, PA 18951
                  </p>
                </div>
              </div>
              <div
                className="w-full lg:w-3/12
               order-1 lg:order-2"
              >
                <Link to={"#"}>
                  <Image
                    imgsrc={logo}
                    className={"mx-auto lg:mx-0 mb-5 lg:mb-0"}
                  />
                </Link>
              </div>
            </Flex>
          </div>
          <div className="footer-bottom mt-16">
            <div>
              <Flex className={"sm:flex justify-between items-center"}>
                <div className="flex gap-x-6 justify-center sm:justify-start mb-5 sm:mb-0">
                  <Link to={"#"}>
                    <FaFacebookF className="font-base text-secondary" />
                  </Link>
                  <Link to={"#"}>
                    <FaLinkedinIn className="font-base text-secondary" />
                  </Link>
                  <Link to={"#"}>
                    <FaInstagram className="font-base text-secondary" />
                  </Link>
                </div>
                <p className="text-center sm:text-start font-dm font-normal text-sm text-[#6D6D6D]">
                  2020 Orebi Minimal eCommerce Figma Template by Adveits
                </p>
              </Flex>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
