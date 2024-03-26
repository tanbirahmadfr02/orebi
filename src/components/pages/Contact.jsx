/* eslint-disable no-unused-vars */
import React from "react";
import BreadCrumb from "../Layout/BreadCrumb";
import InputBox from "../Layout/InputBox";
import Button from "../Layout/Button";
import { GoPlus } from "react-icons/go";
import List from "../Layout/List";
import ListItem from "../Layout/ListItem";

const Contact = () => {
  return (
    <>
      <section>
        <div className="container">
          <BreadCrumb title={"Contact"}/>
          <div>
            <div className="w-full md:w-3/4 lg:w-1/2">
              <h2 className="font-dm font-bold text-secondary text-3xl lg:text-[39px] mb-10">
                Fill up a Form
              </h2>
              <InputBox
                as="input"
                type={"text"}
                placeholder={"Your name here"}
                title={"Name"}
              />
              <InputBox
                as="input"
                type={"Email"}
                placeholder={"Your Email here"}
                title={"Email"}
                className="my-[23px]"
              />
              <InputBox
                as="textarea"
                type={"text"}
                placeholder={"Your message here"}
                title={"Message"}
              />
              <Button text={"Post"} />
            </div>
            <div className="relative mt-32">
              <iframe
                className="h-[572px] w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62426332036!2d90.32108052231533!3d23.810542906690234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1709118299696!5m2!1sen!2sbd"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="shape w-[450px] bg-white pb-[30px] px-5 sm:absolute top-20 left-20">
                <div className="py-[30px] border-b border-solid border-[#f0f0f0] flex justify-between items-center">
                  <h6 className="font-dm font-bold text-base text-secondary">
                    Germany Office
                  </h6>
                  <div>
                    <GoPlus />
                  </div>
                </div>
                <div className="py-[30px] border-b border-solid border-[#f0f0f0] flex justify-between items-center">
                  <h6 className="font-dm font-bold text-base text-secondary">
                    Slovakia Office
                  </h6>
                  <div>
                    <GoPlus />
                  </div>
                </div>
                <div>
                  <h6 className="font-dm font-bold text-base text-secondary py-[30px]">
                    Lithuania Office
                  </h6>
                  <List>
                    <ListItem
                      className={
                        "font-dm font-normal text-base text-[#767676] mb-[11px]"
                      }
                      text={"575 Crescent Ave. Quakertown, PA 18951"}
                    />
                    <ListItem
                      className={
                        "font-dm font-normal text-base text-[#767676] mb-[11px]"
                      }
                      text={"+432 533 12 523"}
                    />
                    <ListItem
                      className={
                        "font-dm font-normal text-base text-[#767676] mb-[11px]"
                      }
                      text={"info@domain.com"}
                    />
                    <ListItem
                      className={"font-dm font-normal text-base text-[#767676]"}
                      text={"Mon - Fri: 9am - 6pm"}
                    />
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
