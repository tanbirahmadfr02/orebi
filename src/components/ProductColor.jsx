/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const ProductColor = () => {
    let [show, setShow] = useState(true);
  return (
    <>
    <div className='mb-14'>
        <div onClick={()=> setShow(!show)} className='flex justify-between items-center cursor-pointer'>
            <h3 className='font-dm font-bold text-xl text-secondary'>Shop by Color</h3>
            {
                show ? <GoTriangleDown /> : <GoTriangleUp />
            }
        </div>
       {
        show && 
        <div>
       <div className='flex gap-x-2.5 items-center py-5 border-b border-solid border-[#f0f0f0]'>
            <span className='h-[11px] w-[11px] rounded-full bg-black inline-block'></span>
        <h5 className="font-dm font-normal text-base text-[#767676] border-b border-solid border-[#f0f0f0]">
            color 1
          </h5>
        </div>
       <div className='flex gap-x-2.5 items-center py-5 border-b border-solid border-[#f0f0f0]'>
            <span className='h-[11px] w-[11px] rounded-full bg-[#7ED321] inline-block'></span>
        <h5 className="font-dm font-normal text-base text-[#767676] border-b border-solid border-[#f0f0f0]">
            color 1
          </h5>
        </div>
       <div className='flex gap-x-2.5 items-center py-5 border-b border-solid border-[#f0f0f0]'>
            <span className='h-[11px] w-[11px] rounded-full bg-[#FF8686] inline-block'></span>
        <h5 className="font-dm font-normal text-base text-[#767676] border-b border-solid border-[#f0f0f0]">
            color 1
          </h5>
        </div>
       </div>
       }
    </div>
    </>
  )
}

export default ProductColor