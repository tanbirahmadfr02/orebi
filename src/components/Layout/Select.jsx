/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Select = ({onChange, children, className, spanText}) => {
  return (
    <>
    <div className="md:flex md:items-center md:gap-x-3.5">
                  <span className="font-dm font-normal text-base text-[#767676] mb-3 block md:mb-0">
                    {spanText}
                  </span>
                  <form>
                    <select
                      onChange={onChange}
                      id="countries"
                      className={`border border-[#f0f0f0] font-dm font-normal text-[#767676] text-base focus:border-black block pl-4 p-2.5 bg-transparent ${className}`}
                    >{children}
                    </select>
                  </form>
                </div>
    </>
  )
}

export default Select