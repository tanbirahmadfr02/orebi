/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "./Layout/Heading";
import Flex from "./Layout/Flex";
import Product from "./Layout/Product";
import offerImg1 from "../assets/offerImg1.png";
import offerImg2 from "../assets/offerImg2.png";
import offerImg3 from "../assets/offerImg3.png";
import offerImg4 from "../assets/offerImg4.png";

const Offers = () => {
  return (
    <>
      <section className="pt-16 lg:pt-32">
        <div className="container">
          <Heading title={"Special Offers"} />
          <Flex className={"sm:flex justify-between flex-wrap"}>
            <div className="w-full sm:max-lg:w-[47%] lg:max-w-[23%] mb-10 lg:mb-0">
              <Product
                imgsrc={offerImg1}
                alt={"product"}
                badge={true}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                brand={"Black"}
              />
            </div>
            <div className="w-full sm:max-lg:w-[47%] lg:max-w-[23%] mb-10 lg:mb-0">
              <Product
                imgsrc={offerImg2}
                alt={"product"}
                badge={true}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                brand={"Black"}
              />
            </div>
            <div className="w-full sm:max-lg:w-[47%] lg:max-w-[23%] mb-10 lg:mb-0">
              <Product
                imgsrc={offerImg3}
                alt={"product"}
                badge={true}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                brand={"Black"}
              />
            </div>
            <div className="w-full sm:max-lg:w-[47%] lg:max-w-[23%]">
              <Product
                imgsrc={offerImg4}
                alt={"product"}
                badge={true}
                text={"New"}
                title={"Basic Crew Neck Tee"}
                price={"$44.00"}
                brand={"Black"}
              />
            </div>
          </Flex>
        </div>
      </section>
    </>
  );
};

export default Offers;
