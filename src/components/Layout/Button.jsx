/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Button = ({text}) => {
  return (
    <>
    <button className='font-dm font-bold text-sm text-white w-[200px] py-4 bg-secondary text-center mt-8'>{text}</button>
    </>
  )
}

export default Button