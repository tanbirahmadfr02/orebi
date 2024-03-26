/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
import newArrival2 from "../../assets/newArrival2.png";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="md:w-[49%] lg:w-[32%] my-5">
            <Product
              imgsrc={newArrival2}
              alt={"product"}
              badge={true}
              text={"10%"}
              title={"Basic Crew Neck Tee"}
              price={"$44.00"}
              brand={"Black"}
              cartDetails={true}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        nextClassName="hidden"
        previousClassName="hidden"
        nextLinkClassName="page-link"
        pageClassName="py-2 px-3 border border-solid border-[#f0f0f0] font-dm font-normal font-sm text-[#767676]"
        containerClassName="flex flex-wrap gap-y-2 md:gap-y-0 gap-x-3.5 mt-12"
        breakLabel="..."
        breakClassName="flex items-end"
        activeClassName="py-2 px-3 border border-solid border-[#f0f0f0] font-dm font-normal font-sm text-[#767676] bg-black text-white"
      />
      <p className="font-dm font-normal text-sm text-[#767676] lg:absolute lg:bottom-0 lg:right-0 mt-4 lg:mt-0">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of{" "}
        {items.length}
      </p>
    </>
  );
};

export default Pagination;
