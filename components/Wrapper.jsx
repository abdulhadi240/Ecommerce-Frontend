import React, { useState } from 'react'
import { BsChevronDown , BsX } from 'react-icons/bs'

const Wrapper = ({children,className}) => {
  const [data,setData]=useState(false);

  return (
   <div className={`w-full max-w-[1200px]   mx-auto  ${className || ""}`}>
       {children}
   </div>
    
  )
}

export default Wrapper