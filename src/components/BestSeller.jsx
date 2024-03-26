/* eslint-disable no-unused-vars */
import React from "react";
import Heading from "./Layout/Heading";
import Flex from "./Layout/Flex";
import Product from "./Layout/Product";
import bestSeller1 from "../assets/bestSeller1.png";
import bestSeller2 from "../assets/bestSeller2.png";
import bestSeller3 from "../assets/bestSeller3.png";
import bestSeller4 from "../assets/bestSeller4.png";

const BestSeller = () => {
  return (
    <>
      <section className="pt-16 lg:pt-32">
        <div className="container">
          <Heading title={"Our Bestseller"} />
          <Flex className={"sm:flex justify-between flex-wrap"}>
            <div className="w-full sm:max-lg:w-[47%] lg:max-w-[23%] mb-10 lg:mb-0">
              <Product
                imgsrc={bestSeller1}
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
                imgsrc={bestSeller2}
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
                imgsrc={bestSeller3}
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
                imgsrc={bestSeller4}
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

export default BestSeller;
