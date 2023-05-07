import React from 'react'
import Image from 'next/image'
const Category = ({image,title}) => {
  return (
    <div>
        <div className='relative text-center group'>
            <Image width={200} height={100} alt='img' src={image} className='w-64  h-36 rounded-2xl brightness-50 border-[1px] border-black group-hover:brightness-100 group-hover:transition-all'/>
            <h1 className='text-center text-white w-32 focus absolute  tracking-widest brightness-125 text-2xl f top-14 left-10 group-hover:hidden group-hover:transition-all '>{title}</h1>

        </div>
    </div>
  )
}

export default Category