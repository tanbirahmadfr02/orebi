/* eslint-disable no-unused-vars */
import React from 'react'
import Image from './Layout/Image'
import middleAds from "../assets/middleAds.png"

const MiddleAds = () => {
  return (
    <>
    <div className='w-full mt-32'>
        <Image className={"w-full"} imgsrc={middleAds}/>
    </div>
    </>
  )
}

export default MiddleAds