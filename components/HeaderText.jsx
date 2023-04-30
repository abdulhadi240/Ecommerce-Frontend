import React from 'react'

const HeaderText = ({children,Heading}) => {
  return (
    <div className=' overflow-hidden'>
        <h1 className=' text-center mt-10 text-2xl font-bold text-gray-500'>
          {Heading}
        </h1>
        <h1 className='text-center text-sm p-2 '>{children}</h1>
    </div>
  )
}

export default HeaderText