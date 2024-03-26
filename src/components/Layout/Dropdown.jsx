/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Dropdown = ({className, children, dropref}) => {
  return (
    <div className={className} ref={dropref}>{children}</div>
  )
}

export default Dropdown