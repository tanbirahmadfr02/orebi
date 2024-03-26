/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const InputBox = (props) => {
  return (
    <>
    <span className='font-dm font-bold text-base text-secondary block mb-2.5'>{props.title}</span>
    <props.as type={props.type} placeholder={props.placeholder} className={`font-dm font-normal text-sm text-[#767676] placeholder:font-dm placeholder:font-normal placeholder:text-sm placeholder:text-[#767676] outline-none pb-4 border-b border-solid border-[#f0f0f0] w-full ${props.className}`}/>
    </>
  )
}

export default InputBox