/* eslint-disable no-unused-vars */
import React from "react";
import Flex from "./Layout/Flex";
import { Link } from "react-router-dom";
import Image from "./Layout/Image";
import ad1 from "../assets/ad1.png";
import ad3 from "../assets/ad3.png";
import ad2 from "../assets/ad2.png";

const Advertise = () => {
  return (
    <>
      <section className="pt-10 md:pt-36">
        <div className="container">
          <Flex className={"flex gap-x-5 md:gap-x-10"}>
            <div className="max-w-2/4">
              <Link to="#">
                <Image className={"w-full"} imgsrc={ad1} />
              </Link>
            </div>
            <div className="max-w-2/4">
              <Link to="#">
                <Image className={"w-full"} imgsrc={ad3} />
              </Link>
              <Link to="#" className="inline-block mt-3 md:mt-10">
                <Image className={"w-full"} imgsrc={ad3} />
              </Link>
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Advertise;
